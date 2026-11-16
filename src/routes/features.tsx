import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Panel } from "@/components/site/Panel";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: pageMeta(
      "Features — Hypermise Bedrock add-on",
      "What Hypermise for Minecraft Bedrock includes, from v5.5's candidate block-ID texture aliases to its single-file .mcaddon bundle.",
    ),
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <>
      <PageHeader eyebrow="// Features" title={<>What's inside <span className="text-neon">Hypermise</span></>}>
        Everything here works within Bedrock's official add-on system. Nothing changes the game
        engine itself.
      </PageHeader>
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body, tag }) => (
            <li key={title}>
              <Panel className="h-full">
                <Icon aria-hidden className="size-7 text-primary" />
                <h2 className="mt-4 text-xl font-semibold uppercase">{title}</h2>
                {tag && <p className="mt-1 font-mono text-xs uppercase text-warning">{tag}</p>}
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              </Panel>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="neon" size="xl">
            <Link to="/download">Go to download</Link>
          </Button>
          <Button asChild variant="neonOutline" size="xl">
            <Link to="/compatibility">What it can't do</Link>
          </Button>
        </div>
      </section>
    </>
  );
}