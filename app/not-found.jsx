import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="eyebrow">Error 404</div>
        <h1>We couldn't find that page</h1>
        <p>It may have moved when we rebuilt the site. Search for it, or try one of these pages.</p>
        <form className="search-box" action={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/search/`} method="get" role="search" style={{ marginTop: 24 }}>
          <label htmlFor="nf-search" className="sr-only">Search the site</label>
          <input id="nf-search" name="q" type="search" placeholder="Search products, services, courses..." />
          <button className="btn btn--accent" type="submit">Search</button>
        </form>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <Link className="btn btn--accent" href="/">Home</Link>
          <Link className="btn btn--ghost" href="/solutions/">Solutions</Link>
          <Link className="btn btn--ghost" href="/products/">Products</Link>
          <Link className="btn btn--ghost" href="/contact/">Contact</Link>
        </div>
      </div>
    </section>
  );
}
