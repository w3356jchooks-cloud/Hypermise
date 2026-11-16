import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { RELEASE } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: pageMeta(
      "Version notes — Hypermise 5.5",
      "Hypermise 5.5 version notes: candidate block-ID texture aliases (not verified against the exact vanilla atlas), known issues and release status.",
    ),
  }),
  component: ChangelogPage,
});

const GROUPS: { label: string; tone: string; items: string[] }[] = [
  {
    label: "Added",
    tone: "text-primary border-primary/50",
    items: [
      "Candidate block-ID texture aliases that map block identifiers to texture entries.",
    ],
  },
  {
    label: "Unverified",
    tone: "text-warning border-warning/50",
    items: [
      "The new aliases are not verified against the exact vanilla texture atlas.",
      "Alias names may change in a future version as they are checked.",
    ],
  },
  {
    label: "Known issues",
    tone: "text-destructive border-destructive/50",
    items: [
      "Some blocks may show the wrong texture, or the missing-texture pattern, where an alias doesn't match.",
      "Minecraft updates that change the vanilla atlas may break individual aliases.",
    ],
  },
  {
    label: "Notes",
    tone: "text-accent border-accent/50",
    items: [
      "No FPS or frame-time gains are claimed yet: A/B performance testing for this release has not been measured.",
      "Add-on package upload pending: the .mcaddon exists but isn't attached to this site yet, so the download stays disabled.",
    ],
  },
];

function ChangelogPage() {
  return (
    <>
      <PageHeader eyebrow="// Version notes" title="Changelog">
        What changed, what's unverified and what's known to be broken.
      </PageHeader>
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <article aria-labelledby="v55" className="relative border-l-2 border-primary/60 pl-6 sm:pl-10">
          <span aria-hidden className="absolute top-1.5 -left-[9px] size-4 rotate-45 bg-primary shadow-glow" />
          <header className="flex flex-wrap items-center gap-3">
            <h2 id="v55" className="text-3xl font-bold uppercase">v{RELEASE.version}</h2>
            <span className="rounded-sm border border-accent/50 px-2 py-0.5 font-mono text-xs uppercase text-accent">
              {RELEASE.channel}
            </span>
            <span className="rounded-sm border border-dashed border-warning/60 px-2 py-0.5 font-mono text-xs uppercase text-warning">
              Release date TBA
            </span>
          </header>
          <div className="mt-8 space-y-8">
            {GROUPS.map((g) => (
              <div key={g.label}>
                <h3 className={`inline-block border-b-2 pb-1 font-mono text-sm uppercase tracking-widest ${g.tone}`}>
                  {g.label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3 text-muted-foreground">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-border-strong" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
        <p className="mt-12 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Notes for releases before {RELEASE.version} aren't published on this site yet.
        </p>
      </section>
    </>
  );
}