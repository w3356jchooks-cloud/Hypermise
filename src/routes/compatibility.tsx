import { createFileRoute, Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

import { LimitationsGrid } from "@/components/site/LimitationsGrid";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { PLATFORMS, RELEASE, type Platform } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/compatibility")({
  head: () => ({
    meta: pageMeta(
      "Compatibility & limitations — Hypermise",
      "Which platforms Hypermise supports, and why an add-on cannot override Bedrock's renderer, render distance, FPS cap, hardware or thermal settings, or memory allocator.",
    ),
  }),
  component: CompatibilityPage,
});

const STATUS_STYLE: Record<Platform["status"], string> = {
  Testing: "border-primary/50 text-primary",
  Untested: "border-warning/50 text-warning",
  "Not supported": "border-destructive/50 text-destructive",
};

function CompatibilityPage() {
  return (
    <>
      <PageHeader eyebrow="// Compatibility" title="Compatibility & limitations">
        Where Hypermise runs, and the hard limits of what any Bedrock add-on can change.
      </PageHeader>

      <section aria-labelledby="platforms" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <SectionHeading id="platforms" eyebrow="// Platforms" title="Where it runs">
          Requires Minecraft: Bedrock Edition. The exact Bedrock version targeted by v
          {RELEASE.version} is still being confirmed.
        </SectionHeading>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {PLATFORMS.map((p) => (
            <li key={p.name} className="grid gap-2 py-4 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center sm:gap-6">
              <p className="font-display text-lg font-semibold uppercase">{p.name}</p>
              <p className="text-sm text-muted-foreground">{p.method}</p>
              <span className={`rounded-sm w-fit border px-2.5 py-1 font-mono text-xs uppercase ${STATUS_STYLE[p.status]}`}>
                {p.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="limits" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionHeading id="limits" eyebrow="// Hard limits" title="What an add-on can't override">
          Add-ons supply content and resources to the game. They don't replace the engine. We're
          optimizing what an add-on can control and measuring the result — see{" "}
          <Link to="/performance" className="text-accent underline underline-offset-4">
            performance validation
          </Link>
          . 300 FPS is a stretch target — not an expected outcome and not a guarantee.
        </SectionHeading>
        <div className="mt-8">
          <LimitationsGrid />
        </div>
      </section>

      <section aria-labelledby="known" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="rounded-sm flex flex-col gap-3 border border-warning/40 bg-warning/5 p-6 sm:flex-row sm:gap-4">
          <TriangleAlert aria-hidden className="size-6 shrink-0 text-warning" />
          <div>
            <h2 id="known" className="font-display text-xl font-semibold uppercase text-warning">
              Known limitation in v{RELEASE.version}
            </h2>
            <p className="mt-2 text-muted-foreground">
              The candidate block-ID texture aliases in this version are not verified
              against the exact vanilla atlas. Expect some blocks to show an incorrect or missing
              texture, and expect future Minecraft updates to affect individual aliases.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}