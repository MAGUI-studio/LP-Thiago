"use client";

import { useTranslations } from "next-intl";
import { Quotes } from "@phosphor-icons/react";

export default function Testimonials() {
  const t = useTranslations();

  const reviews = [
    { name: t("Testimonials.t1Name"), role: t("Testimonials.t1Role"), text: t("Testimonials.t1Text") },
    { name: t("Testimonials.t2Name"), role: t("Testimonials.t2Role"), text: t("Testimonials.t2Text") },
    { name: t("Testimonials.t3Name"), role: t("Testimonials.t3Role"), text: t("Testimonials.t3Text") },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white border-b border-gray-100 font-sans text-[#021422]">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
            {t("Testimonials.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title">
            {t("Testimonials.title")}
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
            {t("Testimonials.desc")}
          </p>
          <div className="w-16 h-1 bg-[#F6AE0D] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50/40 border border-gray-100/80 p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:shadow-md hover:border-[#F6AE0D]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <Quotes className="w-8 h-8 text-[#F6AE0D] opacity-80" weight="fill" />
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-gray-200/50 pt-4">
                <h4 className="font-extrabold text-[#021422] text-sm font-title">
                  {review.name}
                </h4>
                <span className="text-[11px] text-[#F6AE0D] font-bold uppercase tracking-wider block mt-0.5">
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
