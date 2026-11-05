export const COMPANY = {
  name: "Bozo Automobile",
  legalName: "BOZO Automobile",
  tagline: "Ehrlich und Fair",
  phone: "+41 79 577 25 47",
  phoneFormatted: "+41 79 577 25 47",
  phoneTel: "+41795772547",
  email: "info@bozoautomobile.ch",
  whatsappUrl: "https://wa.me/41795772547?text=Hallo%20Bozo%20Automobile,%20ich%20interessiere%20mich%20f%C3%BCr%20einen%20Service-Termin.",
  
  // Physical workshop location
  address: {
    street: "Wagistrasse 7",
    postalCode: "8952",
    city: "Schlieren",
    canton: "Zürich",
    country: "Schweiz",
    countryCode: "CH",
    fullAddress: "Wagistrasse 7, 8952 Schlieren, Schweiz",
  },

  // Historic / branch coverage
  serviceAreas: [
    "Schlieren",
    "Unterengstringen",
    "Oberengstringen",
    "Dietikon",
    "Urdorf",
    "Zürich Altstetten",
    "Zürich Höngg",
    "Limmattal",
  ],

  googleMapsUrl: "https://maps.app.goo.gl/PwejENDdj39QtVKf6",
  googleReviewUrl: "https://g.page/r/CaFCg49Zj1GoEAE/review",
  
  rating: {
    stars: 4.9,
    count: 120,
  },

  openingHours: {
    weekdays: "08:00 – 12:00 | 13:00 – 19:00",
    saturday: "08:30 – 14:00",
    sunday: "Geschlossen",
    schedule: [
      { days: "Montag – Freitag", hours: "08:00 – 12:00, 13:00 – 19:00" },
      { days: "Samstag", hours: "08:30 – 14:00" },
      { days: "Sonntag", hours: "Geschlossen" },
    ],
  },

  features: [
    "Kostenloses Ersatzfahrzeug / Ersatzvelo",
    "24 Monate Ersatzteilgarantie",
    "Herstellergarantie bleibt erhalten",
    "Markenunabhängig für alle Automarken",
    "Direktabrechnung mit allen Schweizer Versicherungen",
    "Modernste ADAS- & Diagnosetechnik",
  ],
};
