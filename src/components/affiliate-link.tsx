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
  fallbackHref = "/",
  className,
  children,
  toolSlug,
  toolName,
  placement = "site",
  pageType,
  ctaType,
  ctaLocation,
}: {
  href?: string | null;
  fallbackHref?: string;
  className: string;
  children: React.ReactNode;
  toolSlug?: string;
  toolName?: string;
  placement?: string;
  pageType?: string;
  ctaType?: string;
  ctaLocation?: string;
}) {
  const resolvedHref = href || fallbackHref;
  const isInternal = resolvedHref.startsWith("/");
  const inferredPageType =
    pageType || placement.split("_")[0] || (isInternal ? "internal" : "external");
  const inferredCtaType =
    ctaType ||
    (toolSlug === "fiverr" ? "fiverr" : toolSlug === "systeme" ? "systeme" : "internal");
  const inferredCtaLocation =
    ctaLocation ||
    (placement.includes("hero") || placement.includes("quick_picks")
      ? "top"
      : placement.includes("verdict") ||
          placement.includes("final") ||
          placement.includes("tool_card")
        ? "bottom"
        : "mid");
  const handleClick = () => {
    const label =
      typeof children === "string" ? children : toolSlug || "affiliate_cta";

    window.gtag?.("event", "cta_click", {
      event_category: "affiliate_cta",
      event_label: label,
      destination_url: resolvedHref,
      destination_type: isInternal ? "internal_link" : "affiliate_outbound",
      placement,
      tool_slug: toolSlug || "unknown",
      tool_name: toolName || toolSlug || "unknown",
      page_type: inferredPageType,
      cta_type: inferredCtaType,
      cta_location: inferredCtaLocation,
    });
  };

  if (isInternal) {
    return (
      <Link href={resolvedHref} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="noreferrer noopener sponsored"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
