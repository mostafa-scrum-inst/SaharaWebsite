import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";
import MapEmbed from "../../components/MapEmbed";
import { company } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Contact Us & Request a Quote",
  description:
    "Contact Sahara Group in Cairo (+20 2 2774 4049) or Bratislava (+421 903 850 724), or request a quote for testing equipment, automation or training.",
  path: "/contact/",
});

const tel = (p) => `tel:${p.replace(/\s/g, "")}`;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact us and request a quote"
        intro="Tell us what you need and an engineer will reply within one working day."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section section--white anchor" id="quote">
        <div className="container grid grid-2" style={{ alignItems: "start" }}>
          <div className="panel">
            <h2 style={{ fontSize: "1.8rem" }}>Send us an enquiry</h2>
            <ContactForm />
          </div>
          <div className="stack">
            {company.offices.map((o) => (
              <div className="panel office" key={o.id}>
                <h3>{o.city}</h3>
                <span className="region">{o.region}</span>
                <dl>
                  <dt>Address</dt>
                  <dd>{o.address.join(", ")}</dd>
                  <dt>Phone</dt>
                  <dd>
                    {o.phones.map((p) => (
                      <div key={p}>
                        <a href={tel(p)}>{p}</a>
                      </div>
                    ))}
                  </dd>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${o.email}`}>{o.email}</a>
                  </dd>
                </dl>
                <MapEmbed query={o.mapQuery} label={o.city} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
