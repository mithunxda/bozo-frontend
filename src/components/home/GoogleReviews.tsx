"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/data/company";
import { REVIEWS } from "@/data/reviews";
import { ExternalLink, Star, CheckCircle2, ShieldCheck } from "lucide-react";

export default function GoogleReviews() {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-36 bg-[#07080a] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-3">
            <span className="telemetry-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30]" />
              {t.reviews.badge}
            </span>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
                {t.reviews.title} <br />
                <span className="text-[#9ca3af]">{t.reviews.subtitle}</span>
              </h2>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-display text-lg font-bold text-white">4.9 / 5.0</span>
            </div>
            <p className="font-sans-ui text-xs font-mono-tech text-[#9ca3af]">
              {t.reviews.basedOn}
            </p>
          </div>
        </div>

        {/* 3 Telemetry Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div key={rev.id} className="doppelrand-shell group">
              <div className="doppelrand-core flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  {/* Review Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-lg font-bold text-white">
                          {rev.author}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-mono-tech text-[#ff3b30] block mt-0.5">
                        {rev.vehicle}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#6b7280]">
                      {rev.date[language]}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-sans-ui text-xs sm:text-sm text-[#d1d5db] leading-relaxed italic">
                    &ldquo;{rev.comment[language]}&rdquo;
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono-tech text-[#6b7280]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" strokeWidth={1.5} />
                    {t.reviews.verifiedBadge}
                  </span>
                  <span>5.0 ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Google Maps Profile */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
          <span className="font-sans-ui text-xs sm:text-sm text-[#9ca3af]">
            {t.reviews.basedOn}
          </span>

          <a
            href={COMPANY.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-island !py-2.5 !px-5 !text-xs font-mono-tech"
          >
            <span>{t.reviews.leaveReview}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ff3b30]" strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
