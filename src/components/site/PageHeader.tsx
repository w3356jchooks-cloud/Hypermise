import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:linear-gradient(180deg,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{children}</div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-bold uppercase sm:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-3 text-muted-foreground">{children}</div>}
    </div>
  );
}