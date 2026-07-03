"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Services() {
  const t = useTranslations();

  return (
    <section id={t("Header.anchorServices")} className="py-24 bg-gray-50/50 border-y border-gray-100 font-sans">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Title Block */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
              {t("Services.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#021422] tracking-tight leading-none font-title">
              {t("Services.title")}
            </h2>
            <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
              {t("Services.description")}
            </p>
            <div className="w-20 h-1 bg-[#F6AE0D]"></div>
          </div>

          {/* Right Column: High-Impact Vertical Service List */}
          <div className="lg:col-span-8 border-t border-gray-200 divide-y divide-gray-200">
            
            {/* Service 1 */}
            <Link 
              href="https://instagram.com/thiagooficinaescola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:px-4 hover:bg-[#021422] transition-all duration-500 rounded-xl"
            >
              <div className="flex gap-6 items-start">
                <span className="text-xl font-bold font-mono text-[#F6AE0D] tracking-wider pt-1">
                  01 /
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#021422] group-hover:text-white transition-colors duration-300 font-title">
                    {t("Services.card1Title")}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-light max-w-xl">
                    {t("Services.card1Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  {t("Services.card1Footer")}
                </span>
                <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-white/30 flex items-center justify-center text-[#021422] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" weight="bold" />
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link 
              href="#escola" 
              className="py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:px-4 hover:bg-[#021422] transition-all duration-500 rounded-xl"
            >
              <div className="flex gap-6 items-start">
                <span className="text-xl font-bold font-mono text-[#F6AE0D] tracking-wider pt-1">
                  02 /
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#021422] group-hover:text-white transition-colors duration-300 font-title">
                    {t("Services.card2Title")}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-light max-w-xl">
                    {t("Services.card2Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  {t("Services.card2Footer")}
                </span>
                <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-white/30 flex items-center justify-center text-[#021422] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" weight="bold" />
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link 
              href="https://instagram.com/thiagooficinaescola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:px-4 hover:bg-[#021422] transition-all duration-500 rounded-xl"
            >
              <div className="flex gap-6 items-start">
                <span className="text-xl font-bold font-mono text-[#F6AE0D] tracking-wider pt-1">
                  03 /
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#021422] group-hover:text-white transition-colors duration-300 font-title">
                    {t("Services.card3Title")}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-light max-w-xl">
                    {t("Services.card3Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  {t("Services.card3Footer")}
                </span>
                <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-white/30 flex items-center justify-center text-[#021422] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" weight="bold" />
                </div>
              </div>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
