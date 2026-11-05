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
    <div className="py-14 sm:py-20 bg-[#07080a] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/dienstleistungen"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#9ca3af] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.serviceDetailPage.backToList}</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="rounded-2xl p-6 sm:p-10 bg-white/[0.02] border border-white/[0.08] mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1c86ee]/10 border border-[#1c86ee]/25 flex items-center justify-center text-[#1c86ee]">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#1c86ee]">
                  {t.hero.badge}
                </span>
                <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {service.title[language]}
                </h1>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs font-mono-tech text-[#9ca3af] block">{t.serviceDetailPage.pricing}</span>
              <span className="text-lg font-mono-tech font-bold text-[#f40101]">
                {service.priceIndication[language]}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#9ca3af] font-sans-ui leading-relaxed">
            {service.fullDescription[language]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.highlights[language].map((h, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-[#d1d5db] font-mono-tech">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
            <Link
              href={`/termin-buchen?service=${service.id}`}
              className="btn-island !py-3 !px-6 !text-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.serviceDetailPage.bookNow}</span>
            </Link>

            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="btn-ghost-island !py-3 !px-5 !text-xs font-mono-tech cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#f40101]" />
              <span>{t.serviceDetailPage.callNow}: {COMPANY.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Process Breakdown */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.02] border border-white/[0.08] mb-10">
          <h2 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#1c86ee]" />
            <span>{t.serviceDetailPage.processTitle} ({service.typicalDuration[language]})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.processSteps[language].map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#1c86ee]/15 border border-[#1c86ee]/30 text-[#1c86ee] text-xs font-mono-tech font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-sm font-sans-ui font-bold text-white">{step.title}</h3>
                  <p className="text-xs font-sans-ui text-[#9ca3af] mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        {service.faqs[language]?.length > 0 && (
          <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.02] border border-white/[0.08] mb-10">
            <h2 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#1c86ee]" />
              <span>{t.serviceDetailPage.faqTitle}: {service.title[language]}</span>
            </h2>

            <div className="space-y-4">
              {service.faqs[language].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <h3 className="text-sm font-sans-ui font-bold text-white">{faq.q}</h3>
                  <p className="text-xs font-sans-ui text-[#9ca3af] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guarantees Box */}
        <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <strong className="text-white block font-semibold font-sans-ui">
                {t.hero.eyebrow2} · {t.valueProps.props[0].title}
              </strong>
              <span className="text-[#9ca3af] font-sans-ui">
                {t.valueProps.props[3].description}
              </span>
            </div>
          </div>
          <Link
            href="/termin-buchen"
            className="text-xs font-mono-tech font-bold text-emerald-400 hover:text-emerald-300 shrink-0 flex items-center gap-1"
          >
            <span>{t.nav.bookNow}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
