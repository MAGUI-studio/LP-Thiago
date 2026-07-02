"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="sobre" className="relative w-full overflow-hidden bg-[#FDFDFD] border-b border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] lg:min-h-[680px]">
        
        {/* Left Column: Full height split screen photo of Thiago */}
        <div className="relative w-full h-[400px] lg:h-auto min-h-[400px] bg-[#021422]">
          <Image 
            src="/thiago.png" 
            alt="Marcos Thiago Bustamante" 
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Column: Profile Content */}
        <div className="px-6 py-16 sm:px-12 lg:px-20 flex flex-col justify-center bg-[#FDFDFD] text-[#021422]">
          <div className="space-y-8 max-w-xl">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
                {t("About.badge")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#021422] tracking-tight leading-none font-title">
                {t("About.title")}
              </h2>
              <div className="w-16 h-1.5 bg-[#F6AE0D] rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl font-bold leading-relaxed opacity-95 text-[#021422]">
                {t("About.paragraph1")}
              </p>
              <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                {t("About.paragraph2")}
              </p>
            </div>

            {/* Clean Specifications List */}
            <div className="border-t border-gray-100 divide-y divide-gray-100 text-sm pt-4">
              <div className="py-3.5 flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6AE0D] shrink-0"></span>
                <span className="text-[#021422] font-bold">
                  {t("About.bullet1")}
                </span>
              </div>
              <div className="py-3.5 flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6AE0D] shrink-0"></span>
                <span className="text-[#021422] font-bold">
                  {t("About.bullet2")}
                </span>
              </div>
              <div className="py-3.5 flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6AE0D] shrink-0"></span>
                <span className="text-[#021422] font-bold">
                  {t("About.bullet3")}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
