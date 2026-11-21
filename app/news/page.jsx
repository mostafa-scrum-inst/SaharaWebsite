import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import { news } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "News & Events",
  description: "Product launches, certifications, seminars and exhibitions from Sahara Group.",
  path: "/news/",
});

const fmt = (d) =>
  new Date(`${d}-01T00:00:00Z`).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News & events"
        title="News and events"
        intro="Recent and past news, from product launches and certifications to seminars and exhibitions."
        crumbs={[{ label: "News" }]}
      />
      <section className="section section--white">
        <div className="container grid grid-3">
          {news.map((n) => (
            <article className="card news-card" key={n.title}>
              <span className="tag">{n.tag}</span>
              <time dateTime={n.date}>{fmt(n.date)}</time>
              <h3 style={{ marginTop: 8 }}>{n.title}</h3>
              <p className="mb-0">{n.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
