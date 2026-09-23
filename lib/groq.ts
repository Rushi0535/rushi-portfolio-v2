// Originally llama-3.3-70b-versatile / llama-3.1-8b-instant (matching the old
// app). Swapped 2026-09-23 after confirming via Groq's /models endpoint that
// the configured GROQ_API_KEY's account has no Llama chat models enabled at
// all — only the openai/gpt-oss family, qwen/qwen3.8-27b, allam-2-7b, and
// audio-only models. These are what that key can actually call today.
const PRIMARY_MODEL = "openai/gpt-oss-120b";
const FALLBACK_MODEL = "openai/gpt-oss-20b";

type GroqModelsResponse = { data?: Array<{ id: string }> };
type GroqChatResponse = { choices?: Array<{ message?: { content?: string } }> };

/**
 * Mirrors the old app's model-availability check against Groq's /models
 * endpoint, trimmed to two current models (the old app's fallback list also
 * included mixtral-8x7b and gemma-7b-it, both since retired by Groq).
 * Falls back to the primary model name if the availability check itself
 * fails, letting the actual chat completion call surface the real error.
 */
async function pickAvailableModel(apiKey: string): Promise<string> {
  try {
    const res = await fetch("https://api.groq.com/openai/v1/models", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!res.ok) throw new Error(`Groq /models returned ${res.status}`);

    const data = (await res.json()) as GroqModelsResponse;
    const available = new Set((data.data ?? []).map((m) => m.id));

    if (available.has(PRIMARY_MODEL)) return PRIMARY_MODEL;
    if (available.has(FALLBACK_MODEL)) return FALLBACK_MODEL;

    throw new Error("Neither the primary nor fallback Groq model is available for this API key.");
  } catch (err) {
    console.error("Groq: failed to resolve an available model, defaulting to primary.", err);
    return PRIMARY_MODEL;
  }
}

export type GroqChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function getGroqChatCompletion(apiKey: string, messages: GroqChatMessage[]): Promise<string> {
  const model = await pickAvailableModel(apiKey);

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages, temperature: 0.7, max_tokens: 600 }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Groq chat completion failed (${res.status}): ${errText}`);
  }

  const data = (await res.json()) as GroqChatResponse;
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error("Groq returned an empty completion.");
  }
  return reply;
}
