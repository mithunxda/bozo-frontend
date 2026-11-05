"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/data/company";
import BozoLogo from "@/components/brand/BozoLogo";
import {
  Phone,
  ArrowUpRight,
  ChevronDown,
  Check,
  Calendar,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  const { language, setLanguage, region, setRegion, t, availableRegions } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const currentRegionName =
    availableRegions.find((r) => r.id === region)?.name || "Schlieren & Limmattal";

  const navLinks = [
    { href: "/dienstleistungen", label: t.nav.services },
    { href: "/ueber-uns", label: t.nav.about },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-500">
        <div
          className={`relative max-w-6xl mx-auto pointer-events-auto rounded-full bg-[#0a0c10]/85 backdrop-blur-2xl border border-white/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.7)] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 overflow-hidden ${
            scrolled ? "bg-[#07080a]/95 border-white/[0.14] shadow-[0_24px_60px_rgba(0,0,0,0.85)]" : ""
          }`}
        >
          {/* Bozo Motorsport Tri-Stripe Top Edge Accent */}
          <div className="absolute top-0 left-12 right-12 h-[2px] flex pointer-events-none opacity-85">
            <div className="h-full w-1/3 bg-[#f40101]" />
            <div className="h-full w-1/3 bg-[#9932cc]" />
            <div className="h-full w-1/3 bg-[#1c86ee]" />
          </div>

          {/* Brand SVG Logo */}
          <Link href="/" className="flex items-center group py-0.5 shrink-0" aria-label="Bozo Automobile Startseite">
            <BozoLogo
              variant="dark"
              className="h-6 sm:h-7 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Telemetry Live Radar Status (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-tech text-[#9ca3af]">
            <span className="radar-beacon" />
            <span>{t.nav.openHoursRadar}</span>
          </div>

          {/* Centered Desktop Nav Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.1] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                      : "text-[#9ca3af] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Region Selector (Desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-mono-tech text-[#9ca3af] hover:text-white transition-all cursor-pointer"
                aria-expanded={regionDropdownOpen}
              >
                <span>{currentRegionName}</span>
                <ChevronDown className="w-3 h-3 text-[#9ca3af]" strokeWidth={1.5} />
              </button>

              {regionDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#0e1117] border border-white/[0.12] rounded-2xl shadow-2xl py-2 z-50 backdrop-blur-xl">
                  <div className="px-3.5 py-1 text-[10px] font-mono-tech uppercase tracking-wider text-[#6b7280]">
                    {t.nav.areaDropdownTitle}
                  </div>
                  {availableRegions.map((reg) => (
                    <button
                      key={reg.id}
                      onClick={() => {
                        setRegion(reg.id);
                        setRegionDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-white/[0.05] transition-colors ${
                        region === reg.id ? "text-[#ff3b30] font-semibold" : "text-[#d1d5db]"
                      }`}
                    >
                      <span>{reg.name}</span>
                      {region === reg.id && <Check className="w-3.5 h-3.5 text-[#ff3b30]" strokeWidth={1.5} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switch */}
            <div className="flex items-center bg-white/[0.04] p-0.5 rounded-full border border-white/[0.06]">
              <button
                onClick={() => setLanguage("nl")}
                className={`px-2 py-0.5 rounded-full text-[11px] font-mono-tech transition-all cursor-pointer ${
                  language === "nl"
                    ? "bg-[#ff3b30] text-white font-bold"
                    : "text-[#9ca3af] hover:text-white"
                }`}
                title="Nederlands"
              >
                NL
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full text-[11px] font-mono-tech transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[#ff3b30] text-white font-bold"
                    : "text-[#9ca3af] hover:text-white"
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("de")}
                className={`px-2 py-0.5 rounded-full text-[11px] font-mono-tech transition-all cursor-pointer ${
                  language === "de"
                    ? "bg-[#ff3b30] text-white font-bold"
                    : "text-[#9ca3af] hover:text-white"
                }`}
                title="Deutsch"
              >
                DE
              </button>
            </div>

            {/* Direct Phone Dial (Desktop) */}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#9ca3af] hover:text-white px-2.5 py-1 rounded-full border border-transparent hover:border-white/[0.08] transition-all"
              title={t.nav.callNow}
            >
              <Phone className="w-3.5 h-3.5 text-[#ff3b30]" strokeWidth={1.5} />
              <span className="hidden xl:inline">{COMPANY.phoneFormatted}</span>
            </a>

            {/* Primary Island Button-in-Button CTA */}
            <Link
              href="/termin-buchen"
              className="btn-island !py-2 !px-4 !text-xs !shadow-[0_0_15px_rgba(255,59,48,0.3)] hidden sm:inline-flex"
            >
              <span>{t.nav.bookNow}</span>
              <span className="btn-island-icon !w-5 !h-5 !-mr-2 !ml-0.5">
                <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
              </span>
            </Link>

            {/* Kinetic Hamburger Morph Button (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex flex-col items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              <span
                className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Blurred OLED Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07080a]/95 backdrop-blur-3xl pt-28 px-6 pb-10 flex flex-col justify-between md:hidden animate-fluid-fade">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <BozoLogo variant="dark" className="h-6 w-auto" />
              <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-400">
                <span className="radar-beacon" />
                <span>{t.nav.workshopOpen}</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold tracking-tight text-white hover:text-[#ff3b30] flex items-center justify-between py-1 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#ff3b30]" strokeWidth={1.5} />
                </Link>
              ))}
            </nav>

            {/* Mobile Language Switcher */}
            <div className="pt-2">
              <span className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#6b7280] mb-2">
                Language / Sprache / Taal
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLanguage("nl")}
                  className={`px-3 py-2 rounded-xl text-xs font-mono-tech text-center border transition-all ${
                    language === "nl"
                      ? "bg-[#ff3b30] border-[#ff3b30] text-white font-bold"
                      : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af]"
                  }`}
                >
                  NL (Nederlands)
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-2 rounded-xl text-xs font-mono-tech text-center border transition-all ${
                    language === "en"
                      ? "bg-[#ff3b30] border-[#ff3b30] text-white font-bold"
                      : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af]"
                  }`}
                >
                  EN (English)
                </button>
                <button
                  onClick={() => setLanguage("de")}
                  className={`px-3 py-2 rounded-xl text-xs font-mono-tech text-center border transition-all ${
                    language === "de"
                      ? "bg-[#ff3b30] border-[#ff3b30] text-white font-bold"
                      : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af]"
                  }`}
                >
                  DE (Deutsch)
                </button>
              </div>
            </div>

            {/* Mobile Region Selector */}
            <div className="pt-2">
              <span className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#6b7280] mb-2">
                {t.nav.areaDropdownTitle}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {availableRegions.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setRegion(reg.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono-tech text-left border transition-all ${
                      region === reg.id
                        ? "bg-white/[0.1] border-[#ff3b30] text-white"
                        : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af]"
                    }`}
                  >
                    {reg.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions for Mobile */}
          <div className="space-y-3 pt-6 border-t border-white/[0.08]">
            <Link
              href="/termin-buchen"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-island w-full justify-center !py-3.5 !text-sm"
            >
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              <span>{t.nav.bookNow}</span>
              <span className="btn-island-icon !w-6 !h-6 !-mr-1 !ml-1">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
              </span>
            </Link>

            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="btn-ghost-island w-full justify-center !py-3 text-sm font-mono-tech"
            >
              <Phone className="w-4 h-4 text-[#ff3b30]" strokeWidth={1.5} />
              <span>{t.nav.callNow}: {COMPANY.phoneFormatted}</span>
            </a>

            <div className="flex items-center justify-between pt-2 text-[11px] font-mono-tech text-[#6b7280]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#ff3b30]" strokeWidth={1.5} />
                Wagistrasse 7, Schlieren
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" strokeWidth={1.5} />
                {t.hero.guaranteePill}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
