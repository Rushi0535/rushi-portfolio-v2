import { NextRequest, NextResponse } from "next/server";
import { sendOwnerEmail } from "@/lib/mailer";

export const runtime = "nodejs";

type ChatTurn = { role: "user" | "assistant"; content: string };

export async function POST(request: NextRequest) {
  let body: { messages?: ChatTurn[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return NextResponse.json({ ok: true });
  }

  const transcript = messages.map((m) => `${m.role === "user" ? "User" : "Rushi.AI"}: ${m.content}`).join("\n\n");

  // Fails silently — a failed transcript email should never block the user
  // from clearing their chat.
  try {
    await sendOwnerEmail({
      subject: `Chat Cleared — Full Rushi.AI Conversation (${new Date().toLocaleString()})`,
      text: `Someone just cleared the chat on your AI bot. Full conversation below.\n\n${transcript}`,
      attachments: [
        {
          filename: `chat-transcript-${Date.now()}.json`,
          content: JSON.stringify(messages, null, 2),
          contentType: "application/json",
        },
      ],
    });
  } catch (err) {
    console.error("Chat: failed to send clear-chat transcript email.", err);
  }

  return NextResponse.json({ ok: true });
}
