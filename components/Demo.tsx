"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "@phosphor-icons/react";

export default function Demo() {
  const t = useTranslations();

  return (
    <section id="demonstracao" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#F6AE0D] tracking-widest uppercase block">{t("Demo.badge")}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#021422]">
            {t("Demo.title")}
          </h2>
          <p className="text-gray-500 font-light">
            {t("Demo.description")}
          </p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group bg-slate-900">
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-300">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-[#F6AE0D] hover:bg-white text-[#021422] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <Play className="w-8 h-8 fill-[#021422] ml-1" weight="fill" />
            </a>
          </div>
          
          <Image 
            src="/servico-sendo-realizado-01.png" 
            alt="Cenário de rotina técnica e precisão" 
            fill
            className="object-cover opacity-80"
          />
          
          <div className="absolute bottom-6 left-6 right-6 z-20 text-left text-white bg-black/60 backdrop-blur-sm p-4 rounded-xl max-w-md hidden sm:block">
            <span className="text-[#F6AE0D] text-xs font-bold tracking-wider block">{t("Demo.videoBadge")}</span>
            <span className="text-sm font-semibold">{t("Demo.videoDesc")}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
