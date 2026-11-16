import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Chamfered card with a neon edge. */
export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("chamfer bg-border-strong p-px", className)}>
      <div className="chamfer h-full bg-panel p-5 sm:p-6">{children}</div>
    </div>
  );
}