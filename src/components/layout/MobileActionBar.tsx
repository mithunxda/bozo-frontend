"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileActionBar() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Mobile Schnellkontakt"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0e12] border-t-2 border-[#1f242d] px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${COMPANY.phoneTel}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#171a21] text-[#f7f9fa] font-sans-ui text-xs font-semibold hover:bg-[#202530]"
        >
          <Phone className="w-3.5 h-3.5 text-[#d92b21]" />
          <span>{t.mobileActionBar.call}</span>
        </a>

        <a
          href={COMPANY.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#171a21] text-[#f7f9fa] font-sans-ui text-xs font-semibold hover:bg-[#202530]"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#4ade80]" />
          <span>{t.mobileActionBar.whatsapp}</span>
        </a>

        <Link
          href="/termin-buchen"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#d92b21] text-white font-sans-ui text-xs font-bold hover:bg-[#b82219]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.mobileActionBar.book}</span>
        </Link>
      </div>
    </aside>
  );
}
