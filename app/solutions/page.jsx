import Link from "next/link";
import PageHero from "../../components/PageHero";
import Icon from "../../components/Icon";
import CtaBand from "../../components/CtaBand";
import { solutions } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Testing, Commissioning & Automation Solutions",
  description:
    "Sahara Group's solutions: substation testing and commissioning, PLC and SCADA automation, and OMICRON certified training, delivered by in-house engineering teams.",
  path: "/solutions/",
});

const hrefs = { automation: "/solutions/automation/", power: "/solutions/power/", training: "/training/" };

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & services"
        title="Testing, commissioning and automation solutions"
        intro="Two in-house engineering teams, each with its own dedicated tools, plus a certified training academy."
        crumbs={[{ label: "Solutions" }]}
      />
      <section className="section section--alt">
        <div className="container grid grid-3">
          {solutions.map((s) => (
            <article className="card" key={s.id}>
              <div className="card-icon">
                <Icon name={s.icon} />
              </div>
              <h2 className="h3">{s.title}</h2>
              <p>{s.intro}</p>
              <Link className="link-arrow" href={hrefs[s.id]}>
                {s.id === "training" ? "See training courses" : `Explore ${s.title.toLowerCase()}`} →
              </Link>
            </article>
          ))}
        </div>
      </section>

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
