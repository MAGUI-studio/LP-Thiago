"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Plus, Minus } from "@phosphor-icons/react";

export default function FAQ() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { q: t("FAQ.q1"), a: t("FAQ.a1") },
    { q: t("FAQ.q2"), a: t("FAQ.a2") },
    { q: t("FAQ.q3"), a: t("FAQ.a3") },
    { q: t("FAQ.q4"), a: t("FAQ.a4") },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-gray-100 font-sans w-full">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#021422] tracking-tight font-title">
            {t("FAQ.title")}
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
            {t("FAQ.description")}
          </p>
          <div className="w-16 h-1 bg-[#F6AE0D] mx-auto rounded-none"></div>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-100 divide-y divide-gray-100">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-[#021422] font-bold text-sm sm:text-base hover:text-[#F6AE0D] transition-colors focus:outline-none py-2"
                >
                  <span className="font-title leading-snug">{item.q}</span>
                  <div className="w-8 h-8 rounded-none border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#021422]" weight="bold" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#021422]" weight="bold" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed px-1">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
