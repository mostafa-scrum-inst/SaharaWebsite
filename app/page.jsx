import Link from "next/link";
import Icon from "../components/Icon";
import Media from "../components/Media";
import CtaBand from "../components/CtaBand";
import {
  about, featuredClients, industries, news, partners, solutions, stats, testimonials, training,
} from "../lib/content";
import { meta } from "../lib/site";

export const metadata = {
  ...meta({
    title: "Testing, Automation & Commissioning for Power and Oil & Gas",
    description:
      "Power testing, automation and commissioning in Egypt and Europe. Authorised OMICRON, Rockwell Automation and Schneider Electric partner and OMICRON Certified Training Partner.",
    path: "/",
  }),
  title: { absolute: "Sahara Group | Testing, Automation & Commissioning for Power and Oil & Gas" },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <div className="eyebrow">Testing · Automation · Commissioning</div>
            <h1>Testing, automation and commissioning for power and oil &amp; gas</h1>
            <p>
              <span className="only-desktop">
                For more than 30 years we have supplied equipment from OMICRON, Rockwell Automation,
                Schneider Electric and DILO, and the engineers who test, commission and train on it,
                from Cairo and Bratislava.
              </span>
              <span className="only-mobile">
                30+ years of test equipment, automation and the engineers behind them.
              </span>
            </p>
            <div className="hero-actions">
              <Link href="/solutions/" className="btn btn--accent">
                Explore our solutions <span className="arrow">→</span>
              </Link>
              <Link href="/contact/#quote" className="btn btn--ghost">
                Talk to an engineer
              </Link>
            </div>
          </div>
          <aside className="hero-badge" aria-label="Certification">
            <Icon name="shield" size={40} />
            <div className="badge-title">{training.credential}</div>
            <p style={{ fontSize: "1rem", margin: 0 }}>
              Certified to deliver hands-on courses on OMICRON test equipment.
            </p>
            <ul>
              {training.courses.map((c) => (
                <li key={c.code}>{c.code}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="stats" aria-label="Sahara Group in numbers">
        <div className="container">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="partners" aria-label="Partner brands">
        <div className="container">
          <div className="partners-label">Authorised distributor and service partner for</div>
          <div className="logo-row swipe">
            {partners.map((p) => (
              <span className="wordmark" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container grid grid-2">
          <div className="media-wrap">
            <Media kind="engineer" caption="Sahara engineers on site" tall />
            <div className="media-tag">
              <strong>30+</strong>years in the field
            </div>
          </div>
          <div>
            <div className="eyebrow">Who we are</div>
            <h2>Engineers first, distributors second</h2>
            <p className="lead">{about.who}</p>
            <ul className="checklist" style={{ margin: "24px 0 32px" }}>
              <li>Supply, commissioning and support from one team</li>
              <li>Our own automation and power service teams with dedicated tools</li>
              <li>Offices in North Africa and the European Union</li>
            </ul>
            <Link href="/about/" className="btn btn--accent">
              About Sahara Group <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">What we do</div>
            <h2>Solutions for power and process industries</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              From a single test set to a full substation commissioning, with training so your team
              can run it.
            </p>
          </div>
          <div className="grid grid-3">
            {solutions.map((s) => (
              <article className="card" key={s.id}>
                <div className="card-icon">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link
                  className="link-arrow"
                  href={s.id === "training" ? "/training/" : `/solutions/${s.id}/`}
                >
                  {s.id === "training" ? "See training courses" : `Explore ${s.title.toLowerCase()}`} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Industries we serve</div>
            <h2>Trusted across the energy value chain</h2>
          </div>
          <div className="grid grid-3">
            {industries.slice(0, 3).map((ind, i) => (
              <article className="industry" key={ind.title}>
                <Icon name={ind.icon} className="industry-art" />
                <div className="industry-body">
                  <span className="num">0{i + 1}</span>
                  <h3>{ind.title}</h3>
                  <p>{ind.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-l">
            <Link className="link-arrow" href="/industries/">
              See all industries →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Our clients</div>
            <h2>Working with the region's leading operators</h2>
          </div>
          <div className="client-grid swipe">
            {featuredClients.map((c) => (
              <div className="client-tile" key={c}>
                {c}
              </div>
            ))}
          </div>
          <p className="swipe-hint">Swipe to see more</p>
          <p className="center mt-l">
            <Link className="link-arrow" href="/about/#clients">
              View all clients →
            </Link>
          </p>
        </div>
      </section>

      {testimonials.length ? (
        <section className="section section--white">
          <div className="container grid grid-3">
            {testimonials.map((t) => (
              <figure className="card" key={t.name} style={{ margin: 0 }}>
                <blockquote style={{ margin: 0 }}>“{t.quote}”</blockquote>
                <figcaption className="mt-l">
                  <strong>{t.name}</strong>, {t.title}, {t.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">News &amp; events</div>
            <h2>Latest from Sahara Group</h2>
          </div>
          <div className="grid grid-3">
            {news.slice(0, 3).map((n) => (
              <article className="card news-card" key={n.title}>
                <span className="tag">{n.tag}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-l">
            <Link className="link-arrow" href="/news/">
              View all news →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
