"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { company, nav } from "../lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  const cairo = company.offices[0];

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-group">
            <a href={`tel:${cairo.phones[0].replace(/\s/g, "")}`}>
              Cairo {cairo.phones[0]}
            </a>
            <a href={`tel:${company.offices[1].phones[0].replace(/\s/g, "")}`}>
              Bratislava {company.offices[1].phones[0]}
            </a>
          </div>
          <div className="topbar-group">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <Link href="/careers/">Careers</Link>
          </div>
        </div>
      </div>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container">
          <Logo />
          <nav
            id="main-nav"
            className={`nav${open ? " is-open" : ""}`}
            aria-label="Main"
          >
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <div className="nav-item" key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="nav-sub">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link href="/contact/#quote" className="btn btn--accent btn--mobile-only">
              Request a quote
            </Link>
          </nav>
          <Link href="/contact/#quote" className="btn btn--accent btn--sm btn--quote">
            Request a quote
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </header>
    </>
  );
}
