"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Subtle motion only: blocks fade up as they scroll into view, and stat
// numbers count up once. Skipped entirely for visitors who prefer reduced
// motion. The HTML already contains the final values, so nothing depends on JS.
const SELECTOR = ".section-head, .card, .industry, .value, .product, .panel, .client-tile";

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const els = [...document.querySelectorAll(SELECTOR)].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9
    );
    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const count = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          count.unobserve(e.target);
          const el = e.target;
          const m = el.textContent.match(/^(\d+)(.*)$/);
          if (!m || Number(m[1]) >= 1000) return; // years stay as-is
          const end = Number(m[1]);
          const suffix = m[2];
          const t0 = performance.now();
          const dur = 1200;
          const step = (t) => {
            const p = Math.min(1, (t - t0) / dur);
            el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll(".stat-value").forEach((el) => count.observe(el));

    return () => {
      io.disconnect();
      count.disconnect();
    };
  }, [pathname]);

  return null;
}
