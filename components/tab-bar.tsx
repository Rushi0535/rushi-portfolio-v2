"use client";

import { cn } from "@/lib/utils";

export type Tab = { id: string; label: string };

export function TabBar({
  tabs,
  activeId,
  onChange,
}: {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div role="tablist" className="flex flex-wrap gap-1 border-b border-border">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={cn(
              "border-b-2 px-4 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors",
              active
                ? "border-accent text-accent"
                : "border-transparent text-text-secondary hover:border-border hover:text-text-primary"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
