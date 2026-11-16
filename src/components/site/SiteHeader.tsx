import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { NAV } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="whitespace-nowrap rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="neon" size="sm" className="hidden sm:inline-flex">
            <Link to="/download">Get v5.5</Link>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-sm border border-border text-foreground xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-border bg-surface xl:hidden"
      >
        <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center justify-between rounded-sm px-3 py-3 font-display text-base uppercase tracking-wider text-foreground hover:bg-secondary data-[status=active]:text-primary"
              >
                {item.label}
                <span aria-hidden className="font-mono text-xs text-muted-foreground">→</span>
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <Button asChild variant="neon" size="xl" className="w-full">
              <Link to="/download">Get v5.5</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}