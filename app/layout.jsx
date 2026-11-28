import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Floating from "../components/Floating";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Analytics from "../components/Analytics";
import JsonLd from "../components/JsonLd";
import { DEFAULT_THEME, SHOW_SWITCHER, THEMES, themeBootScript } from "../lib/themes";
import Motion from "../components/Motion";
import { SITE_URL, organizationLd } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sahara Group | Testing, Automation & Commissioning for Power and Oil & Gas",
    template: "%s | Sahara Group",
  },
  description:
    "Sahara Group supplies and services OMICRON, Rockwell Automation, Schneider Electric and DILO equipment, with testing, commissioning and certified training from Cairo and Bratislava.",
};

export const viewport = { themeColor: "#141762", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <noscript>
          <link rel="stylesheet" href={THEMES.find((t) => t.id === DEFAULT_THEME).fonts} />
        </noscript>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
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
        <Motion />
      </body>
    </html>
  );
}
