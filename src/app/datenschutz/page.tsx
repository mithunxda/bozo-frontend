"use client";

import React from "react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";

export default function DatenschutzPage() {
  const { t } = useLanguage();
  const lp = t.legalPages;

  return (
    <div className="py-24 sm:py-32 bg-[#090d16] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <h1 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight border-b border-slate-800 pb-4">
            {lp.privacyTitle}
          </h1>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans-ui">
            <p className="text-xs text-slate-400">{lp.validFrom}</p>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.sec1Title}</h2>
              <p>{lp.sec1Text}</p>
              <div className="mt-2 pl-4 border-l-2 border-rose-500 text-xs font-mono-tech space-y-0.5">
                <p className="font-bold text-white">{COMPANY.legalName}</p>
                <p>{COMPANY.address.street}</p>
                <p>
                  {COMPANY.address.postalCode} {COMPANY.address.city}
                </p>
                <p>E-Mail: {COMPANY.email}</p>
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.sec2Title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{lp.sec2Text}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.sec3Title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{lp.sec3Text}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.sec4Title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{lp.sec4Text}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.sec5Title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{lp.sec5Text}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.sec6Title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lp.sec6Text}
                <a href={`mailto:${COMPANY.email}`} className="text-white hover:underline">
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
