export function EmailCapture({
  title = "Request future updates from the site",
  description = "If you want future buyer guides, tool updates, or partnership news, use this form to send your email through the contact page while the newsletter system is still being set up.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
            Get Updates
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            {description}
          </p>
        </div>
        <form action="/contact" method="get" className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <input type="hidden" name="intent" value="updates" />
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="h-12 rounded-full border border-slate-300 bg-slate-50 px-5 text-sm text-slate-900 outline-none transition focus:border-slate-950"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Request updates
          </button>
        </form>
        <p className="text-xs leading-6 text-slate-500">
          This is not a live newsletter signup yet. It opens the contact page
          with your email prefilled so you can request updates directly.
        </p>
      </div>
    </section>
  );
}
