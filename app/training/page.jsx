import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import Icon from "../../components/Icon";
import ContactForm from "../../components/ContactForm";
import { courseDates, training } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "OMICRON Certified Training Courses in Egypt",
  description:
    "Hands-on OMICRON Certified Training Partner courses on CMC 356, CPC 100, CIBANO 500, CT Analyzer, COMPANO 100 and TD1, plus PLC and SCADA training.",
  path: "/training/",
});

export default function Training() {
  return (
    <>
      <PageHero
        eyebrow="Training academy"
        title="OMICRON certified training courses"
        intro="Knowledge goes out of date faster every year. Our hands-on courses keep engineers current on the equipment they use every day."
        crumbs={[{ label: "Training" }]}
      />

      <section className="section section--white">
        <div className="container">
          <div className="panel panel--accent credential">
            <Icon name="shield" className="seal" />
            <div>
              <div className="eyebrow">Credential</div>
              <h2 style={{ marginBottom: 8 }}>{training.credential}</h2>
              <p className="lead mb-0">
                Sahara Group is certified by the OMICRON Academy to deliver training on the courses
                below, taught by our own engineers on real equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Power testing courses</div>
            <h2>Certified OMICRON courses</h2>
          </div>
          <div className="grid grid-3">
            {training.courses.map((c) => (
              <article className="product" key={c.code}>
                <h3>{c.code}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
          <div className="section-head mt-l" style={{ marginBottom: 24 }}>
            <h3>Automation courses</h3>
          </div>
          <ul className="checklist">
            {training.automation.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <div className="eyebrow">Calendar</div>
            <h2>Upcoming courses</h2>
            {courseDates.length ? (
              <div className="stack">
                {courseDates.map((d) => (
                  <div className="product" key={d.course + d.date}>
                    <h3>{d.course}</h3>
                    <p>
                      <time dateTime={d.date}>{new Date(d.date).toDateString()}</time> · {d.city} ·{" "}
                      {d.seats} seats
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="lead">
                Courses are scheduled on request, in Cairo or at your site. Tell us which course,
                how many trainees and your preferred dates.
              </p>
            )}
          </div>
          <div className="panel" id="request">
            <h3>Request a course</h3>
            <ContactForm defaultInterest="Training course" />
          </div>
        </div>
      </section>

      <CtaBand title="Train your team on the equipment they use every day." button="Request a course" href="/training/#request" />
    </>
  );
}
