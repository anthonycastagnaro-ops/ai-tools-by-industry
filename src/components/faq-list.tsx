import type { IndustryFaq } from "@/lib/types";

export function FaqList({ faqs }: { faqs: IndustryFaq[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
            {faq.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
