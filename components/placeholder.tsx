import { cn } from "@/lib/utils";

export function Placeholder({
  label,
  className,
  compact = false,
}: {
  label: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-card border border-dashed border-border bg-bg text-center font-mono text-xs text-text-secondary",
        compact ? "px-3 py-2" : "px-4 py-10",
        className
      )}
    >
      {label}
    </div>
  );
}
