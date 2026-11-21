import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../../components/PageHero";
import CtaBand from "../../../components/CtaBand";
import Media from "../../../components/Media";
import { products, training } from "../../../lib/content";
import { meta } from "../../../lib/site";

const all = Object.entries(products).flatMap(([group, g]) =>
  g.families.map((f) => ({ ...f, group, groupTitle: g.title }))
);

export const dynamicParams = false;

export function generateStaticParams() {
  return all.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const f = all.find((x) => x.slug === slug);
  if (!f) return {};
  return meta({
    title: `${f.name} | ${f.brand}`,
    description: `${f.text} Supply, commissioning, training and support in Egypt and Europe from Sahara Group.`,
    path: `/products/${f.slug}/`,
  });
}

export default async function Product({ params }) {
  const { slug } = await params;
  const f = all.find((x) => x.slug === slug);
  if (!f) notFound();
  const course = f.course && training.courses.find((c) => c.code === f.course);
  const related = all.filter((x) => x.group === f.group && x.slug !== f.slug).slice(0, 3);
  const service = f.group === "power" ? "/solutions/power/" : "/solutions/automation/";

  return (
    <>
      <PageHero
        eyebrow={f.brand}
        title={f.name}
        intro={f.text}
        crumbs={[
          { label: "Products", href: "/products/" },
          { label: f.groupTitle, href: `/products/#${f.group}` },
          { label: f.name },
        ]}
      />
      <section className="section section--white">
        <div className="container grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2>Typical applications</h2>
            <ul className="checklist" style={{ margin: "16px 0 32px" }}>
              {f.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <h2>What you get from Sahara Group</h2>
            <ul className="checklist" style={{ margin: "16px 0 32px" }}>
              <li>Original equipment as an authorised partner</li>
              <li>Delivery, set-up and commissioning on site</li>
              <li>Hands-on training for your engineers</li>
              <li>Local after-sales support from Cairo and Bratislava</li>
            </ul>
            <div className="hero-actions">
              <Link href="/contact/#quote" className="btn btn--accent">
                Ask for a price or datasheet <span className="arrow">→</span>
              </Link>
              <Link href={service} className="btn btn--ghost">
                Related services
              </Link>
            </div>
          </div>
          <div className="stack">
            <Media kind={f.group === "power" ? "substation" : "panel"} caption={`${f.name} in use`} />
            {course ? (
              <div className="panel panel--accent">
                <div className="eyebrow">Certified training</div>
                <h3>{course.code} course</h3>
                <p>{course.text}</p>
                <Link className="link-arrow" href="/training/#request">
                  Request this course →
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2>Related products</h2>
          </div>
          <div className="grid grid-3">
            {related.map((r) => (
              <Link className="product" key={r.slug} href={`/products/${r.slug}/`} style={{ textDecoration: "none", color: "inherit" }}>
                <h3>{r.name}</h3>
                <p>{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Need ${f.name}? Get a quote within one working day.`} />
    </>
  );
}
