import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("rounded-card border border-border bg-bg-elevated p-6 md:p-8", className)}>
      {children}
    </section>
  );
}
