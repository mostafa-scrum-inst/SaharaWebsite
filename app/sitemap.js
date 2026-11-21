import { SITE_URL, pages } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
