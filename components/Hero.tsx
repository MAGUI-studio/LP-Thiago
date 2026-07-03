"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative w-full overflow-hidden bg-[#021422] border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] lg:min-h-[700px]">
        
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
              <Link
                href="https://instagram.com/thiagooficinaescola"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#021422] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#F6AE0D] hover:text-[#021422] flex items-center gap-2 text-sm transition-all duration-300 shadow-lg"
              >
                {t("Hero.ctaSchedule")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </Link>
              <Link
                href="#servicos"
                className="bg-transparent border border-white/20 text-white font-semibold px-6 py-3.5 rounded-lg hover:border-white text-sm transition-all duration-300"
              >
                {t("Hero.ctaServices")}
              </Link>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-white/10 text-xs text-gray-300 max-w-2xl relative z-10">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#F6AE0D]" weight="bold" />

              <span>{t("Hero.pillar1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#F6AE0D]" weight="bold" />

              <span>{t("Hero.pillar2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#F6AE0D]" weight="bold" />

              <span>{t("Hero.pillar3")}</span>
            </div>
          </div>
        </div>

        
        <div className="relative w-full h-[400px] lg:h-auto min-h-[400px] overflow-hidden bg-gray-900 [clip-path:polygon(0_8%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/hero.png"
            alt="Thiago Oficina Escola"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
