"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check, ArrowUpRight, CaretLeft, CaretRight, X } from "@phosphor-icons/react";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative w-full overflow-hidden bg-[#021422] border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] lg:min-h-[700px]">
        
        {/* Left Column: Dark blue content box */}
        <div className="bg-[#021422] px-6 py-16 sm:px-12 lg:px-20 flex flex-col justify-between text-white relative">
          
          <div className="space-y-6 max-w-xl my-auto relative z-10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
              {t("Hero.subtitle")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight font-title">
              {t("Hero.headline")}
            </h1>
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
              {t("Hero.paragraph")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://instagram.com/thiagooficinaescola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#021422] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#F6AE0D] hover:text-[#021422] flex items-center gap-2 text-sm transition-all duration-300 shadow-lg"
              >
                {t("Hero.ctaSchedule")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </a>
              <a 
                href="#servicos" 
                className="bg-transparent border border-white/20 text-white font-semibold px-6 py-3.5 rounded-lg hover:border-white text-sm transition-all duration-300"
              >
                {t("Hero.ctaServices")}
              </a>
            </div>
          </div>

          {/* Pillars Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-white/10 text-xs text-gray-300 max-w-2xl relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[#F6AE0D]" weight="bold" />
              </div>
              <span>{t("Hero.pillar1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[#F6AE0D]" weight="bold" />
              </div>
              <span>{t("Hero.pillar2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[#F6AE0D]" weight="bold" />
              </div>
              <span>{t("Hero.pillar3")}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Hero image with diagonal Clip-path */}
        <div className="relative w-full h-[400px] lg:h-auto min-h-[400px] overflow-hidden bg-gray-900 [clip-path:polygon(0_8%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <Image 
            src="/hero.png" 
            alt="Thiago Oficina Escola" 
            fill
            className="object-cover object-center"
            priority
          />

          {/* Floating Premium Card (top-right) */}
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md text-[#021422] p-6 rounded-2xl shadow-2xl max-w-[240px] border border-gray-100 z-20 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-4xl font-extrabold text-[#021422] leading-none">8</span>
              <X className="w-4 h-4 text-gray-400 opacity-60 cursor-pointer" />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider text-[#021422]">
              {t("Hero.cardTitle")}
            </span>
            <p className="text-[11px] text-gray-500 font-light leading-snug">
              {t("Hero.cardText")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
