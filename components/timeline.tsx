"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";

export type TimelineItem = {
  title: string;
  subtitle: string;
  description: string;
  dateRange: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => items.map(() => false));
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(items.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setVisible((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    nodeRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [reduceMotion, items]);

  const lastVisibleIndex = visible.lastIndexOf(true);
  const lineProgress = lastVisibleIndex >= 0 ? ((lastVisibleIndex + 1) / items.length) * 100 : 0;

  return (
    <ol className="relative flex flex-col gap-8 pl-9">
      <span className="absolute left-[6px] top-1.5 bottom-1.5 w-px bg-border" aria-hidden="true" />
      <span
        className="absolute left-[6px] top-1.5 w-px bg-accent transition-[height] duration-700 ease-out"
        style={{ height: `${lineProgress}%` }}
        aria-hidden="true"
      />

      {items.map((item, i) => (
        <li
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          data-index={i}
          className={cn(
            "relative transition-all duration-700 ease-out",
            visible[i] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          )}
        >
          <span
            className={cn(
              "absolute -left-9 top-1.5 h-3 w-3 rounded-full border-2 border-bg-elevated transition-colors duration-500",
              visible[i] ? "bg-accent" : "bg-border"
            )}
            aria-hidden="true"
          />
          <Card className="flex flex-col gap-1.5 p-5 md:p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-accent">{item.dateRange}</span>
            <h3 className="font-display text-lg font-semibold text-text-primary">{item.title}</h3>
            <p className="font-mono text-xs text-text-secondary">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
