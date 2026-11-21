import PageHero from "../../components/PageHero";
import Media from "../../components/Media";
import CtaBand from "../../components/CtaBand";
import { about, clients, partners, stats } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "About Us",
  description:
    "Sahara Group: 30+ years as a distributor and service provider for measuring, testing, automation and commissioning across North Africa and Europe.",
  path: "/about/",
});

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Three decades of measuring, testing and automation"
        intro="A strategic solutions provider for power stations, substations and oil & gas facilities, based in Cairo and Bratislava."
        crumbs={[{ label: "About us" }]}
      />

      <section className="section section--white">
        <div className="container grid grid-2">
          <div>
            <div className="eyebrow">Who we are</div>
            <h2>Your partner to success</h2>
            <p className="lead">{about.who}</p>
            <p>{about.unique}</p>
          </div>
          <Media kind="substation" caption="Substation commissioning" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid grid-2" style={{ alignItems: "stretch" }}>
          <div className="panel panel--accent">
            <div className="eyebrow">Our vision</div>
            <p className="lead mb-0">{about.vision}</p>
          </div>
          <div className="panel panel--accent">
            <div className="eyebrow">Our mission</div>
            <p className="lead mb-0">{about.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Company strategy</div>
            <h2>What we stand for</h2>
          </div>
          <div className="values">
            {about.strategy.map((v) => (
              <div className="value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Facts">
        <div className="container">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Partners</div>
            <h2>Authorised partner of world-leading manufacturers</h2>
          </div>
          <ul className="chips">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white anchor" id="clients">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Clients</div>
            <h2>Who we work with</h2>
          </div>
          <div className="stack">
            {Object.entries(clients).map(([sector, list]) => (
              <div key={sector}>
                <h3>{sector}</h3>
                <div className="client-grid">
                  {list.map((c) => (
                    <div className="client-tile" key={c}>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's plan your next project together." button="Contact us" href="/contact/" />
    </>
  );
}
