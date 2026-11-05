"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import BozoLogo from "@/components/brand/BozoLogo";
import { MapPin, Phone, Mail, CheckCircle2, Star } from "lucide-react";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] pt-16 pb-24 md:pb-14 text-[#9ca3af]">
      {/* Bozo Motorsport Tri-Stripe Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] flex">
        <div className="h-full w-1/3 bg-[#f40101]" />
        <div className="h-full w-1/3 bg-[#9932cc]" />
        <div className="h-full w-1/3 bg-[#1c86ee]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Identity & Standards */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group py-1" aria-label="Bozo Automobile Startseite">
              <BozoLogo
                variant="dark"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
              {t.footer.description}
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono-tech text-[#d1d5db]">
              {t.footer.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${i === 1 ? "text-emerald-400" : "text-[#ff3b30]"}`} strokeWidth={1.5} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h3 className="font-mono-tech text-xs uppercase tracking-wider text-white font-semibold">
              {t.footer.services}
            </h3>
            <ul className="space-y-2 text-xs font-mono-tech">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/dienstleistungen/${s.slug}`}
                    className="text-[#9ca3af] hover:text-white transition-colors block py-0.5"
                  >
                    {s.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="space-y-4">
            <h3 className="font-mono-tech text-xs uppercase tracking-wider text-white font-semibold">
              {t.contact.addressTitle}
            </h3>
            <div className="space-y-3 text-xs font-mono-tech">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff3b30] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="space-y-0.5">
                  <strong className="text-white block font-sans-ui text-xs">{COMPANY.name}</strong>
                  <span>{COMPANY.address.street}</span>
                  <span className="block">{COMPANY.address.postalCode} {COMPANY.address.city}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#ff3b30] shrink-0" strokeWidth={1.5} />
                <a href={`tel:${COMPANY.phoneTel}`} className="text-white hover:text-[#ff3b30] transition-colors font-bold">
                  {COMPANY.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff3b30] shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${COMPANY.email}`} className="text-[#9ca3af] hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-mono-tech text-xs uppercase tracking-wider text-white font-semibold">
              {t.footer.hours}
            </h3>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs font-mono-tech">
              <div className="flex justify-between pb-1.5 border-b border-white/[0.04]">
                <span className="text-[#9ca3af]">Mo–Fr</span>
                <span className="text-white font-bold">08:00–12:00, 13:00–19:00</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-[#9ca3af]">Samstag / Sat / Za</span>
                <span className="text-white font-bold">08:30–14:00</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#9ca3af]">Sonntag / Sun / Zo</span>
                <span className="text-[#6b7280]">{t.footer.closed}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Picture Credits Bar (Required for Wikimedia licenses) */}
        <div className="border-t border-white/[0.06] pt-6 text-[11px] font-mono-tech text-[#6b7280] leading-relaxed">
          <p>
            Bildnachweise:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Car_Repair_03.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              “Car Repair 03”
            </a>{" "}
            und{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Car_Repair_07.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              “Car Repair 07”
            </a>{" "}
            von Jwale2 (CC BY-SA 4.0 via Wikimedia Commons);{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Mechanic_tools_and_worn_vehicle_parts_arranged_on_a_stained_workshop_floor_during_repair_work.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              “Mechanic tools”
            </a>{" "}
            und{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Mechanic_works_on_machine_at_an_automotive_service_center.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              “Mechanic works on machine”
            </a>{" "}
            von Shixart1985 (CC BY 2.0 via Wikimedia Commons).
          </p>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#6b7280]">
          <p>© 2026 {COMPANY.name}. {t.footer.rights}</p>

          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              {t.footer.impressum}
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <a
              href={COMPANY.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff3b30] flex items-center gap-1 font-semibold"
            >
              <span>4.9 Google</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" />
              <span>(120 Reviews)</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
