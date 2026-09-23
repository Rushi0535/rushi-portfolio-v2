import { NextRequest, NextResponse } from "next/server";
import { retrieveTopChunks } from "@/lib/rag/store";
import { logChatMessage } from "@/lib/google-sheets";
import { sendOwnerEmail } from "@/lib/mailer";
import { getGroqChatCompletion, type GroqChatMessage } from "@/lib/groq";
import { SYSTEM_PROMPT } from "@/lib/content/ai-persona";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const HISTORY_TURNS_SENT_TO_MODEL = 6;

const FALLBACK_REPLY =
  "Whoa — my circuits hiccuped there. Give it another shot in a moment, or reach Rushi directly at prajapatirushih@gmail.com.";

type ChatTurn = { role: "user" | "assistant"; content: string };

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip, RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS)) {
    return NextResponse.json(
      { error: "You're sending messages a little too fast — try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: { message?: string; history?: ChatTurn[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const message = body.message?.trim();
  const history = Array.isArray(body.history) ? body.history : [];

  if (!message) {
    return NextResponse.json({ error: "Message can't be empty." }, { status: 400 });
  }

  const groqApiKey = process.env.GROQ_API_KEY;
  if (!groqApiKey) {
    console.error("Chat: missing GROQ_API_KEY environment variable.");
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }

  // First message of a session (client sends prior turns only, not the one
  // just typed) — notify the owner. Wrapped in try/catch so a failed send
  // never breaks the chat flow.
  if (history.length === 0) {
    try {
      await sendOwnerEmail({
        subject: `New Chat Started — Rushi.AI (${new Date().toLocaleString()})`,
        text: `Someone just started chatting with your AI bot.\n\nTime: ${new Date().toLocaleString()}`,
      });
    } catch (err) {
      console.error("Chat: failed to send new-session notification email.", err);
    }
  }

  void logChatMessage("user", message);

  let contextChunks: string[] = [];
  try {
    contextChunks = await retrieveTopChunks(message, 3);
  } catch (err) {
    console.error("Chat: RAG retrieval failed, continuing without context.", err);
  }

  try {
    const messages: GroqChatMessage[] = [
      {
        role: "system",
        content: `${SYSTEM_PROMPT}\n\nContext from Rushi's knowledge base:\n${contextChunks.join("\n\n---\n\n")}`,
      },
      ...history.slice(-HISTORY_TURNS_SENT_TO_MODEL).map((turn) => ({ role: turn.role, content: turn.content })),
      { role: "user", content: message },
    ];

    const reply = await getGroqChatCompletion(groqApiKey, messages);
    void logChatMessage("assistant", reply);

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error("Chat: LLM call failed.", err);
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }
}
