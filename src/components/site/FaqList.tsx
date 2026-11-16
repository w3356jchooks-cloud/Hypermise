import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/content/site";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="py-5 font-display text-base uppercase tracking-wide hover:text-primary hover:no-underline sm:text-lg">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl text-base text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}