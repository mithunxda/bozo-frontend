"use client";

import React from "react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpressumPage() {
  const { t } = useLanguage();
  const lp = t.legalPages;

  return (
    <div className="py-24 sm:py-32 bg-[#090d16] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <h1 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight border-b border-slate-800 pb-4">
            {lp.impressumTitle}
          </h1>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans-ui">
            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.swissLawTitle}</h2>
              <p className="font-semibold text-slate-100">{COMPANY.legalName}</p>
              <p>{COMPANY.address.street}</p>
              <p>
                {COMPANY.address.postalCode} {COMPANY.address.city}
              </p>
              <p>{COMPANY.address.country}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.contactTitle}</h2>
              <p>
                Telefon:{" "}
                <a href={`tel:${COMPANY.phoneTel}`} className="text-rose-400 hover:underline">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-rose-400 hover:underline">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                Webseite:{" "}
                <a
                  href="https://bozoautomobile.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:underline"
                >
                  https://bozoautomobile.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.repPersonTitle}</h2>
              <p>{lp.repPersonRole}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.disclaimerTitle}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{lp.disclaimerText}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2 font-display">{lp.copyrightTitle}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{lp.copyrightText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
