"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import Header from "./Header";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative w-full bg-[#010a12] border-b border-white/10 overflow-hidden pb-14 pt-0">
      <Header transparent />
    
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />

        <div className="absolute inset-0 bg-black/60 md:bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#010a12] via-[#010a12]/95 md:via-[#010a12]/75 to-transparent z-10" />
      </div>

      <div className="w-full px-6 sm:px-12 lg:px-20 pt-12 sm:pt-20 pb-8 sm:pb-16 relative z-20 space-y-16">
        <div className="space-y-6 max-w-7xl relative z-30">
          <span className="text-[#F6AE0D] text-xs font-bold tracking-[0.25em] uppercase block">
            {t("Hero.subtitle")}
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white font-title">
            {t("Hero.headline")}
          </h1>

          <p className="text-gray-300 font-light text-lg sm:text-xl max-w-3xl leading-relaxed pt-2">
            {t("Hero.paragraph")}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="https://instagram.com/thiagooficinaescola"
              target="_blank"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3.5 rounded-none hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider shadow-md"
            >
              {t("Hero.ctaSchedule")}
            </Link>
            <Link
              href="#servicos"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold px-8 py-3.5 rounded-none hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider shadow-md flex items-center gap-1.5"
            >
              {t("Hero.ctaServices")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-5xl relative z-30">
          {[
            {
              text: t("Hero.pillar1"),
              desc:
                t("Hero.pillar1Desc") ||
                "Processo documentado e montagem com torques exatos de fábrica.",
            },
            {
              text: t("Hero.pillar2"),
              desc:
                t("Hero.pillar2Desc") ||
                "Manutenções com tempo dedicado para diagnóstico minucioso.",
            },
            {
              text: t("Hero.pillar3"),
              desc:
                t("Hero.pillar3Desc") ||
                "Vídeos e fotos do desgaste real enviados diretamente no WhatsApp.",
            },
          ].map((pillar, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6AE0D]">
                {pillar.text}
              </h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
