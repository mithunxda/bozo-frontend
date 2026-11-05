"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/data/company";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = t.faqs.items;

  return (
    <section className="relative py-24 lg:py-36 bg-[#07080a] text-white overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            {t.faqs.title} <br />
            <span className="text-[#9ca3af]">{t.faqs.subtitle}</span>
          </h2>
          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] max-w-xl leading-relaxed">
            {t.valueProps.subtitle}
          </p>
        </div>

        {/* Minimalist Dark Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border transition-all duration-300 overflow-hidden bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tech text-[#1c86ee]">
                      {`0${idx + 1} //`}
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white/[0.1] text-[#1c86ee]" : "text-[#9ca3af]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm font-sans-ui text-[#9ca3af] leading-relaxed border-t border-white/[0.04] animate-fluid-fade">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono-tech text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>{t.valueProps.statWarrantyTitle} Bozo Automobile</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback prompt */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#1c86ee]" strokeWidth={1.5} />
            <span className="font-sans-ui text-xs sm:text-sm text-[#d1d5db]">
              {t.faqs.stillQuestions}
            </span>
          </div>

          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="btn-ghost-island !py-2 !px-4 !text-xs font-mono-tech"
          >
            <Phone className="w-3.5 h-3.5 text-[#f40101]" strokeWidth={1.5} />
            <span>{t.faqs.directCall}: {COMPANY.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
