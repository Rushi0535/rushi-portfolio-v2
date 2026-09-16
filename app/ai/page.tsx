"use client";

import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import { SparkleIcon } from "@/lib/icons";

type Message = { role: "user" | "assistant"; content: string };

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Half human. Half code. 100% Rushi. Ask me anything about Rushi, his projects, or his experiences.",
  },
];

// TODO: replace with a real RAG-backed chatbot — this is a UI skeleton only for now, per the
// content-refresh plan (real chatbot logic ships as a separate step).
async function getAssistantReply(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return "I'm still being wired up to Rushi's real knowledge base — full RAG-powered answers are coming soon.";
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setIsThinking(true);

    const reply = await getAssistantReply();
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setIsThinking(false);
  }

  function handleClear() {
    setMessages(initialMessages);
    setInput("");
  }

  return (
    <PageShell
      icon={SparkleIcon}
      title="RUSHIverse — The AI Who Knows Rushi Best"
      subtitle="Half human. Half code. 100% Rushi."
    >
      <Card className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Chat</span>
          <button
            type="button"
            onClick={handleClear}
            className="font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
          >
            Clear Chat
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {messages.map((message, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[85%] rounded-card border border-border px-4 py-2.5 text-sm leading-relaxed",
                message.role === "assistant"
                  ? "self-start bg-bg text-text-primary"
                  : "self-end bg-accent-soft text-text-primary"
              )}
            >
              {message.content}
            </div>
          ))}
          {isThinking && (
            <div className="self-start rounded-card border border-border bg-bg px-4 py-2.5 font-mono text-xs text-text-secondary">
              Thinking...
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Rushi, his projects, or experiences..."
            className="flex-1 rounded-card border border-border bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent"
          />
          <button
            type="submit"
            disabled={isThinking}
            className="rounded-card bg-accent px-5 py-2.5 font-mono text-sm font-medium text-bg-elevated transition-colors hover:bg-accent-strong disabled:opacity-60"
          >
            Send
          </button>
        </form>
      </Card>
    </PageShell>
  );
}
