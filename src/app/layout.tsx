import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  metadataBase: new URL("https://bozoautomobile.ch"),
  title: {
    default: "Bozo Automobile | Meisterwerkstatt in Schlieren & Limmattal",
    template: "%s | Bozo Automobile",
  },
  description:
    "Ihre markenunabhängige Meisterwerkstatt in Schlieren, Unterengstringen & Limmattal. MFK-Bereitstellung, Service, Bremsen, Reifen & ADAS-Diagnose. Ehrlich und Fair.",
  keywords: [
    "Garage Schlieren",
    "Garage Unterengstringen",
    "Autowerkstatt Limmattal",
    "MFK Vorbereitung Zürich",
    "Pneuwechsel Schlieren",
    "Karosserie Lackierung Zürich",
    "Bozo Automobile",
    "Car service Zurich",
    "Auto repair English Zurich",
  ],
  authors: [{ name: "Bozo Automobile" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    alternateLocale: "en_US",
    url: "https://bozoautomobile.ch",
    siteName: "Bozo Automobile",
    title: "Bozo Automobile | Meisterwerkstatt in Schlieren",
    description:
      "Professioneller Autoservice, MFK-Vorbereitung, Bremsen & Diagnose. Kostenloses Ersatzfahrzeug & 24 Monate Ersatzteilgarantie.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col bg-[#07080a] text-[#f9fbfc] antialiased selection:bg-[#f40101] selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
