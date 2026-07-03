"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CaretLeft, CaretRight, ArrowUpRight } from "@phosphor-icons/react";

export default function Raffle() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/rifa/poste-pneumatico-dmd-braco-longaero/img-01.png",
    "/rifa/poste-pneumatico-dmd-braco-longaero/img-02.png",
    "/rifa/poste-pneumatico-dmd-braco-longaero/img-03.png",
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="rifa" className="py-24 bg-white text-[#021422] font-sans relative overflow-hidden">
      
      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Carousel (Transparent, No background, No cards) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full group select-none">
              
              {/* Carousel Track */}
              <div className="relative w-full h-full">
                <Image
                  src={images[activeIndex]}
                  alt={`Equipamento da Rifa ${activeIndex + 1}`}
                  fill
                  className="object-contain transition-all duration-500 ease-in-out"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 border border-gray-200/50 flex items-center justify-center text-[#021422] hover:bg-[#021422] hover:text-white transition-all shadow-sm z-20"
                aria-label="Imagem anterior"
              >
                <CaretLeft className="w-5 h-5" weight="bold" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 border border-gray-200/50 flex items-center justify-center text-[#021422] hover:bg-[#021422] hover:text-white transition-all shadow-sm z-20"
                aria-label="Próxima imagem"
              >
                <CaretRight className="w-5 h-5" weight="bold" />
              </button>

              {/* Index Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-[#F6AE0D] w-5" : "bg-[#021422]/20"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Raffle Info & CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
                {t("Raffle.badge")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
                POSTE PNEUMÁTICO DMD + BRAÇO LONGAERO
              </h2>
              <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
                {t("Raffle.desc")}
              </p>
              <div className="w-16 h-1.5 bg-[#F6AE0D] rounded-full"></div>
            </div>

            {/* Price Info (No Background, Border Highlight) */}
            <div className="border-l-4 border-[#F6AE0D] pl-6 py-2 max-w-xs">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">
                {t("Raffle.priceLabel")}
              </span>
              <span className="text-3xl font-black text-[#021422] font-title">
                {t("Raffle.priceValue")}
              </span>
            </div>

            {/* Raffle Details List */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#021422] font-title">
                {t("Raffle.detailsTitle")}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6AE0D] mt-2 shrink-0" />
                  <span>{t("Raffle.detail1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6AE0D] mt-2 shrink-0" />
                  <span>{t("Raffle.detail2")}</span>
                </li>
              </ul>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#021422] text-white font-extrabold px-6 py-3.5 rounded-xl hover:bg-[#F6AE0D] hover:text-[#021422] transition-all duration-300 text-xs uppercase tracking-wider shadow-md"
              >
                {t("Raffle.cta")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
