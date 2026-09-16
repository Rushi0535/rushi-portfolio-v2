"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadIcon, MenuIcon, XIcon } from "@/lib/icons";

function Profile() {
  return (
    <div className="flex items-center gap-3 px-1">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-accent-soft font-display text-lg font-semibold text-accent">
        RP
      </div>
      <div className="flex flex-col">
        <span className="font-display text-base font-semibold text-text-primary">Rushi Prajapati</span>
        <span className="font-mono text-xs text-text-secondary">AI/ML Engineer · Grad Student</span>
      </div>
    </div>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto py-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-card px-3 py-2.5 font-mono text-sm transition-colors",
              active
                ? "bg-accent-soft text-accent"
                : "text-text-secondary hover:bg-accent-soft/60 hover:text-text-primary"
            )}
          >
            <Icon className="h-[18px] w-[18px] shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function Footer() {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-4">
      <a
        href="/resume.pdf"
        download
        title="Resume coming soon"
        className="flex items-center justify-center gap-2 rounded-card border border-border bg-bg px-4 py-2.5 font-mono text-sm font-medium text-text-secondary opacity-80 transition-colors hover:text-text-primary hover:opacity-100"
      >
        <DownloadIcon className="h-4 w-4" />
        Download Resume
      </a>
      <ThemeToggle />
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-4 py-3 md:hidden">
        <Link href="/about" className="font-display text-lg font-semibold text-text-primary">
          Rushi Prajapati
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-card border border-border text-text-primary"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="flex flex-col gap-6 border-b border-border bg-bg-elevated px-4 pb-6 pt-4 md:hidden">
          <Profile />
          <NavList onNavigate={() => setOpen(false)} />
          <Footer />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col gap-6 border-r border-border bg-bg-elevated px-5 py-6 md:flex">
        <Profile />
        <NavList />
        <Footer />
      </aside>
    </>
  );
}
