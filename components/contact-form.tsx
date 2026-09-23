"use client";

import { useState, type FormEvent } from "react";
import { formMessages } from "@/lib/content/contact";

type Status = "idle" | "invalid" | "submitting" | "success" | "error";

async function submitContactForm(data: { name: string; subject: string; message: string }) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to send message.");
  }
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !subject.trim() || !message.trim()) {
      setStatus("invalid");
      return;
    }
    setStatus("submitting");
    try {
      await submitContactForm({ name, subject, message });
      setStatus("success");
      setName("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "rounded-card border border-border bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="font-display text-lg font-semibold text-text-primary">Drop me a message</h3>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Your Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Subject</span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Your Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </label>

      {status === "invalid" && <p className="font-mono text-xs text-accent">{formMessages.validation}</p>}
      {status === "success" && <p className="font-mono text-xs text-accent">{formMessages.success}</p>}
      {status === "error" && <p className="font-mono text-xs text-accent">{formMessages.failure}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start rounded-card bg-accent px-5 py-2.5 font-mono text-sm font-medium text-bg-elevated transition-colors hover:bg-accent-strong disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
