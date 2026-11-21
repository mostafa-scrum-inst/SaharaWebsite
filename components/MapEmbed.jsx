"use client";

import { useState } from "react";

// Loads Google Maps only when asked, so the Contact page stays fast and no
// third-party request is made without the visitor's action. Uses the keyless
// embed URL, so no API key is exposed in the page source.
export default function MapEmbed({ query, label }) {
  const [show, setShow] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  if (show) {
    return (
      <iframe
        title={`Map: ${label}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: 260, border: 0, borderRadius: "var(--radius)" }}
      />
    );
  }
  return (
    <button
      type="button"
      className="btn btn--ghost btn--sm"
      onClick={() => setShow(true)}
      style={{ marginTop: 16 }}
    >
      Show map
    </button>
  );
}
