"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative w-full bg-[#021422] border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Lado do Texto */}
        <div className="px-8 py-20 lg:py-32 lg:px-24 flex flex-col justify-center">
          <div className="space-y-10 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#F6AE0D]" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-gray-400">
                {t("Hero.subtitle")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[0.9] tracking-tighter text-white">
              {t("Hero.headline")}
            </h1>

            <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed max-w-xl">
              {t("Hero.paragraph")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://instagram.com/thiagooficinaescola"
                target="_blank"
                className="bg-white text-[#021422] font-black px-8 py-4 rounded-none hover:bg-[#F6AE0D] flex items-center gap-3 text-xs uppercase tracking-widest transition-all duration-300"
              >
                {t("Hero.ctaSchedule")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </Link>
              <Link
                href="#servicos"
                className="bg-transparent border border-white/20 text-white font-black px-8 py-4 rounded-none hover:border-white text-xs uppercase tracking-widest transition-all duration-300"
              >
                {t("Hero.ctaServices")}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              {[t("Hero.pillar1"), t("Hero.pillar2"), t("Hero.pillar3")].map(
                (pillar, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Check className="w-5 h-5 text-[#F6AE0D]" weight="bold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                      {pillar}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Lado da Imagem com Clip Path */}
        <div className="relative w-full h-[400px] lg:h-auto overflow-hidden bg-[#0a1f30] [clip-path:polygon(0_8%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/hero.png"
            alt="Thiago Oficina Escola"
            fill
            className="object-cover object-center scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}
