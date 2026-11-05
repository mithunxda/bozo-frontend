"use client";

import React, { useState } from "react";
import { FileText, Cpu, ShieldCheck, Car } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ElementType> = {
  mfk: FileText,
  obd: Cpu,
  audatex: ShieldCheck,
  mobilitaet: Car,
};

export default function BeforeAfterShowcase() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("mfk");

  const slips = t.beforeAfter.slips;
  const activeSlip = slips.find((s) => s.id === activeTab) || slips[0];
  const Icon = ICON_MAP[activeSlip.id] || FileText;

  return (
    <section className="relative py-24 lg:py-36 bg-[#07080a] text-white overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-3">
            <span className="telemetry-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30]" />
              {t.beforeAfter.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
              {t.beforeAfter.title} <br />
              <span className="text-[#9ca3af]">{t.beforeAfter.subtitle}</span>
            </h2>
          </div>
          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            {t.valueProps.props[0].description}
          </p>
        </div>

        {/* Interactive Protocol Selector & Telemetry Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tab List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {slips.map((slip) => {
              const isSelected = activeTab === slip.id;
              const TabIcon = ICON_MAP[slip.id] || FileText;
              return (
                <button
                  key={slip.id}
                  onClick={() => setActiveTab(slip.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] border-[#ff3b30] shadow-lg shadow-black/40 ring-1 ring-[#ff3b30]/30"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected
                          ? "bg-[#ff3b30] border-[#ff3b30] text-white"
                          : "bg-white/[0.04] border-white/[0.08] text-[#9ca3af]"
                      }`}
                    >
                      <TabIcon className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="font-display text-base font-bold text-white block">
                        {slip.title}
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#6b7280] block mt-0.5">
                        {slip.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                    {slip.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Protocol Sheet Viewer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-6 bg-gradient-to-b from-[#0e1117] to-[#07080a] !p-6 sm:!p-8">
                
                {/* Protocol Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#ff3b30]">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {activeSlip.title}
                      </h3>
                      <span className="text-xs font-mono-tech text-[#9ca3af]">
                        {activeSlip.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                    {activeSlip.status}
                  </span>
                </div>

                {/* Protocol Body Lines */}
                <div className="space-y-3 font-mono-tech text-xs sm:text-sm text-[#d1d5db]">
                  {activeSlip.lines.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30]" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                {/* Protocol Seal & Verification Footnote */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-tech text-[#6b7280]">
                  <div className="flex items-center gap-2">
                    <span className="radar-beacon" />
                    <span>Bozo Automobile // Wagistrasse 7, Schlieren</span>
                  </div>
                  <span className="text-emerald-400">
                    ✓ 100% {t.valueProps.props[0].title}
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
