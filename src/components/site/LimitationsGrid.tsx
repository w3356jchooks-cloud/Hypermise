import { Ban } from "lucide-react";
import { LIMITATIONS } from "@/content/site";

export function LimitationsGrid() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {LIMITATIONS.map((l) => (
        <li key={l.title} className="rounded-sm border border-border bg-surface p-5">
          <div className="flex items-center gap-2">
            <Ban aria-hidden className="size-4 shrink-0 text-destructive" />
            <h3 className="font-display text-base font-semibold uppercase tracking-wide">
              Can't override: {l.title}
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
        </li>
      ))}
    </ul>
  );
}