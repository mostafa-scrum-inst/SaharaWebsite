import PageHero from "../../components/PageHero";
import { company } from "../../lib/content";
import { meta } from "../../lib/site";

export const metadata = meta({
  title: "Privacy Notice",
  description: "How Sahara Group handles personal data sent through this website.",
  path: "/privacy/",
});

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy notice" crumbs={[{ label: "Privacy" }]} />
      <section className="section section--white">
        <div className="container" style={{ maxWidth: 780 }}>
          <p className="lead">
            This notice explains what we do with the information you send us through this website.
            It should be reviewed by Sahara Group before launch.
          </p>
          <h2>What we collect</h2>
          <p>
            When you use the contact or course request form we receive your name, company, email,
            phone number and message. We use these only to answer your enquiry.
          </p>
          <h2>Analytics cookies</h2>
          <p>
            If you accept analytics cookies, we use Google Analytics to understand how the site is
            used. You can decline, and the site works the same.
          </p>
          <h2>Contact</h2>
          <p>
            For any question about your data, email <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
