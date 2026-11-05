import { COMPANY } from "@/data/company";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://bozoautomobile.ch/#organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: "https://bozoautomobile.ch",
    logo: "https://bozoautomobile.ch/bozo-logo.svg",
    image: "https://bozoautomobile.ch/assets/car-repair-03.jpg",
    description:
      "Bozo Automobile ist die führende markenunabhängige Meisterwerkstatt in Schlieren und Unterengstringen (Limmattal/Zürich). Service, Reparaturen, MFK-Vorbereitung, Karosserie & Lack, ADAS und Tuning.",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      postalCode: COMPANY.address.postalCode,
      addressRegion: COMPANY.address.canton,
      addressCountry: COMPANY.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.3995,
      longitude: 8.4485,
    },
    areaServed: COMPANY.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating.stars.toString(),
      reviewCount: COMPANY.rating.count.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "14:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
