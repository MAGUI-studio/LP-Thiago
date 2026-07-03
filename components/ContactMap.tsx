"use client";

import { useTranslations } from "next-intl";
import { Clock, MapPin, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function ContactMap() {
  const t = useTranslations();

  return (
    <section id={t("Header.anchorContact")} className="py-24 bg-gray-50/50 border-b border-gray-100 font-sans text-[#021422]">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Opening hours & details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
                {t("ContactMap.addressTitle")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title">
                {t("ContactMap.title")}
              </h2>
              <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
                {t("ContactMap.description")}
              </p>
              <div className="w-16 h-1.5 bg-[#F6AE0D] rounded-none"></div>
            </div>

            {/* Info blocks */}
            <div className="space-y-6">
              
              {/* Address detail */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-none bg-[#021422]/5 flex items-center justify-center text-[#F6AE0D] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" weight="fill" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#021422] text-sm uppercase tracking-wider font-title">
                    {t("ContactMap.addressTitle")}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 whitespace-pre-line leading-relaxed">
                    {t("ContactMap.addressText")}
                  </p>
                </div>
              </div>

              {/* Working Hours detail */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-none bg-[#021422]/5 flex items-center justify-center text-[#F6AE0D] shrink-0 mt-1">
                  <Clock className="w-5 h-5" weight="fill" />
                </div>
                <div className="w-full space-y-2">
                  <h4 className="font-extrabold text-[#021422] text-sm uppercase tracking-wider font-title">
                    {t("ContactMap.hoursTitle")}
                  </h4>
                  <div className="border-t border-gray-200/80 divide-y divide-gray-100/65 text-xs text-gray-500 font-mono w-full pt-1">
                    <div className="py-1.5 flex justify-between">
                      <span>{t("ContactMap.hoursWeek")}:</span>
                      <span className="font-sans font-bold text-[#021422]">09:00 - 21:00</span>
                    </div>
                    <div className="py-1.5 flex justify-between">
                      <span>{t("ContactMap.hoursSunday")}:</span>
                      <span className="font-sans font-bold text-[#021422]">{t("ContactMap.hoursSundayValue")}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link 
                href="https://instagram.com/thiagooficinaescola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#021422] text-white font-extrabold px-6 py-3.5 rounded-none hover:bg-[#F6AE0D] hover:text-[#021422] transition-colors text-xs uppercase tracking-wider shadow-md"
              >
                {t("ContactMap.whatsappButton")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </Link>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Viewport (Straight Borders, No Grayscale) */}
          <div className="lg:col-span-7 relative h-[380px] lg:h-auto min-h-[380px] rounded-none overflow-hidden border border-gray-200 shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=THIAGO%20OFICINA%20ESCOLA,%20Av.%20Dep.%20Benedito%20Matarazzo,%205101&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
