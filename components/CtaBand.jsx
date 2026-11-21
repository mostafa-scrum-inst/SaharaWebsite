import Link from "next/link";

export default function CtaBand({
  title = "Planning a commissioning or test campaign? Talk to our engineers.",
  button = "Request a quote",
  href = "/contact/#quote",
}) {
  return (
    <section className="cta" aria-label="Contact us">
      <div className="container">
        <h2>{title}</h2>
        <div className="cta-actions">
          <Link href={href} className="btn btn--accent">
            {button} <span className="arrow">→</span>
          </Link>
          <a href="tel:+20227744049" className="btn btn--ghost">
            Call Cairo office
          </a>
        </div>
      </div>
    </section>
  );
}
