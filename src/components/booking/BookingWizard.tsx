"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  MessageCircle,
  Download,
  Car,
  Wrench,
  Bike,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface BookingData {
  serviceIds: string[];
  vehicleBrand: string;
  vehicleModel: string;
  licensePlate: string;
  mobility: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export default function BookingWizard() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const [bookingRef, setBookingRef] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
      setMinDate(tomorrow);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState<BookingData>(() => {
    const serviceParam = searchParams.get("service");
    const vehicleParam = searchParams.get("vehicle");
    return {
      serviceIds: serviceParam ? [serviceParam] : ["mfk-paket"],
      vehicleBrand: vehicleParam === "porsche" ? "Porsche" : vehicleParam === "electric" ? "Tesla" : "",
      vehicleModel: "",
      licensePlate: "",
      mobility: "car",
      date: "",
      timeSlot: "morning",
      fullName: "",
      phone: "",
      email: "",
      notes: "",
    };
  });

  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.serviceIds.includes(id);
      return {
        ...prev,
        serviceIds: exists
          ? prev.serviceIds.filter((item) => item !== id)
          : [...prev.serviceIds, id],
      };
    });
  };

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1 && formData.serviceIds.length === 0) {
      setErrorMsg(t.booking.errSelectService);
      return;
    }
    if (step === 2 && !formData.vehicleBrand.trim()) {
      setErrorMsg(t.booking.errBrandRequired);
      return;
    }
    if (step === 3 && !formData.date) {
      setErrorMsg(t.booking.errDateRequired);
      return;
    }
    setStep((prev) => Math.min(4, prev + 1));
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg(t.booking.errContactRequired);
      return;
    }

    setSubmitting(true);
    const ref = `BOZO-${Math.floor(1000 + Math.random() * 9000)}-CH`;
    setBookingRef(ref);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const downloadCalendarInvite = () => {
    const title =
      language === "nl"
        ? `Werkplaatsafspraak: Bozo Automobile (${formData.vehicleBrand})`
        : language === "en"
        ? `Workshop Appointment: Bozo Automobile (${formData.vehicleBrand})`
        : `Werkstatt-Termin: Bozo Automobile (${formData.vehicleBrand})`;

    const description =
      language === "nl"
        ? `Werkplaatsafspraak bij Bozo Automobile. Voertuig: ${formData.vehicleBrand} ${formData.vehicleModel}. Contact: +41 79 577 25 47`
        : language === "en"
        ? `Workshop appointment at Bozo Automobile. Vehicle: ${formData.vehicleBrand} ${formData.vehicleModel}. Contact: +41 79 577 25 47`
        : `Werkstatt-Termin bei Bozo Automobile. Fahrzeug: ${formData.vehicleBrand} ${formData.vehicleModel}. Kontakt: +41 79 577 25 47`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Bozo Automobile//Terminbuchung//DE",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${COMPANY.address.fullAddress}`,
      `DTSTART:${formData.date.replace(/-/g, "")}T080000`,
      `DTEND:${formData.date.replace(/-/g, "")}T120000`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `bozo-termin-${formData.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stepLabels = [
    { num: 1, label: t.booking.step1Title },
    { num: 2, label: t.booking.step2Title },
    { num: 3, label: t.booking.step3Title },
    { num: 4, label: t.booking.step4Title },
  ];

  const mobilityOptions = [
    {
      id: "car",
      label: t.booking.mobilityCards.carTitle,
      desc: t.booking.mobilityCards.carDesc,
      icon: Car,
      badge: t.booking.mobilityCards.freeBadge,
    },
    {
      id: "bike",
      label: t.booking.mobilityCards.bikeTitle,
      desc: t.booking.mobilityCards.bikeDesc,
      icon: Bike,
      badge: t.booking.mobilityCards.freeBadge,
    },
    {
      id: "none",
      label: t.booking.mobilityCards.noneTitle,
      desc: t.booking.mobilityCards.noneDesc,
      icon: Wrench,
      badge: "",
    },
    {
      id: "wait",
      label: t.booking.mobilityCards.waitTitle,
      desc: t.booking.mobilityCards.waitDesc,
      icon: Sparkles,
      badge: t.booking.mobilityCards.loungeBadge,
    },
  ];

  const getMobilityLabel = (id: string) => {
    const item = mobilityOptions.find((m) => m.id === id);
    return item ? item.label : id;
  };

  const getTimeSlotLabel = (slot: string) => {
    if (slot === "morning") return t.booking.timeSlots.morning;
    if (slot === "afternoon") return t.booking.timeSlots.afternoon;
    return t.booking.timeSlots.flexible;
  };

  const whatsappMessage =
    language === "nl"
      ? `Hallo Bozo Automobile, ik heb zojuist een afspraakverzoek verzonden met referentie ${bookingRef} voor ${formData.fullName} (${formData.vehicleBrand}).`
      : language === "en"
      ? `Hello Bozo Automobile, I just submitted an appointment request with reference ${bookingRef} for ${formData.fullName} (${formData.vehicleBrand}).`
      : `Hallo Bozo Automobile, ich habe gerade eine Terminanfrage gesendet mit Ref ${bookingRef} für ${formData.fullName} (${formData.vehicleBrand}).`;

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="doppelrand-shell">
          <div className="doppelrand-core text-center space-y-6 !p-8 sm:!p-12 animate-fluid-fade">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle2 className="w-9 h-9" strokeWidth={1.5} />
            </div>

            <div className="space-y-2">
              <span className="telemetry-badge !bg-emerald-950/40 !border-emerald-500/30 text-emerald-400">
                {t.booking.bookingRefBadge} {bookingRef}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {t.booking.successTitle}
              </h3>
              <p className="font-sans-ui text-xs sm:text-sm text-[#9ca3af] max-w-lg mx-auto leading-relaxed">
                {t.booking.successDesc}
              </p>
            </div>

            {/* Receipt ledger */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left text-xs font-mono-tech space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-[#9ca3af]">{t.booking.receiptCustomer}</span>
                <strong className="text-white">{formData.fullName}</strong>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-[#9ca3af]">{t.booking.receiptVehicle}</span>
                <strong className="text-white">
                  {formData.vehicleBrand} {formData.vehicleModel || ""}{" "}
                  {formData.licensePlate ? `(${formData.licensePlate})` : ""}
                </strong>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-2">
                <span className="text-[#9ca3af]">{t.booking.receiptDate}</span>
                <strong className="text-[#ff3b30]">
                  {formData.date} ({getTimeSlotLabel(formData.timeSlot)})
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9ca3af]">{t.booking.receiptMobility}</span>
                <strong className="text-emerald-400">{getMobilityLabel(formData.mobility)}</strong>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={downloadCalendarInvite}
                className="btn-ghost-island w-full sm:w-auto justify-center !py-3 !text-xs font-mono-tech cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ff3b30]" strokeWidth={1.5} />
                <span>{t.booking.downloadCalendar}</span>
              </button>

              <a
                href={`https://wa.me/41795772547?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-island w-full sm:w-auto justify-center !py-3 !text-xs !bg-gradient-to-r !from-emerald-600 !to-emerald-700"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                <span>{t.booking.whatsappConfirmBtn}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="text-xs font-mono-tech text-[#9ca3af] hover:text-white underline cursor-pointer"
              >
                {t.booking.bookAnother}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="doppelrand-shell">
        <div className="doppelrand-core space-y-8 !p-6 sm:!p-10">
          {/* 4-Step Telemetry Segmented Progress Bar */}
          <div className="space-y-3 pb-6 border-b border-white/[0.08]">
            <div className="grid grid-cols-4 gap-2">
              {stepLabels.map((s) => {
                const isCurrent = step === s.num;
                const isDone = step > s.num;
                return (
                  <div key={s.num} className="space-y-1.5 text-center">
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        isDone
                          ? "bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                          : isCurrent
                          ? "bg-[#ff3b30] shadow-[0_0_10px_rgba(255,59,48,0.7)]"
                          : "bg-white/[0.06]"
                      }`}
                    />
                    <span
                      className={`text-[10px] font-mono-tech uppercase tracking-wider block truncate transition-colors ${
                        isCurrent
                          ? "text-white font-bold"
                          : isDone
                          ? "text-emerald-400"
                          : "text-[#6b7280]"
                      }`}
                    >
                      0{s.num}. {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Validation Alert */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono-tech flex items-center gap-2 animate-fluid-fade">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Step 1: Services */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#ff3b30] font-bold block">
                  {t.booking.step1Badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {t.booking.selectService}
                </h3>
                <p className="font-sans-ui text-xs text-[#9ca3af]">
                  {t.booking.step1DescLong}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => {
                  const selected = formData.serviceIds.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all duration-300 cursor-pointer ${
                        selected
                          ? "bg-white/[0.08] border-[#ff3b30] text-white shadow-lg shadow-black/40 ring-1 ring-[#ff3b30]/30"
                          : "bg-white/[0.02] border-white/[0.06] text-[#d1d5db] hover:bg-white/[0.04] hover:border-white/[0.12]"
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <strong className="font-display text-base font-bold block text-white">
                          {s.title[language]}
                        </strong>
                        <span className="text-[11px] font-sans-ui text-[#9ca3af] line-clamp-2 block leading-relaxed">
                          {s.shortDescription[language]}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 text-xs transition-colors ${
                          selected
                            ? "bg-[#ff3b30] border-[#ff3b30] text-white"
                            : "border-white/[0.1] bg-black/40 text-transparent"
                        }`}
                      >
                        ✓
                      </div>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => toggleService("sonstiges")}
                  className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all duration-300 cursor-pointer ${
                    formData.serviceIds.includes("sonstiges")
                      ? "bg-white/[0.08] border-[#ff3b30] text-white shadow-lg ring-1 ring-[#ff3b30]/30"
                      : "bg-white/[0.02] border-white/[0.06] text-[#d1d5db] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <strong className="font-display text-base font-bold block text-white">
                      {t.booking.customServiceTitle}
                    </strong>
                    <span className="text-[11px] font-sans-ui text-[#9ca3af] block leading-relaxed">
                      {t.booking.customServiceDesc}
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 text-xs transition-colors ${
                      formData.serviceIds.includes("sonstiges")
                        ? "bg-[#ff3b30] border-[#ff3b30] text-white"
                        : "border-white/[0.1] bg-black/40 text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Vehicle & Mobility */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#ff3b30] font-bold block">
                  {t.booking.step2Badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {t.booking.step2Title}
                </h3>
                <p className="font-sans-ui text-xs text-[#9ca3af]">
                  {t.booking.step2DescLong}
                </p>
              </div>

              {/* Quick Brand Pills */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af] block">
                  {t.booking.popularBrands}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {t.booking.brandShortcuts.map((brand) => (
                    <button
                      type="button"
                      key={brand}
                      onClick={() => setFormData({ ...formData, vehicleBrand: brand })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono-tech border transition-all cursor-pointer ${
                        formData.vehicleBrand === brand
                          ? "bg-white/[0.12] border-[#ff3b30] text-white font-bold"
                          : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af] hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.vehicleBrand} *
                  </label>
                  <input
                    type="text"
                    placeholder={t.booking.brandPlaceholder}
                    value={formData.vehicleBrand}
                    onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.vehicleModel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.booking.modelPlaceholder}
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.licensePlate}
                  </label>
                  <input
                    type="text"
                    placeholder={t.booking.platePlaceholder}
                    value={formData.licensePlate}
                    onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                  />
                </div>
              </div>

              {/* Mobility Options */}
              <div className="space-y-2.5 pt-2">
                <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                  {t.booking.mobilityChoice}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {mobilityOptions.map((m) => {
                    const isSelected = formData.mobility === m.id;
                    const MIcon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, mobility: m.id })}
                        className={`p-3.5 rounded-xl border text-left flex items-start justify-between cursor-pointer transition-all ${
                          isSelected
                            ? "bg-white/[0.1] border-[#ff3b30] text-white shadow-lg ring-1 ring-[#ff3b30]/30"
                            : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af] hover:text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <MIcon
                            className={`w-4 h-4 mt-0.5 ${isSelected ? "text-[#ff3b30]" : "text-[#6b7280]"}`}
                            strokeWidth={1.5}
                          />
                          <div>
                            <span className="font-display text-sm font-bold block text-white">
                              {m.label}
                            </span>
                            <span className="text-[10px] font-mono-tech text-[#6b7280] block">
                              {m.desc}
                            </span>
                          </div>
                        </div>
                        {m.badge && (
                          <span className="text-[9px] font-mono-tech text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                            {m.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#ff3b30] font-bold block">
                  {t.booking.step3Badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {t.booking.step3Title}
                </h3>
                <p className="font-sans-ui text-xs text-[#9ca3af]">
                  {t.booking.step3DescLong}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.preferredDate} *
                  </label>
                  <input
                    type="date"
                    min={minDate || undefined}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all [color-scheme:dark]"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.preferredTime}
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-xs font-mono-tech focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                  >
                    <option value="morning">{t.booking.timeSlots.morning}</option>
                    <option value="afternoon">{t.booking.timeSlots.afternoon}</option>
                    <option value="flexible">{t.booking.timeSlots.flexible}</option>
                  </select>
                </div>
              </div>

              {/* 24/7 Key Drop Info */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono-tech text-[#9ca3af] flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#ff3b30] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <strong className="text-white block mb-0.5">
                    {t.booking.keySafeNoticeTitle}
                  </strong>
                  {t.booking.keySafeNoticeDesc}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact & Summary */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#ff3b30] font-bold block">
                  {t.booking.step4Badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {t.booking.step4Title}
                </h3>
                <p className="font-sans-ui text-xs text-[#9ca3af]">
                  {t.booking.step4DescLong}
                </p>
              </div>

              {/* Booking Summary Strip */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono-tech space-y-1.5 text-[#d1d5db]">
                <div className="flex justify-between">
                  <span className="text-[#9ca3af]">{t.booking.summaryVehicle}:</span>
                  <span className="font-bold text-white">
                    {formData.vehicleBrand} {formData.vehicleModel || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9ca3af]">{t.booking.summaryDate}:</span>
                  <span className="font-bold text-[#ff3b30]">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9ca3af]">{t.booking.summaryMobility}:</span>
                  <span className="font-bold text-emerald-400">
                    {getMobilityLabel(formData.mobility)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.fullName} *
                  </label>
                  <input
                    type="text"
                    placeholder={
                      language === "nl"
                        ? "Voor- en achternaam"
                        : language === "en"
                        ? "First and last name"
                        : "Vor- und Nachname"
                    }
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.phone} *
                  </label>
                  <input
                    type="tel"
                    placeholder="+41 79 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                    required
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.email}
                  </label>
                  <input
                    type="email"
                    placeholder="info@bozoautomobile.ch"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#9ca3af]">
                    {t.booking.notes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.booking.notesPlaceholder}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono-tech placeholder:text-[#6b7280] focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30]/30 transition-all"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono-tech text-[#9ca3af] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={1.5} />
                <span>{t.booking.privacyGuarantee}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-ghost-island !py-2.5 !px-4 !text-xs font-mono-tech cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{t.booking.back}</span>
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-island !py-3 !px-6 !text-xs cursor-pointer disabled:opacity-50"
                >
                  <span>{submitting ? t.booking.submitting : t.booking.submitBtn}</span>
                  <span className="btn-island-icon">
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                </button>
              </div>
            </form>
          )}

          {/* Navigation Buttons for Steps 1-3 */}
          {step < 4 && (
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-ghost-island !py-2.5 !px-4 !text-xs font-mono-tech cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{t.booking.back}</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="btn-island !py-2.5 !px-5 !text-xs cursor-pointer"
              >
                <span>{t.booking.next}</span>
                <span className="btn-island-icon !w-5 !h-5">
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
