import Link from "next/link";
import Icon, { WhatsAppIcon } from "./Icon";
import { company } from "../lib/content";

const waText = encodeURIComponent("Hello Sahara Group, I'd like to ask about ");

export default function Floating() {
  const wa = `https://wa.me/${company.whatsapp}?text=${waText}`;
  return (
    <>
      <a className="whatsapp" href={wa} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
        <WhatsAppIcon />
      </a>
      <nav className="mobile-bar" aria-label="Quick contact">
        <a href="tel:+20227744049">
          <Icon name="phone" size={18} /> Call
        </a>
        <a href={wa} target="_blank" rel="noopener">
          <WhatsAppIcon width={18} height={18} /> WhatsApp
        </a>
        <Link href="/contact/#quote" className="quote">
          Get a quote
        </Link>
      </nav>
    </>
  );
}
