"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Wrench,
  ShieldCheck,
  Cpu,
  Car,
  Disc,
  ArrowUpRight,
  Sparkles,
  Check,
  FileCheck,
} from "lucide-react";

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-36 bg-[#07080a] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Laser Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#1c86ee]/5 via-[#9932cc]/5 to-[#f40101]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading with Telemetry Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-3">
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
              {t.services.title} <br />
              <span className="text-[#9ca3af]">{t.services.titleHighlight}</span>
            </h2>
          </div>
          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* The Asymmetrical Bento Grid (12-column) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento Card 1 (Span 8): MFK-Bereitstellung & ADAS Diagnostik */}
          <div className="md:col-span-8 doppelrand-shell group">
            <div className="doppelrand-core flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#1c86ee]">
                      <Cpu className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                      {t.services.card1Badge}
                    </span>
                  </div>
                  <span className="font-display text-2xl font-bold text-white">
                    {t.services.card1Price}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.services.card1Title}
                </h3>
                
                <p className="font-sans-ui text-sm text-[#9ca3af] max-w-xl leading-relaxed">
                  {t.services.card1Desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono-tech text-[#d1d5db]">
                  {t.services.card1Features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href="/dienstleistungen/fahrassistenz-programmierung"
                  className="text-xs font-mono-tech text-[#9ca3af] hover:text-white transition-colors"
                >
                  {t.services.card1CtaDetail}
                </Link>
                <Link
                  href="/termin-buchen?service=mfk"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech text-white hover:text-[#1c86ee] transition-colors group/link"
                >
                  <span>{t.services.card1CtaBook}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-[#1c86ee]" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Span 4): 0 CHF Ersatzmobilität */}
          <div className="md:col-span-4 doppelrand-shell group">
            <div className="doppelrand-core flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#121620] to-[#0a0c10]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#f40101]">
                    <Car className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-2xl font-bold text-[#f40101]">
                    0 CHF
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t.valueProps.props[1].title}
                </h3>

                <p className="font-sans-ui text-sm text-[#9ca3af] leading-relaxed">
                  {t.valueProps.props[1].description}
                </p>

                <div className="space-y-2 text-xs font-mono-tech text-[#d1d5db]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                    <span>{t.hero.trustMobilityLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                    <span>{t.valueProps.statMobilityDesc}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono-tech text-[#9ca3af] block">
                  {t.calculator.freeMobilityPill}
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 3 (Span 4): Inspektion nach Herstellervorschrift */}
          <div className="md:col-span-4 doppelrand-shell group">
            <div className="doppelrand-core flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                    <Wrench className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-2xl font-bold text-white">
                    ab CHF 290.–
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t.services.card2Title}
                </h3>

                <p className="font-sans-ui text-sm text-[#9ca3af] leading-relaxed">
                  {t.services.card2Desc}
                </p>

                <div className="space-y-1.5 text-xs font-mono-tech text-[#d1d5db]">
                  {t.services.card2Points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/termin-buchen?service=service-reparatur"
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-white hover:text-[#1c86ee] transition-colors"
              >
                <span>{t.services.bookThisService}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1c86ee]" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Bento Card 4 (Span 4): High-Performance Bremsen & Fahrwerk */}
          <div className="md:col-span-4 doppelrand-shell group">
            <div className="doppelrand-core flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                    <Disc className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-2xl font-bold text-white">
                    ab CHF 240.–
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t.services.card4Title}
                </h3>

                <p className="font-sans-ui text-sm text-[#9ca3af] leading-relaxed">
                  {t.services.card4Desc}
                </p>

                <div className="space-y-1.5 text-xs font-mono-tech text-[#d1d5db]">
                  {t.services.card4Points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/termin-buchen?service=service-reparatur"
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-white hover:text-[#f40101] transition-colors"
              >
                <span>{t.services.bookThisService}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f40101]" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Bento Card 5 (Span 4): Reifenhotel & Auswuchtung */}
          <div className="md:col-span-4 doppelrand-shell group">
            <div className="doppelrand-core flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                    <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-2xl font-bold text-white">
                    ab CHF 60.–
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t.services.card5Title}
                </h3>

                <p className="font-sans-ui text-sm text-[#9ca3af] leading-relaxed">
                  {t.services.card5Desc}
                </p>

                <div className="space-y-1.5 text-xs font-mono-tech text-[#d1d5db]">
                  {t.services.card5Points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/termin-buchen?service=rad-reifenservice"
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-white hover:text-[#1c86ee] transition-colors"
              >
                <span>{t.services.bookThisService}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1c86ee]" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Bento Full-Width Banner (Span 12): Versicherungs-Direktabrechnung */}
          <div className="md:col-span-12 doppelrand-shell">
            <div className="doppelrand-core !p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-[#0d1017] via-[#0e121a] to-[#121622]">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#1c86ee]">
                  <FileCheck className="w-4 h-4" strokeWidth={1.5} />
                  <span>{t.services.card3Badge}</span>
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {t.services.card3Title}
                </h4>
                <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {t.services.card3Desc}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/kontakt?subject=versicherung"
                  className="btn-ghost-island !py-2.5 !px-5 !text-xs font-mono-tech"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                  <span>{t.services.bookThisService}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
