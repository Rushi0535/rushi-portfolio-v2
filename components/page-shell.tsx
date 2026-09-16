import type { ComponentType, ReactNode, SVGProps } from "react";

type PageShellProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  tabs?: ReactNode;
  children: ReactNode;
};

export function PageShell({ icon: Icon, title, subtitle, tabs, children }: PageShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-10 md:px-10 md:py-14">
      <header className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-border bg-bg-elevated text-accent">
            <Icon className="h-6 w-6" />
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-2xl font-semibold text-text-primary md:text-3xl">{title}</h1>
            <p className="font-mono text-sm text-text-secondary">{subtitle}</p>
          </div>
        </div>
        {tabs}
      </header>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
