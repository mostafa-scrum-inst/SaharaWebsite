import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import Icon from "../../components/Icon";
import { industries } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Industries We Serve",
  description:
    "Testing, automation and commissioning for power generation, substations, oil & gas, heavy industry, water and utilities, and food production.",
  path: "/industries/",
});

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we serve"
        intro="Our equipment and engineers work across the energy value chain, from generation and transmission to the plants that depend on them."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="section section--white">
        <div className="container grid grid-3">
          {industries.map((ind, i) => (
            <article className="industry" key={ind.title} style={{ minHeight: 360 }}>
              <Icon name={ind.icon} className="industry-art" />
              <div className="industry-body">
                <span className="num">0{i + 1}</span>
                <h3>{ind.title}</h3>
                <p>{ind.text}</p>
                <p style={{ marginTop: 12, fontSize: "0.88rem" }}>Clients include {ind.examples.join(", ")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
