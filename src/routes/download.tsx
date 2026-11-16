import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";

import { DownloadCard } from "@/components/site/DownloadCard";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { INSTALL_STEPS, RELEASE, RELEASE_META } from "@/content/site";
import { isDownloadAvailable } from "@/lib/download";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: pageMeta(
      "Download Hypermise 5.5 — Official .mcaddon",
      "The official download page for Hypermise 5.5 for Minecraft Bedrock: version details, install steps and the download package, which is coming shortly.",
    ),
  }),
  component: DownloadPage,
});

function DownloadPage() {
  const available = isDownloadAvailable(RELEASE.downloadUrl);
  return (
    <>
      <PageHeader eyebrow="// Downloads" title={<>Get Hypermise <span className="text-neon">{RELEASE.version}</span></>}>
        This is the only official source for the Hypermise .mcaddon.
      </PageHeader>

      {!available && (
        <section aria-labelledby="coming" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          <div role="status" className="chamfer bg-warning/70 p-px">
            <div className="chamfer bg-surface px-5 py-4 sm:px-6">
              <h2 id="coming" className="font-display text-xl font-bold uppercase text-warning sm:text-2xl">
                Download package coming shortly
              </h2>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                The real {RELEASE.fileName} file isn't attached yet, so there's no download link.
                Version details and install steps are below.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-[1.3fr_1fr] [&>*]:min-w-0">
        <DownloadCard />
        <aside className="space-y-6">
          <div className="rounded-sm border border-border bg-surface p-5">
            <h2 className="font-display text-lg font-semibold uppercase">Before you download</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Requires Minecraft: Bedrock Edition. Java Edition is not supported.</li>
              <li>Experimental build — back up any world before activating it.</li>
              <li>
                Includes candidate block-ID texture aliases not verified against the exact
                vanilla atlas.
              </li>
              <li>
                No FPS gains are guaranteed. Benchmarks are{" "}
                <Link to="/performance" className="text-accent underline underline-offset-4">
                  not yet measured
                </Link>
                .
              </li>
            </ul>
          </div>
          <div className="rounded-sm flex gap-3 border border-border bg-surface p-5">
            <ShieldAlert aria-hidden className="size-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground">
              Saw a "Hypermise 5.5" download elsewhere? It isn't from this project. Read{" "}
              <Link to="/guarantee" className="text-accent underline underline-offset-4">
                what we guarantee
              </Link>
              .
            </p>
          </div>
        </aside>
      </section>

      <section aria-labelledby="meta" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionHeading id="meta" eyebrow="// Release metadata" title={`Version ${RELEASE.version} details`}>
          Values marked in amber aren't known yet and will be filled in from the real file.
        </SectionHeading>
        <dl className="mt-8 grid grid-cols-1 border-t border-border sm:grid-cols-2">
          {RELEASE_META.map((m) => (
            <div key={m.label} className="grid min-w-0 gap-1 border-b border-border py-4 sm:pr-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{m.label}</dt>
              <dd className={`[overflow-wrap:anywhere] ${m.tone === "warning" ? "text-warning" : "text-foreground"}`}>{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="steps" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading id="steps" eyebrow="// Installation" title="Install steps" />
          <Link to="/install" className="font-mono text-sm uppercase tracking-wider text-accent hover:text-primary">
            Platform-by-platform guide →
          </Link>
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INSTALL_STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-sm border border-border bg-surface p-5">
              <span className="chamfer-sm grid size-10 shrink-0 place-items-center bg-secondary font-mono font-semibold text-primary">
                0{i + 1}
              </span>
              <div>
                <p className="font-display text-lg font-semibold uppercase">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}