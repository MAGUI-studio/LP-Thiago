"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShieldCheck, Wrench, Globe } from "@phosphor-icons/react";

export default function About() {
  const t = useTranslations();

  return (
    <section id={t("Header.anchorAbout")} className="w-full bg-white py-24 px-6 sm:px-12 lg:px-20 text-[#021422] font-sans">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 py-1 border-b border-[#F6AE0D] rounded-none">
                <span className="text-[11px] font-bold text-[#021422]/70 tracking-wider uppercase">
                  {t("About.badge")}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
                {t("About.title")}
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 font-light text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-[#021422] text-lg sm:text-xl leading-relaxed">
                {t("About.paragraph1")}
              </p>
              <p className="text-gray-500">
                {t("About.paragraph2")}
              </p>
            </div>

            {/* Feature Cards Redesign (Straight Borders, Watermark Icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="relative p-6 bg-white border border-gray-100 rounded-none min-h-[140px] flex flex-col justify-end overflow-hidden group">
                <ShieldCheck className="absolute -right-6 -bottom-6 w-28 h-28 text-gray-100 opacity-40 pointer-events-none z-0" />
                <p className="relative z-10 text-sm font-bold text-[#021422] leading-snug">
                  {t("About.bullet1")}
                </p>
              </div>

              <div className="relative p-6 bg-white border border-gray-100 rounded-none min-h-[140px] flex flex-col justify-end overflow-hidden group">
                <Wrench className="absolute -right-6 -bottom-6 w-28 h-28 text-gray-100 opacity-40 pointer-events-none z-0" />
                <p className="relative z-10 text-sm font-bold text-[#021422] leading-snug">
                  {t("About.bullet2")}
                </p>
              </div>

              <div className="relative p-6 bg-white border border-gray-100 rounded-none min-h-[140px] flex flex-col justify-end overflow-hidden group">
                <Globe className="absolute -right-6 -bottom-6 w-28 h-28 text-gray-100 opacity-40 pointer-events-none z-0" />
                <p className="relative z-10 text-sm font-bold text-[#021422] leading-snug">
                  {t("About.bullet3")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Framed Image Showcase (Straight Borders) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-none overflow-hidden border border-gray-100 p-2 bg-white">
              <div className="relative w-full h-full rounded-none overflow-hidden bg-gray-50">
                <Image 
                  src="/thiago.png" 
                  alt="Marcos Thiago Bustamante" 
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
