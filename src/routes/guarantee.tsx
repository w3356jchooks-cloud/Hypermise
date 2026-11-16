import { createFileRoute, Link } from "@tanstack/react-router";

import { GuaranteeSection } from "@/components/site/GuaranteeSection";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/guarantee")({
  head: () => ({
    meta: pageMeta(
      "Hypermise Capability Guarantee",
      "What Hypermise guarantees — version-labelled downloads, accurate feature descriptions, no companion app or root, disclosed engine limits, A/B-tested benchmarks only — and what no Bedrock add-on can guarantee.",
    ),
  }),
  component: GuaranteePage,
});

function GuaranteePage() {
  return (
    <>
      <PageHeader
        eyebrow="// Our commitment"
        title={<>Hypermise capability <span className="text-neon">guarantee</span></>}
      >
        We guarantee the things this project controls. We're equally clear about the things no
        Bedrock add-on can control — those are not guaranteed, by us or anyone.
      </PageHeader>
      <section aria-label="What we guarantee and what we cannot guarantee" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <GuaranteeSection detailed />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="neon" size="xl">
            <Link to="/download">Version 5.5 details</Link>
          </Button>
          <Button asChild variant="neonOutline" size="xl">
            <Link to="/performance">Benchmark status</Link>
          </Button>
        </div>
      </section>
    </>
  );
}