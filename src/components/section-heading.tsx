export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.24em] text-[var(--brand)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
