import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-bg px-3 py-1 font-mono text-xs text-text-secondary">
      {children}
    </span>
  );
}
