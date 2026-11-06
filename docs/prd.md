# Product Requirements Document (PRD)
## Bozo Automobile — Next-Generation Digital Workshop & Atelier Platform

---

## 1. Executive Summary & Brand Overview

### 1.1 Company Identity
- **Brand Name:** Bozo Automobile
- **Legal Entity:** BOZO Automobile GmbH
- **Brand Slogan:** *"Ehrlich und Fair"* (Honest and Fair)
- **Primary Business:** Independent Swiss Master Automotive Workshop & Certified Pre-Owned Vehicle Dealership
- **Physical Headquarters:** Wagistrasse 7, 8952 Schlieren, Canton of Zurich, Switzerland
- **Direct Contact:** 
  - Telephone: `+41 79 577 25 47`
  - Email: `info@bozoautomobile.ch`
  - WhatsApp Support: Integrated direct click-to-chat
  - Web: `https://bozoautomobile.ch`
- **Customer Reputation:** 4.9 ★ Rating across 120+ verified Google Reviews

### 1.2 Operating Hours
- **Monday – Friday:** 08:00 – 12:00 | 13:00 – 19:00
- **Saturday:** 08:30 – 14:00
- **Sunday:** Closed

### 1.3 Service Catchment Area
The workshop serves the Zurich metropolitan area and the Limmattal corridor, with dedicated regional focus on:
- Schlieren (Local Headquarters)
- Unterengstringen & Oberengstringen
- Dietikon & Urdorf
- Zurich Altstetten & Zurich Höngg
- Greater Limmattal & Canton Zurich

### 1.4 Core Value Proposition & Swiss Standards
1. **100% Manufacturer Warranty Retention:** Servicing strictly according to OEM manufacturer specifications in full compliance with Swiss and European Block Exemption Regulations (GVO).
2. **24-Month Quality Warranty:** Two-year guarantee on parts and craftsmanship.
3. **Multi-Brand Mastery:** Equal diagnostic and mechanical proficiency across all major German, European, Asian, and Electric vehicle manufacturers (VW, Audi, BMW, Mercedes-Benz, Porsche, Skoda, Tesla, etc.).
4. **Direct Insurance Settlement:** Direct claim processing and payment handling with all major Swiss motor insurers (Zurich, Mobiliar, AXA, Helvetia, Generali, Allianz, Vaudoise, etc.).
5. **Continuous Mobility Guarantee:** Free replacement car or workshop e-bike during servicing to maintain customer mobility.
6. **In-House Official MFK Readiness:** Complete mechanical inspection, underbody steam-cleaning, and direct presentation at cantonal vehicle inspection centers (Albisgütli, Regensdorf, Winterthur).

---

## 2. Product Vision & Strategic Objectives

### 2.1 The Problem
Car owners in the Zurich and Limmattal area face significant friction with traditional dealerships and auto repair shops:
- Inflated hourly labor rates and opaque diagnostic surcharges at franchised main dealerships.
- Lack of upfront price transparency, leaving customers unsure of their final invoice.
- Friction in booking appointments, often requiring prolonged phone calls during working hours.
- Disregard for non-German speaking international professionals residing in Zurich's multinational economy.
- Outdated, cluttered websites that fail to reflect high-precision automotive engineering.

### 2.2 The Solution
Bozo Automobile’s digital platform represents a modern, high-conversion, multilingual web application that establishes immediate authority, full cost transparency, and seamless frictionless appointment scheduling:
- **Instant Transparency:** Interactive dynamic cost calculator providing vehicle-specific quotes in real-time.
- **4-Step Booking Wizard:** Rapid online booking with license-plate autofill, mobility selection, and `.ics` calendar generation.
- **True Trilingual Parity:** Seamless, localized switching between German (`de`), English (`en`), and Dutch (`nl`) with zero hardcoded UI strings.
- **Mobile-First Speed:** Instant access to direct calling, WhatsApp dispatch, and booking via a persistent thumb-friendly mobile dock.
- **Machined Obsidian Aesthetics:** High-end Swiss automotive aesthetic aligning with precision motorsport and luxury car brands.

---

## 3. Target Audience & User Personas

### Persona A: The Pragmatic Commuter (Zurich/Limmattal Resident)
- **Profile:** 35–55 years old, drives a modern family estate or SUV (e.g., Skoda Octavia, VW Tiguan, BMW 3er).
- **Need:** Reliable annual service, brake maintenance, or upcoming official MFK inspection without dealership price gouging.
- **Pain Points:** Hidden costs, losing mobility for work, opaque technical jargon.
- **Key Feature Used:** Service Calculator for predictable pricing, 4-step wizard with free replacement car selection.

### Persona B: The Expat Professional (English/Dutch Speaker)
- **Profile:** 28–45 years old, working in Zurich's tech/finance hub, owns a Tesla, Audi, or Mercedes.
- **Need:** Trustworthy English or Dutch communication, transparent digital service record entry, fast appointment.
- **Pain Points:** Struggling with Swiss-German phone bookings, unfamiliarity with Swiss MFK cantonal requirements.
- **Key Feature Used:** Trilingual toggle (`EN` / `NL`), clear MFK service explanation, WhatsApp direct consultation.

### Persona C: The Automotive Enthusiast & Performance Driver
- **Profile:** 24–42 years old, drives a performance model (VW Golf R, BMW M, Porsche 911, Audi RS).
- **Need:** Coilover installation (KW, ST, Bilstein), custom 3D wheel alignment, sport exhaust, Swiss DTC/FAKT certification and official MFK registration.
- **Pain Points:** Garages that refuse aftermarket work or cannot handle Swiss legal certifications.
- **Key Feature Used:** Dedicated `/dienstleistungen/tieferlegung-tuning` page, direct WhatsApp contact for technical specs.

### Persona D: The Stranded Motorist (Emergency / Collision)
- **Profile:** Any driver experiencing sudden breakdown, dashboard warning lights, parking damage, or stone chip crack on the A1/Limmattal motorway.
- **Need:** Immediate emergency contact, tow-in coordination, rapid glass resin repair or direct insurance claim settlement.
- **Key Feature Used:** Sticky mobile action bar, Emergency Red Hotline CTA (`tel:+41795772547`).

---

## 4. Information Architecture & Sitemap

```
bozoautomobile.ch
├── / (Home Page)
│   ├── Hero Section (Logo, Tagline, Primary CTAs, Key Metrics, HUD Card)
│   ├── Emergency Banner (24/7 Breakdown, Direct Insurance Settlement)
│   ├── Value Propositions (Swiss Standards, Warranty, Free Mobility)
│   ├── Services Grid (6 Core Specializations with Deep Routing)
│   ├── Interactive Service Calculator (Dynamic Pricing by Vehicle Class & Service)
│   ├── Diagnostic Telemetry & Protocol Showcase (MFK, OBD-II, Audatex, Mobility)
│   ├── Verified Google Reviews (4.9★ Real Customer Testimonials)
│   ├── Location & Regional Radar (Wagistrasse 7, Driving Times, Parking)
│   └── FAQ Section (Manufacturer Warranty, MFK Presentation, Pricing)
├── /dienstleistungen (Service Catalog)
│   └── Overview of all 6 technical service disciplines
├── /dienstleistungen/[slug] (Dynamic Service Pages)
│   ├── /dienstleistungen/service-reparatur
│   ├── /dienstleistungen/karosserie-lackierung
│   ├── /dienstleistungen/fahrassistenz-programmierung
│   ├── /dienstleistungen/frontscheibenreparatur
│   ├── /dienstleistungen/rad-reifenservice
│   ├── /dienstleistungen/tieferlegung-tuning
│   └── /dienstleistungen/autohandel
├── /ueber-uns (About Us)
│   └── Master technician philosophy, workshop machinery, credentials
├── /kontakt (Contact & Directions)
│   └── Direct phone, WhatsApp, interactive topic routing form, interactive map
├── /termin-buchen (Interactive Booking Wizard)
│   └── 4-step appointment booking engine with .ics download
├── /impressum (Legal Imprint)
│   └── Swiss commercial registry, liability disclaimer, copyright
└── /datenschutz (Privacy Policy)
    └── Swiss FADP/DSG and EU GDPR compliance
```

---

## 5. Feature Specifications & User Journeys

### 5.1 Interactive 4-Step Booking Wizard (`/termin-buchen`)

The booking wizard guides the user through four intuitive, validated steps:

#### Step 1: Service Selection
- Multi-select grid of workshop services:
  - *MFK-Vollservice & Vorführung* (from CHF 180.–)
  - *Kleiner Service / Jahreswartung* (from CHF 290.–)
  - *Grosser Service / Hauptwartung* (from CHF 490.–)
  - *Rad- & Pneuwechsel* (from CHF 60.–)
  - *Klimaservice & Desinfektion* (from CHF 140.–)
  - *Bremsenservice / Bremsbeläge*
  - *Karosserie / Dellenreparatur*
  - *Achsvermessung / Fahrwerk*
- Real-time selection summary badge.
- Validation: At least one service must be selected.

#### Step 2: Vehicle Details & Mobility Preference
- **Brand Selection:** Quick-click logo chips for top brands (VW, Audi, BMW, Mercedes, Porsche, Skoda, Tesla, Seat) + free text field for any make.
- **Model & Trim:** Text input (e.g., "Golf 7 GTI", "Model Y").
- **Swiss License Plate:** Text input (e.g., "ZH 123456").
- **Mobility Choice:**
  - 🚗 *Ersatzwagen (Kostenlos)* — Free courtesy car.
  - 🚲 *E-Bike (Kostenlos)* — Free e-bike for local transit.
  - ☕ *Vor Ort warten* — Relax in customer lounge with complimentary coffee & Wi-Fi.

#### Step 3: Schedule Selection
- Date picker with automated minimum date validation (minimum $t + 1$ business day).
- Time slot radio selector:
  - Morning Drop-Off (07:30 – 09:00)
  - Afternoon Drop-Off (13:00 – 14:30)

#### Step 4: Contact Details & Review
- Full Name, Phone Number, Email Address, and optional Notes.
- Form review summary showing selected services, vehicle, date, and mobility choice.
- **Submission Action:** Generates reference ID (`BOZO-XXXX-CH`).
- **Post-Submission Confirmation Screen:**
  - Booking confirmation badge with reference code.
  - Direct WhatsApp Sync button (pre-populates appointment parameters for immediate workshop acknowledgment).
  - One-click `.ics` Calendar Invite Download (`bozo-termin-[date].ics`) with workshop GPS coordinates and contact phone embedded.

---

### 5.2 Dynamic Service Cost Calculator (Home Page)

Enables users to estimate service costs instantly without navigating away:
- **Vehicle Classification Filter:**
  - *Kleinwagen* (e.g., Polo, Yaris, i20)
  - *Limousine / Kombi* (e.g., Golf, Octavia, 3er)
  - *SUV / 4x4* (e.g., Tiguan, X3, Macan)
  - *Elektro / Hybrid* (e.g., Tesla, ID.4, Ioniq)
- **Service Package Selector:**
  - *MFK-Vollservice & Vorführung:* CHF 180.– to CHF 240.–
  - *Kleiner Service (Jahreswartung):* CHF 220.– to CHF 390.–
  - *Grosser Service (Hauptwartung):* CHF 380.– to CHF 660.–
  - *Klimaservice & Desinfektion:* CHF 140.– to CHF 180.–
- **Features Breakdown:** Real-time list of line items included (e.g., 50-point safety check, laser headlight beam alignment, free replacement car).
- **Instant Booking CTA:** Direct link to `/termin-buchen` pre-filling the selected package.

---

### 5.3 Internationalization (i18n) Architecture

- **Supported Languages:**
  - **German (`de`):** Primary language and default locale.
  - **English (`en`):** Full translation for Zurich's international expat and corporate community.
  - **Dutch (`nl`):** Full translation matching regional executive demographics.
- **Mandate:**
  - 100% key and array parity across all three languages.
  - Strict absence of hardcoded strings in templates or components.
  - LocalStorage persistence (`bozo_lang`) with `useSyncExternalStore` hydration protection to eliminate React hydration mismatch flickers.
- **Automated Validation:**
  - Regulated via `npm test` (`tests/run.cjs` / `tests/translations.test.ts`), which enforces 100% key parity, zero empty strings, matching array lengths, and verifies that no source files contain forbidden hardcoded `.de` access.

---

### 5.4 Local SEO & Schema.org Rich Snippets

- Implemented via `src/components/seo/SchemaOrg.tsx`.
- Structured Data: `AutoRepair` / `LocalBusiness` JSON-LD schema:
  - Exact coordinates: Lat `47.3995`, Lng `8.4485`.
  - Service coverage array: Schlieren, Unterengstringen, Oberengstringen, Dietikon, Urdorf, Zurich Altstetten, Zurich Höngg, Limmattal.
  - Rating metadata: 4.9 stars, 120 reviews.
  - Complete weekday and Saturday operating hours.

---

## 6. Technical Stack & Architecture

| Layer | Technology | Specification / Version |
| :--- | :--- | :--- |
| **Framework** | Next.js | 16.4.5 (App Router) |
| **Runtime / Library** | React | 19.3.0 |
| **Language** | TypeScript | 5.x (Strict mode) |
| **Styling** | Tailwind CSS | v4 with `@tailwindcss/turbopack` |
| **Icons** | Lucide React | v1.68.0 (1.5px technical stroke width) |
| **Build Target** | Static HTML Export | `output: "export"` in `next.config.ts` |
| **Testing** | Node.js Test Runner | `node:test` + `jiti` for TypeScript execution |
| **Code Quality** | ESLint | Next.js recommended config (ESLint 9) |

---

## 7. Performance & Quality Benchmarks

1. **Static Pre-Rendering:** All 18 routes (including dynamic service slugs `/dienstleistungen/[slug]`) compile to pure static HTML/CSS/JS in $< 1.5$ seconds during build.
2. **Zero Runtime API Dependencies:** The application functions fully as a high-speed static asset package deployable to any edge CDN (Vercel, Cloudflare Pages, AWS S3/CloudFront).
3. **Core Web Vitals:**
   - **LCP (Largest Contentful Paint):** $< 1.2\text{s}$ (Optimized Next.js image components with prioritized hero assets).
   - **FID / INP:** $< 50\text{ms}$ (Lightweight client interactivity, zero heavy JavaScript libraries).
   - **CLS (Cumulative Layout Shift):** $0.00$ (Explicit aspect ratios on all photography and containers).
4. **Accessibility (a11y):**
   - High contrast ratios exceeding WCAG AA standards (White text on `#07080a` obsidian).
   - Complete `aria-label`, `role="img"`, and keyboard navigable dropdowns.
   - Distinct `:focus-visible` state using brand motorsport blue (`#1c86ee`).
