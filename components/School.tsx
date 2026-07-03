"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { CaretLeft, CaretRight, ArrowRight, GraduationCap } from "@phosphor-icons/react";
import { Link as LocaleLink } from "@/i18n/routing";
import Link from "next/link";
import { coursesData } from "@/data/courses";

export default function School() {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 380;
      
      if (direction === "left") {
        if (container.scrollLeft <= 10) {
          container.scrollTo({
            left: container.scrollWidth - container.clientWidth,
            behavior: "smooth"
          });
        } else {
          container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 15) {
          container.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  
  const courses = coursesData
    .filter((course) => course.category !== "CURSOS EN ESPAÑOL")
    .slice(0, 5);

  return (
    <section id={t("Header.anchorSchool")} className="py-24 bg-white text-[#021422] relative overflow-hidden font-sans">
      
      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 space-y-16">
        
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 py-1 border-b border-[#F6AE0D] rounded-none">
            <span className="text-[11px] font-bold text-[#F6AE0D] tracking-[0.25em] uppercase block">
              {t("School.badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
            {t("School.title")}
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {t("School.description")}
          </p>
        </div>

        
        <div className="relative group/carousel">
          
          
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#021422] hover:bg-gray-50 transition-colors z-30 opacity-0 group-hover/carousel:opacity-100 cursor-pointer duration-300 rounded-none"
            aria-label="Rolar para esquerda"
          >
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#021422] hover:bg-gray-50 transition-colors z-30 opacity-0 group-hover/carousel:opacity-100 cursor-pointer duration-300 rounded-none"
            aria-label="Rolar para direita"
          >
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>

          
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course, index) => (
              <div 
                key={index}
                className="relative snap-start shrink-0 w-[290px] sm:w-[330px] bg-white border border-gray-100 p-8 flex flex-col justify-between h-[210px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-none overflow-hidden group/card"
              >
                
                <GraduationCap className="absolute -right-6 -bottom-6 w-32 h-32 text-gray-100 opacity-40 pointer-events-none z-0" />
                
                <div className="relative z-10 space-y-3.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-300 font-mono tracking-widest">
                      {(index + 1).toString().padStart(2, "0")} /
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#021422] tracking-tight leading-snug font-title line-clamp-2">
                    {course.name}
                  </h3>
                </div>

                <div className="relative z-10 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <Link 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-black text-[#021422] uppercase tracking-wider hover:text-[#F6AE0D] transition-colors"
                  >
                    {t("School.buyCourse")}
                  </Link>
                  <ArrowRight className="w-4 h-4 text-gray-300 transition-transform group-hover/card:translate-x-1" weight="bold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="text-center pt-4">
          <LocaleLink 
            href="/cursos" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#021422] group relative py-1.5"
          >
            <span>{t("School.viewAll")}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" weight="bold" />
            
            
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#021422] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </LocaleLink>
        </div>

      </div>
    </section>
  );
}
