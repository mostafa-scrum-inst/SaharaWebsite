import Link from "next/link";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import Icon from "../../components/Icon";
import { downloads, products } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "OMICRON, Rockwell Automation & Schneider Electric Products",
  description:
    "Authorised supply of OMICRON test sets (CPC 100, CPX 200, CMC 500, CIBANO 500), Allen-Bradley and Schneider Electric automation, and DILO SF6 equipment.",
  path: "/products/",
});

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Equipment from the world's leading makers"
        intro="Every product we supply comes with commissioning, training and local support."
        crumbs={[{ label: "Products" }]}
      />
      {Object.entries(products).map(([id, group], i) => (
        <section key={id} id={id} className={`section anchor ${i ? "section--alt" : "section--white"}`}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{group.brands.join(" · ")}</div>
              <h2>{group.title}</h2>
            </div>
            <ul className="chips">
              {group.brands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="grid grid-3">
              {group.families.map((f) => (
                <Link className="product" key={f.slug} href={`/products/${f.slug}/`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h3>{f.name}</h3>
                  <p>{f.text}</p>
                  <span className="link-arrow" style={{ display: "inline-block", marginTop: 12 }}>Details →</span>
                </Link>
              ))}
            </div>
            <p className="mt-l">
              <Link href="/contact/#quote" className="btn btn--accent">
                Ask for a datasheet or price <span className="arrow">→</span>
              </Link>
            </p>
          </div>
        </section>
      ))}

      {downloads.length ? (
        <section className="section section--white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Downloads</div>
              <h2>Datasheets and company profile</h2>
            </div>
            <div className="grid grid-3">
              {downloads.map((d) => (
                <a className="card" key={d.file} href={d.file} download style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card-icon">
                    <Icon name="download" />
                  </div>
                  <h3>{d.title}</h3>
                  <p className="mb-0">PDF · {d.size}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand title="Need a test set or a PLC upgrade? Get a quote within one working day." />
    </>
  );
}
