import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/Logo";
import { NAV, RELEASE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            An experimental add-on project for Minecraft Bedrock Edition. Current version{" "}
            <span className="font-mono text-foreground">v{RELEASE.version}</span> ·{" "}
            {RELEASE.channel.toLowerCase()}.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Hypermise. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider">
            Not an official Minecraft product. Not approved by or associated with Mojang or
            Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}