/**
 * Simple in-memory per-key rate limiter. This is a SOFT limit: serverless
 * functions (Vercel) can spin up fresh instances between invocations and
 * lose this Map entirely, so a determined client could bypass it by hitting
 * a cold instance. Acceptable for this project's traffic level — it blunts
 * casual abuse and accidental loops, it is not a substitute for a real
 * shared store (e.g. Redis/Upstash) if this ever needs to be bulletproof.
 */
const requestLog = new Map<string, number[]>();

export function isRateLimited(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > maxRequests;
}
