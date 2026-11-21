import Link from "next/link";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import { careers, company } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Careers",
  description: "Join Sahara Group's testing, commissioning and automation engineering teams in Cairo and Bratislava.",
  path: "/careers/",
});

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build a career in the field" intro={careers.intro} crumbs={[{ label: "Careers" }]} />
      <section className="section section--white">
        <div className="container">
          {careers.roles.length ? (
            <div className="grid grid-3">
              {careers.roles.map((r) => (
                <article className="card" key={r.title}>
                  <span className="tag">{r.type}</span>
                  <h3>{r.title}</h3>
                  <p>{r.location}</p>
                  <a className="link-arrow" href={`mailto:${company.email}?subject=${encodeURIComponent(`Application: ${r.title}`)}`}>
                    Apply →
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="panel panel--accent">
              <h2>No open roles right now</h2>
              <p className="lead">
                We are always glad to hear from protection, commissioning and automation engineers.
                Send your CV and the kind of work you are looking for.
              </p>
              <a className="btn btn--accent" href={`mailto:${company.email}?subject=Open%20application`}>
                Send your CV <span className="arrow">→</span>
              </a>
            </div>
          )}
        </div>
      </section>
      <CtaBand title="Questions about working with us?" button="Contact us" href="/contact/" />
    </>
  );
}
