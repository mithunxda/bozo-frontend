"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Award, Bike, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ValueProps() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-36 bg-[#07080a] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-[#1c86ee]/5 via-[#9932cc]/5 to-[#f40101]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header Strip: Asymmetric Editorial Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              {t.valueProps.title} <br />
              <span className="text-[#9ca3af]">{t.valueProps.titleHighlight}</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] leading-relaxed">
              {t.valueProps.subtitle}
            </p>
          </div>
        </div>

        {/* 4 Pods: Telemetry Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 group">
            <div className="flex items-center justify-between mb-4">
              <div className="font-display text-4xl font-bold text-white flex items-center gap-1.5">
                <span>{t.valueProps.statRating}</span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                {t.valueProps.statRatingBadge}
              </span>
            </div>
            <span className="font-sans-ui text-sm font-semibold text-white block mb-1">
              {t.valueProps.statRatingTitle}
            </span>
            <p className="font-sans-ui text-xs text-[#9ca3af] leading-relaxed">
              {t.valueProps.statRatingDesc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-4xl font-bold text-white">
                {t.valueProps.statWarranty}
              </span>
              <ShieldCheck className="w-5 h-5 text-[#1c86ee]" strokeWidth={1.5} />
            </div>
            <span className="font-sans-ui text-sm font-semibold text-white block mb-1">
              {t.valueProps.statWarrantyTitle}
            </span>
            <p className="font-sans-ui text-xs text-[#9ca3af] leading-relaxed">
              {t.valueProps.statWarrantyDesc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-4xl font-bold text-white">
                {t.valueProps.statTech}
              </span>
              <Award className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
            </div>
            <span className="font-sans-ui text-sm font-semibold text-white block mb-1">
              {t.valueProps.statTechTitle}
            </span>
            <p className="font-sans-ui text-xs text-[#9ca3af] leading-relaxed">
              {t.valueProps.statTechDesc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-4xl font-bold text-[#f40101]">
                {t.valueProps.statMobility}
              </span>
              <Bike className="w-5 h-5 text-[#f40101]" strokeWidth={1.5} />
            </div>
            <span className="font-sans-ui text-sm font-semibold text-white block mb-1">
              {t.valueProps.statMobilityTitle}
            </span>
            <p className="font-sans-ui text-xs text-[#9ca3af] leading-relaxed">
              {t.valueProps.statMobilityDesc}
            </p>
          </div>

        </div>

        {/* Double-Bezel Framed Workshop Architectural Image */}
        <div className="doppelrand-shell">
          <div className="doppelrand-core !p-2 sm:!p-3 relative">
            <div className="relative w-full h-72 sm:h-[420px] rounded-[calc(2rem-10px)] overflow-hidden">
              <Image
                src="/assets/car-repair-07.jpg"
                alt="Bozo Automobile Werkstattbetrieb in Schlieren"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center filter brightness-[0.65] contrast-[1.1] hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-80" />

              {/* Floating Reticle Telemetry Overlays */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="radar-beacon" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono-tech uppercase text-white font-semibold block">
                      WAGISTRASSE 7 // SCHLIEREN
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#9ca3af] block">
                      {t.aboutPage.photoCaptionDesc}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="telemetry-badge !bg-black/60 !border-white/20 text-white">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" strokeWidth={1.5} />
                    {t.hero.allBrandsPill}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
