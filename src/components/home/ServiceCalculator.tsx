"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import {
  Car,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Zap,
} from "lucide-react";

interface ServicePackage {
  id: string;
  name: Record<Language, string>;
  duration: Record<Language, string>;
  basePrices: Record<string, number>;
  features: Record<Language, string[]>;
}

const PACKAGES: ServicePackage[] = [
  {
    id: "mfk-paket",
    name: {
      de: "MFK-Vollservice & Vorführung",
      en: "MFK Inspection Prep & Presentation",
      nl: "MFK/Keuring Prep & Officiële Aanbieding",
    },
    duration: {
      de: "ca. 2 – 4 Std.",
      en: "approx. 2 – 4 hrs",
      nl: "ca. 2 – 4 uur",
    },
    basePrices: {
      compact: 180,
      limousine: 210,
      suv: 240,
      electric: 195,
    },
    features: {
      de: [
        "Komplette Vorab-Prüfung auf dem Rollenprüfstand",
        "Scheinwerfer-Höhenjustierung per Laser",
        "Chassis- & Motorunterbodenwäsche (MFK-Pflicht)",
        "Persönliche Vorführung beim Strassenverkehrsamt Zürich/Dietikon",
        "Erfolgsgarantie: Kostenlose Nachkontrolle bei Bedarf",
      ],
      en: [
        "Full pre-inspection on chassis dynamometer test rig",
        "Laser precision headlight beam alignment",
        "Chassis & engine underbody wash (cantonal requirement)",
        "Official presentation at cantonal testing station",
        "Pass guarantee: Free re-inspection if required",
      ],
      nl: [
        "Volledige voorkeuring op de remmen- en chassisbank",
        "Nauwkeurige laserafstelling van de koplampen",
        "Chassis- en motorreiniging (keuringseis)",
        "Persoonlijke aanbieding bij het keuringsstation Zürich/Dietikon",
        "Slagingsgarantie: Kosteloze hercontrole indien vereist",
      ],
    },
  },
  {
    id: "kleiner-service",
    name: {
      de: "Kleiner Service (Jahreswartung)",
      en: "Minor Service (Annual Inspection)",
      nl: "Kleine Beurt (Jaarlijkse Inspectie)",
    },
    duration: {
      de: "ca. 2 Std.",
      en: "approx. 2 hrs",
      nl: "ca. 2 uur",
    },
    basePrices: {
      compact: 290,
      limousine: 340,
      suv: 390,
      electric: 220,
    },
    features: {
      de: [
        "Motorölwechsel mit Markenöl nach Herstellervorgabe",
        "Ölfilter- und Dichtungsersatz",
        "35-Punkte Sicherheits- & Sichtkontrolle",
        "Auffüllen aller Betriebsflüssigkeiten (Scheibenwischwasser, Frostschutz)",
        "Eintrag ins offizielle digitale Serviceheft",
      ],
      en: [
        "Engine oil flush with OEM-specified performance oil",
        "OEM oil filter and drain plug gasket replacement",
        "35-point safety and mechanical check",
        "Top-up of essential fluids (windshield wash, coolant)",
        "Official digital service booklet entry logged",
      ],
      nl: [
        "Motorolie verversen met merkolie conform fabrieksvoorschrift",
        "Olie- en afdichtingsfilter vervangen",
        "35-punts veiligheids- en zichtcontrole",
        "Bijvullen van ruitensproeier- en koelvloeistof",
        "Registratie in het officiële digitale onderhoudsboekje",
      ],
    },
  },
  {
    id: "grosser-service",
    name: {
      de: "Grosser Service (Hauptwartung)",
      en: "Major Service (Full Inspection)",
      nl: "Grote Beurt (Hoofdinspectie)",
    },
    duration: {
      de: "ca. 4 – 5 Std.",
      en: "approx. 4 – 5 hrs",
      nl: "ca. 4 – 5 uur",
    },
    basePrices: {
      compact: 490,
      limousine: 580,
      suv: 660,
      electric: 380,
    },
    features: {
      de: [
        "Alle Umfänge des kleinen Service",
        "Ersatz Luftfilter, Pollenfilter & Zündkerzen (sofern fällig)",
        "Bremsflüssigkeitswechsel & Siedepunktmessung",
        "Vollständige OBD-Fehlerspeicher-Diagnose aller Steuergeräte",
        "Kostenloser Ersatzwagen (0 CHF) für den gesamten Tag",
      ],
      en: [
        "All line items included in the Minor Service",
        "Replacement of engine air filter, cabin pollen filter & spark plugs",
        "Brake fluid flush with boiling point test",
        "Comprehensive OBD electronics bus diagnostic readout",
        "Complimentary replacement car (0 CHF) for the entire turnaround",
      ],
      nl: [
        "Alle werkzaamheden van de kleine beurt",
        "Vervanging luchtfilter, interieurfilter & bougies",
        "Remvloeistof verversen & kookpunttest",
        "Volledige OBD-uitlezing van alle regelapparaten",
        "Gratis leenauto (0 CHF) voor de hele dag",
      ],
    },
  },
  {
    id: "klima-wartung",
    name: {
      de: "Klimaservice & Desinfektion",
      en: "Air Conditioning Service & Purge",
      nl: "Aircoservice & Desinfectie",
    },
    duration: {
      de: "ca. 1 Std.",
      en: "approx. 1 hr",
      nl: "ca. 1 uur",
    },
    basePrices: {
      compact: 140,
      limousine: 160,
      suv: 180,
      electric: 160,
    },
    features: {
      de: [
        "Kältemittel absaugen, wiegen, reinigen und nachfüllen",
        "Dichtheitsprüfung des gesamten Klimasystems",
        "Ultraschall- oder Ozon-Desinfektion gegen Bakterien & Gerüche",
        "Prüfung der Kälteleistung und Ausblastemperatur",
      ],
      en: [
        "Evacuation, recycling, moisture purge and refrigerant recharge",
        "Vacuum pressure decay leak testing",
        "Ultrasonic antibacterial cabin duct disinfection",
        "Temperature drop & cabin blower performance verification",
      ],
      nl: [
        "Koudemiddel afzuigen, filteren, vacumeren en afvullen",
        "Dichtheidstest van het complete aircosysteem",
        "Antibacteriële ozon-reiniging tegen geuren en bacteriën",
        "Temperatuur- en uitblaascapaciteitstest",
      ],
    },
  },
];

interface VehicleClassItem {
  id: string;
  label: Record<Language, string>;
  eg: string;
}

const VEHICLE_CLASSES: VehicleClassItem[] = [
  {
    id: "compact",
    label: {
      de: "Kleinwagen",
      en: "Compact Car",
      nl: "Compacte Auto",
    },
    eg: "z.B. Polo, Yaris, i20",
  },
  {
    id: "limousine",
    label: {
      de: "Limousine / Kombi",
      en: "Sedan / Estate",
      nl: "Sedan / Station",
    },
    eg: "z.B. Golf, Octavia, 3er",
  },
  {
    id: "suv",
    label: {
      de: "SUV / 4x4",
      en: "SUV / Crossover",
      nl: "SUV / Crossover",
    },
    eg: "z.B. Tiguan, X3, Macan",
  },
  {
    id: "electric",
    label: {
      de: "Elektro / Hybrid",
      en: "Electric / Hybrid",
      nl: "Elektrisch / Hybride",
    },
    eg: "z.B. Tesla, ID.4, Ioniq",
  },
];

export default function ServiceCalculator() {
  const { language, t } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<string>("limousine");
  const [selectedPackageId, setSelectedPackageId] = useState<string>("mfk-paket");

  const currentPackage =
    PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];
  const price = currentPackage.basePrices[selectedVehicle] || 195;

  return (
    <section className="relative py-24 lg:py-36 bg-[#07080a] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Ambient Laser */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-gradient-to-tr from-[#1c86ee]/5 via-[#9932cc]/5 to-[#f40101]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-3">
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
              {t.calculator.title} <br />
              <span className="text-[#9ca3af]">{t.calculator.estimatedCost}</span>
            </h2>
          </div>
          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Selection Columns (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Vehicle Class */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                  {t.calculator.selectVehicle}
                </span>
                <Car className="w-4 h-4 text-[#1c86ee]" strokeWidth={1.5} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {VEHICLE_CLASSES.map((v) => {
                  const isSelected = selectedVehicle === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-white/[0.1] border-[#1c86ee]/40 text-white shadow-lg shadow-black/40 ring-1 ring-[#1c86ee]/30"
                          : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af] hover:text-white hover:bg-white/[0.04] hover:border-white/[0.1]"
                      }`}
                    >
                      <span className="font-sans-ui text-xs font-semibold block text-white mb-0.5">
                        {v.label[language]}
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#6b7280] block truncate">
                        {v.eg}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Package Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                  {t.calculator.selectPackage}
                </span>
                <Zap className="w-4 h-4 text-[#f40101]" strokeWidth={1.5} />
              </div>

              <div className="space-y-3">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  const pkgPrice = pkg.basePrices[selectedVehicle];
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`w-full p-4 sm:p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer group ${
                        isSelected
                          ? "bg-white/[0.08] border-[#1c86ee] shadow-xl shadow-blue-950/20 ring-1 ring-[#1c86ee]/40"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]"
                      }`}
                    >
                      <div className="space-y-1 pr-4">
                        <span className="font-display text-lg font-bold text-white block">
                          {pkg.name[language]}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#9ca3af]">
                          <Clock className="w-3.5 h-3.5 text-[#1c86ee]" strokeWidth={1.5} />
                          <span>{t.calculator.duration}: {pkg.duration[language]}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-mono-tech uppercase text-[#6b7280] block">
                          {t.calculator.fromPrice}
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-bold text-white block">
                          CHF {pkgPrice}.–
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary CNC Voucher (5 cols) */}
          <div className="lg:col-span-5">
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#1c86ee] font-bold block">
                      {t.calculator.estimatedCost}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {currentPackage.name[language]}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-4xl font-bold text-white block leading-none">
                      CHF {price}.–
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#9ca3af] block mt-1">
                      inkl. MwSt. / incl. VAT / incl. BTW
                    </span>
                  </div>
                </div>

                {/* Scope Feature List */}
                <div className="space-y-3">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[#9ca3af] block">
                    {t.services.includedBenefits}:
                  </span>
                  <ul className="space-y-2.5">
                    {currentPackage.features[language].map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-mono-tech text-[#d1d5db] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Guarantee Note */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono-tech text-[#9ca3af] space-y-1">
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#1c86ee]" strokeWidth={1.5} />
                    <span>{t.valueProps.props[0].title}:</span>
                  </div>
                  <p className="text-[11px] text-[#6b7280] leading-relaxed">
                    {t.valueProps.props[0].description}
                  </p>
                </div>

                {/* Primary Island Button-in-Button Action */}
                <Link
                  href={`/termin-buchen?service=${currentPackage.id}&vehicle=${selectedVehicle}&price=${price}`}
                  className="btn-island w-full justify-center !py-3.5"
                >
                  <span>{t.calculator.bookPackage}</span>
                  <span className="btn-island-icon">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </Link>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
