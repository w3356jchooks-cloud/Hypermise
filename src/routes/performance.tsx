import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ClipboardCheck, Copy, FlaskConical, Gauge, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

import { LimitationsGrid } from "@/components/site/LimitationsGrid";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Panel } from "@/components/site/Panel";
import { BENCHMARK_FIELDS, PERF_CONTROLS, PERF_METRICS, PERF_RESULTS, RELEASE } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: pageMeta(
      "Performance validation — Hypermise",
      "How Hypermise benchmarks are tested and submitted: reproducible before/after runs on named devices and Minecraft versions, reporting average FPS, 1% lows and frame-time consistency. Not yet measured.",
    ),
  }),
  component: PerformancePage,
});

const STEPS: [string, string][] = [
  ["Lock the setup", "Fix every variable listed above and write it down with the run."],
  ["Run A — without Hypermise", "Record the scene for a fixed length of time with the add-on deactivated."],
  ["Run B — with Hypermise", "Activate Hypermise and record the exact same scene for the same length of time."],
  ["Repeat and alternate", "Alternate A and B several times, letting the device cool between runs."],
  ["Compare honestly", "Only call it an improvement if B beats A by more than the normal run-to-run variation."],
];

function CopyTemplateButton() {
  const [copied, setCopied] = useState(false);
  const template = BENCHMARK_FIELDS.map((f) => `${f}:\n`).join("\n");
  return (
    <Button
      type="button"
      variant="neonOutline"
      size="xl"
      className="w-full"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(template);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? <Check /> : <Copy />} {copied ? "Template copied" : "Copy submission template"}
    </Button>
  );
}

const dash = (v: number | string | null) => (v === null ? "—" : String(v));

function PerformancePage() {
  return (
    <>
      <PageHeader eyebrow="// Performance validation" title={<>Measured, <span className="text-neon">not promised</span></>}>
        We're optimizing what an add-on can control and measuring the result. Hypermise will only
        claim an FPS or frame-time improvement once repeatable A/B tests show one.
      </PageHeader>

      {/* Rule */}
      <section aria-labelledby="rule" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <div className="rounded-sm flex flex-col gap-3 border border-accent/40 bg-accent/5 p-5 sm:flex-row sm:items-start sm:gap-4">
          <FlaskConical aria-hidden className="size-6 shrink-0 text-accent" />
          <div>
            <h2 id="rule" className="font-display text-lg font-semibold uppercase text-accent">
              The claim rule
            </h2>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              No performance claim is made for v{RELEASE.version} until the same scene has been
              tested with and without Hypermise, several times, with{" "}
              <strong className="text-foreground">everything else held identical</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section aria-labelledby="controls" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionHeading id="controls" eyebrow="// Held constant" title="What must match between runs">
          If any of these change between the A and B runs, the comparison doesn't count.
        </SectionHeading>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PERF_CONTROLS.map((c, i) => (
            <li key={c.label} className="flex gap-4 rounded-sm border border-border bg-surface p-5">
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-base font-semibold uppercase tracking-wide">{c.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Protocol + metrics */}
      <section aria-labelledby="protocol" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <SectionHeading id="protocol" eyebrow="// Method" title="A/B test protocol" />
            <ol className="mt-8 space-y-5">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
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
          </div>
          <div>
            <SectionHeading eyebrow="// Reported" title="What we publish" />
            <ul className="mt-8 space-y-4">
              {PERF_METRICS.map((m) => (
                <li key={m.label}>
                  <Panel>
                    <div className="flex items-center gap-2">
                      <Gauge aria-hidden className="size-5 text-primary" />
                      <h3 className="font-display text-lg font-semibold uppercase">{m.label}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{m.detail}</p>
                  </Panel>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Each figure is reported for both A and B, across all repeated runs — not a single
              best run.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section aria-labelledby="results" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="results" eyebrow="// Benchmark results" title="Test results">
            No reproducible tests have been completed yet, so there are no numbers here. This table
            will only be filled in with real before/after measurements on named devices and
            Minecraft versions.
          </SectionHeading>
          <span className="rounded-sm border border-dashed border-warning/70 px-3 py-1.5 font-mono text-xs uppercase text-warning">
            Not yet measured
          </span>
        </div>
        <div className="mt-8 overflow-x-auto rounded-sm border border-border">
          <table className="w-full min-w-[760px] text-left text-sm">
            <caption className="sr-only">Hypermise {RELEASE.version} benchmark results — not yet measured</caption>
            <thead className="bg-surface-raised font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th scope="col" className="px-4 py-3">Device</th>
                <th scope="col" className="px-4 py-3">Minecraft version</th>
                <th scope="col" className="px-4 py-3">Scene</th>
                <th scope="col" className="px-4 py-3">Avg FPS</th>
                <th scope="col" className="px-4 py-3">1% low</th>
                <th scope="col" className="px-4 py-3">Frame-time consistency</th>
                <th scope="col" className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {PERF_RESULTS.map((r) => (
                <tr key={r.device}>
                  <th scope="row" className="px-4 py-3 font-display font-semibold uppercase">{r.device}</th>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{dash(r.minecraftVersion)}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.scene}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{dash(r.avgFps)}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{dash(r.onePercentLow)}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{dash(r.frameTimeConsistency)}</td>
                  <td className="px-4 py-3">
                    <span className="whitespace-nowrap rounded-sm border border-dashed border-warning/60 px-2 py-0.5 font-mono text-xs uppercase text-warning">
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Submission */}
      <section aria-labelledby="submit" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionHeading id="submit" eyebrow="// Benchmark submissions" title="Submit a benchmark">
          Ran a fair before/after test? A submission can only be added to the table if it includes
          everything below, so anyone can reproduce it.
        </SectionHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr] [&>*]:min-w-0">
          <ul className="grid gap-2 rounded-sm border border-border bg-surface p-5 sm:p-6">
            {BENCHMARK_FIELDS.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                <ClipboardCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <div role="status" className="rounded-sm border border-dashed border-warning/60 bg-warning/5 p-5 text-sm">
              <p className="font-semibold text-warning">Submission channel opening soon</p>
              <p className="mt-1 text-muted-foreground">
                We haven't published a submission address yet. Copy the template now and keep your
                results; this page will say where to send them.
              </p>
            </div>
            <CopyTemplateButton />
          </div>
        </div>
      </section>

      {/* 300 FPS */}
      <section aria-labelledby="stretch" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="chamfer bg-neon p-px shadow-glow">
          <div className="chamfer bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Target aria-hidden className="size-6 text-primary" />
              <h2 id="stretch" className="text-2xl font-bold uppercase sm:text-3xl">
                300 FPS is a stretch target, not an expected outcome
              </h2>
            </div>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              It's an internal ambition — <strong className="text-foreground">not an expected outcome, not a claim and not a guarantee</strong>. Whether
              any device can get near it depends on the hardware, the display's refresh rate and
              sync settings, and the frame-rate cap built into Minecraft on that platform. Many
              phones and consoles are capped well below 300, and no add-on can lift that cap.
            </p>
          </div>
        </div>
      </section>

      {/* Limits */}
      <section aria-labelledby="limits" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionHeading id="limits" eyebrow="// Not guaranteed" title="What an add-on can't override">
          Optimizing inside the add-on system doesn't change the engine. These stay outside
          Hypermise's reach and can't be guaranteed by any add-on. See the{" "}
          <Link to="/guarantee" className="text-accent underline underline-offset-4">
            full guarantee
          </Link>
          .
        </SectionHeading>
        <div className="mt-8">
          <LimitationsGrid />
        </div>
      </section>
    </>
  );
}