export type Language = "en" | "nl" | "de";

export interface BrandSpec {
  name: string;
  badge: string;
  protocol: string;
  leadTime: string;
  mobility: string;
}

export interface ProtocolSlipData {
  id: string;
  title: string;
  category: string;
  status: string;
  lines: string[];
}

export interface FaqItemData {
  tab: string;
  question: string;
  answer: string;
}

export interface Translations {
  nav: {
    services: string;
    allServices: string;
    about: string;
    contact: string;
    bookNow: string;
    callNow: string;
    regions: string;
    emergency: string;
    openHoursRadar: string;
    areaDropdownTitle: string;
    menuOpen: string;
    menuClose: string;
    workshopOpen: string;
  };
  hero: {
    badge: string;
    eyebrow2: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    ctaBook: string;
    ctaCall: string;
    ctaServices: string;
    ratingText: string;
    guaranteePill: string;
    mobilityPill: string;
    allBrandsPill: string;
    trustScore: string;
    trustScoreLabel: string;
    trustWarranty: string;
    trustWarrantyLabel: string;
    trustMobility: string;
    trustMobilityLabel: string;
    trustBrands: string;
    trustBrandsLabel: string;
    brandLabel: string;
    brandData: Record<string, BrandSpec>;
  };
  valueProps: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    props: {
      title: string;
      description: string;
    }[];
    statRating: string;
    statRatingBadge: string;
    statRatingTitle: string;
    statRatingDesc: string;
    statWarranty: string;
    statWarrantyBadge: string;
    statWarrantyTitle: string;
    statWarrantyDesc: string;
    statMobility: string;
    statMobilityBadge: string;
    statMobilityTitle: string;
    statMobilityDesc: string;
    statTech: string;
    statTechBadge: string;
    statTechTitle: string;
    statTechDesc: string;
    quoteBadge: string;
    quoteText: string;
    quoteAuthor: string;
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
    bookThisService: string;
    includedBenefits: string;
    card1Badge: string;
    card1Title: string;
    card1Price: string;
    card1Desc: string;
    card1Features: string[];
    card1CtaDetail: string;
    card1CtaBook: string;
    card2Badge: string;
    card2Title: string;
    card2Desc: string;
    card2Points: string[];
    card3Badge: string;
    card3Title: string;
    card3Desc: string;
    card3Points: string[];
    card4Badge: string;
    card4Title: string;
    card4Desc: string;
    card4Points: string[];
    card5Badge: string;
    card5Title: string;
    card5Desc: string;
    card5Points: string[];
  };
  calculator: {
    title: string;
    subtitle: string;
    selectVehicle: string;
    vehicleTypes: {
      compact: string;
      limousine: string;
      suv: string;
      electric: string;
    };
    selectPackage: string;
    estimatedCost: string;
    fromPrice: string;
    duration: string;
    bookPackage: string;
    recommended: string;
    oemCompliant: string;
    freeMobilityPill: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    basedOn: string;
    leaveReview: string;
    verifiedBadge: string;
    customerVehicle: string;
  };
  beforeAfter: {
    badge: string;
    title: string;
    subtitle: string;
    labelBefore: string;
    labelAfter: string;
    dragHint: string;
    slips: ProtocolSlipData[];
  };
  faqs: {
    badge: string;
    title: string;
    subtitle: string;
    stillQuestions: string;
    askDirectly: string;
    directCall: string;
    items: FaqItemData[];
  };
  location: {
    badge: string;
    title: string;
    freeParking: string;
    drivingTimesTitle: string;
    drivingTimes: { from: string; time: string }[];
    keyDropTitle: string;
    keyDropDesc: string;
    directionsBtn: string;
    expressRoute: string;
  };
  emergency: {
    badge: string;
    title: string;
    desc: string;
    button: string;
    whatsAppBtn: string;
  };
  booking: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    guaranteePill: string;
    keySafePill: string;
    mobilityPill: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    selectService: string;
    vehicleBrand: string;
    vehicleModel: string;
    licensePlate: string;
    mobilityChoice: string;
    brandShortcuts: string[];
    mobilityOptions: {
      none: string;
      car: string;
      bike: string;
      wait: string;
    };
    preferredDate: string;
    preferredTime: string;
    timeSlots: {
      morning: string;
      afternoon: string;
      flexible: string;
    };
    fullName: string;
    phone: string;
    email: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    whatsappConfirm: string;
    bookAnother: string;
    back: string;
    next: string;
    errSelectService: string;
    errBrandRequired: string;
    errDateRequired: string;
    errContactRequired: string;
    summaryTitle: string;
    summaryServices: string;
    summaryVehicle: string;
    summaryMobility: string;
    summaryDate: string;
    summaryTime: string;
    loadingAssistant: string;
    step1Badge: string;
    step1DescLong: string;
    customServiceTitle: string;
    customServiceDesc: string;
    step2Badge: string;
    step2DescLong: string;
    popularBrands: string;
    brandPlaceholder: string;
    modelPlaceholder: string;
    platePlaceholder: string;
    step3Badge: string;
    step3DescLong: string;
    keySafeNoticeTitle: string;
    keySafeNoticeDesc: string;
    step4Badge: string;
    step4DescLong: string;
    privacyGuarantee: string;
    submitBtn: string;
    bookingRefBadge: string;
    receiptCustomer: string;
    receiptVehicle: string;
    receiptDate: string;
    receiptMobility: string;
    downloadCalendar: string;
    whatsappConfirmBtn: string;
    mobilityCards: {
      carTitle: string;
      carDesc: string;
      bikeTitle: string;
      bikeDesc: string;
      noneTitle: string;
      noneDesc: string;
      waitTitle: string;
      waitDesc: string;
      freeBadge: string;
      loungeBadge: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    addressTitle: string;
    hoursTitle: string;
    phoneTitle: string;
    emailTitle: string;
    getDirections: string;
    whatsappChat: string;
    callNow: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sentSuccess: string;
    topicLabel: string;
    topics: { id: string; label: string }[];
    drivingTimesTitle: string;
    drivingTimes: { from: string; time: string }[];
  };
  aboutPage: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    photoCaptionTitle: string;
    photoCaptionDesc: string;
    photoBadge: string;
    credoBadge: string;
    credoQuote: string;
    credoDesc: string;
    stats: { value: string; label: string; desc: string }[];
    equipmentTitle: string;
    equipmentDesc: string;
    equipmentList: { title: string; desc: string }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBook: string;
    ctaCall: string;
  };
  servicesPage: {
    badge: string;
    title: string;
    subtitle: string;
    benefitsTitle: string;
    moreDetails: string;
    bookAppointment: string;
    scheduleOverview: string;
    oemGuaranteeNote: string;
  };
  serviceDetailPage: {
    backToList: string;
    duration: string;
    pricing: string;
    benefits: string;
    processTitle: string;
    faqTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    bookNow: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    benefits: string[];
    hours: string;
    quickLinks: string;
    services: string;
    legal: string;
    rights: string;
    impressum: string;
    privacy: string;
    moFr: string;
    sa: string;
    su: string;
    closed: string;
    handcrafted: string;
  };
  mobileActionBar: {
    call: string;
    whatsapp: string;
    book: string;
  };
  legalPages: {
    impressumTitle: string;
    swissLawTitle: string;
    contactTitle: string;
    repPersonTitle: string;
    repPersonRole: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyrightTitle: string;
    copyrightText: string;
    privacyTitle: string;
    validFrom: string;
    sec1Title: string;
    sec1Text: string;
    sec2Title: string;
    sec2Text: string;
    sec3Title: string;
    sec3Text: string;
    sec4Title: string;
    sec4Text: string;
    sec5Title: string;
    sec5Text: string;
    sec6Title: string;
    sec6Text: string;
  };
}

export const translations: Record<Language, Translations> = {
  // ==========================================
  // ENGLISH (en)
  // ==========================================
  en: {
    nav: {
      services: "Services",
      allServices: "All Services",
      about: "About Us",
      contact: "Contact",
      bookNow: "Book Appointment Online",
      callNow: "Call Directly",
      regions: "Region: Limmattal & Zurich",
      emergency: "Roadside Emergency",
      openHoursRadar: "GARAGE OPEN · MON–FRI UNTIL 19:00",
      areaDropdownTitle: "Service Area",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      workshopOpen: "Workshop open",
    },
    hero: {
      badge: "YOUR INDEPENDENT MASTER GARAGE IN LIMMATTAL",
      eyebrow2: "24-MONTH SWISS WARRANTY",
      titleLine1: "SWISS PRECISION.",
      titleHighlight: "FOR ALL CAR MAKES.",
      titleLine2: "Honest, fair & state-of-the-art tech.",
      description:
        "Your specialist on Wagistrasse 7 in Schlieren. We service and repair compliant with strict manufacturer guidelines, full factory warranty protection, transparent fixed pricing, and a free replacement vehicle (0 CHF).",
      ctaBook: "Book Appointment Online",
      ctaCall: "Call Directly",
      ctaServices: "Explore Services",
      ratingText: "4.9 Stars on Google",
      guaranteePill: "24-Month Warranty",
      mobilityPill: "Free Replacement Car",
      allBrandsPill: "All Car Brands",
      trustScore: "4.9 / 5.0",
      trustScoreLabel: "Google Score (120+ Reviews)",
      trustWarranty: "24 Months",
      trustWarrantyLabel: "OEM Parts Warranty",
      trustMobility: "0 CHF",
      trustMobilityLabel: "Free Replacement Car & Bike",
      trustBrands: "100%",
      trustBrandsLabel: "Independent for All Makes",
      brandLabel: "Select Brand Specification:",
      brandData: {
        all: {
          name: "All Makes",
          badge: "INDEPENDENT SPECIALIST",
          protocol: "Manufacturer standard under EU-GVO 461/2010",
          leadTime: "Express slots available today from 13:30",
          mobility: "Free replacement vehicle (0 CHF)",
        },
        porsche: {
          name: "Porsche",
          badge: "OEM PIWIS SPECIFICATION",
          protocol: "GT3, Turbo & Carrera maintenance protocol",
          leadTime: "Express diagnosis & official MFK test",
          mobility: "Premium replacement vehicle included",
        },
        bmw: {
          name: "BMW / M-Power",
          badge: "ISTA / ADAS CALIBRATION",
          protocol: "Digital service history entry (KaSIO / AOS)",
          leadTime: "Immediate OEM parts availability",
          mobility: "Replacement car or e-bike (0 CHF)",
        },
        audi: {
          name: "Audi / VW",
          badge: "ODIS SYSTEM DIAGNOSTICS",
          protocol: "Quattro & DSG / S-Tronic fluid flush",
          leadTime: "Same-day collection guaranteed",
          mobility: "Full mobility guarantee",
        },
        mercedes: {
          name: "Mercedes-Benz",
          badge: "XENTRY DIAGNOSTICS",
          protocol: "AMG & EQ high-voltage certified check",
          leadTime: "Official digital service book entry",
          mobility: "Complimentary replacement mobility",
        },
        tesla: {
          name: "Tesla & EV",
          badge: "HIGH-VOLTAGE CERTIFIED",
          protocol: "Brake service, suspension & AC check",
          leadTime: "EV express service available",
          mobility: "Electric replacement car (0 CHF)",
        },
      },
    },
    valueProps: {
      badge: "SWISS STANDARDS // QUALITY WITHOUT SURCHARGES",
      title: "SWISS QUALITY.",
      titleHighlight: "WITHOUT BRAND MARKUP.",
      subtitle:
        "For over a decade we have been servicing vehicles in the Limmattal. Speak directly to the master technician caring for your vehicle: clear quotes, precise execution, full warranty.",
      props: [
        {
          title: "Honest & Transparent",
          description:
            "Clear upfront quotes without hidden extras. Additional work is always discussed and approved with you beforehand.",
        },
        {
          title: "Mobility Guarantee",
          description:
            "Stay mobile: We provide a free replacement car or e-bike for the entire duration of workshop work.",
        },
        {
          title: "State-of-the-Art Diagnostics",
          description:
            "OEM diagnostic scanners and precision laser rigs for ADAS camera/radar calibration and ECU coding.",
        },
        {
          title: "24-Month Warranty",
          description:
            "We exclusively fit OEM-grade certified spare parts. Your manufacturer factory warranty remains 100% intact.",
        },
      ],
      statRating: "4.9",
      statRatingBadge: "VERIFIED",
      statRatingTitle: "Google Customer Rating",
      statRatingDesc: "Over 120 verified 5-star reviews from Schlieren, Zurich and surroundings.",
      statWarranty: "24M",
      statWarrantyBadge: "GUARANTEE",
      statWarrantyTitle: "Swiss Parts Guarantee",
      statWarrantyDesc: "Comprehensive parts & labor warranty on all repairs and services.",
      statMobility: "0 CHF",
      statMobilityBadge: "FREE MOBILITY",
      statMobilityTitle: "Replacement Vehicle",
      statMobilityDesc: "Complimentary modern replacement vehicle or workshop e-bike.",
      statTech: "ADAS",
      statTechBadge: "CERTIFIED",
      statTechTitle: "Laser Diagnostics",
      statTechDesc: "Computerized wheel alignment, digital radar and forward camera calibration.",
      quoteBadge: "OUR PHILOSOPHY // HONEST & FAIR",
      quoteText:
        "“With us, you speak directly to the technician working on your car. No anonymous front desks, no unpleasant surprises on your invoice.”",
      quoteAuthor: "Bozo Automobile Management, Schlieren",
    },
    services: {
      badge: "SERVICE SPECTRUM // SWISS MASTER STANDARDS",
      title: "WORKSHOP SERVICES.",
      titleHighlight: "TRANSPARENT FIXED PRICING.",
      subtitle:
        "No hidden charges. We digitally document every repair and only charge for work agreed in advance.",
      viewAll: "Explore All Services",
      learnMore: "Learn More",
      bookThisService: "Book This Service",
      includedBenefits: "Included Benefits",
      card1Badge: "SWISS TEST RIG STANDARDS",
      card1Title: "MFK Prep & ADAS Diagnostics",
      card1Price: "from CHF 180.–",
      card1Desc:
        "Complete pre-inspection, chassis cleaning, headlight laser adjustment, brake test, and direct presentation at the cantonal road traffic licensing authority.",
      card1Features: [
        "100% MFK pass rate guaranteed",
        "Chassis wash & leak testing",
        "Digital headlight and brake test rig",
        "Official presentation at Strassenverkehrsamt",
      ],
      card1CtaDetail: "Full Service Details",
      card1CtaBook: "Book MFK Prep",
      card2Badge: "FACTORY WARRANTY PRESERVED",
      card2Title: "Routine Service & Inspections",
      card2Desc:
        "Oil service, filter changes, spark plugs, and brake fluid strictly adhering to manufacturer specifications.",
      card2Points: [
        "Digital service book entry for all brands",
        "Comprehensive 50-point safety check",
        "Free replacement vehicle included",
      ],
      card3Badge: "INSURANCE DIRECT BILLING",
      card3Title: "Bodywork, Dent Repair & Paint",
      card3Desc:
        "Flawless paint finishes, dent pulling, windshield repair, and direct insurance claims coordination.",
      card3Points: [
        "Exact computerized color matching",
        "Direct billing with all Swiss insurers",
        "Zero deductible assistance available",
      ],
      card4Badge: "HIGH SAFETY STANDARD",
      card4Title: "Brakes & Suspension Tuning",
      card4Desc:
        "Brembo and OEM brake disc replacement, shock absorbers, KW coilover suspension installation, and wheel alignment.",
      card4Points: [
        "Computerized laser wheel geometry",
        "Performance brake pad upgrades",
        "Official Swiss homologation entries",
      ],
      card5Badge: "COMFORT & ELECTRONICS",
      card5Title: "Air Conditioning, Tires & Tuning",
      card5Desc:
        "R134a & R1234yf AC recharge, ozone odor disinfection, seasonal tire changes, and custom tuning.",
      card5Points: [
        "Seasonal tire hotel storage available",
        "Antibacterial AC ventilation purge",
        "Diagnostic ECU coding & sensor calibration",
      ],
    },
    calculator: {
      title: "Service & Cost Calculator",
      subtitle: "Select your vehicle and package for an instant indicative estimate without surprises.",
      selectVehicle: "1. Select Vehicle Category",
      vehicleTypes: {
        compact: "Compact / Small Car",
        limousine: "Sedan / Estate Wagon",
        suv: "SUV / Minivan",
        electric: "Electric & Hybrid Vehicle",
      },
      selectPackage: "2. Select Service Package",
      estimatedCost: "Indicative Estimate",
      fromPrice: "from approx.",
      duration: "Typical Turnaround",
      bookPackage: "Reserve This Package",
      recommended: "RECOMMENDED",
      oemCompliant: "Compliant with manufacturer guidelines",
      freeMobilityPill: "Free replacement car (0 CHF) included",
    },
    reviews: {
      badge: "CUSTOMER FEEDBACK // VERIFIED REVIEWS",
      title: "WHAT OUR CLIENTS SAY",
      subtitle: "Over 100 verified Google reviews with an outstanding 4.9 out of 5.0 rating.",
      basedOn: "Based on genuine customer feedback in Schlieren & Zurich",
      leaveReview: "Write a Google Review",
      verifiedBadge: "VERIFIED GOOGLE REVIEW",
      customerVehicle: "Customer Vehicle",
    },
    beforeAfter: {
      badge: "PROOF OF QUALITY // INSPECTION PROTOCOLS",
      title: "WORKSHOP PROTOCOLS & RESULTS",
      subtitle: "Precision engineering, verifiable diagnostic scans, and documented repairs.",
      labelBefore: "Before (Damaged)",
      labelAfter: "After (Restored)",
      dragHint: "Drag slider to inspect repair quality",
      slips: [
        {
          id: "mfk",
          title: "MFK INSPECTION REPORT",
          category: "Inspection Slip No. 8952-MFK // Schlieren",
          status: "100% PASSED",
          lines: [
            "Brake dynamometer: Front axle 2.8 / 2.7 kN (deviation only 3.5%)",
            "Parking brake: 1.9 / 1.8 kN (flawless)",
            "Headlight alignment: Laser-calibrated to 1.2% downward gradient",
            "Underbody & seals: Power washed, 0.0 mg fluid leakage",
            "Result: Approved for official cantonal presentation",
          ],
        },
        {
          id: "obd",
          title: "OBD DEEP DIAGNOSTIC SCAN",
          category: "Bosch KTS & OEM scanner read-out",
          status: "0 FAULTS STORED",
          lines: [
            "Engine & transmission ECU: No static fault codes stored",
            "Diesel particulate filter (DPF): Soot load 12% (successfully regenerated)",
            "ADAS camera sensor: Calibrated following windshield replacement",
            "Battery state of health (SoH): 96% nominal capacity",
            "Service interval reset: Configured to next 30,000 km",
          ],
        },
        {
          id: "audatex",
          title: "COST TRANSPARENCY RECEIPT",
          category: "Audatex Swiss benchmark pricing system",
          status: "FIXED PRICE GUARANTEED",
          lines: [
            "Labor hours: Calculated strictly according to manufacturer flat-rate units",
            "Spare parts: Genuine OEM-certified Brembo / Bosch component kits",
            "Additional repairs: None performed without prior phone authorization",
            "Insurance settlement: Direct settlement with Swiss insurer",
            "Warranty: Full 24-month parts warranty bonded",
          ],
        },
        {
          id: "mobilitaet",
          title: "MOBILITY HANDOVER SLIP",
          category: "Free courtesy vehicle // Schlieren station",
          status: "0 CHF BILLED",
          lines: [
            "Courtesy car: Clean, fully insured, full tank provided",
            "Alternative mobility: High-speed workshop e-bike available",
            "Key drop safe: 24/7 PIN code key locker active",
            "Return: Pick up after work until 19:00",
            "Fuel policy: Simply return refueled with amount used",
          ],
        },
      ],
    },
    faqs: {
      badge: "KNOWLEDGE & TRANSPARENCY // FAQ",
      title: "FREQUENTLY ASKED QUESTIONS",
      subtitle: "Clear answers to your questions about warranties, pricing, and workshop procedures.",
      stillQuestions: "Have an individual question?",
      askDirectly: "Call us directly or message our master technicians via WhatsApp.",
      directCall: "Direct Call",
      items: [
        {
          tab: "Factory Warranty",
          question: "Does my official manufacturer warranty remain fully valid with you?",
          answer:
            "Yes, 100%. Under Swiss and European law (EU-GVO 461/2010), your statutory manufacturer warranty is fully preserved when maintenance is performed according to OEM specifications. We record every service entry directly in the manufacturer digital service record (e.g. BMW, Mercedes, Audi, VW, Porsche).",
        },
        {
          tab: "Free Courtesy Car",
          question: "How much does the replacement vehicle cost during repairs?",
          answer:
            "Exactly 0 CHF. We provide a modern replacement car or workshop e-bike free of charge for the entire duration of your service. You only return it refueled with whatever fuel you used.",
        },
        {
          tab: "Insurance Billing",
          question: "Do you bill directly with my insurance for accident or glass damage?",
          answer:
            "Yes. We take care of damage assessment, official estimates, and direct billing with all Swiss insurance providers (e.g. AXA, Mobiliar, Zurich, Allianz, Helvetia, Generali). You don't have to advance any money.",
        },
        {
          tab: "24-Month Warranty",
          question: "What parts are fitted and how long does the warranty last?",
          answer:
            "We fit genuine OEM parts or certified premier brand components (Bosch, Brembo, Continental, Mahle). All installed parts and repairs come with a full 24-month warranty.",
        },
        {
          tab: "Late Pickup until 19:00",
          question: "Can I pick up my vehicle late after work?",
          answer:
            "Yes, gladly. Our workshop on Wagistrasse 7 in Schlieren is open on weekdays until 19:00. For pick-ups outside business hours, our secure 24/7 key safe with personal PIN code is always available.",
        },
      ],
    },
    location: {
      badge: "LOCATION TERMINAL // LIMMATTAL",
      title: "BOZO AUTOMOBILE SCHLIEREN",
      freeParking: "Free customer parking spaces directly in front of the workshop door",
      drivingTimesTitle: "Driving times to our workshop:",
      drivingTimes: [
        { from: "Schlieren Center / Railway Station", time: "2 min" },
        { from: "Unterengstringen", time: "4 min" },
        { from: "Dietikon & Urdorf", time: "6 min" },
        { from: "Zurich Altstetten", time: "7 min" },
      ],
      keyDropTitle: "24/7 Electronic Key Safe",
      keyDropDesc: "Drop off or pick up your keys anytime around the clock with your personal PIN code.",
      directionsBtn: "Open in Google Maps",
      expressRoute: "Direct access via Bernstrasse / A1 Motorway exit Dietikon-Schlieren.",
    },
    emergency: {
      badge: "EXPRESS DIAGNOSTICS // LIMMATTAL ROADSIDE",
      title: "ACUTE BREAKDOWN & ROADSIDE ASSISTANCE",
      desc: "Vehicle not drivable, unusual noises or engine check warning light active? Call us immediately for rapid triage and towing coordination.",
      button: "Breakdown Hotline: +41 79 577 25 47",
      whatsAppBtn: "Instant WhatsApp Chat",
    },
    booking: {
      badge: "ONLINE APPOINTMENT // WORKSHOP CONFIGURATOR",
      title: "BOOK YOUR APPOINTMENT ONLINE.",
      titleHighlight: "IN 4 SIMPLE STEPS.",
      subtitle:
        "Select your desired service and preferred date. Our team will promptly confirm your booking and reserve your free courtesy vehicle (0 CHF).",
      guaranteePill: "24-Month Warranty",
      keySafePill: "24/7 Key Locker",
      mobilityPill: "0 CHF Replacement Car",
      step1Title: "Service",
      step1Desc: "What do you need?",
      step2Title: "Vehicle",
      step2Desc: "Make & mobility",
      step3Title: "Schedule",
      step3Desc: "Preferred date",
      step4Title: "Contact",
      step4Desc: "Your details",
      selectService: "Select Desired Service(s)",
      vehicleBrand: "Car Make (e.g. BMW, Mercedes, VW, Tesla)",
      vehicleModel: "Model & Year (e.g. Golf VII, 2019)",
      licensePlate: "License Plate (e.g. ZH 123456)",
      mobilityChoice: "Do you require replacement mobility?",
      brandShortcuts: ["BMW", "Audi", "Mercedes", "Porsche", "VW", "Tesla", "Skoda", "Volvo", "Other"],
      mobilityOptions: {
        none: "No replacement needed (I will pick up later)",
        car: "Free replacement car requested (0 CHF)",
        bike: "Workshop e-bike requested (0 CHF)",
        wait: "I will wait on-site in the customer lounge",
      },
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time of Day",
      timeSlots: {
        morning: "Morning (08:00 – 12:00)",
        afternoon: "Afternoon (13:00 – 18:00)",
        flexible: "Flexible throughout the day",
      },
      fullName: "Full Name",
      phone: "Phone Number (for confirmation & updates)",
      email: "Email Address",
      notes: "Notes or Damage Description",
      notesPlaceholder: "Briefly describe symptoms, noises, dashboard warning lights or specific requests...",
      submit: "Submit Appointment Request",
      submitting: "Submitting...",
      successTitle: "Thank You for Your Booking Request!",
      successDesc:
        "We have received your details. Our workshop manager will review availability and confirm your appointment promptly.",
      whatsappConfirm: "Contact us via WhatsApp for instant inquiries",
      bookAnother: "Book Another Service",
      back: "Back",
      next: "Continue",
      errSelectService: "Please select at least one desired service.",
      errBrandRequired: "Please enter your vehicle make.",
      errDateRequired: "Please select a preferred date.",
      errContactRequired: "Please provide your name and phone number.",
      summaryTitle: "Booking Summary",
      summaryServices: "Selected Services",
      summaryVehicle: "Vehicle",
      summaryMobility: "Mobility",
      summaryDate: "Date",
      summaryTime: "Time Slot",
      loadingAssistant: "Loading booking assistant...",
      step1Badge: "STEP 01 // SCOPE OF WORK",
      step1DescLong: "Select one or more desired workshop services.",
      customServiceTitle: "Custom Inquiry / Diagnostics",
      customServiceDesc: "Noise diagnostics, pre-purchase inspection or custom retrofits.",
      step2Badge: "STEP 02 // VEHICLE & MOBILITY",
      step2DescLong: "Accurate details allow us to reserve matching OEM parts in advance.",
      popularBrands: "Popular Car Makes",
      brandPlaceholder: "e.g. BMW, Audi, VW, Porsche",
      modelPlaceholder: "e.g. Golf 7, 3 Series Touring, Macan",
      platePlaceholder: "e.g. ZH 123456 (for direct type approval identification)",
      step3Badge: "STEP 03 // APPOINTMENT & TIMEFRAME",
      step3DescLong: "Select your preferred drop-off day at Wagistrasse 7.",
      keySafeNoticeTitle: "24h Key Locker available:",
      keySafeNoticeDesc: "Vehicle drop-off and key handover are possible 24/7 without contact outside business hours.",
      step4Badge: "STEP 04 // CONTACT & COMPLETION",
      step4DescLong: "For written booking confirmation and phone follow-ups.",
      privacyGuarantee: "Confidential under Swiss Data Protection Act (FADP). Never shared with third parties.",
      submitBtn: "Request Appointment Now",
      bookingRefBadge: "BOOKING REFERENCE //",
      receiptCustomer: "Customer:",
      receiptVehicle: "Vehicle:",
      receiptDate: "Preferred Date:",
      receiptMobility: "Courtesy Mobility:",
      downloadCalendar: "Calendar Entry (.ics)",
      whatsappConfirmBtn: "Confirm via WhatsApp",
      mobilityCards: {
        carTitle: "0 CHF Replacement Car",
        carDesc: "Fully comprehensive insurance included",
        bikeTitle: "0 CHF Workshop E-Bike",
        bikeDesc: "Fully charged for city commuting",
        noneTitle: "No Replacement Mobility",
        noneDesc: "Parked on-site for later pickup",
        waitTitle: "Lounge & Espresso",
        waitDesc: "Quick express service on-site",
        freeBadge: "Free",
        loungeBadge: "Lounge Area",
      },
    },
    contact: {
      badge: "DIRECT CONTACT // SCHLIEREN WORKSHOP",
      title: "CONTACT & LOCATION.",
      titleHighlight: "ALWAYS HERE FOR YOU.",
      subtitle:
        "Visit our workshop in Schlieren. Conveniently situated in the Limmattal, just minutes from Zurich.",
      addressTitle: "Workshop Location",
      hoursTitle: "Opening Hours",
      phoneTitle: "Phone & Hotline",
      emailTitle: "Email Address",
      getDirections: "Get Directions on Google Maps",
      whatsappChat: "Chat on WhatsApp",
      callNow: "Direct Hotline",
      formTitle: "Send a Message",
      formSubtitle: "Have questions or need a personalized quote? Get in touch with our team directly.",
      nameLabel: "Your Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address (optional)",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      sentSuccess: "Thank you! Your message has been sent successfully. We will reply promptly.",
      topicLabel: "Inquiry Topic",
      topics: [
        { id: "allgemein", label: "General Inquiry" },
        { id: "offerte", label: "Cost Estimate / Quote" },
        { id: "versicherung", label: "Insurance / Damage Claim" },
        { id: "mfk", label: "MFK Prep & Diagnostics" },
      ],
      drivingTimesTitle: "Fast accessibility from the region:",
      drivingTimes: [
        { from: "Schlieren Station", time: "2 min" },
        { from: "Unterengstringen", time: "4 min" },
        { from: "Dietikon & Urdorf", time: "6 min" },
        { from: "Zurich Altstetten", time: "7 min" },
      ],
    },
    aboutPage: {
      badge: "THE WORKSHOP // SWISS MASTER CRAFTSMANSHIP",
      title: "CRAFTSMANSHIP WITH CHARACTER.",
      titleHighlight: "SWISS MASTER GARAGE.",
      subtitle:
        "Bozo Automobile was founded on a passion for outstanding mechanics and the commitment to offer personalized service with state-of-the-art diagnostic technology.",
      photoCaptionTitle: "WAGISTRASSE 7 // SCHLIEREN (ZURICH)",
      photoCaptionDesc: "Diagnostic test lane · 4.5-ton hydraulic lifts · ADAS optical camera calibration",
      photoBadge: "INDEPENDENT FOR OVER 10 YEARS",
      credoBadge: "OUR PHILOSOPHY // HONEST AND FAIR",
      credoQuote:
        "“With us, you speak directly to the technician who works on your vehicle. No anonymous front desks, no unexpected surprise charges.”",
      credoDesc:
        "We are proud to serve drivers across Schlieren, Unterengstringen, Dietikon, and Zurich with honest craftsmanship and full warranty preservation.",
      stats: [
        { value: "10+", label: "Years in Limmattal", desc: "Reliable service for thousands of local vehicle owners." },
        { value: "4.9★", label: "Google Rating", desc: "Over 120 verified reviews from satisfied customers." },
        { value: "24M", label: "Parts Warranty", desc: "Complete guarantee on all new OEM components fitted." },
        { value: "0 CHF", label: "Replacement Car", desc: "Free courtesy vehicle or e-bike with every booking." },
      ],
      equipmentTitle: "Modern Workshop Equipment",
      equipmentDesc:
        "We continually invest in manufacturer-certified tools and calibration rigs to service the latest models, EVs, and classics.",
      equipmentList: [
        { title: "OEM Diagnostic Scanners", desc: "Bosch KTS, ODIS, ISTA, PIWIS and XENTRY system diagnosis." },
        { title: "Laser Wheel Alignment", desc: "Millimeter-precise 3D laser alignment for ideal handling and tire wear." },
        { title: "ADAS Calibration Rig", desc: "Official camera and radar calibration following windshield or bumper repairs." },
        { title: "Air Conditioning Service Station", desc: "Certified recovery and recharging for both R134a and R1234yf refrigerants." },
      ],
      ctaTitle: "Experience Transparent Car Care",
      ctaDesc: "Book your service online today or drop by our workshop on Wagistrasse 7 in Schlieren.",
      ctaBook: "Book Appointment Online",
      ctaCall: "Call Directly",
    },
    servicesPage: {
      badge: "INDEPENDENT MASTER WORKSHOP",
      title: "Our Services & Capabilities",
      subtitle:
        "From quick tire replacements to complex collision repair and electronic sensor calibration. Discover our full spectrum of workshop services.",
      benefitsTitle: "Your Benefits:",
      moreDetails: "Full Service Details",
      bookAppointment: "Request Appointment",
      scheduleOverview: "All work is scheduled transparently with clear cost caps prior to starting.",
      oemGuaranteeNote: "Full manufacturer warranty preserved on all makes and models under EU/Swiss regulations.",
    },
    serviceDetailPage: {
      backToList: "Back to Services Overview",
      duration: "Typical Turnaround:",
      pricing: "Indicative Pricing:",
      benefits: "Included Benefits",
      processTitle: "Step-by-Step Procedure",
      faqTitle: "Frequently Asked Questions about this Service",
      ctaTitle: "Ready to Book This Service?",
      ctaDesc: "Schedule your preferred appointment online with free courtesy car, or contact our team directly.",
      bookNow: "Book This Service",
      callNow: "Call Directly",
    },
    footer: {
      tagline: "Your dependable master garage for Schlieren, Unterengstringen, and greater Zurich.",
      description:
        "Independent Swiss master garage in Schlieren. Honest, transparent, and dependable for over a decade.",
      benefits: [
        "24-Month Swiss parts warranty",
        "0 CHF Free replacement car & e-bike",
        "100% Full factory warranty preservation",
      ],
      hours: "Opening Hours",
      quickLinks: "Quick Links",
      services: "Services",
      legal: "Legal",
      rights: "All rights reserved.",
      impressum: "Legal Notice",
      privacy: "Privacy Policy",
      moFr: "Mon – Fri: 08:00 – 12:00 | 13:00 – 19:00",
      sa: "Sat: 08:30 – 14:00",
      su: "Sun: Closed",
      closed: "Closed",
      handcrafted: "Precision car care crafted for Bozo Automobile",
    },
    mobileActionBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      book: "Appointment",
    },
    legalPages: {
      impressumTitle: "Legal Notice",
      swissLawTitle: "Information Pursuant to Swiss Law",
      contactTitle: "Contact Information",
      repPersonTitle: "Authorized Representative",
      repPersonRole: "Management Bozo Automobile",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "The author assumes no liability for the accuracy, correctness, timeliness, reliability, or completeness of the information provided. Liability claims against the author for material or immaterial damages resulting from access to, use of, or non-use of the published information, misuse of the connection, or technical faults are excluded.",
      copyrightTitle: "Copyright",
      copyrightText: "Copyrights and all other rights related to texts, images, photos, or other files on this website belong exclusively to Bozo Automobile or the specifically named rights holders. Written consent must be obtained in advance from the copyright holders for the reproduction of any elements.",
      privacyTitle: "Privacy Policy",
      validFrom: "Effective as of: September 1, 2023 (in compliance with the revised Swiss Federal Act on Data Protection, FADP).",
      sec1Title: "1. Data Controller",
      sec1Text: "The entity responsible for data processing on this website is:",
      sec2Title: "2. Collection and Processing of Personal Data",
      sec2Text: "We primarily process personal data that we obtain from you within the framework of our business relationship (service bookings, repair orders, cost estimates, courtesy car contracts) or that is collected during the operation of our website.",
      sec3Title: "3. Purposes of Data Processing",
      sec3Text: "We utilize collected personal data primarily to enter into and execute contracts with our clients and partners (notably automotive repairs, MFK inspection preparations, insurance claim settlements), as well as to communicate reliably with you.",
      sec4Title: "4. Online Appointment Booking & Contact Form",
      sec4Text: "When you use our online booking tool or contact form, the details you enter (full name, phone number, email address, vehicle specifications, license plate) are used exclusively for handling your inquiry and fulfilling the workshop service. No data is shared with unauthorized third parties.",
      sec5Title: "5. Data Security",
      sec5Text: "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, or misuse, including SSL/TLS encryption across all transmitted data.",
      sec6Title: "6. Your Rights",
      sec6Text: "Subject to applicable data protection laws, you retain the right to information, rectification, erasure, and restriction of processing. To exercise these rights, you may contact us at any time at ",
    },
  },

  // ==========================================
  // DUTCH (nl)
  // ==========================================
  nl: {
    nav: {
      services: "Diensten",
      allServices: "Alle Diensten",
      about: "Over Ons",
      contact: "Contact",
      bookNow: "Online Afspraak Maken",
      callNow: "Direct Bellen",
      regions: "Regio: Limmattal & Zürich",
      emergency: "Pechhulp & Noodgeval",
      openHoursRadar: "WERKPLAATS OPEN · MA–VR TOT 19:00",
      areaDropdownTitle: "Werkgebied",
      menuOpen: "Menu openen",
      menuClose: "Menu sluiten",
      workshopOpen: "Werkplaats geopend",
    },
    hero: {
      badge: "UW MERKONAFHANKELIJKE MEESTERWERKPLAATS IN LIMMATTAL",
      eyebrow2: "24 MAANDEN ZWITSERSE GARANTIE",
      titleLine1: "ZWITSERSE PRECISIE.",
      titleHighlight: "VOOR ALLE AUTOMERKEN.",
      titleLine2: "Eerlijk, betrouwbaar & modernste techniek.",
      description:
        "Uw specialist aan de Wagistrasse 7 in Schlieren. Wij onderhouden en repareren volgens strikte fabrieksvoorschriften met behoud van fabrieksgarantie, transparante vaste prijzen en een gratis vervangende auto (0 CHF).",
      ctaBook: "Online Afspraak Boeken",
      ctaCall: "Nu Bellen",
      ctaServices: "Diensten Bekijken",
      ratingText: "4.9 Sterren op Google",
      guaranteePill: "24 Maanden Garantie",
      mobilityPill: "Gratis Vervangende Auto",
      allBrandsPill: "Alle Automerken",
      trustScore: "4.9 / 5.0",
      trustScoreLabel: "Google Score (120+ Beoordelingen)",
      trustWarranty: "24 Maanden",
      trustWarrantyLabel: "Garantie op Onderdelen",
      trustMobility: "0 CHF",
      trustMobilityLabel: "Gratis Leenauto & E-Bike",
      trustBrands: "100%",
      trustBrandsLabel: "Onafhankelijk voor Alle Merken",
      brandLabel: "Kies Merkspecificatie:",
      brandData: {
        all: {
          name: "Alle Merken",
          badge: "MERKONAFHANKELIJK",
          protocol: "Fabrieksvoorschrift conform EG-GVO 461/2010",
          leadTime: "Vandaag vanaf 13:30 express-plaatsen beschikbaar",
          mobility: "Gratis leenauto (0 CHF)",
        },
        porsche: {
          name: "Porsche",
          badge: "OEM PIWIS SPECIFICATIE",
          protocol: "GT3, Turbo & Carrera onderhoudsprotocol",
          leadTime: "Express diagnose & MFK/APK keuring",
          mobility: "Premium leenauto inbegrepen",
        },
        bmw: {
          name: "BMW / M-Power",
          badge: "ISTA / ADAS KALIBRATIE",
          protocol: "Digitaal serviceboekje registratie (KaSIO / AOS)",
          leadTime: "Directe beschikbaarheid van onderdelen",
          mobility: "Leenauto of e-bike (0 CHF)",
        },
        audi: {
          name: "Audi / VW",
          badge: "ODIS SYSTEEMDIAGNOSE",
          protocol: "Quattro & DSG / S-Tronic transmissiespoeling",
          leadTime: "Dezelfde dag weer rijklaar",
          mobility: "Volledige mobiliteitsgarantie",
        },
        mercedes: {
          name: "Mercedes-Benz",
          badge: "XENTRY DIAGNOSTIEK",
          protocol: "AMG & EQ hoogvolt-gecertificeerde inspectie",
          leadTime: "Officiële digitale registratie in DSB",
          mobility: "Kosteloze vervangende mobiliteit",
        },
        tesla: {
          name: "Tesla & EV",
          badge: "HOOGVOLT GECERTIFICEERD",
          protocol: "Remmenonderhoud, onderstel & airco-check",
          leadTime: "EV express service beschikbaar",
          mobility: "Elektrische leenauto (0 CHF)",
        },
      },
    },
    valueProps: {
      badge: "ZWITSERSE NORMEN // KWALITEIT ZONDER MERKTOESLAG",
      title: "ZWITSERSE KWALITEIT.",
      titleHighlight: "ZONDER MERKTOESLAG.",
      subtitle:
        "Al meer dan tien jaar onderhouden en repareren wij voertuigen in het Limmattal. Bij ons spreekt u rechtstreeks met de meestermonteur die aan uw auto sleutelt: helder berekend, uiterst nauwkeurig en met volledige garantie.",
      props: [
        {
          title: "Eerlijk & Transparant",
          description:
            "Duidelijke prijsopgaven zonder verborgen kosten. Elk extra werk wordt vooraf persoonlijk met u besproken en goedgekeurd.",
        },
        {
          title: "Mobiliteitsgarantie",
          description:
            "Blijf mobiel: Voor de duur van de reparatie stellen wij u graag een gratis leenauto of een e-bike ter beschikking.",
        },
        {
          title: "Modernste Diagnosetechniek",
          description:
            "Fabrieksconforme diagnoseapparatuur en precisielasers voor ADAS camera-/radarkalibratie en coderen van regelapparaten.",
        },
        {
          title: "24 Maanden Garantie",
          description:
            "Wij monteren uitsluitend onderdelen in originele fabriekskwaliteit. De fabrieksgarantie van uw auto blijft 100% behouden.",
        },
      ],
      statRating: "4.9",
      statRatingBadge: "GEVERIFIEERD",
      statRatingTitle: "Google Klanttevredenheid",
      statRatingDesc: "Meer dan 120 onafhankelijke 5-sterren reviews uit Schlieren, Zürich en omstreken.",
      statWarranty: "24M",
      statWarrantyBadge: "GARANTIE",
      statWarrantyTitle: "Zwitserse Onderdelengarantie",
      statWarrantyDesc: "Volledige garantie op alle geplaatste onderdelen en werkzaamheden.",
      statMobility: "0 CHF",
      statMobilityBadge: "GRATIS MOBILITEIT",
      statMobilityTitle: "Vervangend Voertuig",
      statMobilityDesc: "Kosteloze moderne leenauto of werkplaats e-bike ter beschikking.",
      statTech: "ADAS",
      statTechBadge: "GECERTIFICEERD",
      statTechTitle: "Laserdiagnostiek",
      statTechDesc: "Computergestuurde uitlijning en digitale radar- en camerakalibratie.",
      quoteBadge: "ONZE FILOSOFIE // EERLIJK EN RECHT DOOR ZEE",
      quoteText:
        "“Bij ons praat u direct met de vakman die aan uw auto werkt. Geen anonieme balies, geen onaangename verrassingen op de factuur.”",
      quoteAuthor: "Directie Bozo Automobile, Schlieren",
    },
    services: {
      badge: "DIENSTENPAKKET // ZWITSERSE MEESTERSTANDAARD",
      title: "WERKPLAATSDIENSTEN.",
      titleHighlight: "TRANSPARANTE VASTE PRIJZEN.",
      subtitle:
        "Geen verborgen posten. Wij documenteren elke ingreep digitaal en berekenen uitsluitend wat vooraf bindend is afgesproken.",
      viewAll: "Alle Diensten Bekijken",
      learnMore: "Meer Weten",
      bookThisService: "Deze Dienst Boeken",
      includedBenefits: "Inbegrepen Voordelen",
      card1Badge: "ZWITSERSE TESTBANKNORMEN",
      card1Title: "MFK/Keuring & ADAS Diagnostiek",
      card1Price: "vanaf CHF 180.–",
      card1Desc:
        "Volledige voorkeuring, reiniging van de onderzijde, laserafstelling van koplampen, remmentest en officiële aanbieding bij de keuringsinstantie.",
      card1Features: [
        "100% slagingsgarantie bij keuring",
        "Chassisreiniging & dichtheidscontrole",
        "Digitale koplamp- en remmentestbank",
        "Officiële keuringsrit voor het keuringsstation",
      ],
      card1CtaDetail: "Gedetailleerde Informatie",
      card1CtaBook: "Keuring Boeken",
      card2Badge: "MET BEHOUD VAN FABRIEKSGARANTIE",
      card2Title: "Onderhoudsbeurt & Inspecties",
      card2Desc:
        "Olieservice, filtervervanging, bougies en remvloeistof strikt volgens de specificaties van de autofabrikant.",
      card2Points: [
        "Registratie in digitaal onderhoudsboekje van alle merken",
        "Uitgebreide 50-punts veiligheidsinspectie",
        "Inclusief gratis leenauto",
      ],
      card3Badge: "DIRECTE VERZEKERINGSAFWIKKELING",
      card3Title: "Carrosserie, Schadeherstel & Spuitwerk",
      card3Desc:
        "Strak spuitwerk, uitdeuken zonder spuiten, ruitreparatie en directe afhandeling met alle verzekeraars.",
      card3Points: [
        "Exacte computergestuurde kleuranalyse",
        "Rechtstreekse facturatie aan alle verzekeraars",
        "Hulp bij eigen risico mogelijk",
      ],
      card4Badge: "HOOGSTE VEILIGHEIDSSTANDAARD",
      card4Title: "Remservice & Ondersteltechniek",
      card4Desc:
        "Vervanging van remschijven (Brembo/OEM), schokdempers, montage van KW-schroefsets en laseruitlijning.",
      card4Points: [
        "Computergestuurde 3D-wieluitlijning",
        "Performance remupgrades",
        "Officiële typegoedkeuringen en keuringseisen",
      ],
      card5Badge: "COMFORT & ELEKTRONICA",
      card5Title: "Aircoservice, Banden & Tuning",
      card5Desc:
        "Aircovulling R134a & R1234yf, ozon-geurneutralisatie, seizoensgebonden bandenwissel en softwaretuning.",
      card5Points: [
        "Seizoensgebonden bandenhotel beschikbaar",
        "Antibacteriële aircoreiniging",
        "Diagnostische regeleenheidcodering",
      ],
    },
    calculator: {
      title: "Service- & Kostenberekening",
      subtitle: "Kies uw autotype en gewenste pakket voor een directe indicatie zonder verrassingen.",
      selectVehicle: "1. Kies Voertuigcategorie",
      vehicleTypes: {
        compact: "Compacte Auto / Hatchback",
        limousine: "Sedan / Stationwagen",
        suv: "SUV / Crossover / MPV",
        electric: "Elektrisch & Hybride Voertuig",
      },
      selectPackage: "2. Kies Onderhoudspakket",
      estimatedCost: "Prijsindicatie",
      fromPrice: "vanaf ca.",
      duration: "Typische Tijdsduur",
      bookPackage: "Dit Pakket Reserveren",
      recommended: "AANBEVOLEN",
      oemCompliant: "Conform fabrieksvoorschriften",
      freeMobilityPill: "Gratis leenauto (0 CHF) inbegrepen",
    },
    reviews: {
      badge: "KLANTERVARINGEN // BEOORDELINGEN",
      title: "WAT ONZE KLANTEN VERTELLEN",
      subtitle: "Meer dan 100 geverifieerde Google-reviews met een topscore van 4.9 uit 5.0 sterren.",
      basedOn: "Gebaseerd op echte klantbeoordelingen in Schlieren & Zürich",
      leaveReview: "Schrijf een Google Review",
      verifiedBadge: "GEVERIFIEERDE GOOGLE REVIEW",
      customerVehicle: "Klantvoertuig",
    },
    beforeAfter: {
      badge: "BEWIJS VAN VAKWERK // TESTPROTOCOLLEN",
      title: "TESTPROTOCOLLEN & RESULTATEN",
      subtitle: "Uiterste precisie, inzichtelijke diagnosescans en gedocumenteerd vakwerk.",
      labelBefore: "Vooraf (Beschadigd)",
      labelAfter: "Achteraf (Hersteld)",
      dragHint: "Verschuif de regelaar om het resultaat te inspecteren",
      slips: [
        {
          id: "mfk",
          title: "OFFICIEEL KEURINGSRAPPORT",
          category: "Keuringsverslag Nr. 8952-MFK // Schlieren",
          status: "100% GOEDGEKEURD",
          lines: [
            "Remmentestbank: Vooras 2.8 / 2.7 kN (afwijking slechts 3.5%)",
            "Handrem: 1.9 / 1.8 kN (uitmuntend)",
            "Koplampafstelling: Met laser afgesteld op 1.2% daling",
            "Onderzijde & pakkingen: Gewassen, 0.0 mg olieverlies",
            "Resultaat: Vrijgegeven voor officiële keuring",
          ],
        },
        {
          id: "obd",
          title: "OBD DIEPTESTORINGSDIAGNOSE",
          category: "Systeemscan Bosch KTS & OEM-tester",
          status: "0 STORINGEN AANWEZIG",
          lines: [
            "Motor- & transmissiemodule: Geen statische foutcodes",
            "Roetfilter (DPF): Roetbelading 12% (succesvol geregenereerd)",
            "ADAS camerasensor: Gekalibreerd na ruitvervanging",
            "Batterijconditie (SoH): 96% van nominale capaciteit",
            "Service-interval: Gereset naar volgende 30.000 km",
          ],
        },
        {
          id: "audatex",
          title: "KOSTENTRANSPARANTIE FACTUUR",
          category: "Audatex Zwitsers richtprijzensysteem",
          status: "VASTE PRIJS GEGARANDEERD",
          lines: [
            "Arbeidstijd: Exact volgens fabrieksnorm berekend",
            "Onderdelen: Origineel gecertificeerde Brembo / Bosch onderdelenset",
            "Extra werkzaamheden: Geen uitvoering zonder telefonisch akkoord",
            "Verzekering: Rechtstreekse afrekening met verzekeraar",
            "Garantie: 24 maanden volledige garantie op alle nieuwe delen",
          ],
        },
        {
          id: "mobilitaet",
          title: "MOBILITEITSOVERDRACHT",
          category: "Gratis leenvoertuig // Schlieren",
          status: "0 CHF IN REKENING GEBRACHT",
          lines: [
            "Leenauto: Schoon, omnium verzekerd, volle tank meegekregen",
            "Alternatieve mobiliteit: Krachtige werkplaats e-bike ter beschikking",
            "Sleutelkluis: 24/7 sleutelkluis met pincode operationeel",
            "Retour: Ophalen na het werk tot 19:00",
            "Brandstofbeleid: Eenvoudig weer voltanken met verbruikte brandstof",
          ],
        },
      ],
    },
    faqs: {
      badge: "KENNIS & TRANSPARANTIE // VEELGESTELDE VRAGEN",
      title: "VEELGESTELDE VRAGEN",
      subtitle: "Heldere antwoorden op uw vragen over garantie, tarieven en werkplaatsprocedures.",
      stillQuestions: "Heeft u een specifieke vraag?",
      askDirectly: "Bel ons direct of stuur een bericht via WhatsApp naar onze meestermonteurs.",
      directCall: "Direct Bellen",
      items: [
        {
          tab: "Fabrieksgarantie",
          question: "Blijft mijn officiële fabrieksgarantie bij jullie 100% behouden?",
          answer:
            "Ja, voor de volle 100%. Volgens Zwitsers en Europees recht (EG-GVO 461/2010) blijft de wettelijke fabrieksgarantie volledig intact wanneer onderhoud volgens fabrieksvoorschriften wordt uitgevoerd. Wij registreren elke onderhoudsbeurt direct in het digitale fabrieksserviceboekje (bijv. BMW, Mercedes, Audi, VW, Porsche).",
        },
        {
          tab: "Gratis Leenauto",
          question: "Wat kost de vervangende auto tijdens de reparatieduur?",
          answer:
            "Exact 0 CHF. Wij stellen u voor de gehele duur van het werkplaatsverblijf kosteloos een moderne leenauto of een werkplaats e-bike ter beschikking. U brengt deze simpelweg met dezelfde hoeveelheid brandstof weer terug.",
        },
        {
          tab: "Verzekeringsafhandeling",
          question: "Handelen jullie schade rechtstreeks af met mijn verzekering?",
          answer:
            "Ja. Wij verzorgen het volledige schaderapport, de expertise en de directe facturatie met alle Zwitserse verzekeringsmaatschappijen (o.a. AXA, Mobiliar, Zurich, Allianz, Helvetia, Generali). U hoeft geen geld voor te schieten.",
        },
        {
          tab: "24 Maanden Garantie",
          question: "Welke onderdelen worden gemonteerd en hoe lang geldt de garantie?",
          answer:
            "Wij monteren uitsluitend originele onderdelen of gecertificeerde kwaliteitscomponenten (Bosch, Brembo, Continental, Mahle). Op alle door ons geplaatste onderdelen en verrichte reparaties ontvangt u 24 maanden volledige garantie.",
        },
        {
          tab: "Laat Ophalen tot 19:00",
          question: "Kan ik mijn auto ook na het werk nog laat ophalen?",
          answer:
            "Ja, heel graag zelfs. Onze werkplaats aan de Wagistrasse 7 in Schlieren is doordeweeks tot 19:00 uur geopend. Voor ophalen buiten de openingstijden kunt u gebruikmaken van onze beveiligde 24/7 sleutelkluis met persoonlijke pincode.",
        },
      ],
    },
    location: {
      badge: "LOCATIE TERMINAL // LIMMATTAL",
      title: "BOZO AUTOMOBILE SCHLIEREN",
      freeParking: "Gratis parkeerplaatsen voor klanten direct voor de werkplaatsdeur",
      drivingTimesTitle: "Reistijd naar onze werkplaats:",
      drivingTimes: [
        { from: "Schlieren Centrum / Station", time: "2 min" },
        { from: "Unterengstringen", time: "4 min" },
        { from: "Dietikon & Urdorf", time: "6 min" },
        { from: "Zürich Altstetten", time: "7 min" },
      ],
      keyDropTitle: "24/7 Elektronische Sleutelkluis",
      keyDropDesc: "Lever uw sleutels dag en nacht in of haal ze op met uw persoonlijke pincode.",
      directionsBtn: "Openen in Google Maps",
      expressRoute: "Direct bereikbaar via Bernstrasse / A1 afrit Dietikon-Schlieren.",
    },
    emergency: {
      badge: "EXPRESS DIAGNOSE // LIMMATTAL PECHHULP",
      title: "ACUTE PECH- EN SCHADEHULP",
      desc: "Auto niet meer rijdbaar, vreemde geluiden of motorwaarschuwingslampje aan? Neem direct contact op voor telefonische diagnose en bergingscoördinatie.",
      button: "Pechhulp Hotline: +41 79 577 25 47",
      whatsAppBtn: "Direct via WhatsApp",
    },
    booking: {
      badge: "ONLINE AFSPRAAK // WERKPLAATSCONFIGURATOR",
      title: "ONLINE EEN AFSPRAAK MAKEN.",
      titleHighlight: "IN 4 EENVOUDIGE STAPPEN.",
      subtitle:
        "Kies uw gewenste dienst en datum. Ons werkplaatsteam bevestigt uw afspraak direct en reserveert uw gratis leenauto (0 CHF).",
      guaranteePill: "24 Maanden Garantie",
      keySafePill: "24/7 Sleutelkluis",
      mobilityPill: "0 CHF Leenauto",
      step1Title: "Dienst",
      step1Desc: "Wat mogen we doen?",
      step2Title: "Voertuig",
      step2Desc: "Merk & mobiliteit",
      step3Title: "Tijdstip",
      step3Desc: "Gewenste datum",
      step4Title: "Contact",
      step4Desc: "Uw gegevens",
      selectService: "Kies Gewenste Dienst(en)",
      vehicleBrand: "Automerk (bijv. BMW, Mercedes, VW, Tesla)",
      vehicleModel: "Model & Bouwjaar (bijv. Golf VII, 2019)",
      licensePlate: "Kenteken (bijv. ZH 123456)",
      mobilityChoice: "Heeft u vervangend vervoer nodig?",
      brandShortcuts: ["BMW", "Audi", "Mercedes", "Porsche", "VW", "Tesla", "Skoda", "Volvo", "Overig"],
      mobilityOptions: {
        none: "Geen vervoer nodig (ik haal de auto later op)",
        car: "Gratis leenauto gewenst (0 CHF)",
        bike: "Werkplaats e-bike gewenst (0 CHF)",
        wait: "Ik wacht ter plaatse in de wachtruimte",
      },
      preferredDate: "Gewenste Datum",
      preferredTime: "Gewenst Dagdeel",
      timeSlots: {
        morning: "Ochtend (08:00 – 12:00)",
        afternoon: "Middag (13:00 – 18:00)",
        flexible: "Flexibel gedurende de dag",
      },
      fullName: "Volledige Naam",
      phone: "Telefoonnummer (voor bevestiging & updates)",
      email: "E-mailadres",
      notes: "Opmerkingen of Schadebeschrijving",
      notesPlaceholder: "Beschrijf kort de symptomen, geluiden, storingslampjes of speciale wensen...",
      submit: "Afspraakverzoek Versturen",
      submitting: "Verzenden...",
      successTitle: "Hartelijk Dank voor Uw Afspraakverzoek!",
      successDesc:
        "Wij hebben uw gegevens ontvangen. Onze werkplaatschef bekijkt de planning en bevestigt uw afspraak spoedig.",
      whatsappConfirm: "Neem direct contact op via WhatsApp voor snelle vragen",
      bookAnother: "Nog een Afspraak Maken",
      back: "Terug",
      next: "Volgende",
      errSelectService: "Kies alstublieft minimaal één gewenste dienst.",
      errBrandRequired: "Vul alstublieft het merk van uw auto in.",
      errDateRequired: "Kies alstublieft een gewenste datum.",
      errContactRequired: "Vul alstublieft uw naam en telefoonnummer in.",
      summaryTitle: "Samenvatting Afspraak",
      summaryServices: "Gekozen Diensten",
      summaryVehicle: "Voertuig",
      summaryMobility: "Mobiliteit",
      summaryDate: "Datum",
      summaryTime: "Tijdslot",
      loadingAssistant: "Boekingsassistent laden...",
      step1Badge: "STAP 01 // DIENSTENAANBOD",
      step1DescLong: "Selecteer één of meerdere gewenste werkplaatswerkzaamheden.",
      customServiceTitle: "Individuele Aanvraag / Diagnose",
      customServiceDesc: "Geluidsdiagnose, aankoopkeuring of speciale aanpassingen.",
      step2Badge: "STAP 02 // VOERTUIG & MOBILITEIT",
      step2DescLong: "Nauwkeurige gegevens stellen ons in staat vooraf passende originele onderdelen te reserveren.",
      popularBrands: "Veelvoorkomende Automerken",
      brandPlaceholder: "bijv. BMW, Audi, VW, Porsche",
      modelPlaceholder: "bijv. Golf 7, 3-serie Touring, Macan",
      platePlaceholder: "bijv. ZH 123456 (voor directe typegoedkeuring)",
      step3Badge: "STAP 03 // AFSPRAAK & TIJDSLOT",
      step3DescLong: "Kies uw gewenste afleverdag aan de Wagistrasse 7.",
      keySafeNoticeTitle: "24u Sleutelkluis aanwezig:",
      keySafeNoticeDesc: "Voertuigafgifte en sleuteloverdracht zijn ook buiten openingstijden 24/7 contactloos mogelijk.",
      step4Badge: "STAP 04 // CONTACT & AFRONDING",
      step4DescLong: "Voor schriftelijke afspraakbevestiging en telefonische vragen.",
      privacyGuarantee: "Vertrouwelijk conform de Zwitserse wet op de gegevensbescherming (DSG). Geen overdracht aan derden.",
      submitBtn: "Afspraak nu bindend aanvragen",
      bookingRefBadge: "BOEKINGSREFERENTIE //",
      receiptCustomer: "Klant:",
      receiptVehicle: "Voertuig:",
      receiptDate: "Gewenste datum:",
      receiptMobility: "Vervangend vervoer:",
      downloadCalendar: "Kalenderafspraak (.ics)",
      whatsappConfirmBtn: "Bevestigen via WhatsApp",
      mobilityCards: {
        carTitle: "0 CHF Leenauto",
        carDesc: "Volledig allrisk verzekerd klaargezet",
        bikeTitle: "0 CHF Werkplaats E-Bike",
        bikeDesc: "Volledig opgeladen voor stadsverkeer",
        noneTitle: "Geen Vervangend Vervoer",
        noneDesc: "Blijft ter plaatse voor latere ophaling",
        waitTitle: "Lounge & Espresso",
        waitDesc: "Korte express-service ter plaatse",
        freeBadge: "Gratis",
        loungeBadge: "Wachtruimte",
      },
    },
    contact: {
      badge: "DIRECT CONTACT // WERKPLAATS SCHLIEREN",
      title: "CONTACT & LOCATIE.",
      titleHighlight: "ALTIJD VOOR U KLAAR.",
      subtitle:
        "Bezoek onze werkplaats in Schlieren. Gunstig gelegen in het Limmattal, op slechts enkele minuten van Zürich.",
      addressTitle: "Werkplaats Locatie",
      hoursTitle: "Openingstijden",
      phoneTitle: "Telefoon & Hotline",
      emailTitle: "E-mailadres",
      getDirections: "Routebeschrijving in Google Maps",
      whatsappChat: "Chatten via WhatsApp",
      callNow: "Directe Hotline",
      formTitle: "Stuur een Bericht",
      formSubtitle: "Heeft u vragen of wilt u een offerte op maat? Neem direct contact op met ons team.",
      nameLabel: "Uw Naam",
      phoneLabel: "Telefoonnummer",
      emailLabel: "E-mailadres (optioneel)",
      messageLabel: "Uw Bericht",
      sendButton: "Bericht Verzenden",
      sentSuccess: "Dank u wel! Uw bericht is succesvol verzonden. Wij nemen snel contact met u op.",
      topicLabel: "Onderwerp",
      topics: [
        { id: "allgemein", label: "Algemene Vraag" },
        { id: "offerte", label: "Offerte / Prijsopgave" },
        { id: "versicherung", label: "Schade / Verzekering" },
        { id: "mfk", label: "Keuring & Diagnose" },
      ],
      drivingTimesTitle: "Snelle bereikbaarheid vanuit de regio:",
      drivingTimes: [
        { from: "Station Schlieren", time: "2 min" },
        { from: "Unterengstringen", time: "4 min" },
        { from: "Dietikon & Urdorf", time: "6 min" },
        { from: "Zürich Altstetten", time: "7 min" },
      ],
    },
    aboutPage: {
      badge: "DE WERKPLAATS // ZWITSER MEESTERSCHAP",
      title: "VAKWERK MET VISIE.",
      titleHighlight: "ZWITSERSE MEESTERONDERSTEUNING.",
      subtitle:
        "Bozo Automobile is ontstaan uit passie voor superieure mechanica en de wens om persoonlijke klantenservice te combineren met geavanceerde diagnosetechnologie.",
      photoCaptionTitle: "WAGISTRASSE 7 // SCHLIEREN (ZÜRICH)",
      photoCaptionDesc: "Diagnoseteststraat · Hefbruggen tot 4.5 ton · Optische ADAS camerakalibratie",
      photoBadge: "AL MEER DAN 10 JAAR MERKONAFHANKELIJK",
      credoBadge: "ONZE FILOSOFIE // EERLIJK EN RECHT DOOR ZEE",
      credoQuote:
        "“Bij ons praat u direct met de vakman die aan uw auto werkt. Geen anonieme balies, geen onaangename verrassingen op de factuur.”",
      credoDesc:
        "Met trots bedienen wij automobilisten uit Schlieren, Unterengstringen, Dietikon en Zürich met eerlijk vakmanschap en volledige garantie.",
      stats: [
        { value: "10+", label: "Jaar in Limmattal", desc: "Betrouwbare partner voor duizenden autobezitters in de regio." },
        { value: "4.9★", label: "Google Beoordeling", desc: "Meer dan 120 geverifieerde reviews van tevreden klanten." },
        { value: "24M", label: "Onderdelengarantie", desc: "Volledige fabrieksgarantie op alle gemonteerde OEM-delen." },
        { value: "0 CHF", label: "Gratis Leenauto", desc: "Kosteloze leenauto of e-bike bij elke onderhoudsafspraak." },
      ],
      equipmentTitle: "Geavanceerde Werkplaatsuitrusting",
      equipmentDesc:
        "Wij investeren voortdurend in gecertificeerde diagnose- en kalibratieapparatuur voor zowel de nieuwste auto's en EV's als klassiekers.",
      equipmentList: [
        { title: "OEM Diagnosetesters", desc: "Bosch KTS, ODIS, ISTA, PIWIS en XENTRY merkspecifieke scanners." },
        { title: "Laser Uitlijnbank", desc: "Tot op de millimeter nauwkeurige 3D-laseruitlijning voor een strak rijgedrag." },
        { title: "ADAS Kalibratierek", desc: "Officiële camera- en radarkalibratie na ruitvervanging of bumperdemontage." },
        { title: "Aircostation", desc: "Gecertificeerd aircovulstation voor zowel R134a als modern R1234yf koudemiddel." },
      ],
      ctaTitle: "Ervaar Zorgeloos Auto-Onderhoud",
      ctaDesc: "Boek vandaag nog uw afspraak online of kom langs aan de Wagistrasse 7 in Schlieren.",
      ctaBook: "Online Afspraak Boeken",
      ctaCall: "Direct Bellen",
    },
    servicesPage: {
      badge: "MERKONAFHANKELIJKE MEESTERWERKPLAATS",
      title: "Onze Werkplaatsdiensten",
      subtitle:
        "Van snelle bandenservice tot complex schadeherstel en geavanceerde sensorkalibratie. Ontdek ons volledige dienstenaanbod.",
      benefitsTitle: "Uw Voordelen:",
      moreDetails: "Uitgebreide Details",
      bookAppointment: "Afspraak Aanvragen",
      scheduleOverview: "Alle werkzaamheden worden vooraf helder doorgesproken met duidelijke prijsafspraken.",
      oemGuaranteeNote: "Volledig behoud van fabrieksgarantie op alle merken conform Europese en Zwitserse wetgeving.",
    },
    serviceDetailPage: {
      backToList: "Terug naar Dienstenoverzicht",
      duration: "Typische Duur:",
      pricing: "Prijsindicatie:",
      benefits: "Inbegrepen Voordelen",
      processTitle: "Stapsgewijze Werkwijze",
      faqTitle: "Veelgestelde Vragen over deze Dienst",
      ctaTitle: "Klaar om deze Dienst te Boeken?",
      ctaDesc: "Plan direct uw afspraak in met een gratis vervangende auto, of bel ons voor overleg.",
      bookNow: "Deze Dienst Boeken",
      callNow: "Direct Bellen",
    },
    footer: {
      tagline: "Uw betrouwbare meestergarage voor Schlieren, Unterengstringen en groot Zürich.",
      description:
        "Merkonafhankelijke Zwitserse meesterwerkplaats in Schlieren. Eerlijk, transparant en betrouwbaar sinds ruim 10 jaar.",
      benefits: [
        "24 Maanden Zwitserse onderdelengarantie",
        "0 CHF Gratis leenauto & e-bike",
        "100% Volledig behoud van fabrieksgarantie",
      ],
      hours: "Openingstijden",
      quickLinks: "Snelle Links",
      services: "Diensten",
      legal: "Juridisch",
      rights: "Alle rechten voorbehouden.",
      impressum: "Colofon & Bedrijfsgegevens",
      privacy: "Privacybeleid",
      moFr: "Ma – Vr: 08:00 – 12:00 | 13:00 – 19:00",
      sa: "Za: 08:30 – 14:00",
      su: "Zo: Gesloten",
      closed: "Gesloten",
      handcrafted: "Precisie-autozorg met toewijding voor Bozo Automobile",
    },
    mobileActionBar: {
      call: "Bellen",
      whatsapp: "WhatsApp",
      book: "Afspraak",
    },
    legalPages: {
      impressumTitle: "Colofon & Bedrijfsgegevens",
      swissLawTitle: "Gegevens conform Zwitsers Recht",
      contactTitle: "Contactgegevens",
      repPersonTitle: "Bevoegde Vertegenwoordiger",
      repPersonRole: "Directie Bozo Automobile",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "De auteur aanvaardt geen enkele aansprakelijkheid voor de juistheid, nauwkeurigheid, actualiteit, betrouwbaarheid en volledigheid van de informatie. Aansprakelijkheidsclaims tegen de auteur wegens materiële of immateriële schade die voortvloeit uit de toegang tot of het gebruik van de gepubliceerde informatie, misbruik van de verbinding of technische storingen zijn uitgesloten.",
      copyrightTitle: "Auteursrechten",
      copyrightText: "De auteursrechten en alle andere rechten op teksten, afbeeldingen, foto's of andere bestanden op deze website behoren uitsluitend toe aan Bozo Automobile of de uitdrukkelijk genoemde rechthebbenden. Voor de reproductie van enig element moet vooraf schriftelijke toestemming worden verkregen van de auteursrechthebbenden.",
      privacyTitle: "Privacybeleid",
      validFrom: "Geldig vanaf: 1 september 2023 (conform de herziene Zwitserse wet op de gegevensbescherming, DSG).",
      sec1Title: "1. Verantwoordelijke Instantie",
      sec1Text: "De entiteit die verantwoordelijk is voor de gegevensverwerking op deze website is:",
      sec2Title: "2. Verzameling en Verwerking van Persoonsgegevens",
      sec2Text: "Wij verwerken voornamelijk de persoonsgegevens die wij in het kader van onze zakelijke relatie (afspraken, reparatieopdrachten, kostenramingen, leenauto-overeenkomsten) van u ontvangen of die worden verzameld tijdens het functioneren van onze website.",
      sec3Title: "3. Doeleinden van de Gegevensverwerking",
      sec3Text: "Wij gebruiken de verzamelde persoonsgegevens primair om overeenkomsten met onze klanten en partners af te sluiten en uit te voeren (met name autoreparaties, MFK-keuringsvoorbereidingen, schadeafhandeling met verzekeraars), alsmede om betrouwbaar met u te communiceren.",
      sec4Title: "4. Online Afspraken & Contactformulier",
      sec4Text: "Wanneer u gebruik maakt van ons online boekingssysteem of het contactformulier, worden de door u ingevulde gegevens (naam, telefoonnummer, e-mailadres, voertuiggegevens, kenteken) uitsluitend gebruikt voor de afhandeling van uw aanvraag en de werkplaatsopdracht. Er vindt geen overdracht plaats aan onbevoegde derden.",
      sec5Title: "5. Gegevensbeveiliging",
      sec5Text: "Wij nemen passende technische en organisatorische beveiligingsmaatregelen om uw persoonsgegevens te beschermen tegen ongeoorloofde toegang en misbruik, zoals SSL/TLS-versleuteling voor alle datatransmissie.",
      sec6Title: "6. Uw Rechten",
      sec6Text: "U heeft binnen het kader van de toepasselijke privacywetgeving het recht op inzage, rectificatie, verwijdering en beperking van de verwerking. Om uw rechten uit te oefenen kunt u te allen tijde contact met ons opnemen via ",
    },
  },

  // ==========================================
  // GERMAN (de)
  // ==========================================
  de: {
    nav: {
      services: "Dienstleistungen",
      allServices: "Alle Leistungen",
      about: "Über uns",
      contact: "Kontakt",
      bookNow: "Termin online vereinbaren",
      callNow: "Direkt anrufen",
      regions: "Region: Limmattal & Zürich",
      emergency: "Pannenhilfe & Notfall",
      openHoursRadar: "WERKSTATT OFFEN · MO–FR BIS 19:00",
      areaDropdownTitle: "Einzugsgebiet",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schliessen",
      workshopOpen: "Werkstatt geöffnet",
    },
    hero: {
      badge: "IHRE MARKENUNABHÄNGIGE MEISTERWERKSTATT IM LIMMATTAL",
      eyebrow2: "24M SCHWEIZER GARANTIE",
      titleLine1: "SCHWEIZER PRÄZISION.",
      titleHighlight: "FÜR ALLE AUTOMARKEN.",
      titleLine2: "Ehrlich, fair & modernste Technik.",
      description:
        "Ihre markenunabhängige Meisterwerkstatt an der Wagistrasse 7 in Schlieren. Wir warten und reparieren nach strengsten Herstellervorschriften mit vollem Erhalt der Werksgarantie, transparenten Festpreisen und kostenlosem Ersatzfahrzeug (0 CHF).",
      ctaBook: "Termin online anfragen",
      ctaCall: "Direkt anrufen",
      ctaServices: "Dienstleistungen entdecken",
      ratingText: "4.9 Sterne auf Google",
      guaranteePill: "24 Monate Garantie",
      mobilityPill: "Ersatzfahrzeug inklusive",
      allBrandsPill: "Alle Automarken",
      trustScore: "4.9 / 5.0",
      trustScoreLabel: "Google Score (120+ Rezensionen)",
      trustWarranty: "24 Monate",
      trustWarrantyLabel: "Teile-Garantie",
      trustMobility: "0 CHF",
      trustMobilityLabel: "Kostenloser Ersatzwagen",
      trustBrands: "100%",
      trustBrandsLabel: "Für alle Automarken",
      brandLabel: "Herstellerspezifikation wählen:",
      brandData: {
        all: {
          name: "Alle Marken",
          badge: "MARKENUNABHÄNGIG",
          protocol: "Herstellervorschrift nach EG-GVO 461/2010",
          leadTime: "Heute ab 13:30 Express-Slots",
          mobility: "Kostenloser Ersatzwagen (0 CHF)",
        },
        porsche: {
          name: "Porsche",
          badge: "OEM PIWIS SPEZIFIKATION",
          protocol: "GT3, Turbo & Carrera Wartungsprotokoll",
          leadTime: "Express-Diagnose & MFK-Prüfung",
          mobility: "Premium Ersatzfahrzeug inkl.",
        },
        bmw: {
          name: "BMW / M-Power",
          badge: "ISTA / ADAS KALIBRIERUNG",
          protocol: "Elektronisches Serviceheft (KaSIO / AOS)",
          leadTime: "Direkte Teileverfügbarkeit",
          mobility: "Ersatzwagen oder E-Bike 0 CHF",
        },
        audi: {
          name: "Audi / VW",
          badge: "ODIS SYSTEMDIAGNOSE",
          protocol: "Quattro & DSG / S-Tronic Spülung",
          leadTime: "Am selben Tag abholbereit",
          mobility: "Volle Mobilitätsgarantie",
        },
        mercedes: {
          name: "Mercedes-Benz",
          badge: "XENTRY DIAGNOSTIK",
          protocol: "AMG & EQ Hochvolt-Inspektion",
          leadTime: "Offizielle DSB-Eintragung",
          mobility: "Kostenlose Ersatzmobilität",
        },
        tesla: {
          name: "Tesla & EV",
          badge: "HOCHVOLT ZERTIFIZIERT",
          protocol: "Bremsenwartung, Fahrwerk & Klimacheck",
          leadTime: "EV-Schnellservice verfügbar",
          mobility: "Elektro-Ersatzfahrzeug 0 CHF",
        },
      },
    },
    valueProps: {
      badge: "SCHWEIZER STANDARDS // QUALITÄT OHNE MARKENAUFSCHLAG",
      title: "SCHWEIZER QUALITÄT.",
      titleHighlight: "OHNE MARKENAUFSCHLAG.",
      subtitle:
        "Seit über einem Jahrzehnt reparieren und warten wir Fahrzeuge im Limmattal. Bei uns sprechen Sie direkt mit dem Meistermechaniker, der Ihr Auto betreut: transparent kalkuliert, millimetergenau ausgeführt und mit voller Schweizer Gewährleistung.",
      props: [
        {
          title: "Ehrlich & Transparent",
          description:
            "Klare Kostenvoranschläge ohne versteckte Aufschläge. Jede Zusatzarbeit wird vorab persönlich mit Ihnen besprochen und freigegeben.",
        },
        {
          title: "Mobilitätsgarantie",
          description:
            "Bleiben Sie mobil: Für die Dauer der Reparatur stellen wir Ihnen gerne ein kostenloses Ersatzfahrzeug oder ein E-Bike zur Verfügung.",
        },
        {
          title: "Modernste Diagnosetechnik",
          description:
            "Herstellerkonforme Auslesegeräte und Spezialausrüstung für ADAS-Kamera-/Radarkalibrierung und Steuergeräte-Codierung.",
        },
        {
          title: "24 Monate Garantie",
          description:
            "Wir verbauen ausschliesslich Ersatzteile in Erstausrüsterqualität. Die Herstellergarantie Ihres Fahrzeugs bleibt vollumfänglich erhalten.",
        },
      ],
      statRating: "4.9",
      statRatingBadge: "VERIFIZIERT",
      statRatingTitle: "Google Kundenzufriedenheit",
      statRatingDesc: "Über 120 unabhängige 5-Sterne Bewertungen aus Schlieren, Zürich und Umgebung.",
      statWarranty: "24M",
      statWarrantyBadge: "SCHWEIZER GARANTIE",
      statWarrantyTitle: "Schweizer Teilegarantie",
      statWarrantyDesc: "Volle Gewährleistung auf alle verbauten Neuteile und Reparaturarbeiten.",
      statMobility: "0 CHF",
      statMobilityBadge: "KOSTENLOSE MOBILITÄT",
      statMobilityTitle: "Kostenloser Ersatzwagen",
      statMobilityDesc: "Moderne Ersatzwagen oder Werkstatt-E-Bikes kostenlos für die Reparaturdauer.",
      statTech: "ADAS",
      statTechBadge: "MODERNSTE TECHNIK",
      statTechTitle: "Modernste Diagnostik",
      statTechDesc: "Computergestützte Achsvermessung und digitale Radar-/Kamerakalibrierung.",
      quoteBadge: "UNSERE PHILOSOPHIE // EHRLICH UND FAIR",
      quoteText:
        "“Bei uns sprechen Sie direkt mit dem Meister, der an Ihrem Fahrzeug schraubt. Keine anonymen Annahme-Schalter, keine Überraschungen auf der Rechnung.”",
      quoteAuthor: "Geschäftsführung Bozo Automobile, Schlieren",
    },
    services: {
      badge: "LEISTUNGSSPEKTRUM // SWISS MEISTERSTANDARDS",
      title: "ATELIER-LEISTUNGEN.",
      titleHighlight: "TRANSPARENTE FESTPREISE.",
      subtitle:
        "Keine versteckten Posten. Wir dokumentieren jeden Eingriff digital und berechnen ausschliesslich das, was im Vorfeld verbindlich vereinbart wurde.",
      viewAll: "Alle Dienstleistungen im Detail",
      learnMore: "Mehr erfahren",
      bookThisService: "Diesen Service buchen",
      includedBenefits: "Inklusive Vorteile",
      card1Badge: "SCHWEIZER PRÜFSTANDSTANDARDS",
      card1Title: "MFK-Bereitstellung & ADAS Diagnostik",
      card1Price: "ab CHF 180.–",
      card1Desc:
        "Umfassender Vorab-Check, Unterbodenreinigung, Scheinwerfer-Laserjustierung, Bremsenprüfstand und offizielle Vorführung beim Strassenverkehrsamt.",
      card1Features: [
        "100% Erfolgsquote bei MFK-Vorführung",
        "Chassiswäsche & Dichtheitskontrolle",
        "Digitale Scheinwerfer- & Bremsenprüfstände",
        "Offizielle Prüffahrt durch Werkstattmeister",
      ],
      card1CtaDetail: "Ausführliche Details",
      card1CtaBook: "MFK-Check buchen",
      card2Badge: "WERKSGARANTIE BLEIBT ERHALTEN",
      card2Title: "Service & Inspektion nach Herstellervorgabe",
      card2Desc:
        "Ölwechsel, Filterwechsel, Zündkerzen und Bremsflüssigkeit streng nach digitalen Herstellervorgaben für alle Marken.",
      card2Points: [
        "Eintrag in digitales Serviceheft aller Marken",
        "50-Punkte Schweizer Sicherheitscheck",
        "Kostenloses Ersatzfahrzeug inklusive",
      ],
      card3Badge: "DIREKTABRECHNUNG VERSICHERUNG",
      card3Title: "Karosserie, Unfallinstandsetzung & Lackierung",
      card3Desc:
        "Präzisionslackierung, Dellen drücken ohne Lackieren, Frontscheibentausch und Direktabrechnung mit allen Schweizer Assekuranzen.",
      card3Points: [
        "Computergestützte Farbanalyse & Mischung",
        "Direktabrechnung mit allen Schweizer Versicherern",
        "Selbstbehalt-Reduktion auf Anfrage möglich",
      ],
      card4Badge: "HÖCHSTE SICHERHEIT",
      card4Title: "Bremsenservice & Fahrwerkstechnik",
      card4Desc:
        "Brembo- und OEM-Bremsbeläge, Sportfahrwerke, KW Gewindefahrwerke Einbau und millimetergenaue 3D-Achsvermessung.",
      card4Points: [
        "Laserbasierte 3D-Fahrwerksgeometrie",
        "High-Performance Bremsbeläge & Scheiben",
        "Offizielle DTC-Gutachten & MFK-Eintragungen",
      ],
      card5Badge: "KOMFORT & ELEKTRONIK",
      card5Title: "Klimaservice, Reifen & High-End Tuning",
      card5Desc:
        "Kältemittelbefüllung R134a & R1234yf, Ozon-Geruchsbeseitigung, Reifenwechsel mit Reifenhotel und ECU Software-Optimierung.",
      card5Points: [
        "Saisonales Reifenhotel zur Einlagerung",
        "Antibakterielle Klimaanlagen-Desinfektion",
        "Diagnosegestützte Steuergeräte-Codierung",
      ],
    },
    calculator: {
      title: "Service- & Kostenrechner",
      subtitle: "Wählen Sie Ihr Fahrzeug und gewünschtes Paket für eine unverbindliche Orientierung ohne Überraschungen.",
      selectVehicle: "1. Fahrzeugkategorie wählen",
      vehicleTypes: {
        compact: "Kleinwagen / Kompaktklasse",
        limousine: "Limousine / Kombi",
        suv: "SUV / Grossraumfahrzeug",
        electric: "Elektro- & Hybridfahrzeug",
      },
      selectPackage: "2. Service-Paket wählen",
      estimatedCost: "Richtpreis-Kalkulation",
      fromPrice: "ab ca.",
      duration: "Typische Dauer",
      bookPackage: "Dieses Paket reservieren",
      recommended: "EMPFOHLEN",
      oemCompliant: "Standard gemäss Herstellervorschrift",
      freeMobilityPill: "Inkl. Ersatzwagen 0 CHF",
    },
    reviews: {
      badge: "KUNDENSTIMMEN // REZENSIONEN",
      title: "WAS UNSERE KUNDEN SAGEN",
      subtitle: "Über 100 verifizierte Google-Rezensionen mit 4.9 von 5.0 Sternen.",
      basedOn: "Basierend auf echten Kundenbewertungen in Schlieren & Umgebung",
      leaveReview: "Bewertung auf Google schreiben",
      verifiedBadge: "GEPRÜFTE GOOGLE BEWERTUNG",
      customerVehicle: "Gepflegtes Kundenfahrzeug",
    },
    beforeAfter: {
      badge: "BELEGE // PRÜFPROTOKOLLE",
      title: "WERKSTATTPROTOKOLLE & QUALITÄTSNACHWEIS",
      subtitle: "Millimetergenaue Prüfberichte, nachvollziehbare Diagnosen und transparenter Ablauf.",
      labelBefore: "Vorher (Beschädigt)",
      labelAfter: "Nachher (Instandgesetzt)",
      dragHint: "Schieberegler bewegen zum Vergleichen",
      slips: [
        {
          id: "mfk",
          title: "MFK-PRÜFPROTOKOLL",
          category: "Prüfbericht Nr. 8952-MFK // Schlieren",
          status: "100% BESTANDEN",
          lines: [
            "Bremsenprüfstand: VA 2.8 / 2.7 kN (Abweichung nur 3.5%)",
            "Feststellbremse: 1.9 / 1.8 kN (Einwandfrei)",
            "Scheinwerfereinstellung: Laser-justiert auf 1.2% Gefälle",
            "Unterboden & Dichtungen: gewaschen, 0.0 mg Ölverlust",
            "Ergebnis: Zur amtlichen Vorführung freigegeben",
          ],
        },
        {
          id: "obd",
          title: "OBD-TIEFENFEHLERDIAGNOSE",
          category: "Systemscan Bosch KTS & OEM-Tester",
          status: "0 FEHLER ABGELEGT",
          lines: [
            "Motor- & Getriebesteuergerät: Keine statischen Fehler",
            "Partikelfilter (DPF): Beladung 12% (Erfolgreich regeneriert)",
            "ADAS-Kamerasensorik: Nach Scheibenwechsel kalibriert",
            "Batterie-Gesundheitszustand (SoH): 96% Nennkapazität",
            "Service-Intervallanzeige: Zurückgesetzt auf 30'000 km",
          ],
        },
        {
          id: "audatex",
          title: "KOSTENTRANSPARENZ-BELEG",
          category: "Audatex Schweizer Richtpreis-System",
          status: "FESTPREIS GARANTIERT",
          lines: [
            "Arbeitsaufwand: Exakt nach Herstellervorgabe verrechnet",
            "Ersatzteile: Original-Zertifizierter Brembo / Bosch Teilesatz",
            "Zusatzarbeiten: Keine Ausführung ohne telefonische Freigabe",
            "Versicherungsabrechnung: Direkt mit Schweizer Assekuranz",
            "Garantie: 24 Monate auf alle Neuteile verbürgt",
          ],
        },
        {
          id: "mobilitaet",
          title: "MOBILITÄTS-ÜBERGABE",
          category: "Kostenloses Ersatzfahrzeug // Schlieren",
          status: "0 CHF VERRECHNET",
          lines: [
            "Ersatzwagen: Sauber, vollgetankt, Vollkasko-Schutz",
            "Alternative Mobilität: Werkstatt-E-Bike auf Wunsch verfügbar",
            "Schlüsseltresor: 24/7 PIN-gesicherte Fahrzeugrückgabe",
            "Rückgabe: Nach der Arbeit flexibel bis 19:00 Uhr abholbar",
            "Treibstoff: Sie bringen den Wagen einfach mit verbrauchtem Sprit wieder betankt zurück",
          ],
        },
      ],
    },
    faqs: {
      badge: "WISSEN & TRANSPARENZ // HÄUFIGE FRAGEN",
      title: "HÄUFIG GESTELLTE FRAGEN",
      subtitle: "Klare Antworten zu Garantie, Kosten und Werkstattabläufen.",
      stillQuestions: "Haben Sie eine andere Frage?",
      askDirectly: "Rufen Sie uns direkt an oder schreiben Sie unserem Werkstattmeister per WhatsApp.",
      directCall: "Direkt anrufen",
      items: [
        {
          tab: "Herstellergarantie",
          question: "Bleibt meine offizielle Herstellergarantie bei Ihnen voll erhalten?",
          answer:
            "Ja, zu 100%. Nach Schweizer und Europäischem Recht (EG-GVO 461/2010) bleibt die gesetzliche Werksgarantie bei fachgerechtem Service nach Herstellervorgaben vollständig bestehen. Wir dokumentieren jeden Serviceeintrag direkt im herstellereigenen digitalen Serviceheft (z.B. bei BMW, Mercedes, Audi, VW, Porsche).",
        },
        {
          tab: "Kostenlose Mobilität",
          question: "Was kostet das Ersatzfahrzeug während der Reparaturdauer?",
          answer:
            "Genau 0 CHF. Wir stellen Ihnen für die gesamte Dauer des Werkstattaufenthalts kostenlos einen modernen Ersatzwagen oder ein Werkstatt-E-Bike zur Verfügung. Sie bringen lediglich den verbrauchten Treibstoff wieder vollgetankt zurück.",
        },
        {
          tab: "Versicherungsabrechnung",
          question: "Rechnen Sie bei Unfall- oder Glasschäden direkt mit meiner Versicherung ab?",
          answer:
            "Ja. Wir übernehmen die komplette Schadensaufnahme, Gutachtenerstellung und Direktabrechnung mit allen Schweizer Versicherungsgesellschaften (z.B. AXA, Mobiliar, Zurich, Allianz, Helvetia, Generali). Sie müssen kein Geld vorstrecken.",
        },
        {
          tab: "24 Monate Garantie",
          question: "Welche Teile werden verbaut und wie lange gilt die Garantie?",
          answer:
            "Wir verbauen ausschliesslich Originalteile oder zertifizierte Markenkomponenten in Erstausrüsterqualität (Bosch, Brembo, Continental, Mahle). Auf sämtliche von uns verbauten Ersatzteile und Reparaturen erhalten Sie 24 Monate volle Garantie.",
        },
        {
          tab: "Spätabholung bis 19:00",
          question: "Kann ich mein Auto auch nach der Arbeit spät abholen?",
          answer:
            "Ja, sehr gerne. Unsere Werkstatt an der Wagistrasse 7 in Schlieren ist wochentags bis 19:00 Uhr geöffnet. Für Abholungen ausserhalb der Öffnungszeiten steht Ihnen ein gesicherter 24h-Schlüsseltresor mit individuellem PIN zur Verfügung.",
        },
      ],
    },
    location: {
      badge: "STANDORT TERMINAL // LIMMATTAL",
      title: "BOZO AUTOMOBILE SCHLIEREN",
      freeParking: "Kostenlose Kundenparkplätze direkt vor dem Werkstatttor",
      drivingTimesTitle: "Fahrzeiten zu unserem Meisterbetrieb:",
      drivingTimes: [
        { from: "Schlieren Zentrum / Bahnhof", time: "2 Min" },
        { from: "Unterengstringen", time: "4 Min" },
        { from: "Dietikon & Urdorf", time: "6 Min" },
        { from: "Zürich Altstetten", time: "7 Min" },
      ],
      keyDropTitle: "24h Elektronischer Schlüsseltresor",
      keyDropDesc: "Fahrzeugabgabe und Schlüsselabholung rund um die Uhr mit Ihrem persönlichen SMS-Code.",
      directionsBtn: "In Google Maps öffnen",
      expressRoute: "Direkte Zufahrt über Bernstrasse / A1 Autobahnausfahrt Dietikon-Schlieren.",
    },
    emergency: {
      badge: "EXPRESS-DIAGNOSE // PANNENHILFE LIMMATTAL",
      title: "AKUTE PANNEN- & SCHADENSHILFE",
      desc: "Fahrzeug nicht fahrbereit, Geräusche oder Motorwarnleuchte aktiv? Kontaktieren Sie uns direkt für sofortige Ferndiagnose und Abschleppkoordination.",
      button: "Pannenhilfe: +41 79 577 25 47",
      whatsAppBtn: "WhatsApp Direktnachricht",
    },
    booking: {
      badge: "ONLINE-TERMIN // ATELIER KONFIGURATOR",
      title: "TERMIN ONLINE VEREINBAREN.",
      titleHighlight: "IN 4 EINFACHEN SCHRITTEN.",
      subtitle:
        "Wählen Sie Ihren Wunschservice und Zeitpunkt. Unser Werkstatt-Team bestätigt Ihren Termin umgehend und reserviert Ihr kostenloses Ersatzfahrzeug (0 CHF).",
      guaranteePill: "24 Monate Garantie",
      keySafePill: "Schlüsseltresor 24/7",
      mobilityPill: "0 CHF Ersatzfahrzeug",
      step1Title: "Leistung",
      step1Desc: "Was darf es sein?",
      step2Title: "Fahrzeug",
      step2Desc: "Marke & Mobilität",
      step3Title: "Termin",
      step3Desc: "Wunschzeitpunkt",
      step4Title: "Kontakt",
      step4Desc: "Ihre Angaben",
      selectService: "Gewünschte Dienstleistung(en) wählen",
      vehicleBrand: "Fahrzeugmarke (z.B. BMW, Mercedes, VW, Tesla)",
      vehicleModel: "Modell & Jahrgang (z.B. Golf VII, 2019)",
      licensePlate: "Kontrollschild (z.B. ZH 123456)",
      mobilityChoice: "Benötigen Sie ein Ersatzfahrzeug?",
      brandShortcuts: ["BMW", "Audi", "Mercedes", "Porsche", "VW", "Tesla", "Skoda", "Volvo", "Andere"],
      mobilityOptions: {
        none: "Kein Ersatzfahrzeug benötigt (ich hole das Auto später ab)",
        car: "Kostenloses Ersatzfahrzeug gewünscht (0 CHF)",
        bike: "Werkstatt-E-Bike gewünscht (0 CHF)",
        wait: "Ich warte vor Ort in der Kundenlounge",
      },
      preferredDate: "Wunschdatum",
      preferredTime: "Bevorzugte Tageszeit",
      timeSlots: {
        morning: "Vormittag (08:00 – 12:00)",
        afternoon: "Nachmittag (13:00 – 18:00)",
        flexible: "Ganztägig flexibel",
      },
      fullName: "Vor- und Nachname",
      phone: "Telefonnummer (für Bestätigung & Rückfragen)",
      email: "E-Mail-Adresse",
      notes: "Bemerkungen oder Schadensbeschreibung",
      notesPlaceholder: "Beschreiben Sie kurz Symptome, Geräusche, Warnlampen oder besondere Wünsche...",
      submit: "Terminanfrage absenden",
      submitting: "Wird gesendet...",
      successTitle: "Vielen Dank für Ihre Buchungsanfrage!",
      successDesc:
        "Wir haben Ihre Angaben erhalten. Unser Werkstattleiter prüft die Verfügbarkeit und bestätigt Ihren Termin schnellstmöglich.",
      whatsappConfirm: "Schnelle Frage zum Termin? Direkt via WhatsApp kontaktieren",
      bookAnother: "Weiteren Service buchen",
      back: "Zurück",
      next: "Weiter",
      errSelectService: "Bitte wählen Sie mindestens eine gewünschte Dienstleistung aus.",
      errBrandRequired: "Bitte geben Sie Ihre Fahrzeugmarke an.",
      errDateRequired: "Bitte wählen Sie ein Wunschdatum aus.",
      errContactRequired: "Bitte geben Sie Ihren Namen und Ihre Telefonnummer an.",
      summaryTitle: "Zusammenfassung der Anfrage",
      summaryServices: "Gewählte Leistungen",
      summaryVehicle: "Fahrzeug",
      summaryMobility: "Mobilität",
      summaryDate: "Datum",
      summaryTime: "Zeitfenster",
      loadingAssistant: "Lade Buchungsassistent...",
      step1Badge: "SCHRITT 01 // LEISTUNGSUMFANG",
      step1DescLong: "Wählen Sie einen oder mehrere gewünschte Werkstatteingriffe aus.",
      customServiceTitle: "Individuelle Anfrage / Diagnose",
      customServiceDesc: "Geräuschdiagnose, Kaufberatung oder Spezialumbauten.",
      step2Badge: "SCHRITT 02 // FAHRZEUG & MOBILITÄT",
      step2DescLong: "Genaue Angaben ermöglichen uns die Vorab-Reservierung passender Originalteile.",
      popularBrands: "Häufige Automarken",
      brandPlaceholder: "z.B. BMW, Audi, VW, Porsche",
      modelPlaceholder: "z.B. Golf 7, 3er Touring, Macan",
      platePlaceholder: "z.B. ZH 123456 (für direkte Typenschein-Identifikation)",
      step3Badge: "SCHRITT 03 // TERMIN & ZEITFENSTER",
      step3DescLong: "Wählen Sie Ihren bevorzugten Abgabetag an der Wagistrasse 7.",
      keySafeNoticeTitle: "24h Schlüsseltresor vorhanden:",
      keySafeNoticeDesc: "Fahrzeugabgabe und Schlüsselübergabe sind auch ausserhalb der Öffnungszeiten rund um die Uhr kontaktlos möglich.",
      step4Badge: "SCHRITT 04 // KONTAKT & ABSCHLUSS",
      step4DescLong: "Für die schriftliche Terminbestätigung und telefonische Rückfragen.",
      privacyGuarantee: "Vertraulich gemäss Schweizer Datenschutzgesetz (DSG). Keine Weitergabe an Dritte.",
      submitBtn: "Termin jetzt verbindlich anfragen",
      bookingRefBadge: "BUCHUNGS-REFERENZ //",
      receiptCustomer: "Kunde:",
      receiptVehicle: "Fahrzeug:",
      receiptDate: "Wunschtermin:",
      receiptMobility: "Ersatzmobilität:",
      downloadCalendar: "Kalendereintrag (.ics)",
      whatsappConfirmBtn: "Auf WhatsApp bestätigen",
      mobilityCards: {
        carTitle: "0 CHF Ersatzfahrzeug",
        carDesc: "Vollkaskoversichert bereitgestellt",
        bikeTitle: "0 CHF Werkstatt-E-Bike",
        bikeDesc: "Vollgeladen für den Stadtverkehr",
        noneTitle: "Keine Ersatzmobilität",
        noneDesc: "Wird vor Ort abgestellt",
        waitTitle: "Lounge & Espresso",
        waitDesc: "Kurzer Express-Service vor Ort",
        freeBadge: "Kostenlos",
        loungeBadge: "Wartezone",
      },
    },
    contact: {
      badge: "DIREKTKONTAKT // ATELIER SCHLIEREN",
      title: "KONTAKT & STANDORT.",
      titleHighlight: "JEDERZEIT FÜR SIE DA.",
      subtitle:
        "Besuchen Sie unsere Meisterwerkstatt in Schlieren. Zentral gelegen im Limmattal, nur wenige Fahrminuten von Zürich entfernt.",
      addressTitle: "Standort Werkstatt",
      hoursTitle: "Öffnungszeiten",
      phoneTitle: "Telefon & Hotline",
      emailTitle: "E-Mail-Adresse",
      getDirections: "Route in Google Maps planen",
      whatsappChat: "WhatsApp Direkt-Chat",
      callNow: "Direkt anrufen",
      formTitle: "Nachricht senden",
      formSubtitle: "Haben Sie Fragen oder wünschen Sie eine individuelle Offerte? Schreiben Sie uns direkt.",
      nameLabel: "Ihr Name",
      phoneLabel: "Telefonnummer",
      emailLabel: "E-Mail-Adresse (optional)",
      messageLabel: "Ihre Nachricht",
      sendButton: "Nachricht absenden",
      sentSuccess: "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns umgehend bei Ihnen.",
      topicLabel: "Thema Ihrer Anfrage",
      topics: [
        { id: "allgemein", label: "Allgemeine Anfrage" },
        { id: "offerte", label: "Kostenvoranschlag / Offerte" },
        { id: "versicherung", label: "Schaden / Versicherung" },
        { id: "mfk", label: "MFK & Diagnose" },
      ],
      drivingTimesTitle: "Schnelle Erreichbarkeit aus der Region:",
      drivingTimes: [
        { from: "Schlieren Zentrum / Bahnhof", time: "2 Min" },
        { from: "Unterengstringen", time: "4 Min" },
        { from: "Dietikon & Urdorf", time: "6 Min" },
        { from: "Zürich Altstetten", time: "7 Min" },
      ],
    },
    aboutPage: {
      badge: "DAS ATELIER // DIE MEISTERWERKSTATT",
      title: "HANDWERK MIT HALTUNG.",
      titleHighlight: "SCHWEIZER MEISTERBETRIEB.",
      subtitle:
        "Bozo Automobile entstand aus Leidenschaft für erstklassige Mechanik und dem Anspruch, persönliche Betreuung auf Augenhöhe mit modernster Diagnosetechnik zu verbinden.",
      photoCaptionTitle: "WAGISTRASSE 7 // SCHLIEREN (ZÜRICH)",
      photoCaptionDesc: "Prüfstandshalle · Hebebühnen bis 4.5 Tonnen · ADAS optische Kalibrierung",
      photoBadge: "MARKENUNABHÄNGIG SEIT ÜBER 10 JAHREN",
      credoBadge: "UNSERE PHILOSOPHIE // EHRLICH UND FAIR",
      credoQuote:
        "“Bei uns sprechen Sie direkt mit dem Meister, der an Ihrem Fahrzeug schraubt. Keine anonymen Annahme-Schalter, keine Überraschungen auf der Rechnung.”",
      credoDesc:
        "Wir sind stolz darauf, Fahrzeughalter aus Schlieren, Unterengstringen, Dietikon und Zürich mit ehrlichem Handwerk und vollem Garantieerhalt zu betreuen.",
      stats: [
        { value: "10+", label: "Jahre im Limmattal", desc: "Verlässlicher Partner für tausende zufriedene Autofahrer." },
        { value: "4.9★", label: "Google Bewertung", desc: "Über 120 verifizierte Rezensionen zufriedener Kunden." },
        { value: "24M", label: "Schweizer Garantie", desc: "Volle Gewährleistung auf alle verbauten Neuteile." },
        { value: "0 CHF", label: "Ersatzwagen", desc: "Kostenloses Ersatzfahrzeug oder E-Bike bei jedem Service." },
      ],
      equipmentTitle: "Modernste Werkstattausrüstung",
      equipmentDesc:
        "Wir investieren laufend in herstellerzertifizierte Spezialwerkzeuge und Diagnosesoftware für Neufahrzeuge, E-Autos und Klassiker.",
      equipmentList: [
        { title: "OEM Diagnosetester", desc: "Bosch KTS, ODIS, ISTA, PIWIS und XENTRY Systemdiagnostik." },
        { title: "Laser Achsmessstand", desc: "Millimetergenaue 3D-Achsvermessung für perfekten Geradeauslauf und minimalen Reifenverschleiss." },
        { title: "ADAS Kalibrierplatz", desc: "Herstellerkonforme optische Kamera- und Radarjustierung nach Scheibentausch." },
        { title: "Klimaservice-Station", desc: "Zertifiziertes Gerät für R134a und modernes R1234yf Kältemittel." },
      ],
      ctaTitle: "Erleben Sie ehrlichen Werkstattservice",
      ctaDesc: "Buchen Sie Ihren Termin online oder besuchen Sie uns an der Wagistrasse 7 in Schlieren.",
      ctaBook: "Termin online buchen",
      ctaCall: "Direkt anrufen",
    },
    servicesPage: {
      badge: "MARKENUNABHÄNGIGE MEISTERWERKSTATT",
      title: "Unsere Dienstleistungen",
      subtitle:
        "Von der schnellen Reifenmontage bis zur komplexen Unfallinstandsetzung und elektronischen Sensor-Kalibrierung. Entdecken Sie unser komplettes Leistungsspektrum.",
      benefitsTitle: "Ihre Vorteile:",
      moreDetails: "Ausführliche Details",
      bookAppointment: "Termin anfragen",
      scheduleOverview: "Alle Arbeiten werden vorab transparent mit Ihnen besprochen und verbindlich budgetiert.",
      oemGuaranteeNote: "Herstellergarantie bleibt gemäss Schweizer & EU-Recht für alle Marken vollständig erhalten.",
    },
    serviceDetailPage: {
      backToList: "Zurück zur Dienstleistungsübersicht",
      duration: "Typische Dauer:",
      pricing: "Richtpreis:",
      benefits: "Inklusive Vorteile",
      processTitle: "Schrittweiser Ablauf",
      faqTitle: "Häufige Fragen zu diesem Service",
      ctaTitle: "Möchten Sie diesen Service buchen?",
      ctaDesc: "Reservieren Sie Ihren Wunschtermin online mit kostenlosem Ersatzwagen oder rufen Sie uns direkt an.",
      bookNow: "Diesen Service buchen",
      callNow: "Direkt anrufen",
    },
    footer: {
      tagline: "Ihre verlässliche Meisterwerkstatt für Schlieren, Unterengstringen und das Limmattal.",
      description:
        "Markenunabhängige Schweizer Meisterwerkstatt in Schlieren. Ehrlich, transparent und verbindlich seit über einem Jahrzehnt.",
      benefits: [
        "24 Monate Schweizer Teilegarantie",
        "0 CHF Kostenloser Ersatzwagen & E-Bike",
        "100% Voller Erhalt der Werksgarantie",
      ],
      hours: "Öffnungszeiten",
      quickLinks: "Schnellzugriff",
      services: "Dienstleistungen",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
      impressum: "Impressum",
      privacy: "Datenschutz",
      moFr: "Mo – Fr: 08:00 – 12:00 | 13:00 – 19:00",
      sa: "Sa: 08:30 – 14:00",
      su: "So: Geschlossen",
      closed: "Geschlossen",
      handcrafted: "Schweizer Präzisionshandwerk für Bozo Automobile",
    },
    mobileActionBar: {
      call: "Anrufen",
      whatsapp: "WhatsApp",
      book: "Termin",
    },
    legalPages: {
      impressumTitle: "Impressum",
      swissLawTitle: "Angaben gemäss Schweizer Recht",
      contactTitle: "Kontakt",
      repPersonTitle: "Vertretungsberechtigte Person",
      repPersonRole: "Geschäftsführung Bozo Automobile",
      disclaimerTitle: "Haftungsausschluss",
      disclaimerText: "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.",
      copyrightTitle: "Urheberrechte",
      copyrightText: "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Bozo Automobile oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.",
      privacyTitle: "Datenschutzerklärung",
      validFrom: "Gültig ab: 1. September 2023 (gemäss revidiertem Schweizer Datenschutzgesetz, nDSG).",
      sec1Title: "1. Verantwortliche Stelle",
      sec1Text: "Verantwortlich für die Datenbearbeitungen auf dieser Website ist:",
      sec2Title: "2. Erhebung und Bearbeitung von Personendaten",
      sec2Text: "Wir bearbeiten in erster Linie die Personendaten, die wir im Rahmen unserer Kundenbeziehung und Mandatsannahme (Terminvereinbarung, Reparaturaufträge, Kostenvoranschläge, Ersatzfahrzeug-Verträge) von Ihnen erhalten oder beim Betrieb unserer Website erheben.",
      sec3Title: "3. Zwecke der Datenbearbeitung",
      sec3Text: "Wir verwenden die von uns erhobenen Personendaten in erster Linie, um unsere Verträge mit unseren Kunden und Geschäftspartnern abzuschliessen und abzuwickeln (insb. Fahrzeugreparaturen, MFK-Vorbereitungen, Schadensabwicklungen mit Versicherungen) sowie zur Kommunikation mit Ihnen.",
      sec4Title: "4. Online-Terminbuchung & Kontaktformular",
      sec4Text: "Wenn Sie unser Online-Buchungsformular oder das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name, Telefonnummer, E-Mail-Adresse, Fahrzeugdaten, Kontrollschild) ausschliesslich zur Bearbeitung Ihrer Anfrage und für den Werkstattauftrag verwendet. Eine Weitergabe an unbefugte Dritte erfolgt nicht.",
      sec5Title: "5. Datensicherheit",
      sec5Text: "Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen zum Schutz Ihrer Personendaten vor unberechtigtem Zugriff und Missbrauch, wie etwa SSL-/TLS-Verschlüsselung bei der Datenübertragung.",
      sec6Title: "6. Ihre Rechte",
      sec6Text: "Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Datenbearbeitung. Zur Geltendmachung Ihrer Rechte können Sie uns jederzeit kontaktieren unter: ",
    },
  },
};
