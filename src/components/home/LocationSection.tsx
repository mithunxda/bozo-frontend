"use client";

import React from "react";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { Navigation, Clock, MapPin, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const { t } = useLanguage();
  const drivingTimes = t.location.drivingTimes;

  return (
    <section className="relative min-h-[85dvh] flex items-center justify-end overflow-hidden bg-[#07080a] py-20 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06]">
      {/* Background workshop image with dark gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/mechanic-works-on-machine-at-an-automotive.jpg"
          alt="Bozo Automobile Meisterwerkstatt Schlieren"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/80 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-[#07080a]/80 lg:hidden" />
      </div>

      {/* The Doppelrand Command Terminal on the Right */}
      <div className="relative z-10 w-full max-w-xl">
        <div className="doppelrand-shell">
          <div className="doppelrand-core space-y-6">
            
            {/* Header */}
            <div className="pb-4 border-b border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#1c86ee] font-bold block">
                  {t.location.badge}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5">
                  {t.location.title}
                </h2>
              </div>
              <span className="radar-beacon" />
            </div>

            {/* Address */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1c86ee] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="space-y-0.5 text-xs font-mono-tech">
                <span className="font-bold text-white block text-sm">
                  {COMPANY.address.street}
                </span>
                <span className="text-[#9ca3af] block">
                  {COMPANY.address.postalCode} {COMPANY.address.city} ({COMPANY.address.canton})
                </span>
                <span className="text-emerald-400 block pt-1">
                  ✓ {t.location.freeParking}
                </span>
              </div>
            </div>

            {/* Driving Times Telemetry */}
            <div className="space-y-2">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[#9ca3af] block">
                {t.location.drivingTimesTitle}
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                {drivingTimes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between"
                  >
                    <span className="text-[#9ca3af] truncate pr-2">{item.from}</span>
                    <span className="font-bold text-[#1c86ee] shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs font-mono-tech">
              <span className="font-bold text-white flex items-center gap-1.5 text-xs">
                <Clock className="w-4 h-4 text-[#1c86ee]" strokeWidth={1.5} />
                {t.footer.hours}
              </span>
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-[#9ca3af]">Mo–Fr</span>
                  <span className="font-bold text-white">08:00–12:00, 13:00–19:00</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-[#9ca3af]">Samstag / Sat / Za</span>
                  <span className="font-bold text-white">08:30–14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9ca3af]">Sonntag / Sun / Zo</span>
                  <span className="text-[#6b7280]">{t.footer.closed} ({t.location.keyDropTitle})</span>
                </div>
              </div>
            </div>

            {/* Route Navigation Button */}
            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-island w-full justify-center !py-3.5"
            >
              <Navigation className="w-4 h-4" strokeWidth={1.5} />
              <span>{t.location.directionsBtn}</span>
              <span className="btn-island-icon">
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
