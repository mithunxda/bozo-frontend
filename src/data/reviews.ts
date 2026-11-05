import type { Language } from "./translations";

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: Record<Language, string>;
  vehicle: string;
  comment: Record<Language, string>;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Mefat S.",
    location: "Schlieren",
    rating: 5,
    date: {
      de: "Vor 2 Monaten",
      en: "2 months ago",
      nl: "2 maanden geleden",
    },
    vehicle: "BMW 5er",
    comment: {
      de: "Service professionell und unkompliziert, mein Auto läuft gut wie schon seit Jahren nicht mehr. Sehr faire Preise und transparente Beratung. Komme definitiv wieder!",
      en: "Professional and straightforward service, my car runs smoother than it has in years. Very fair pricing and transparent consultation. Definitely coming back!",
      nl: "Professionele en ongecompliceerde service, mijn auto rijdt beter dan in jaren. Zeer eerlijke prijzen en deskundig advies. Ik kom absoluut terug!",
    },
  },
  {
    id: "rev-2",
    author: "Cuzim H.",
    location: "Unterengstringen",
    rating: 5,
    date: {
      de: "Vor 4 Monaten",
      en: "4 months ago",
      nl: "4 maanden geleden",
    },
    vehicle: "Audi A6 Avant",
    comment: {
      de: "Hat mein Auto schnell und unkompliziert repariert. Service war top und sehr professionell, Preis-Leistung ist einfach da und ich komme sicher wieder.",
      en: "Repaired my car swiftly and without any fuss. Top-notch service, true professional craftsmanship, great value for money and will definitely return!",
      nl: "Heeft mijn auto snel en vakkundig gerepareerd. Service was top en zeer professioneel, uitstekende prijs-kwaliteitverhouding en ik kom zeker terug.",
    },
  },
  {
    id: "rev-3",
    author: "Sandro B.",
    location: "Dietikon",
    rating: 5,
    date: {
      de: "Vor 1 Monat",
      en: "1 month ago",
      nl: "1 maand geleden",
    },
    vehicle: "VW Golf R",
    comment: {
      de: "Habe mein KW Gewindefahrwerk hier einbauen und direkt bei der MFK eintragen lassen. Perfekt abgestimmt, keine Geräusche, sauberste Arbeit! Grosses Kompliment an das ganze Team.",
      en: "Had my KW coilover suspension fitted and official MFK endorsement handled here. Perfectly dialed in, zero noise, immaculate workmanship! Kudos to the team.",
      nl: "Mijn KW-schroefset hier laten monteren en direct officieel laten keuren. Perfect afgesteld, geen bijgeluiden, uiterst zuiver werk! Complimenten aan het hele team.",
    },
  },
  {
    id: "rev-4",
    author: "Elena M.",
    location: "Zürich Altstetten",
    rating: 5,
    date: {
      de: "Vor 3 Wochen",
      en: "3 weeks ago",
      nl: "3 weken geleden",
    },
    vehicle: "Mercedes-Benz CLA",
    comment: {
      de: "Nach einem Parkschaden wurde die Türe und der Kotflügel neu lackiert. Man sieht absolut keinen Farbunterschied! Ersatzwagen stand pünktlich bereit. Herzlichen Dank!",
      en: "Repaired and repainted my door and fender after a parking lot scratch. Absolutely exact color match! Free replacement car was ready on time. Thank you!",
      nl: "Na een parkeerschade zijn het portier en spatscherm opnieuw gespoten. Je ziet werkelijk geen enkel kleurverschil! Leenauto stond stipt klaar. Hartelijk dank!",
    },
  },
  {
    id: "rev-5",
    author: "Marco W.",
    location: "Urdorf",
    rating: 5,
    date: {
      de: "Vor 5 Monaten",
      en: "5 months ago",
      nl: "5 maanden geleden",
    },
    vehicle: "Skoda Octavia RS",
    comment: {
      de: "MFK Vorbereitung und Vorführung ohne einen einzigen Mangel bestanden. Motorwäsche und Unterboden waren blitzblank. So muss eine Werkstatt arbeiten!",
      en: "MFK preparation and official inspection passed with zero defects. Engine and underbody wash were spotless. This is how a master garage should operate!",
      nl: "Keuringsvoorbereiding en officiële keuring zonder één enkel minpunt geslaagd. Motorreiniging en onderkant waren kraakhelder. Zo hoort een garage te werken!",
    },
  },
];
