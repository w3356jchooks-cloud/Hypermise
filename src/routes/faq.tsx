import { createFileRoute } from "@tanstack/react-router";

import { FaqList } from "@/components/site/FaqList";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQS } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: pageMeta(
      "FAQ — Hypermise Bedrock add-on",
      "Answers about Hypermise: FPS expectations, the 5.5 download status, texture aliases, Java and console support, and world safety.",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="// FAQ" title="Questions, answered straight" />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <FaqList items={FAQS} />
      </section>
    </>
  );
}