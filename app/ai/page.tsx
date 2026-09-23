"use client";

import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import { SparkleIcon } from "@/lib/icons";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content: "Half human. Half code. 100% Rushi. Ask me anything about Rushi, his projects, or his experiences.",
};

const FALLBACK_REPLY = "Whoa — my circuits hiccuped there. Give it another shot in a moment.";

export default function AIPage() {
  // `messages` is everything shown on screen (starts with the canned greeting).
  // `history` is only the real user/assistant turns exchanged with the API —
  // kept separate so the greeting never counts as part of the conversation
  // when the server decides whether this is a brand-new session.
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();
      const replyText: string = typeof data.reply === "string" ? data.reply : data.error ?? FALLBACK_REPLY;
      const assistantMessage: ChatMessage = { role: "assistant", content: replyText };

      setMessages((prev) => [...prev, assistantMessage]);
      setHistory((prev) => [...prev, userMessage, assistantMessage]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: FALLBACK_REPLY }]);
    } finally {
      setIsThinking(false);
    }
  }

  function handleClear() {
    if (history.length > 0) {
      fetch("/api/chat/clear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      }).catch(() => {});
    }
    setMessages([GREETING]);
    setHistory([]);
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
