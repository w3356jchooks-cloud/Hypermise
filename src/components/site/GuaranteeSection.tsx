import { Link } from "@tanstack/react-router";
import { Ban, Check } from "lucide-react";

import { GUARANTEES, NOT_GUARANTEED, RELEASE } from "@/content/site";

/** Side-by-side "What we guarantee / What we cannot guarantee" block. */
export function GuaranteeSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="chamfer bg-neon p-px shadow-glow">
          <div className="chamfer h-full bg-surface p-6 sm:p-8">
            <p className="eyebrow">// Guaranteed — we control this</p>
            <h3 className="mt-2 text-2xl font-bold uppercase text-primary sm:text-3xl">What we guarantee</h3>
            <ul className="mt-6 space-y-4">
              {GUARANTEES.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-3">
                  <span className="chamfer-sm grid size-8 shrink-0 place-items-center bg-primary text-primary-foreground">
                    {detailed ? <Icon aria-hidden className="size-4" /> : <Check aria-hidden className="size-4" />}
                  </span>
                  <div>
                    <p className="font-display font-semibold uppercase tracking-wide">{title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chamfer bg-border-strong p-px">
          <div className="chamfer h-full bg-panel p-6 sm:p-8">
            <p className="eyebrow">// NOT guaranteed — no add-on controls this</p>
            <h3 className="mt-2 text-2xl font-bold uppercase sm:text-3xl">What we don't guarantee</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Not guaranteed, and not controllable by any Bedrock add-on. We never claim to deliver these.
            </p>
            <ul className="mt-6 space-y-4">
              {NOT_GUARANTEED.map((l) => (
                <li key={l.title} className="flex gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-sm border border-destructive/50 text-destructive">
                    <Ban aria-hidden className="size-4" />
                  </span>
                  <div>
                    <p className="font-display font-semibold uppercase tracking-wide">{l.title}</p>
                    {detailed && <p className="mt-0.5 text-sm text-muted-foreground">{l.body}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-sm border border-accent/40 bg-accent/5 p-5 text-sm text-muted-foreground sm:text-base">
        <strong className="text-foreground">Your actual FPS depends on your device, world and settings.</strong>{" "}
        No fixed FPS — including 300 FPS — is guaranteed or expected. Benchmark status is{" "}
        <strong className="text-foreground">{RELEASE.testStatus}</strong>; figures are only published
        after repeatable A/B tests on named devices and Minecraft versions —{" "}
        <Link to="/performance" className="text-accent underline underline-offset-4">
          see benchmark status
        </Link>
        .
      </div>

      <div className="rounded-sm border border-warning/40 bg-warning/5 p-5 text-sm text-muted-foreground sm:text-base">
        <strong className="text-warning">v{RELEASE.version} texture aliases:</strong> the candidate
        block-ID aliases are <strong className="text-foreground">not verified against the exact vanilla atlas</strong>,
        so some blocks may show the wrong texture.
      </div>
    </div>
  );
}