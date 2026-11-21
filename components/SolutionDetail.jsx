import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import Media from "./Media";
import CtaBand from "./CtaBand";
import { industries, products, solutions } from "../lib/content";

export default function SolutionDetail({ id, title, intro }) {
  const s = solutions.find((x) => x.id === id);
  const group = products[id];
  return (
    <>
      <PageHero
        eyebrow={s.title}
        title={title}
        intro={intro}
        crumbs={[{ label: "Solutions", href: "/solutions/" }, { label: s.title }]}
      />
      <section className="section section--white">
        <div className="container grid grid-2">
          <div>
            <div className="card-icon">
              <Icon name={s.icon} />
            </div>
            <h2>What we deliver</h2>
            <p className="lead">{s.intro}</p>
            <ul className="checklist" style={{ margin: "24px 0 32px" }}>
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <Link href="/contact/#quote" className="btn btn--accent">
              {id === "power" ? "Plan a test campaign" : "Request an automation quote"}{" "}
              <span className="arrow">→</span>
            </Link>
          </div>
          <Media
            kind={id === "power" ? "substation" : "panel"}
            caption={id === "power" ? "Testing with OMICRON equipment" : "Control panel integration"}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{group.brands.join(" · ")}</div>
            <h2>Equipment we supply and service</h2>
          </div>
          <div className="grid grid-3">
            {group.families.map((f) => (
              <Link className="product" key={f.slug} href={`/products/${f.slug}/`} style={{ textDecoration: "none", color: "inherit" }}>
                <h3>{f.name}</h3>
                <p>{f.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Where we work</div>
            <h2>Industries</h2>
          </div>
          <ul className="chips">
            {industries.map((i) => (
              <li key={i.title}>{i.title}</li>
            ))}
          </ul>
          <Link className="link-arrow" href="/industries/">
            See industries we serve →
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
