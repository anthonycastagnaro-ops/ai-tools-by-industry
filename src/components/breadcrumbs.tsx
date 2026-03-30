import Link from "next/link";

import { Container } from "@/components/container";

type Crumb = {
  href?: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <Container className="pt-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="transition hover:text-slate-900">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900">{item.label}</span>
              )}
              {index < items.length - 1 ? <span>/</span> : null}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
