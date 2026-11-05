"use client";

import React, { Suspense } from "react";
import BookingWizard from "@/components/booking/BookingWizard";
import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#07080a] text-white pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c86ee]/10 via-[#9932cc]/8 to-[#f40101]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="telemetry-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c86ee]" />
            {t.booking.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {t.booking.title} <br />
            <span className="text-[#9ca3af]">{t.booking.titleHighlight}</span>
          </h1>

          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-2xl mx-auto">
            {t.booking.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono-tech text-[#d1d5db]">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
              {t.booking.guaranteePill}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <Clock className="w-3.5 h-3.5 text-[#1c86ee]" strokeWidth={1.5} />
              {t.booking.keySafePill}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
              {t.booking.mobilityPill}
            </span>
          </div>
        </div>

        {/* Wizard container with suspense boundary */}
        <Suspense
          fallback={
            <div className="text-center py-20 text-[#6b7280] text-xs font-mono-tech">
              {t.booking.loadingAssistant}
            </div>
          }
        >
          <BookingWizard />
        </Suspense>
      </div>
    </div>
  );
}
