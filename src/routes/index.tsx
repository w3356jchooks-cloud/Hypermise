import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TriangleAlert } from "lucide-react";

import heroImage from "@/assets/hero-voxel.svg";
import { DownloadCard } from "@/components/site/DownloadCard";
import { FaqList } from "@/components/site/FaqList";
import { GuaranteeSection } from "@/components/site/GuaranteeSection";
import { SectionHeading } from "@/components/site/PageHeader";
import { Panel } from "@/components/site/Panel";
import { Button } from "@/components/ui/button";
import { FAQS, FEATURES, INSTALL_STEPS, RELEASE } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Hypermise — Official site of the experimental Bedrock add-on",
      "Hypermise is an experimental Minecraft Bedrock add-on. Get version 5.5 notes, install steps, compatibility details and an honest list of what an add-on can't change.",
    ),
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div aria-hidden className="bg-hero-fade absolute inset-0 -z-10" />
        <div aria-hidden className="bg-hero-bottom absolute inset-0 -z-10" />

        <div className="mx-auto flex min-h-[84svh] max-w-6xl flex-col justify-end px-4 pt-24 pb-14 sm:px-6 sm:pb-20 lg:justify-center">
          <div className="max-w-2xl animate-rise">
            <p className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-background/60 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-primary backdrop-blur">
              <span aria-hidden className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
              v{RELEASE.version} · {RELEASE.channel} · Bedrock Edition
            </p>
            <h1 className="mt-6 text-5xl leading-[0.95] font-bold uppercase sm:text-7xl lg:text-8xl">
              Hyper<span className="text-neon">mise</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
              An experimental add-on for Minecraft Bedrock — built in the open, with version notes
              that say exactly what works, what's unverified and what an add-on simply can't do.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="neon" size="xl">
                <Link to="/download">
                  Get v{RELEASE.version} <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="neonOutline" size="xl">
                <Link to="/compatibility">Read the limitations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 notice */}
      <section aria-labelledby="notice-title" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <div className="rounded-sm flex flex-col gap-3 border border-warning/40 bg-warning/5 p-5 sm:flex-row sm:items-start sm:gap-4">
          <TriangleAlert aria-hidden className="size-6 shrink-0 text-warning" />
          <div>
            <h2 id="notice-title" className="font-display text-lg font-semibold uppercase text-warning">
              About v{RELEASE.version} texture aliases
            </h2>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Version {RELEASE.version} includes candidate block-ID texture aliases that are{" "}
              <strong className="text-foreground">not verified</strong> against the exact
              vanilla atlas. Some blocks may show the wrong texture.{" "}
              <Link to="/changelog" className="text-accent underline underline-offset-4">
                See version notes
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-title" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading id="features-title" eyebrow="// What it is" title="Features">
            What Hypermise does today — described plainly.
          </SectionHeading>
          <Link to="/features" className="font-mono text-sm uppercase tracking-wider text-accent hover:text-primary">
            All features →
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.slice(0, 3).map(({ icon: Icon, title, body, tag }) => (
            <li key={title}>
              <Panel className="h-full">
                <Icon aria-hidden className="size-7 text-primary" />
                <h3 className="mt-4 text-xl font-semibold uppercase">{title}</h3>
                {tag && <p className="mt-1 font-mono text-xs uppercase text-warning">{tag}</p>}
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              </Panel>
            </li>
          ))}
        </ul>
      </section>

      {/* Guarantee */}
      <section aria-labelledby="limits-title" className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading id="limits-title" eyebrow="// What we guarantee — and what we can't" title="Hypermise Capability Guarantee">
            We're optimizing what an add-on can control and measuring the result. Here's exactly
            what that covers.
          </SectionHeading>
          <Link to="/guarantee" className="shrink-0 font-mono text-sm uppercase tracking-wider text-accent hover:text-primary">
            Full guarantee →
          </Link>
        </div>
        <div className="mt-10">
          <GuaranteeSection />
        </div>
      </section>

      {/* Install teaser + download */}
      <section aria-labelledby="get-title" className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <SectionHeading id="get-title" eyebrow="// Get started" title="Install in minutes" />
            <ol className="mt-8 space-y-5">
              {INSTALL_STEPS.map(([t, d], i) => (
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
            <Link to="/install" className="mt-8 inline-block font-mono text-sm uppercase tracking-wider text-accent hover:text-primary">
              Full installation guide →
            </Link>
          </div>
          <DownloadCard />
        </div>
      </section>

      {/* FAQ teaser */}
      <section aria-labelledby="faq-title" className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading id="faq-title" eyebrow="// Questions" title="FAQ" />
          <Link to="/faq" className="font-mono text-sm uppercase tracking-wider text-accent hover:text-primary">
            All questions →
          </Link>
        </div>
        <div className="mt-8">
          <FaqList items={FAQS.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}