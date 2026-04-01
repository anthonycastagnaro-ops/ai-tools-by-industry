"use client";

import Link from "next/link";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  }
}

export function AffiliateLink({
  href,
  className,
  children,
  toolSlug,
  placement = "site",
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  toolSlug?: string;
  placement?: string;
}) {
  const isInternal = href.startsWith("/");
  const handleClick = () => {
    const label =
      typeof children === "string" ? children : toolSlug || "affiliate_cta";

    window.gtag?.("event", "cta_click", {
      event_category: "affiliate_cta",
      event_label: label,
      destination_url: href,
      destination_type: isInternal ? "internal_placeholder" : "affiliate_outbound",
      placement,
      tool_slug: toolSlug || "unknown",
    });
  };

  if (isInternal) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener sponsored"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
