import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Floating from "../components/Floating";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Analytics from "../components/Analytics";
import JsonLd from "../components/JsonLd";
import { DEFAULT_THEME, SHOW_SWITCHER, themeBootScript } from "../lib/themes";
import { SITE_URL, organizationLd } from "../lib/site";

// All three directions' fonts load while the switcher is on. Once a direction
// is chosen, keep only its families here (or self-host them with next/font).
const FONTS =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600&family=Archivo:wght@600;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Sora:wght@600;700&family=Source+Sans+3:wght@400;600&display=swap";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sahara Group | Testing, Automation & Commissioning for Power and Oil & Gas",
    template: "%s | Sahara Group",
  },
  description:
    "Sahara Group supplies and services OMICRON, Rockwell Automation, Schneider Electric and DILO equipment, with testing, commissioning and certified training from Cairo and Bratislava.",
};

export const viewport = { themeColor: "#0D2440", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
        <JsonLd data={organizationLd} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Floating />
        {SHOW_SWITCHER ? <ThemeSwitcher /> : null}
        <Analytics />
      </body>
    </html>
  );
}
