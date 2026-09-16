import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-accent underline decoration-border underline-offset-2 transition-colors hover:text-accent-strong hover:decoration-accent",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
