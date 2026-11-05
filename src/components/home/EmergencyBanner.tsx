"use client";

import React from "react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, AlertCircle } from "lucide-react";

export default function EmergencyBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 bg-[#0a0c10] text-white border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-950/40 via-[#0e1117] to-[#0e1117] border border-red-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Bozo Motorsport Tri-Stripe Top Edge */}
          <div className="absolute top-0 left-0 right-0 h-[2px] flex">
            <div className="h-full w-1/3 bg-[#f40101]" />
            <div className="h-full w-1/3 bg-[#9932cc]" />
            <div className="h-full w-1/3 bg-[#1c86ee]" />
          </div>
          
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] font-mono-tech uppercase tracking-wider text-red-400">
              <AlertCircle className="w-3.5 h-3.5 text-red-400" strokeWidth={1.5} />
              {t.emergency.badge}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {t.emergency.title}
            </h2>
            <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
              {t.emergency.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="btn-island w-full sm:w-auto justify-center !py-3.5 !px-6"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span>{t.emergency.button}</span>
            </a>

            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-island w-full sm:w-auto justify-center !py-3.5 !px-6 font-mono-tech"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
              <span>{t.emergency.whatsAppBtn}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
