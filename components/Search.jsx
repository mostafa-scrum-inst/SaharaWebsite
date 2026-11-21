"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const norm = (s) => s.toLowerCase().normalize("NFKD").replace(/[^\w\s]/g, " ");

export default function Search({ index }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    setQ(new URLSearchParams(window.location.search).get("q") || "");
  }, []);

  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map((it) => {
        const title = norm(it.title);
        const body = norm(`${it.title} ${it.text}`);
        if (!terms.every((t) => body.includes(t))) return null;
        const score = terms.reduce((n, t) => n + (title.includes(t) ? 3 : 1), 0);
        return { ...it, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
  }, [q, index]);

  const onChange = (e) => {
    setQ(e.target.value);
    const url = new URL(window.location.href);
    if (e.target.value) url.searchParams.set("q", e.target.value);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <form className="search-box" role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="site-search" className="sr-only">
          Search the site
        </label>
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={onChange}
          placeholder="Try CPC 100, SCADA, transformer testing..."
          autoFocus
        />
      </form>
      <p className="form-note" role="status" style={{ marginTop: 16 }}>
        {q ? `${results.length} result${results.length === 1 ? "" : "s"} for "${q}"` : "Search products, services, courses and pages."}
      </p>
      <ul className="results">
        {results.map((r) => (
          <li key={r.type + r.title}>
            <Link href={r.href}>
              <small>{r.type}</small>
              <strong>{r.title}</strong>
              <span>{r.text.slice(0, 140)}{r.text.length > 140 ? "..." : ""}</span>
            </Link>
          </li>
        ))}
      </ul>
      {q && !results.length ? (
        <p className="mt-l">
          Nothing found. <Link href="/contact/">Ask our engineers</Link> and we will point you in the right direction.
        </p>
      ) : null}
    </>
  );
}
