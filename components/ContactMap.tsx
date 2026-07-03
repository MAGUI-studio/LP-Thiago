"use client";

import { useTranslations } from "next-intl";
import { Clock, MapPin, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function ContactMap() {
  const t = useTranslations();

  return (
    <section id={t("Header.anchorContact")} className="py-24 bg-[#010a12] font-sans text-gray-300">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
                {t("ContactMap.addressTitle")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title text-white">
                {t("ContactMap.title")}
              </h2>
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                {t("ContactMap.description")}
              </p>
              <div className="w-16 h-1.5 bg-[#F6AE0D] rounded-none"></div>
            </div>

            
            <div className="space-y-6">
              
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-[#F6AE0D] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" weight="fill" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm uppercase tracking-wider font-title">
                    {t("ContactMap.addressTitle")}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mt-1 whitespace-pre-line leading-relaxed">
                    {t("ContactMap.addressText")}
                  </p>
                </div>
              </div>

              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-[#F6AE0D] shrink-0 mt-1">
                  <Clock className="w-5 h-5" weight="fill" />
                </div>
                <div className="w-full space-y-2">
                  <h4 className="font-extrabold text-white text-sm uppercase tracking-wider font-title">
                    {t("ContactMap.hoursTitle")}
                  </h4>
                  <div className="border-t border-white/10 divide-y divide-white/5 text-xs text-gray-400 font-mono w-full pt-1">
                    <div className="py-1.5 flex justify-between">
                      <span>{t("ContactMap.hoursWeek")}:</span>
                      <span className="font-sans font-bold text-white">09:00 - 21:00</span>
                    </div>
                    <div className="py-1.5 flex justify-between">
                      <span>{t("ContactMap.hoursSunday")}:</span>
                      <span className="font-sans font-bold text-white">{t("ContactMap.hoursSundayValue")}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            
            <div className="pt-2">
              <Link 
                href="https://instagram.com/thiagooficinaescola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#021422] font-black px-8 py-4 rounded-none hover:bg-[#F6AE0D] inline-flex items-center gap-3 text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
              >
                {t("ContactMap.whatsappButton")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </Link>
            </div>
          </div>

          
          <div className="lg:col-span-7 relative h-[380px] lg:h-auto min-h-[380px] rounded-none overflow-hidden border border-white/10 shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=THIAGO%20OFICINA%20ESCOLA,%20Av.%20Dep.%20Benedito%20Matarazzo,%205101&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title={t("ContactMap.mapTitle")}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-all duration-700"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
