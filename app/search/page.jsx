import PageHero from "../../components/PageHero";
import Search from "../../components/Search";
import { buildIndex } from "../../lib/searchIndex";
import { meta } from "../../lib/site";

export const metadata = {
  ...meta({ title: "Search", description: "Search Sahara Group products, services, courses and pages.", path: "/search/" }),
  robots: { index: false },
};

export default function SearchPage() {
  return (
    <>
      <PageHero title="Search" crumbs={[{ label: "Search" }]} />
      <section className="section section--white">
        <div className="container">
          <Search index={buildIndex()} />
        </div>
      </section>
    </>
  );
}
