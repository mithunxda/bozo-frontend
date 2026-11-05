"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import BozoLogo from "@/components/brand/BozoLogo";
import {
  Phone,
  ArrowUpRight,
  Star,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Car,
  Clock,
} from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeBrandKey, setActiveBrandKey] = useState<string>("all");

  const brandData = t.hero.brandData;
  const brand = brandData[activeBrandKey] || brandData["all"];

  return (
    <section className="relative min-h-[92dvh] flex items-center justify-center overflow-hidden bg-[#07080a] pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background Cinematic Atmosphere & Laser Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/car-repair-03.jpg"
          alt="Bozo Automobile Meisterwerkstatt Schlieren"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-[1.1] scale-105 transition-transform duration-1000"
        />
        {/* Obsidian Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080a]/90 via-[#07080a]/80 to-[#07080a]" />
        
        {/* Laser Mesh Radial Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Authority Canvas (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8 animate-fluid-fade">
            {/* Precision Reticle Eyebrow with Brand Connection */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                <BozoLogo variant="dark" className="h-4 sm:h-5 w-auto" />
                <span className="h-3 w-[1px] bg-white/[0.15]" />
                <span className="text-[11px] font-mono-tech tracking-wider uppercase text-[#d1d5db]">
                  {t.hero.badge}
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" strokeWidth={1.5} />
                {t.hero.eyebrow2}
              </span>
            </div>

            {/* Massive Grotesque H1 */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02]">
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="font-sans-ui text-base sm:text-lg text-[#9ca3af] max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Haptic Island CTA Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/termin-buchen" className="btn-island">
                <span>{t.hero.ctaBook}</span>
                <span className="btn-island-icon">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>

              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="btn-ghost-island justify-center font-mono-tech"
              >
                <Phone className="w-4 h-4 text-[#ff3b30]" strokeWidth={1.5} />
                <span>{t.hero.ctaCall}: {COMPANY.phoneFormatted}</span>
              </a>
            </div>

            {/* High-Altitude Trust Matrix */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/[0.08]">
              <div className="space-y-1">
                <span className="block text-[11px] font-mono-tech text-[#6b7280] uppercase tracking-wider">
                  {t.hero.trustScoreLabel}
                </span>
                <div className="flex items-center gap-1.5 font-display text-base font-bold text-white">
                  <span>{t.hero.trustScore}</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="block text-[11px] font-mono-tech text-[#6b7280] uppercase tracking-wider">
                  {t.hero.trustMobilityLabel}
                </span>
                <span className="block font-display text-base font-bold text-[#ff3b30]">
                  {t.hero.trustMobility}
                </span>
              </div>

              <div className="space-y-1">
                <span className="block text-[11px] font-mono-tech text-[#6b7280] uppercase tracking-wider">
                  {t.hero.trustWarrantyLabel}
                </span>
                <span className="block font-display text-base font-bold text-white">
                  {t.hero.trustWarranty}
                </span>
              </div>

              <div className="space-y-1">
                <span className="block text-[11px] font-mono-tech text-[#6b7280] uppercase tracking-wider">
                  {t.hero.trustBrandsLabel}
                </span>
                <span className="block font-display text-base font-bold text-white">
                  {t.hero.trustBrands}
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating CNC Telemetry Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-6 relative overflow-hidden">
                {/* Bozo Motorsport Tri-Stripe Top Edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] flex">
                  <div className="h-full w-1/3 bg-[#f40101]" />
                  <div className="h-full w-1/3 bg-[#9932cc]" />
                  <div className="h-full w-1/3 bg-[#1c86ee]" />
                </div>
                
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="radar-beacon" />
                    <span className="text-xs font-mono-tech font-semibold tracking-wider text-white uppercase">
                      Terminal // {brand.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#9ca3af] bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                    WAGISTRASSE 7
                  </span>
                </div>

                {/* Brand Selector Micro-Tabs */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#6b7280]">
                      {t.hero.brandLabel}
                    </span>
                    <Car className="w-3.5 h-3.5 text-[#ff3b30]" strokeWidth={1.5} />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                    {Object.keys(brandData).map((key) => {
                      const isActive = activeBrandKey === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveBrandKey(key)}
                          className={`px-2 py-2 rounded-xl text-xs font-mono-tech transition-all duration-300 text-center cursor-pointer ${
                            isActive
                              ? "bg-white/[0.12] text-white font-bold border border-white/[0.15] shadow-lg shadow-black/40"
                              : "text-[#9ca3af] hover:text-white hover:bg-white/[0.04] border border-transparent"
                          }`}
                        >
                          {brandData[key].name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Telemetry Readout Box */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#ff3b30] font-bold">
                      {brand.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono-tech text-emerald-400">
                      <Clock className="w-3 h-3" strokeWidth={1.5} />
                      Express
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono-tech text-[#d1d5db]">
                    <div className="flex items-start gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#ff3b30] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="leading-tight">{brand.protocol}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={1.5} />
                      <span>{brand.leadTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#ff3b30] shrink-0" strokeWidth={1.5} />
                      <span>{brand.mobility}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Inside HUD */}
                <div className="pt-2">
                  <Link
                    href={`/termin-buchen?brand=${activeBrandKey}`}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-white/[0.08] to-white/[0.03] hover:from-white/[0.12] hover:to-white/[0.06] border border-white/[0.1] text-white text-xs font-mono-tech font-semibold transition-all group"
                  >
                    <span>{brand.name} – {t.hero.ctaBook}</span>
                    <span className="w-6 h-6 rounded-full bg-[#ff3b30] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
                  </Link>
                </div>

                {/* Swiss Quality Seal Banner */}
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono-tech text-[#6b7280]">
                  <span>🇨🇭 {t.hero.allBrandsPill}</span>
                  <span>·</span>
                  <span>100% {t.valueProps.props[0].title}</span>
                  <span>·</span>
                  <span>{t.hero.guaranteePill}</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
