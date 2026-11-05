"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import {
  Wrench,
  ShieldAlert,
  Cpu,
  Maximize2,
  Disc,
  Sliders,
  Car,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  ShieldAlert,
  Cpu,
  Maximize2,
  Disc,
  Sliders,
  Car,
};

export default function ServicesPage() {
  const { language, t } = useLanguage();

  return (
    <div className="py-16 sm:py-24 bg-[#07080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c86ee]/10 border border-[#1c86ee]/25 text-[#1c86ee] text-xs font-mono-tech font-semibold mb-3">
            <span>{t.servicesPage.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {t.servicesPage.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#9ca3af] font-sans-ui">
            {t.servicesPage.subtitle}
          </p>
        </div>

        {/* Detailed Service List */}
        <div className="space-y-12">
          {SERVICES.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Wrench;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={s.id}
                id={s.slug}
                className="rounded-2xl p-6 sm:p-10 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#1c86ee]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                          {s.title[language]}
                        </h2>
                        <span className="text-xs text-[#f40101] font-mono-tech font-bold">
                          {s.priceIndication[language]}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#d1d5db] font-sans-ui leading-relaxed">
                      {s.fullDescription[language]}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2">
                      <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#9ca3af] block mb-2">
                        {t.servicesPage.benefitsTitle}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9ca3af] font-mono-tech">
                        {s.highlights[language].map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/dienstleistungen/${s.slug}`}
                        className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono-tech font-bold text-white inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>{t.servicesPage.moreDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/termin-buchen?service=${s.id}`}
                        className="px-5 py-2.5 rounded-xl bg-[#f40101] hover:bg-[#c90000] text-xs font-mono-tech font-bold text-white inline-flex items-center gap-1.5 shadow-md shadow-[#f40101]/30 transition-colors"
                      >
                        <span>{t.servicesPage.bookAppointment}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Process & Specs Box */}
                  <div className="lg:col-span-5 bg-[#0e1117] rounded-xl p-5 border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-white/[0.08] pb-3">
                      <div className="flex items-center gap-1.5 text-[#9ca3af] font-mono-tech">
                        <Clock className="w-3.5 h-3.5 text-[#1c86ee]" />
                        <span>{t.serviceDetailPage.duration}</span>
                      </div>
                      <strong className="text-white font-mono-tech">{s.typicalDuration[language]}</strong>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#9ca3af] block mb-2.5">
                        {t.serviceDetailPage.processTitle}:
                      </span>
                      <div className="space-y-2.5 text-xs">
                        {s.processSteps[language].map((step, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#1c86ee]/15 border border-[#1c86ee]/30 text-[#1c86ee] text-[10px] font-mono-tech font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {pIdx + 1}
                            </span>
                            <div>
                              <strong className="text-white block font-sans-ui">{step.title}</strong>
                              <span className="text-[#9ca3af] text-[11px] font-sans-ui leading-tight block">
                                {step.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/[0.08] text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{t.valueProps.statWarrantyDesc}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
