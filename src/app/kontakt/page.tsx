"use client";

import React, { useState } from "react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight,
  KeyRound,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formSent, setFormSent] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("allgemein");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const topics = t.contact.topics;
  const drivingTimes = t.contact.drivingTimes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSent(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07080a] text-white pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c86ee]/10 via-[#9932cc]/8 to-[#f40101]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="telemetry-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c86ee]" />
            {t.contact.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {t.contact.title} <br />
            <span className="text-[#9ca3af]">{t.contact.titleHighlight}</span>
          </h1>

          <p className="font-sans-ui text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Telemetry Terminal & Inquiry Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Terminal (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Information Doppelrand Card */}
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-6">
                
                {/* Header status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="radar-beacon" />
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-white font-semibold">
                      {t.nav.workshopOpen}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#9ca3af] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                    {t.nav.openHoursRadar}
                  </span>
                </div>

                {/* Direct Hotline */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#6b7280] block">
                    {t.contact.phoneTitle}
                  </span>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="font-display text-2xl font-bold text-white hover:text-[#f40101] flex items-center justify-between transition-colors"
                  >
                    <span>{COMPANY.phoneFormatted}</span>
                    <Phone className="w-5 h-5 text-[#f40101]" strokeWidth={1.5} />
                  </a>
                  <span className="text-[11px] font-mono-tech text-emerald-400 block">
                    ✓ {t.contact.callNow}
                  </span>
                </div>

                {/* WhatsApp Quick Chat */}
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/30 text-white text-xs font-mono-tech font-semibold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                    <span>{t.contact.whatsappChat}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>

                {/* Address & Navigation */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs font-mono-tech">
                    <MapPin className="w-4 h-4 text-[#1c86ee] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div className="space-y-0.5">
                      <strong className="text-white block font-sans-ui text-sm">{COMPANY.name}</strong>
                      <span className="text-[#9ca3af] block">{COMPANY.address.street}</span>
                      <span className="text-[#9ca3af] block">{COMPANY.address.postalCode} {COMPANY.address.city}</span>
                      <span className="text-emerald-400 block pt-1">{t.location.freeParking}</span>
                    </div>
                  </div>

                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-island w-full justify-center !py-2.5 !text-xs font-mono-tech"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#1c86ee]" strokeWidth={1.5} />
                    <span>{t.contact.getDirections}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9ca3af]" strokeWidth={1.5} />
                  </a>
                </div>

                {/* Key Drop Box Security Badge */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3 text-xs font-mono-tech text-[#9ca3af]">
                  <KeyRound className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={1.5} />
                  <span>{t.location.keyDropDesc}</span>
                </div>

                {/* Driving Times */}
                <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#6b7280] block">
                    {t.contact.drivingTimesTitle}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                    {drivingTimes.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between"
                      >
                        <span className="text-[#9ca3af] truncate pr-1">{item.from}</span>
                        <span className="font-bold text-[#1c86ee] shrink-0">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Console (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="doppelrand-shell">
              <div className="doppelrand-core space-y-6">
                
                <div className="pb-4 border-b border-white/[0.08]">
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#1c86ee] font-bold block">
                    {t.contact.badge}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {t.contact.formTitle}
                  </h3>
                  <p className="font-sans-ui text-xs text-[#9ca3af] mt-1">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                {formSent ? (
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-emerald-500/30 text-center space-y-4 animate-fluid-fade">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" strokeWidth={1.5} />
                    <div className="space-y-1">
                      <h4 className="font-display text-2xl font-bold text-white">
                        {t.contact.sentSuccess}
                      </h4>
                      <p className="font-sans-ui text-xs text-[#9ca3af] max-w-md mx-auto">
                        {t.booking.successDesc}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>{t.booking.successTitle}</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Topic Selector Pills */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                        {t.contact.topicLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {topics.map((tItem) => {
                          const isSelected = selectedTopic === tItem.id;
                          return (
                            <button
                              type="button"
                              key={tItem.id}
                              onClick={() => setSelectedTopic(tItem.id)}
                              className={`px-3 py-2 rounded-xl text-xs font-mono-tech text-center border transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-white/[0.1] border-[#1c86ee] text-white font-bold ring-1 ring-[#1c86ee]/30"
                                  : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af] hover:text-white hover:bg-white/[0.04]"
                              }`}
                            >
                              {tItem.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                          {t.contact.nameLabel} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#1c86ee] focus:ring-1 focus:ring-[#1c86ee]/30 transition-all"
                          placeholder={t.booking.fullName}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                          {t.contact.phoneLabel} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#1c86ee] focus:ring-1 focus:ring-[#1c86ee]/30 transition-all"
                          placeholder="+41 79 000 00 00"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#1c86ee] focus:ring-1 focus:ring-[#1c86ee]/30 transition-all"
                        placeholder="beispiel@domain.ch"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                        {t.contact.messageLabel} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#1c86ee] focus:ring-1 focus:ring-[#1c86ee]/30 transition-all"
                        placeholder={t.booking.notesPlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-island w-full justify-center !py-3.5 cursor-pointer"
                    >
                      <span>{t.contact.sendButton}</span>
                      <span className="btn-island-icon">
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Embedded Dark Theme Map */}
            <div className="doppelrand-shell">
              <div className="doppelrand-core !p-2">
                <div className="aspect-[16/8] w-full rounded-[calc(2rem-8px)] overflow-hidden bg-[#07080a]">
                  <iframe
                    title="Bozo Automobile Google Maps"
                    src="https://maps.google.com/maps?q=Wagistrasse%207,%208952%20Schlieren,%20Switzerland&t=m&z=15&output=embed&iwloc=near"
                    className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-125 opacity-85"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
