"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Google Analytics 4 loads only when NEXT_PUBLIC_GA_ID is set AND the visitor
// accepts the cookie banner (needed for EU visitors; Bratislava office).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const KEY = "sahara-consent";

export function track(event, params = {}) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", event, params);
}

function loadGA() {
  if (!GA_ID || window.gtag) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  // Track phone, email and WhatsApp clicks as conversions.
  document.addEventListener("click", (e) => {
    const a = e.target.closest?.("a[href]");
    if (!a) return;
    const h = a.getAttribute("href");
    if (h.startsWith("tel:")) track("click_call", { number: h.slice(4) });
    else if (h.startsWith("mailto:")) track("click_email");
    else if (h.includes("wa.me")) track("click_whatsapp");
  });
}

export default function Analytics() {
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    let v = null;
    try {
      v = localStorage.getItem(KEY);
    } catch {}
    if (v === "yes") loadGA();
    else if (v !== "no") setAsk(true);
  }, []);

  const answer = (yes) => {
    try {
      localStorage.setItem(KEY, yes ? "yes" : "no");
    } catch {}
    if (yes) loadGA();
    setAsk(false);
  };

  if (!ask) return null;
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 80,
        zIndex: 70,
        maxWidth: 520,
        margin: "0 auto",
        background: "var(--c-surface)",
        color: "var(--c-text)",
        border: "1px solid var(--c-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 20px 50px rgba(0,0,0,.25)",
        padding: 20,
      }}
    >
      <p style={{ marginBottom: 12 }}>
        We use analytics cookies to understand how the site is used. See our{" "}
        <Link href="/privacy/">privacy notice</Link>.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn btn--accent btn--sm" onClick={() => answer(true)}>
          Accept
        </button>
        <button className="btn btn--ghost btn--sm" onClick={() => answer(false)}>
          Decline
        </button>
      </div>
    </div>
  );
}
