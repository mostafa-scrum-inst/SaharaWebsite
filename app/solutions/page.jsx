import Link from "next/link";
import PageHero from "../../components/PageHero";
import Icon from "../../components/Icon";
import Media from "../../components/Media";
import CtaBand from "../../components/CtaBand";
import { solutions } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Substation Testing, Commissioning & Automation Services in Egypt",
  description:
    "Protection relay, transformer, CT and breaker testing, substation commissioning, and PLC/SCADA automation services by Sahara Group's own engineering teams.",
  path: "/solutions/",
});

export default function Solutions() {
  const [automation, power] = solutions;
  return (
    <>
      <PageHero
        eyebrow="Solutions & services"
        title="Substation testing, commissioning and automation services"
        intro="Two in-house engineering teams, each with its own dedicated tools: one for automation and control, one for power testing and commissioning."
        crumbs={[{ label: "Solutions" }]}
      />

      {[automation, power].map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section anchor ${i % 2 ? "section--alt" : "section--white"}`}
        >
          <div className="container grid grid-2">
            <div style={{ order: i % 2 ? 2 : 0 }}>
              <div className="card-icon">
                <Icon name={s.icon} />
              </div>
              <h2>{s.title}</h2>
              <p className="lead">{s.intro}</p>
              <ul className="checklist" style={{ margin: "24px 0 32px" }}>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="hero-actions">
                <Link href="/contact/#quote" className="btn btn--accent">
                  Request {s.id === "power" ? "a test campaign" : "an automation quote"}{" "}
                  <span className="arrow">→</span>
                </Link>
                <Link href={`/products/#${s.id}`} className="btn btn--ghost">
                  See {s.id} products
                </Link>
              </div>
            </div>
            <Media
              kind={s.id === "power" ? "substation" : "panel"}
              caption={s.id === "power" ? "Testing with OMICRON equipment" : "Control panel integration"}
            />
          </div>
        </section>
      ))}

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">How we work</div>
            <h2>From supply to start-up</h2>
          </div>
          <div className="grid grid-4">
            {[
              ["gauge", "Assess", "Site survey, scope and test plan agreed with your team."],
              ["box", "Supply", "Original equipment from our partner brands, configured for your site."],
              ["wrench", "Commission", "Testing, commissioning and start-up by our own engineers."],
              ["cap", "Train & support", "Hands-on training and after-sales service."],
            ].map(([icon, t, d]) => (
              <div className="value" key={t}>
                <div className="card-icon">
                  <Icon name={icon} />
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
