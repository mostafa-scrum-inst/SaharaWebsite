import Link from "next/link";
import Logo from "./Logo";
import { company } from "../lib/content";

const tel = (p) => `tel:${p.replace(/\s/g, "")}`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <Logo />
          <p>
            Measuring, testing, automation and commissioning for power and oil &amp; gas,
            since 1999, from Cairo and Bratislava.
          </p>
          <p>
            <strong style={{ color: "var(--c-on-dark)" }}>OMICRON Certified Training Partner</strong>
          </p>
        </div>
        <div>
          <p className="footer-title">Solutions</p>
          <ul>
            <li><Link href="/solutions/automation/">Automation &amp; SCADA</Link></li>
            <li><Link href="/solutions/power/">Power testing</Link></li>
            <li><Link href="/products/">Products</Link></li>
            <li><Link href="/training/">Training</Link></li>
            <li><Link href="/industries/">Industries</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <ul>
            <li><Link href="/about/">About us</Link></li>
            <li><Link href="/projects/">Projects</Link></li>
            <li><Link href="/news/">News &amp; events</Link></li>
            <li><Link href="/careers/">Careers</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Offices</p>
          <ul>
            {company.offices.map((o) => (
              <li key={o.id}>
                <strong style={{ color: "var(--c-on-dark)" }}>{o.city}</strong>
                <br />
                {o.address.join(", ")}
                <br />
                <a href={tel(o.phones[0])}>{o.phones[0]}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {year} Sahara Group. All rights reserved.</span>
          <span>
            <Link href="/privacy/">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
