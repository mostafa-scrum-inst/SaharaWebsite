import { company } from "./content";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://saharagroup.org").replace(/\/$/, "");
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const pages = [
  "/", "/about/", "/solutions/", "/products/", "/training/", "/industries/",
  "/projects/", "/news/", "/careers/", "/contact/", "/privacy/",
];

export function meta({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: company.name, type: "website" },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: SITE_URL,
  email: company.email,
  description:
    "Distributor and service provider for measuring, testing, automation and commissioning in power and oil & gas.",
  department: company.offices.map((o) => ({
    "@type": "LocalBusiness",
    name: `${company.name} – ${o.city}`,
    email: o.email,
    telephone: o.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: o.address[0],
      addressLocality: o.id === "cairo" ? "Cairo" : "Bratislava",
      postalCode: o.id === "cairo" ? "4470421" : "831 01",
      addressCountry: o.id === "cairo" ? "EG" : "SK",
    },
  })),
};
