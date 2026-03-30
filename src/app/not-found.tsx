import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
          Page not found
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950">
          This page is not in the current guide set
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Browse the industry index or return to the homepage to find the right
          buyer guide, tool page, or comparison.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Go home
          </Link>
          <Link
            href="/industries"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
          >
            View industries
          </Link>
        </div>
      </div>
    </Container>
  );
}
