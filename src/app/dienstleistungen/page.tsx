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
    <div className="py-16 sm:py-24 bg-[#090d16] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-rose-400 text-xs font-semibold mb-3">
            <span>{t.servicesPage.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.servicesPage.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-400">
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
                className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                          {s.title[language]}
                        </h2>
                        <span className="text-xs text-rose-400 font-medium">
                          {s.priceIndication[language]}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {s.fullDescription[language]}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        {t.servicesPage.benefitsTitle}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
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
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white inline-flex items-center gap-1.5"
                      >
                        <span>{t.servicesPage.moreDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/termin-buchen?service=${s.id}`}
                        className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white inline-flex items-center gap-1.5 shadow-md shadow-rose-950/50"
                      >
                        <span>{t.servicesPage.bookAppointment}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Process & Specs Box */}
                  <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-rose-500" />
                        <span>{t.serviceDetailPage.duration}</span>
                      </div>
                      <strong className="text-slate-200">{s.typicalDuration[language]}</strong>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        {t.serviceDetailPage.processTitle}:
                      </span>
                      <div className="space-y-2.5 text-xs">
                        {s.processSteps[language].map((step, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-rose-950 border border-rose-800 text-rose-400 text-[10px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                              {pIdx + 1}
                            </span>
                            <div>
                              <strong className="text-white block">{step.title}</strong>
                              <span className="text-slate-400 text-[11px] leading-tight block">
                                {step.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 flex items-center gap-1.5">
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
