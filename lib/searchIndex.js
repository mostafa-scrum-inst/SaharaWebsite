import { about, clients, industries, news, products, solutions, training } from "./content";

// Built at compile time from content.js, so search always matches the site.
export function buildIndex() {
  const items = [
    { type: "Page", title: "About us", href: "/about/", text: `${about.who} ${about.vision} ${about.mission}` },
    { type: "Page", title: "Solutions", href: "/solutions/", text: solutions.map((s) => s.short).join(" ") },
    { type: "Page", title: "Products", href: "/products/", text: Object.values(products).map((g) => g.brands.join(" ")).join(" ") },
    { type: "Page", title: "Training", href: "/training/", text: `${training.credential} ${training.courses.map((c) => c.code).join(" ")} ${training.automation.join(" ")}` },
    { type: "Page", title: "Industries", href: "/industries/", text: industries.map((i) => `${i.title} ${i.text}`).join(" ") },
    { type: "Page", title: "Clients", href: "/about/#clients", text: Object.values(clients).flat().join(" ") },
    { type: "Page", title: "Projects", href: "/projects/", text: "case studies projects" },
    { type: "Page", title: "Careers", href: "/careers/", text: "jobs careers engineers vacancies CV" },
    { type: "Page", title: "Contact & quote", href: "/contact/", text: "contact quote phone email address Cairo Bratislava WhatsApp" },
    { type: "Service", title: "Automation & SCADA", href: "/solutions/automation/", text: solutions[0].items.join(" ") },
    { type: "Service", title: "Power testing & commissioning", href: "/solutions/power/", text: solutions[1].items.join(" ") },
  ];
  Object.values(products).forEach((g) =>
    g.families.forEach((f) =>
      items.push({ type: "Product", title: f.name, href: `/products/${f.slug}/`, text: `${f.brand} ${f.text} ${f.uses.join(" ")}` })
    )
  );
  training.courses.forEach((c) =>
    items.push({ type: "Course", title: `${c.code} course`, href: "/training/", text: c.text })
  );
  news.forEach((n) => items.push({ type: "News", title: n.title, href: "/news/", text: n.text }));
  return items;
}
