"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { CaretLeft, CaretRight, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function School() {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const courses = [
    { id: "01", title: t("School.course1Title"), desc: t("School.course1Desc") },
    { id: "02", title: t("School.course2Title"), desc: t("School.course2Desc") },
    { id: "03", title: t("School.course3Title"), desc: t("School.course3Desc") },
    { id: "04", title: t("School.course4Title"), desc: t("School.course4Desc") },
    { id: "05", title: t("School.course5Title"), desc: t("School.course5Desc") },
    { id: "06", title: t("School.course6Title"), desc: t("School.course6Desc") },
  ];

  return (
    <section id="escola" className="py-24 bg-[#FDFDFD] border-b border-gray-100 text-[#021422] relative overflow-hidden font-sans">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F6AE0D]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 space-y-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
              {t("School.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
              {t("School.title")}
            </h2>
            <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
              {t("School.description")}
            </p>
          </div>

          {/* Controls & View All */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#021422] hover:text-white transition-colors"
              >
                <CaretLeft className="w-5 h-5" weight="bold" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#021422] hover:text-white transition-colors"
              >
                <CaretRight className="w-5 h-5" weight="bold" />
              </button>
            </div>
            
            <Link 
              href="/cursos" 
              className="inline-flex items-center gap-2 bg-[#021422] text-white font-black uppercase text-xs tracking-wider px-6 py-3.5 rounded-xl hover:bg-[#F6AE0D] hover:text-[#021422] transition-colors shadow-md"
            >
              {t("School.viewAll")}
              <ArrowUpRight className="w-4 h-4" weight="bold" />
            </Link>
          </div>
        </div>

        {/* Carousel Container (Native scroll with hidden scrollbar) */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => (
            <div 
              key={course.id}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] bg-gray-50 border border-gray-200/80 hover:border-[#F6AE0D]/40 transition-colors p-8 rounded-3xl flex flex-col justify-between h-[280px]"
            >
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#021422] tracking-tight leading-snug font-title">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {course.desc}
                </p>
              </div>

              <a 
                href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F6AE0D] uppercase tracking-wider hover:text-[#021422] transition-colors pt-4"
              >
                {t("School.cta")}
                <ArrowUpRight className="w-3.5 h-3.5" weight="bold" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
