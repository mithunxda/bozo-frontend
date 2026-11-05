"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Award,
  Phone,
  Car,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Clock,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#07080a] text-white pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c86ee]/10 via-[#9932cc]/8 to-[#f40101]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="telemetry-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c86ee]" />
            {t.aboutPage.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {t.aboutPage.title} <br />
            <span className="text-[#9ca3af]">{t.aboutPage.titleHighlight}</span>
          </h1>

          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-2xl mx-auto">
            {t.aboutPage.subtitle}
          </p>
        </div>

        {/* Double-Bezel Framed Atelier Photography */}
        <div className="doppelrand-shell">
          <div className="doppelrand-core !p-2 sm:!p-3 relative">
            <div className="relative w-full h-72 sm:h-[440px] rounded-[calc(2rem-10px)] overflow-hidden">
              <Image
                src="/assets/mechanic-tools-and-worn-vehicle-parts-arranged.jpg"
                alt="Werkzeuge und Präzisionsdiagnostik bei Bozo Automobile"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center filter brightness-[0.6] contrast-[1.1] hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/40 to-transparent" />

              {/* Floating Reticle Telemetry Overlays */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="radar-beacon" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono-tech uppercase text-white font-semibold block">
                      {t.aboutPage.photoCaptionTitle}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#9ca3af] block">
                      {t.aboutPage.photoCaptionDesc}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="telemetry-badge !bg-black/70 !border-white/20 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                    {t.aboutPage.photoBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Master's Credo Quote Enclosure */}
        <div className="max-w-4xl mx-auto">
          <div className="doppelrand-shell">
            <div className="doppelrand-core !p-8 sm:!p-12 text-center space-y-4 bg-gradient-to-b from-white/[0.04] to-transparent">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#1c86ee] font-bold block">
                {t.aboutPage.credoBadge}
              </span>
              <p className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                {t.aboutPage.credoQuote}
              </p>
              <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] max-w-xl mx-auto leading-relaxed">
                {t.aboutPage.credoDesc}
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Atelier Guarantees (2x2 Bento Grid) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#9ca3af]">
              {t.valueProps.badge}
            </span>
            <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              4 PUNKTE STANDARDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-emerald-400">
                    <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    100% {t.valueProps.props[3].title}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {t.valueProps.props[3].title}
                </h3>
                <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {t.valueProps.props[3].description}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#f40101]">
                    <Car className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#f40101] bg-[#f40101]/10 border border-[#f40101]/25 px-2 py-0.5 rounded-full">
                    {t.hero.trustMobility}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {t.valueProps.props[1].title}
                </h3>
                <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {t.valueProps.props[1].description}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-amber-400">
                    <Cpu className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] font-mono-tech text-amber-400 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded-full">
                    {t.valueProps.statTechBadge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {t.valueProps.props[2].title}
                </h3>
                <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {t.valueProps.props[2].description}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#1c86ee]">
                    <Award className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#1c86ee] bg-[#1c86ee]/10 border border-[#1c86ee]/25 px-2 py-0.5 rounded-full">
                    {t.valueProps.statWarrantyBadge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {t.valueProps.statWarrantyTitle}
                </h3>
                <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {t.valueProps.statWarrantyDesc}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Atelier Visitation CTA Terminal */}
        <div className="doppelrand-shell">
          <div className="doppelrand-core !p-8 sm:!p-12 text-center space-y-6 bg-gradient-to-r from-[#1c86ee]/10 via-[#0e1117] to-[#f40101]/10">
            <div className="space-y-2">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#1c86ee] font-bold block">
                {t.aboutPage.ctaTitle}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {t.aboutPage.title}
              </h2>
              <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] max-w-lg mx-auto leading-relaxed">
                {t.aboutPage.ctaDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/termin-buchen" className="btn-island w-full sm:w-auto justify-center">
                <span>{t.aboutPage.ctaBook}</span>
                <span className="btn-island-icon">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>

              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="btn-ghost-island w-full sm:w-auto justify-center font-mono-tech"
              >
                <Phone className="w-4 h-4 text-[#f40101]" strokeWidth={1.5} />
                <span>{t.aboutPage.ctaCall}: {COMPANY.phoneFormatted}</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] font-mono-tech text-[#6b7280] pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1c86ee]" strokeWidth={1.5} />
                Schlieren (Zürich)
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                {t.nav.openHoursRadar}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
