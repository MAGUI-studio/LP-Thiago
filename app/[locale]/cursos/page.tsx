"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/routing";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MagnifyingGlass, GraduationCap } from "@phosphor-icons/react";
import { coursesData } from "@/data/courses";

export default function CursosPage() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Extract unique categories from the filtered list to keep dynamic categories headers
  const categories = Array.from(
    new Set(filteredCourses.map((course) => course.category))
  );

  return (
    <main className="bg-[#FDFDFD] min-h-screen py-20 px-6 sm:px-12 lg:px-20 font-sans text-[#021422]">
      <div className="w-full space-y-12">
        
        {/* Back button */}
        <div>
          <LocaleLink 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#021422] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" weight="bold" />
            {t("Cursos.back")}
          </LocaleLink>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none font-title text-[#021422]">
            {t("Cursos.title")}
          </h1>
          <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
            {t("Cursos.description")}
          </p>
          <div className="w-20 h-1.5 bg-[#F6AE0D]"></div>
        </div>

        {/* Search Bar (Straight Borders) */}
        <div className="max-w-md relative">
          <input
            type="text"
            placeholder={t("Cursos.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-sm focus:outline-none focus:border-[#F6AE0D] transition-colors text-[#021422]"
          />
          <MagnifyingGlass className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Courses Section Separated by Category */}
        {filteredCourses.length > 0 ? (
          <div className="space-y-16 w-full pt-4">
            {categories.map((category) => {
              const categoryCourses = filteredCourses.filter(
                (c) => c.category === category
              );
              
              return (
                <div key={category} className="space-y-6 w-full">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <h2 className="text-lg sm:text-xl font-black tracking-wider text-[#021422] font-title uppercase">
                      {category}
                    </h2>
                    <div className="flex-grow h-[1px] bg-gray-200"></div>
                    <span className="text-xs font-bold text-[#F6AE0D] font-mono">
                      {categoryCourses.length} {categoryCourses.length === 1 ? t("Cursos.course") : t("Cursos.courses")}
                    </span>
                  </div>

                  {/* Category Grid (Straight Borders, Watermark Icons) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
                    {categoryCourses.map((course, index) => (
                      <div 
                        key={index}
                        className="relative bg-white border border-gray-200/80 p-8 rounded-none flex flex-col justify-between min-h-[200px] h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                      >
                        {/* Watermark Icon */}
                        <GraduationCap className="absolute -right-6 -bottom-6 w-32 h-32 text-gray-100 opacity-40 pointer-events-none z-0" />
                        
                        <div className="relative z-10 space-y-4">
                          <h3 className="text-lg sm:text-xl font-bold text-[#021422] tracking-tight leading-snug font-title">
                            {course.name}
                          </h3>
                        </div>

                        <div className="relative z-10">
                          <Link 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F6AE0D] uppercase tracking-wider hover:text-[#021422] transition-colors pt-4"
                          >
                            {t("School.buyCourse")}
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" weight="bold" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-none border border-dashed border-gray-200 w-full">
            <p className="text-gray-500 text-sm font-light">Nenhum curso encontrado com esse nome.</p>
          </div>
        )}

      </div>
    </main>
  );
}
