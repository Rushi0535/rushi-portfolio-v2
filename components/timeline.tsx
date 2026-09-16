export type TimelineItem = {
  title: string;
  subtitle: string;
  description: string;
  dateRange: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-border pl-6 md:pl-8">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg-elevated bg-accent md:-left-[37px]" />
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs uppercase tracking-wide text-accent">{item.dateRange}</span>
            <h3 className="font-display text-lg font-semibold text-text-primary">{item.title}</h3>
            <p className="font-mono text-xs text-text-secondary">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
