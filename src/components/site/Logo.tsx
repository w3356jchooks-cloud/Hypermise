import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Hypermise home">
      <span aria-hidden className="relative grid size-8 place-items-center">
        <span className="chamfer-sm absolute inset-0 bg-neon opacity-90 transition group-hover:opacity-100" />
        <span className="chamfer-sm absolute inset-[3px] bg-background" />
        <span className="relative size-2.5 bg-primary shadow-glow" />
      </span>
      <span className="font-display text-lg font-bold tracking-[0.14em] uppercase">
        Hyper<span className="text-primary">mise</span>
      </span>
    </Link>
  );
}