import { cn } from "@/lib/utils";

export function DriveEmbed({
  src,
  title,
  height = 300,
  className,
}: {
  src: string;
  title: string;
  height?: number;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-card border border-border bg-bg", className)}>
      <iframe src={src} title={title} loading="lazy" allow="autoplay" className="block w-full" style={{ height }} />
    </div>
  );
}
