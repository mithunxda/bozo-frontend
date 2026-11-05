import type { Language } from "./translations";

export interface ServiceItem {
  id: string;
  slug: string;
  iconName: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullDescription: Record<Language, string>;
  highlights: Record<Language, string[]>;
  processSteps: Record<Language, { title: string; desc: string }[]>;
  typicalDuration: Record<Language, string>;
  priceIndication: Record<Language, string>;
  faqs: Record<Language, { q: string; a: string }[]>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "service-reparatur",
    slug: "service-reparatur",
    iconName: "Wrench",
    title: {
      de: "Service und Reparatur",
      en: "Service and Repair",
      nl: "Onderhoud en Reparatie",
    },
    shortDescription: {
      de: "Inspektion, Ölwechsel, Bremsenservice & MFK-Bereitstellung nach strengen Herstellervorgaben für alle Marken.",
      en: "Inspection, oil changes, brake service & official MFK prep compliant with strict OEM standards for all makes.",
      nl: "Inspectie, olieverversing, remmenservice & keuringsklaar maken conform strikte fabrieksvoorschriften voor alle automerken.",
    },
    fullDescription: {
      de: "Regelmässige Wartung garantiert die Zuverlässigkeit, Langlebigkeit und den Werterhalt Ihres Fahrzeugs. Bei Bozo Automobile führen wir sämtliche Servicearbeiten nach offiziellen Herstellervorgaben durch, sodass Ihre Werksgarantie zu 100% erhalten bleibt. Von Bremsen und Fahrwerk über Zahnriemen- und Getriebeölwechsel bis hin zur sorgfältigen MFK-Vorbereitung samt Vorführung beim Strassenverkehrsamt.",
      en: "Routine maintenance preserves your car's safety, longevity, and resale value. At Bozo Automobile, all service work follows strict manufacturer guidelines, ensuring your factory warranty remains 100% valid. From brake systems and suspension to timing belts, gearbox flushes, and full Swiss MFK vehicle inspection preparation.",
      nl: "Regelmatig onderhoud garandeert betrouwbaarheid, een lange levensduur en waardebehoud van uw auto. Bij Bozo Automobile voeren we alle onderhoudswerkzaamheden uit volgens officiële fabrieksvoorschriften, zodat uw fabrieksgarantie 100% behouden blijft. Van remmen en onderstel tot distributieriem- en versnellingsbakolieverversing en volledige keuringsvoorbereiding inclusief aanbieding bij het keuringsstation.",
    },
    highlights: {
      de: [
        "Voller Erhalt der Herstellergarantie",
        "Eintragung in digitales Serviceheft aller Marken",
        "Umfassender 50-Punkte Sicherheits-Check",
        "MFK-Bereitstellung inkl. Motor-/Unterbodenwäsche",
        "Kostenloses Ersatzfahrzeug oder E-Bike",
      ],
      en: [
        "100% Manufacturer Warranty Retention",
        "Digital service book entry for all vehicle brands",
        "Comprehensive 50-point vehicle safety inspection",
        "Official MFK prep including engine/chassis steam clean",
        "Free replacement car or e-bike provided",
      ],
      nl: [
        "100% Behoud van de officiële fabrieksgarantie",
        "Registratie in digitaal onderhoudsboekje van alle merken",
        "Uitgebreide 50-punts veiligheidsinspectie",
        "Keuringsvoorbereiding inclusief motor- en chassisreiniging",
        "Gratis leenauto of werkplaats e-bike ter beschikking",
      ],
    },
    processSteps: {
      de: [
        { title: "1. Dialogannahme", desc: "Gemeinsame Begutachtung auf der Hebebühne und Besprechung aller Arbeiten." },
        { title: "2. Transparenter Voranschlag", desc: "Verbindliche Offerte ohne verdeckte Kosten." },
        { title: "3. Fachmännische Ausführung", desc: "Einsatz modernster Spezialwerkzeuge und OEM-Ersatzteile." },
        { title: "4. Probefahrt & Übergabe", desc: "Qualitätsendkontrolle, Probefahrt und detaillierte Rechnungserklärung." },
      ],
      en: [
        { title: "1. Check-In Dialog", desc: "Joint inspection on the vehicle lift to review all requirements." },
        { title: "2. Transparent Estimate", desc: "Binding cost quotation with zero hidden charges." },
        { title: "3. Precision Work", desc: "Carried out with specialized tools and genuine/OEM components." },
        { title: "4. Road Test & Handover", desc: "Final quality check, test drive, and clear invoice walkthrough." },
      ],
      nl: [
        { title: "1. Intake & Inspectie", desc: "Gezamenlijke inspectie op de hefbrug en bespreking van de werkzaamheden." },
        { title: "2. Transparante Offerte", desc: "Bindende prijsopgave zonder verborgen meerkosten." },
        { title: "3. Vakkundige Uitvoering", desc: "Uitgevoerd met speciaal gereedschap en originele OEM-onderdelen." },
        { title: "4. Proefrit & Oplevering", desc: "Kwaliteitscontrole, proefrit en heldere toelichting op de factuur." },
      ],
    },
    typicalDuration: {
      de: "2 – 6 Stunden (Tagesabgabe)",
      en: "2 – 6 hours (Same-day pickup)",
      nl: "2 – 6 uur (dezelfde dag weer klaar)",
    },
    priceIndication: {
      de: "Kleiner Service ab CHF 290.– | MFK-Check ab CHF 180.–",
      en: "Minor service from CHF 290.– | MFK prep from CHF 180.–",
      nl: "Kleine beurt vanaf CHF 290.– | Keuringscheck vanaf CHF 180.–",
    },
    faqs: {
      de: [
        {
          q: "Bleibt meine Herstellergarantie erhalten?",
          a: "Ja, absolut. Nach Schweizer und EU-Recht (GVO) bleibt die volle Herstellergarantie erhalten, wenn die Wartung fachgerecht nach Herstellervorgaben erfolgt.",
        },
        {
          q: "Führen Sie mein Auto auch beim Strassenverkehrsamt vor?",
          a: "Ja, sehr gerne! Wir übernehmen die Vorbereitung, Mängelbeseitigung und fahren Ihr Auto direkt zum MFK-Prüftermin in Albisgütli, Regensdorf oder Winterthur.",
        },
      ],
      en: [
        {
          q: "Does my factory warranty remain valid?",
          a: "Yes, 100%. Under Swiss and European block exemption regulations, independent garages are authorized to perform servicing while preserving full factory warranty.",
        },
        {
          q: "Can you present my car to the official MFK inspection?",
          a: "Yes! We inspect, wash, rectify any issues, and present the car directly to the official cantonal inspection center.",
        },
      ],
      nl: [
        {
          q: "Blijft mijn fabrieksgarantie geldig?",
          a: "Ja, absoluut. Volgens Europese en Zwitserse regelgeving blijft de volledige fabrieksgarantie behouden bij onderhoud volgens fabrieksspecificaties.",
        },
        {
          q: "Bieden jullie de auto ook aan bij de officiële keuring?",
          a: "Ja, heel graag! Wij controleren, reinigen, verhelpen eventuele punten en rijden uw auto direct naar de officiële keuring.",
        },
      ],
    },
  },
  {
    id: "karosserie-lackierung",
    slug: "karosserie-lackierung",
    iconName: "ShieldAlert",
    title: {
      de: "Karosserie und Lackierung",
      en: "Bodywork and Paintwork",
      nl: "Carrosserie en Spuitwerk",
    },
    shortDescription: {
      de: "Professionelle Unfallinstandsetzung, sanftes Ausbeulen (Drücktechnik) und brillante Lackierungen.",
      en: "Expert collision repair, paintless dent removal (PDR), and flawless automotive spray painting.",
      nl: "Professioneel schadeherstel, uitdeuken zonder spuiten en vakkundig autospuitwerk.",
    },
    fullDescription: {
      de: "Ein Parkschaden, Steinschlag oder Unfall ist ärgerlich – wir machen ihn ungeschehen. Unsere Karosserie- und Lackierspezialisten beherrschen modernste Richt- und Lackiertechniken. Wo möglich, wenden wir das lackschadenfreie Ausbeulen (PDR) an, um Originalsubstanz und Kosten zu schonen. Bei grösseren Schäden wickeln wir den gesamten Schadenfall direkt mit Ihrer Schweizer Versicherung ab.",
      en: "Dents, scratches, or collision damage: our certified body & paint technicians restore your car to showroom perfection. Wherever possible, we use Paintless Dent Repair (PDR) to preserve the original factory paint and keep repair costs low. For larger insurance claims, we handle everything directly with your Swiss insurer.",
      nl: "Parkeerschade, steenslag of een aanrijding: onze gecertificeerde schadeherstellers brengen uw auto weer in nieuwstaat. Waar mogelijk passen we uitdeuken zonder spuiten (PDR) toe om de originele fabriekslak te behouden en kosten te besparen. Bij grotere schades regelen we de complete schadeafhandeling rechtstreeks met uw verzekeraar.",
    },
    highlights: {
      de: [
        "Direkte Abrechnung mit allen Schweizer Versicherungen",
        "Sanfte Dellenreparatur (Drücktechnik ohne Nachlackieren)",
        "Computergestützte Farbanalyse für 100% Farbgenauigkeit",
        "Klimaneutrale, umweltschonende Wasserbasislacke",
        "Lebenslange Garantie auf Lackierarbeiten",
      ],
      en: [
        "Direct claim settlement with all Swiss insurance providers",
        "Paintless Dent Removal (PDR preserves original coat)",
        "Spectrophotometer color matching for exact paint blend",
        "Eco-friendly, water-borne high-grade automotive paints",
        "Long-term guarantee on paint durability",
      ],
      nl: [
        "Rechtstreekse afrekening met alle Zwitserse verzekeraars",
        "Uitdeuken zonder spuiten (behoud van originele laklaag)",
        "Computergestuurde kleuranalyse voor 100% kleurnauwkeurigheid",
        "Milieuvriendelijke lakken op waterbasis",
        "Levenslange garantie op spuitwerk",
      ],
    },
    processSteps: {
      de: [
        { title: "1. Schadensaufnahme", desc: "Detaillierte Erfassung mit Fotos und digitalem Kostenvoranschlag (Audatex)." },
        { title: "2. Versicherungsfreigabe", desc: "Wir holen die Deckungszusage direkt bei Ihrer Versicherung ein." },
        { title: "3. Instandsetzung", desc: "Präzises Richten, Dellenentfernung und Vorbereitung zur Lackierung." },
        { title: "4. Finish & Politur", desc: "Trocknung in der Spezialkabine, Endpolitur und Fahrzeugreinigung." },
      ],
      en: [
        { title: "1. Damage Assessment", desc: "Detailed photographic inspection and Audatex digital cost breakdown." },
        { title: "2. Insurance Approval", desc: "We liaise directly with your insurance company for swift clearance." },
        { title: "3. Body Alignment & Prep", desc: "Precision chassis straightening, dent pull, and surface prep." },
        { title: "4. Spray & Final Polish", desc: "Heated spray booth curing, ceramic polish, and full exterior wash." },
      ],
      nl: [
        { title: "1. Schadeopname", desc: "Gedetailleerde inspectie met foto's en Audatex kostenberekening." },
        { title: "2. Verzekeringsakkoord", desc: "Wij vragen de dekking direct aan bij uw verzekeringsmaatschappij." },
        { title: "3. Herstel & Voorbewerking", desc: "Nauwkeurig richten, uitdeuken en voorbereiden voor het spuiten." },
        { title: "4. Spuiten & Afwerking", desc: "Drogen in de spuitcabine, keramische polijstbeurt en reiniging." },
      ],
    },
    typicalDuration: {
      de: "1 – 4 Werktage je nach Schadensumfang",
      en: "1 – 4 business days depending on severity",
      nl: "1 – 4 werkdagen afhankelijk van de schade",
    },
    priceIndication: {
      de: "Dellenentfernung ab CHF 120.– | Teillackierung ab CHF 380.–",
      en: "Dent repair from CHF 120.– | Panel paint from CHF 380.–",
      nl: "Uitdeuken vanaf CHF 120.– | Deelspuitwerk vanaf CHF 380.–",
    },
    faqs: {
      de: [
        {
          q: "Muss ich mich um die Versicherungskorrespondenz kümmern?",
          a: "Nein, Sie müssen den Schaden lediglich Ihrer Versicherung melden. Die Expertise, den Kostenvoranschlag und die Direktabrechnung übernehmen wir für Sie.",
        },
      ],
      en: [
        {
          q: "Do I have to handle insurance paperwork?",
          a: "No, you simply provide your claim number. We handle technical appraisals, photographic proof, and direct billing with your insurer.",
        },
      ],
      nl: [
        {
          q: "Moet ik zelf de verzekering regelen?",
          a: "Nee, u hoeft alleen het schadenummer door te geven. Wij regelen de expertise, offerte en directe facturatie met uw verzekeraar.",
        },
      ],
    },
  },
  {
    id: "fahrassistenz-programmierung",
    slug: "fahrassistenz-programmierung",
    iconName: "Cpu",
    title: {
      de: "Fahrassistenz & Programmierung",
      en: "Driver Assistance & Programming",
      nl: "Rijassistentie & Programmering",
    },
    shortDescription: {
      de: "Herstellerkonforme Kalibrierung von ADAS-Kameras, Radarsensoren und Steuergeräte-Codierung.",
      en: "Certified calibration of ADAS cameras, radar sensors, fault diagnostics, and ECU module coding.",
      nl: "Gecertificeerde kalibratie van ADAS-camera's, radarsensoren en modulecodering.",
    },
    fullDescription: {
      de: "Moderne Automobile sind hochkomplexe rollende Computer. Notbremsassistenten, Spurhaltehilfen, Abstandsregeltempomaten (ACC) und 360°-Kameras müssen nach Scheibentausch, Fahrwerksvermessung oder Karosseriearbeiten millimetergenau rekalibriert werden. Mit modernsten Diagnosestationen und optischen Kalibriertafeln gewährleisten wir maximale Sicherheit auf der Strasse.",
      en: "Modern cars rely heavily on automated safety sensors. Emergency brake assist, lane keeping, adaptive cruise control (ACC), and 360° cameras must be calibrated with millimeter precision following windshield replacement, wheel alignment, or suspension work. With state-of-the-art diagnostic systems and target boards, we restore safety functions completely.",
      nl: "Moderne auto's zijn rijdende computers. Noodremassistenten, rijstrookassistentie, adaptieve cruisecontrol (ACC) en 360°-camera's moeten na een ruitvervanging of onderstelwerkzaamheden tot op de millimeter nauwkeurig worden herkalibreerd. Met geavanceerde diagnosetabellen en lasersystemen garanderen wij maximale veiligheid op de weg.",
    },
    highlights: {
      de: [
        "Kalibrierung von Frontkameras & Radarsensoren (ADAS)",
        "Fehlerspeicher-Tiefendiagnose aller Systeme",
        "Steuergeräte-Codierung & Software-Updates",
        "RDKS (Reifendruck-Kontrollsystem) Sensor-Anlernen",
        "Fehlerdiagnose bei Batterie- & Hybrid-/Elektrosystemen",
      ],
      en: [
        "Static and dynamic ADAS camera & radar calibration",
        "Deep ECU diagnostic scans across all electronic bus systems",
        "Control module coding, feature activation & updates",
        "TPMS (Tire Pressure Monitoring System) programming",
        "Electronic troubleshooting for 12V and Hybrid/EV systems",
      ],
      nl: [
        "Kalibratie van frontcamera's & radarsensoren (ADAS)",
        "Dieptediagnose van alle elektronische bussystemen",
        "Stuurapparaat-codering & software-updates",
        "TPMS/RDKS bandenspanningssensoren inleren",
        "Elektronische diagnose bij hybride- en EV-systemen",
      ],
    },
    processSteps: {
      de: [
        { title: "1. Diagnose-Scan", desc: "Vollständiges Auslesen aller Fehlerspeicher vor Arbeitsbeginn." },
        { title: "2. Justierung", desc: "Positionierung der optischen Zieltafeln und Laserausrichtung." },
        { title: "3. Kalibrierfahrt", desc: "Statische und bei Bedarf dynamische Anlernfahrt im Fahrbetrieb." },
        { title: "4. Kalibrierprotokoll", desc: "Aushändigung des offiziellen Prüfberichts für Ihre Akten." },
      ],
      en: [
        { title: "1. Diagnostic Scan", desc: "Complete pre-scan of all modules to identify active fault codes." },
        { title: "2. Laser Alignment", desc: "Target panel setup with precision laser wheel clamps." },
        { title: "3. Calibration Drive", desc: "Static sensor calibration followed by dynamic test run if required." },
        { title: "4. Official Report", desc: "Issuance of printed calibration certificate for your vehicle documentation." },
      ],
      nl: [
        { title: "1. Diagnosescan", desc: "Volledige uitlezing van alle modules voorafgaand aan het werk." },
        { title: "2. Laserafstelling", desc: "Opstellen van optische richtborden en laserafstelling op de wielen." },
        { title: "3. Kalibratierit", desc: "Statische en indien vereist dynamische inleerprocedure op de weg." },
        { title: "4. Officieel Certificaat", desc: "Overhandiging van het geprinte kalibratierapport voor uw voertuigdossier." },
      ],
    },
    typicalDuration: {
      de: "1 – 3 Stunden",
      en: "1 – 3 hours",
      nl: "1 – 3 uur",
    },
    priceIndication: {
      de: "Fehlerspeicherdiagnose ab CHF 80.– | ADAS-Kalibrierung ab CHF 220.–",
      en: "Diagnostic scan from CHF 80.– | ADAS calibration from CHF 220.–",
      nl: "Foutgeheugendiagnose vanaf CHF 80.– | ADAS-kalibratie vanaf CHF 220.–",
    },
    faqs: {
      de: [
        {
          q: "Wann muss ein Kamerasystem neu kalibriert werden?",
          a: "Immer nach einem Austausch der Frontscheibe, nach Arbeiten am Fahrwerk (Tieferlegung, Achsvermessung) sowie nach Karosseriereparaturen an der Fahrzeugfront.",
        },
      ],
      en: [
        {
          q: "When does a safety camera need calibration?",
          a: "Always after replacing a windshield, adjusting vehicle ride height, performing wheel alignment, or following any front-end body repairs.",
        },
      ],
      nl: [
        {
          q: "Wanneer moet een camerasysteem gekalibreerd worden?",
          a: "Altijd na vervanging van de voorruit, na werk aan het onderstel (verlaging, uitlijning) en na carrosserieschade aan de voorzijde.",
        },
      ],
    },
  },
  {
    id: "frontscheibenreparatur",
    slug: "frontscheibenreparatur",
    iconName: "Maximize2",
    title: {
      de: "Frontscheibenreparatur",
      en: "Windshield Repair & Replacement",
      nl: "Voorruitreparatie & Vervanging",
    },
    shortDescription: {
      de: "Schnelle Steinschlagreparatur, Scheibenaustausch mit OEM-Glas und anschliessende Kamerakalibrierung.",
      en: "Swift stone chip resin repair, complete windshield replacement with OEM glass, and instant sensor recalibration.",
      nl: "Snelle sterreparatie, complete voorruitvervanging met OEM-glas en camerakalibratie.",
    },
    fullDescription: {
      de: "Ein Steinschlag in der Frontscheibe kann bei Erschütterungen oder Temperaturwechseln sekundenschnell zu einem irreparablen Riss führen. Kleinere Steinschläge reparieren wir rasch und dauerhaft mit Spezialharz – bei bestehender Teilkasko meist ohne Selbstbehalt! Ist der Austausch der Scheibe notwendig, verwenden wir ausschliesslich Glas in Erstausrüsterqualität und kalibrieren die integrierten Assistenzkameras direkt im Haus.",
      en: "A stone chip can fracture across the entire windscreen in seconds under road vibration or temperature swings. Small chips are sealed and restored in under 30 minutes with high-grade optical resin—often at zero cost to you with comprehensive insurance! If replacement is required, we fit certified OEM glass and calibrate your lane-assist camera immediately.",
      nl: "Een sterretje in de voorruit kan door temperatuurschommelingen en trillingen plotseling doorscheuren. Kleine beschadigingen repareren wij binnen 30 minuten met hoogwaardige kunsthars – bij omnium/beperkt casco vaak zonder eigen risico! Moet de ruit vervangen worden, dan monteren we uitsluitend OEM-kwaliteitsglas en kalibreren we de veiligheidscamera's ter plaatse.",
    },
    highlights: {
      de: [
        "Steinschlagreparatur in nur 30 Minuten",
        "Frontscheibenaustausch mit OEM-Qualitätsglas",
        "Integrierte ADAS-Kamerakalibrierung vor Ort",
        "Meist 0 CHF Selbstbehalt bei Teilkasko",
        "Kostenlose Vignette beim Scheibentausch",
      ],
      en: [
        "Stone chip resin repair in under 30 minutes",
        "Windshield replacement using OEM-grade glass",
        "On-site camera & rain sensor calibration",
        "Usually zero deductible (0 CHF) with comprehensive insurance",
        "Free Swiss motorway vignette included with windscreen replacement",
      ],
      nl: [
        "Sterretje repareren in slechts 30 minuten",
        "Voorruitvervanging met OEM-kwaliteitsglas",
        "ADAS-camerakalibratie direct in eigen werkplaats",
        "Vaak 0 CHF eigen risico bij casco/deelcasco",
        "Gratis Zwitsers snelwegvignet bij ruitvervanging",
      ],
    },
    processSteps: {
      de: [
        { title: "1. Begutachtung", desc: "Prüfung, ob Steinschlag harzbar ist oder die Scheibe getauscht werden muss." },
        { title: "2. Harzinjektion oder Tausch", desc: "Vakuum-Harzfüllung unter UV-Licht oder fachgerechter Scheibenausbau." },
        { title: "3. Assistenz-Kalibrierung", desc: "Präzise Neukalibrierung der Frontscheibenkamera." },
        { title: "4. Direktabrechnung", desc: "Wir regeln die Kosten direkt mit Ihrer Versicherung." },
      ],
      en: [
        { title: "1. Inspection", desc: "Determining whether resin injection is possible or glass requires replacement." },
        { title: "2. Resin or Swap", desc: "UV cured resin repair or careful windshield removal and bonding." },
        { title: "3. Camera Calibration", desc: "Precision alignment of all glass-mounted safety sensors." },
        { title: "4. Direct Billing", desc: "We submit the claim directly to your auto insurance." },
      ],
      nl: [
        { title: "1. Inspectie", desc: "Beoordelen of harsinjectie volstaat of ruitvervanging noodzakelijk is." },
        { title: "2. Harsinjectie of Ruitwissel", desc: "UV-uitharding van hars of vakkundige demontage en verlijming van nieuw glas." },
        { title: "3. Camerakalibratie", desc: "Nauwkeurige herkalibratie van regensensoren en rijstrookcamera's." },
        { title: "4. Directe Facturatie", desc: "Wij wikkelen de rekening rechtstreeks af met uw verzekeraar." },
      ],
    },
    typicalDuration: {
      de: "Steinschlag: 30 Min. | Austausch: ca. 3–4 Stunden (inkl. Kleberaushärtung)",
      en: "Stone chip: 30 mins | Replacement: 3–4 hours (including adhesive cure time)",
      nl: "Sterretje: 30 min | Vervanging: ca. 3–4 uur (inclusief lijmuitharding)",
    },
    priceIndication: {
      de: "Steinschlag oft kostenlos über Teilkasko | Austausch über Versicherung",
      en: "Stone chip often 0 CHF with insurance | Replacement covered by insurance",
      nl: "Sterretje vaak kosteloos via verzekering | Vervanging via verzekering",
    },
    faqs: {
      de: [
        {
          q: "Kostet mich die Steinschlagreparatur etwas?",
          a: "Wenn Sie eine Teil- oder Vollkaskoversicherung haben, übernehmen die meisten Schweizer Versicherungen die Reparatur zu 100% ohne Selbstbehalt und ohne Erhöhung der Prämie.",
        },
      ],
      en: [
        {
          q: "Will stone chip repair cost me anything?",
          a: "In most Swiss comprehensive insurance policies, stone chip resin repair is covered 100% with no deductible and no bonus penalty.",
        },
      ],
      nl: [
        {
          q: "Kost een sterreparatie mij geld?",
          a: "Bij de meeste verzekeringen met beperkt of volledig casco wordt een sterreparatie 100% vergoed zonder eigen risico en zonder no-claimverlies.",
        },
      ],
    },
  },
  {
    id: "rad-reifenservice",
    slug: "rad-reifenservice",
    iconName: "Disc",
    title: {
      de: "Rad- und Reifenservice",
      en: "Wheel and Tire Service",
      nl: "Banden- en Wielenservice",
    },
    shortDescription: {
      de: "Saisonaler Pneuwechsel, 3D-Achsvermessung, Auswuchten, Neureifen führender Marken und Reifenhotel.",
      en: "Seasonal tire swap, precision 3D wheel alignment, dynamic balancing, new tires, and climate-controlled tire hotel.",
      nl: "Seizoensgebonden bandenwissel, 3D-uitlijning, balanceren, nieuwe banden en bandenhotel.",
    },
    fullDescription: {
      de: "Die Reifen sind der einzige Kontakt zwischen Ihrem Fahrzeug und der Strasse – hier geht Sicherheit vor. Wir bieten Ihnen den kompletten Reifenservice: schnellen saisonalen Radwechsel, präzises elektronisches Auswuchten, Montage von Neureifen aller führenden Hersteller (Michelin, Continental, Pirelli, Goodyear u.v.m.) sowie computergestützte 3D-Fahrwerksvermessung zur Vorbeugung von ungleichmässigem Reifenverschleiss.",
      en: "Tires are the single contact patch between your vehicle and the road. We deliver an end-to-end tire service: speedy seasonal wheel changes, dynamic precision balancing, competitive pricing on all premium tire brands (Michelin, Continental, Pirelli, Goodyear), and 3D computer steering geometry alignment to stop premature tire wear.",
      nl: "Banden vormen het enige contact tussen uw auto en het wegdek – veiligheid staat hier voorop. Wij bieden de complete bandenservice: snelle seizoenswissel, elektronisch balanceren, montage van premium merken (Michelin, Continental, Pirelli, Goodyear) en 3D-laserstuurgeometrie om scheve bandenslijtage te voorkomen.",
    },
    highlights: {
      de: [
        "Pneuwechsel in unter 30 Minuten (Boxenstopp)",
        "Reifenhotel: Fachgerechte, temperierte Einlagerung inkl. Reinigung",
        "3D-Achsvermessung für perfekten Geradeauslauf",
        "Neureifen zu fairen Preisen mit Reifenversicherung",
        "RDKS-Programmierung für alle Automarken",
      ],
      en: [
        "Rapid seasonal wheel swap in under 30 minutes",
        "Tire Hotel: Climate-controlled storage including wheel wash",
        "3D laser steering geometry & suspension alignment",
        "New tires at fair market prices with puncture warranty",
        "TPMS sensor diagnostics & learning for all models",
      ],
      nl: [
        "Bandenwissel in minder dan 30 minuten (pitstop)",
        "Bandenhotel: Geconditioneerde opslag inclusief velgenreiniging",
        "3D-laseruitlijning voor een perfect stabiele wegligging",
        "Nieuwe banden tegen scherpe prijzen met lekgarantie",
        "TPMS/RDKS sensordiagnose voor alle automerken",
      ],
    },
    processSteps: {
      de: [
        { title: "1. Zustandsprüfung", desc: "Messung von Profiltiefe, Alter (DOT) und Reifenzustand." },
        { title: "2. Montage & Wuchten", desc: "Montage mit Drehmomentschlüssel und elektronisches Feinwuchten." },
        { title: "3. Luftdruck & RDKS", desc: "Exakter Solldruck und Reset des Reifendruck-Kontrollsystems." },
        { title: "4. Einlagerung", desc: "Reinigung und Einlagerung Ihrer Räder im versicherten Reifenhotel." },
      ],
      en: [
        { title: "1. Inspection", desc: "Tread depth measurement, DOT production age check, and visual safety scan." },
        { title: "2. Mount & Balance", desc: "Calibrated torque wrench fastening and dynamic wheel balancing." },
        { title: "3. Pressure & TPMS", desc: "Correct pressure adjustment and onboard computer sensor reset." },
        { title: "4. Tire Storage", desc: "Eco-wash and secure storage in our insured tire hotel." },
      ],
      nl: [
        { title: "1. Inspectie", desc: "Meting van profieldiepte, leeftijd (DOT) en slijtagebeeld." },
        { title: "2. Montage & Balanceren", desc: "Vastzetten met momentsleutel en dynamisch balanceren." },
        { title: "3. Bandenspanning & TPMS", desc: "Correcte bandenspanning instellen en boordcomputer resetten." },
        { title: "4. Opslag", desc: "Reiniging en veilige opslag in ons verzekerde bandenhotel." },
      ],
    },
    typicalDuration: {
      de: "Radwechsel: 20–30 Minuten | Reifenmontage: 45–60 Minuten",
      en: "Wheel swap: 20–30 mins | New tire mounting: 45–60 mins",
      nl: "Wielenwissel: 20–30 min | Bandenmontage: 45–60 min",
    },
    priceIndication: {
      de: "Radwechsel 4 Räder ab CHF 60.– | Reifenhotel pro Saison ab CHF 70.–",
      en: "Wheel swap (4 wheels) from CHF 60.– | Seasonal storage from CHF 70.–",
      nl: "Wielenwissel 4 wielen vanaf CHF 60.– | Bandenhotel per seizoen vanaf CHF 70.–",
    },
    faqs: {
      de: [
        {
          q: "Wie lange kann ich meine Räder im Reifenhotel einlagern?",
          a: "Die Einlagerung gilt jeweils für eine Saison (Sommer oder Winter, ca. 6 Monate) und beinhaltet die professionelle Reinigung und schonende Lagerung.",
        },
      ],
      en: [
        {
          q: "How does the tire hotel service work?",
          a: "Storage is booked on a per-season basis (Summer or Winter, ~6 months) and includes ultrasonic wheel washing and temperature-controlled storage.",
        },
      ],
      nl: [
        {
          q: "Hoe werkt het bandenhotel?",
          a: "Opslag geldt per seizoen (zomer of winter, ca. 6 maanden) en is inclusief machinale reiniging en veilige bewaring onder constante temperatuur.",
        },
      ],
    },
  },
  {
    id: "tieferlegung-tuning",
    slug: "tieferlegung-tuning",
    iconName: "Sliders",
    title: {
      de: "Tieferlegung und Tuning",
      en: "Suspension Lowering & Tuning",
      nl: "Verlaging en Tuning",
    },
    shortDescription: {
      de: "Sportfahrwerke (KW, ST, H&R), Tieferlegungsfedern, Spurverbreiterungen inkl. Schweizer DTC-Gutachten & MFK-Eintragung.",
      en: "Coilover suspension kits (KW, Bilstein, H&R), lowering springs, spacers, with full Swiss DTC certificates and MFK endorsement.",
      nl: "Schroefsets (KW, ST, H&R, Bilstein), verlagingsveren, spoorverbreders met officiële DTC-keuring.",
    },
    fullDescription: {
      de: "Für Motorsport-Enthusiasten und anspruchsvolle Fahrer: Wir veredeln das Fahrverhalten und die Optik Ihres Automobils. Als erfahrene Spezialisten montieren wir Gewindefahrwerke, Sportfedern und Sportauspuffanlagen. Wir sorgen für die perfekte Abstimmung (Radlasten, Spur- und Sturzwerte) und übernehmen alle bürokratischen Schritte inklusive DTC-Gutachten und amtlicher MFK-Eintragung im Fahrzeugausweis.",
      en: "For automotive enthusiasts seeking sharper cornering dynamics and aggressive stance: We supply and install coilovers, lowering springs, wheel spacers, and sport exhaust systems. We dial in custom alignment, camber, and corner weighting, ensuring 100% legal Swiss compliance with official DTC certificates and cantonal MFK registration.",
      nl: "Voor autoliefhebbers die streven naar een scherpere wegligging en een sportievere uitstraling: als ervaren specialisten monteren wij schroefsets, sportveren en sportuitlaatsystemen. Wij zorgen voor de ideale afstelling van wielvlucht, sporing en wielgewichten, en verzorgen de officiële certificering inclusief DTC-attesten en goedkeuring op het kentekenbewijs.",
    },
    highlights: {
      de: [
        "Offizieller Einbaupartner für KW Suspensions, ST, H&R, Bilstein",
        "Individuelle Abstimmung von Spur, Sturz & Nachlauf",
        "Komplette Abwicklung von DTC- / FAKT-Gutachten",
        "Offizielle Eintragung im Schweizer Fahrzeugausweis (MFK)",
        "Sportauspuffanlagen, Felgen & optisches Veredelungsprogramm",
      ],
      en: [
        "Certified installation partner for KW, ST, H&R, and Bilstein",
        "Custom alignment, corner weighting, and camber tuning",
        "Full Swiss DTC / FAKT certification handling",
        "Official endorsement directly into your vehicle registration doc",
        "Sport exhausts, custom alloys, and aerodynamic enhancements",
      ],
      nl: [
        "Gecertificeerde montagepartner voor KW, ST, H&R en Bilstein",
        "Individuele afstelling van sporing, camber en naloop",
        "Complete afhandeling van officiële DTC- / FAKT-rapporten",
        "Officiële vermelding op het Zwitserse kentekenbewijs",
        "Sportuitlaatsystemen, lichtmetalen velgen en styling",
      ],
    },
    processSteps: {
      de: [
        { title: "1. Beratung & Auswahl", desc: "Bedarfsanalyse: Alltagskomfort, Clubsport oder maximale Tiefe." },
        { title: "2. Fachgerechter Einbau", desc: "Montage nach Drehmomentangaben und Qualitätskontrolle." },
        { title: "3. Vermessung & Abstimmung", desc: "Laser-3D-Achsvermessung auf exakte Sollwerte." },
        { title: "4. DTC & MFK-Eintragung", desc: "Wir organisieren das Gutachten und die amtliche Vorführung." },
      ],
      en: [
        { title: "1. Consultation", desc: "Evaluating goals: daily comfort, track-day handling, or aggressive stance." },
        { title: "2. Precision Fitment", desc: "Installation using factory torque specs and fresh hardware." },
        { title: "3. Alignment Setup", desc: "Laser 3D suspension geometry adjustment to targeted specs." },
        { title: "4. DTC & MFK Endorsement", desc: "Arranging test reports and presenting the vehicle for registration." },
      ],
      nl: [
        { title: "1. Advies & Keuze", desc: "Doelen bepalen: dagelijks comfort, circuitafstelling of maximale verlaging." },
        { title: "2. Vakkundige Montage", desc: "Installatie volgens fabriekskoppelspecificaties en kwaliteitscontrole." },
        { title: "3. Uitlijning & Afstelling", desc: "3D-laseruitlijning op de gewenste stuurparameters." },
        { title: "4. DTC & Keuring", desc: "Wij verzorgen het keuringsattest en de officiële keuringsafspraak." },
      ],
    },
    typicalDuration: {
      de: "1 – 2 Werktage inkl. Setzzeit und Vermessung",
      en: "1 – 2 business days including suspension settling and alignment",
      nl: "1 – 2 werkdagen inclusief zetting en uitlijning",
    },
    priceIndication: {
      de: "Tieferlegungsfedern ab CHF 750.– (inkl. Einbau & Vermessung) | Gewindefahrwerke nach Offerte",
      en: "Lowering springs from CHF 750.– (inc. fitment & alignment) | Coilovers on quote",
      nl: "Verlagingsveren vanaf CHF 750.– (inclusief montage & uitlijning) | Schroefsets op offerte",
    },
    faqs: {
      de: [
        {
          q: "Ist die Tieferlegung in der Schweiz legal und prüfbar?",
          a: "Ja, solange die gesetzlichen Vorgaben (z.B. Mindestbodenfreiheit) und die passenden Schweizer DTC/FAKT-Gutachten vorliegen. Wir garantieren Ihnen die erfolgreiche MFK-Eintragung.",
        },
      ],
      en: [
        {
          q: "Is suspension lowering 100% legal on Swiss roads?",
          a: "Yes, when matched with certified Swiss DTC/FAKT documentation and compliant ride height. We guarantee full MFK cantonal approval.",
        },
      ],
      nl: [
        {
          q: "Is een verlaging legaal?",
          a: "Ja, mits voldaan aan de wettelijke voorschriften en ondersteund door officiële Zwitserse DTC/FAKT-documenten. Wij garanderen succesvolle keuring.",
        },
      ],
    },
  },
  {
    id: "autohandel",
    slug: "autohandel",
    iconName: "Car",
    title: {
      de: "Autohandel & Occasionen",
      en: "Car Dealership & Pre-Owned",
      nl: "Autoverkoop & Occasions",
    },
    shortDescription: {
      de: "Geprüfte Qualitäts-Occasionen mit Garantie, fairer Autoankauf, Eintausch und massgeschneiderte Finanzierung.",
      en: "Pre-inspected certified used vehicles with warranty, fair trade-in, vehicle purchase, and flexible financing.",
      nl: "Gekeurde kwaliteitsoccasions met garantie, eerlijke inruil, auto-inkoop en financiering.",
    },
    fullDescription: {
      de: "Suchen Sie ein zuverlässiges Gebrauchtfahrzeug oder möchten Sie Ihr aktuelles Auto zu einem fairen Marktpreis verkaufen? Bei Bozo Automobile wird jedes angebotene Fahrzeug in unserer Meisterwerkstatt auf Herz und Nieren geprüft, frisch ab MFK vorgeführt und mit einer umfassenden Garantie ausgestattet. Gerne nehmen wir Ihr bisheriges Fahrzeug auch unkompliziert an Zahlung.",
      en: "Looking for a dependable pre-owned vehicle, or looking to sell your current car at a fair market rate? Every vehicle sold by Bozo Automobile undergoes rigorous multi-point inspection in our master garage, comes freshly MFK-certified, and includes warranty protection. We also offer straightforward part-exchange trade-in valuations.",
      nl: "Zoekt u een betrouwbare tweedehands auto of wilt u uw huidige auto verkopen tegen een eerlijke marktprijs? Bij Bozo Automobile wordt elk aangeboden voertuig grondig nagekeken in onze meesterwerkplaats, voorzien van een verse keuring en afgeleverd met garantie. Tevens ruilen wij uw huidige auto graag en vlot in.",
    },
    highlights: {
      de: [
        "Alle Fahrzeuge frisch ab MFK & Werkstattservice",
        "Inklusive 12 bis 24 Monate Qualitätsgarantie",
        "Transparente Fahrzeughistorie ohne Unfallüberraschungen",
        "Unkomplizierter Ankauf & Eintausch aller Marken",
        "Attraktive Leasing- & Finanzierungskonditionen",
      ],
      en: [
        "Every vehicle delivered with fresh MFK and full service",
        "12 to 24 months warranty protection included",
        "Fully transparent vehicle history with no hidden accident damage",
        "Fast trade-in appraisals and cash purchase for all brands",
        "Competitive leasing and vehicle financing options",
      ],
      nl: [
        "Alle auto's afgeleverd met verse keuring & volledige onderhoudsbeurt",
        "Inclusief 12 tot 24 maanden kwaliteitsgarantie",
        "Transparante onderhoudshistorie zonder schadeverleden",
        "Eenvoudige inkoop & inruil van alle automerken",
        "Aantrekkelijke lease- en financieringsvoorwaarden",
      ],
    },
    processSteps: {
      de: [
        { title: "1. 100-Punkte Qualitätscheck", desc: "Prüfung von Motor, Getriebe, Bremsen, Elektronik und Karosserie." },
        { title: "2. MFK & Aufbereitung", desc: "Amtliche Prüfung und professionelle Innen- und Aussenreinigung." },
        { title: "3. Probefahrt", desc: "Ausführliche Probefahrt und Beratung zu Ausstattung und Finanzierung." },
        { title: "4. Einlöse-Service", desc: "Wir übernehmen die Immatrikulation beim Strassenverkehrsamt für Sie." },
      ],
      en: [
        { title: "1. 100-Point Quality Inspection", desc: "Comprehensive drivetrain, brake, electrical, and structural audit." },
        { title: "2. MFK & Detailing", desc: "Cantonal inspection passing and full interior/exterior detailing." },
        { title: "3. Test Drive", desc: "Thorough test drive with personal walkthrough of features and financing." },
        { title: "4. Registration Service", desc: "We register the vehicle with the Swiss traffic office on your behalf." },
      ],
      nl: [
        { title: "1. 100-Punts Kwaliteitscheck", desc: "Inspectie van motor, aandrijving, remmen, elektronica en carrosserie." },
        { title: "2. Keuring & Detailbeurt", desc: "Officiële keuring en professionele dieptereiniging van binnen en buiten." },
        { title: "3. Proefrit", desc: "Uitgebreide proefrit en persoonlijk advies over uitrusting en financiering." },
        { title: "4. Kentekenregistratie", desc: "Wij verzorgen de tenaamstelling en registratie voor u." },
      ],
    },
    typicalDuration: {
      de: "Übergabefertig innert 24 – 48 Stunden",
      en: "Ready for delivery within 24 – 48 hours",
      nl: "Rijklaar binnen 24 – 48 uur",
    },
    priceIndication: {
      de: "Qualitäts-Occasionen von CHF 8'000.– bis CHF 75'000.–",
      en: "Quality used cars from CHF 8,000.– to CHF 75,000.–",
      nl: "Kwaliteitsoccasions van CHF 8.000.– tot CHF 75.000.–",
    },
    faqs: {
      de: [
        {
          q: "Kann ich mein altes Auto in Zahlung geben?",
          a: "Ja, sehr gerne. Wir bewerten Ihr Fahrzeug transparent vor Ort und verrechnen den Betrag direkt mit Ihrem Neukauf.",
        },
      ],
      en: [
        {
          q: "Can I trade in my current vehicle?",
          a: "Yes, definitely. We provide a transparent on-site valuation and apply the credit directly toward your purchase.",
        },
      ],
      nl: [
        {
          q: "Kan ik mijn huidige auto inruilen?",
          a: "Ja, van harte welkom. Wij taxeren uw auto transparant ter plaatse en verrekenen de inruilwaarde direct met uw aankoop.",
        },
      ],
    },
  },
];
