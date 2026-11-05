"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { COMPANY } from "@/data/company";
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
  Calendar,
  Phone,
  Clock,
  ShieldCheck,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
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

export default function ServiceDetailContent({ service }: { service: ServiceItem }) {
  const { language, t } = useLanguage();
  const Icon = iconMap[service.iconName] || Wrench;

  return (
    <div className="py-14 sm:py-20 bg-[#090d16] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/dienstleistungen"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.serviceDetailPage.backToList}</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-500">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  {t.hero.badge}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {service.title[language]}
                </h1>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block">{t.serviceDetailPage.pricing}</span>
              <span className="text-lg font-black text-rose-400">
                {service.priceIndication[language]}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.fullDescription[language]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.highlights[language].map((h, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
            <Link
              href={`/termin-buchen?service=${service.id}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-rose-950/60 glow-red"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.serviceDetailPage.bookNow}</span>
            </Link>

            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-500" />
              <span>{t.serviceDetailPage.callNow}: {COMPANY.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Process Breakdown */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-10">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-rose-500" />
            <span>{t.serviceDetailPage.processTitle} ({service.typicalDuration[language]})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.processSteps[language].map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-rose-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        {service.faqs[language]?.length > 0 && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-10">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-rose-500" />
              <span>{t.serviceDetailPage.faqTitle}: {service.title[language]}</span>
            </h2>

            <div className="space-y-4">
              {service.faqs[language].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-200">{faq.q}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guarantees Box */}
        <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-800/60 flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <strong className="text-white block font-semibold">
                {t.hero.eyebrow2} · {t.valueProps.props[0].title}
              </strong>
              <span className="text-slate-400">
                {t.valueProps.props[3].description}
              </span>
            </div>
          </div>
          <Link
            href="/termin-buchen"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 shrink-0 flex items-center gap-1"
          >
            <span>{t.nav.bookNow}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
