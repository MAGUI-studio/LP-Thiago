"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function WorkspaceGallery() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { 
      src: "/painel-de-ferramentas.webp", 
      translationKey: "tag1",
      gridClass: "col-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2" 
    },
    { 
      src: "/ferramentas.webp", 
      translationKey: "tag2",
      gridClass: "col-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1" 
    },
    { 
      src: "/servico-sendo-realizado-01.webp", 
      translationKey: "tag3",
      gridClass: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1" 
    },
    { 
      src: "/servico-sendo-realizado-02.webp", 
      translationKey: "tag4",
      gridClass: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1" 
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="estrutura" className="py-24 bg-white border-b border-gray-100 font-sans text-[#021422]">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
              {t("WorkspaceGallery.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title">
              {t("WorkspaceGallery.title")}
            </h2>
            <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
              {t("WorkspaceGallery.desc")}
            </p>
          </div>
          <div className="w-20 h-1.5 bg-[#F6AE0D] shrink-0"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[240px] md:auto-rows-[280px] pt-4">
          {items.map((item, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative rounded-none overflow-hidden border border-gray-100 group shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${item.gridClass}`}
            >
              <Image 
                src={item.src} 
                alt={t(`WorkspaceGallery.${item.translationKey}`)} 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#021422]/90 via-[#021422]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-[#F6AE0D] tracking-wider uppercase">
                  {t(`WorkspaceGallery.${item.translationKey}`)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center select-none transition-opacity duration-300">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-200 bg-white/10 hover:bg-white/20 p-3 rounded-full z-50 focus:outline-none"
            aria-label="Close"
          >
            <X className="w-6 h-6" weight="bold" />
          </button>

          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all bg-white/10 hover:bg-white/20 hover:scale-105 p-4 rounded-full z-50 focus:outline-none"
            aria-label="Previous"
          >
            <CaretLeft className="w-6 h-6" weight="bold" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all bg-white/10 hover:bg-white/20 hover:scale-105 p-4 rounded-full z-50 focus:outline-none"
            aria-label="Next"
          >
            <CaretRight className="w-6 h-6" weight="bold" />
          </button>

          {/* Active Image Container */}
          <div className="relative max-w-[90vw] max-h-[75vh] w-full h-full flex items-center justify-center p-4">
            <Image 
              src={items[currentIndex].src} 
              alt={t(`WorkspaceGallery.${items[currentIndex].translationKey}`)}
              width={1600}
              height={1200}
              className="object-contain max-h-full max-w-full rounded-none shadow-2xl transition-all duration-300"
              priority
            />
          </div>

          {/* Caption / Navigation Info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white space-y-1 bg-black/60 backdrop-blur-md px-6 py-3 rounded-none border border-white/10 min-w-[200px]">
            <h4 className="text-[#F6AE0D] text-xs font-bold uppercase tracking-wider">
              {t(`WorkspaceGallery.${items[currentIndex].translationKey}`)}
            </h4>
            <p className="text-white/50 text-[10px] font-mono">
              {currentIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
