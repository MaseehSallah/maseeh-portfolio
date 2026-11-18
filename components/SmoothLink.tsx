
"use client";

import type { ReactNode, MouseEvent } from "react";

type SmoothLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function SmoothLink({
  href,
  children,
  className = "",
}: SmoothLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));

    if (!target) return;

    event.preventDefault();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
