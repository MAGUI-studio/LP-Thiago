"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, YoutubeLogo } from "@phosphor-icons/react";

export default function CTA() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-[#021422] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F6AE0D]/5 pointer-events-none"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          {t("CTA.title")}
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-lg font-light">
          {t("CTA.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="https://instagram.com/thiagooficinaescola" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold px-8 py-4 rounded-none hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            {t("CTA.ctaOficina")}
            <ArrowRight className="w-5 h-5" weight="bold" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold px-8 py-4 rounded-none hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <YoutubeLogo className="w-5 h-5" /> {t("CTA.ctaVideos")}
          </a>
        </div>
      </div>
    </section>
  );
}
