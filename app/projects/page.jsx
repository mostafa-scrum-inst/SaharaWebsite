import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import { caseStudies, clients } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Projects & Case Studies",
  description:
    "Selected testing, commissioning and automation projects delivered by Sahara Group for power, oil & gas and industrial clients.",
  path: "/projects/",
});

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects and case studies"
        intro="A selection of the testing, commissioning and automation work our engineers have delivered."
        crumbs={[{ label: "Projects" }]}
      />
      <section className="section section--white">
        <div className="container">
          {caseStudies.length ? (
            <div className="grid grid-3">
              {caseStudies.map((c) => (
                <article className="card" key={c.title}>
                  <span className="tag">{c.sector}</span>
                  <h3>{c.title}</h3>
                  <p>
                    <strong>Client:</strong> {c.client}
                  </p>
                  <p>
                    <strong>Scope:</strong> {c.scope}
                  </p>
                  <p className="mb-0">
                    <strong>Result:</strong> {c.result}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="panel panel--accent">
              <h2>Case studies are on the way</h2>
              <p className="lead mb-0">
                We are preparing detailed project write-ups. In the meantime, here are the sectors
                we deliver in and some of the clients we work with.
              </p>
            </div>
          )}
          <div className="grid grid-4 mt-l">
            {Object.entries(clients).map(([sector, list]) => (
              <div className="value" key={sector}>
                <h3>{sector}</h3>
                <p>{list.slice(0, 6).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
