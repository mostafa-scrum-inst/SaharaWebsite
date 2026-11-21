import Link from "next/link";

export function LogoMark({ className = "logo-mark" }) {
  // Simple dune + sun mark that reads on dark backgrounds and at small sizes.
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="var(--c-accent)" />
      <circle cx="27" cy="14" r="5" fill="var(--c-primary)" />
      <path d="M4 30c6-7 11-9 17-5 4-4 9-4 15 0v6H4Z" fill="var(--c-primary)" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Sahara Group, home">
      <LogoMark />
      <span className="logo-text">
        Sahara
        <small>GROUP</small>
      </span>
    </Link>
  );
}
