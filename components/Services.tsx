"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight, Wrench, GraduationCap, Trophy } from "@phosphor-icons/react";
import Link from "next/link";

export default function Services() {
  const t = useTranslations();

  const servicesData = [
    {
      number: "01",
      title: t("Services.card1Title"),
      desc: t("Services.card1Desc"),
      footer: t("Services.card1Footer"),
      href: "https://instagram.com/thiagooficinaescola",
      target: "_blank",
      icon: Wrench
    },
    {
      number: "02",
      title: t("Services.card2Title"),
      desc: t("Services.card2Desc"),
      footer: t("Services.card2Footer"),
      href: "#escola",
      target: undefined,
      icon: GraduationCap
    },
    {
      number: "03",
      title: t("Services.card3Title"),
      desc: t("Services.card3Desc"),
      footer: t("Services.card3Footer"),
      href: "https://instagram.com/thiagooficinaescola",
      target: "_blank",
      icon: Trophy
    }
  ];

  return (
    <section id={t("Header.anchorServices")} className="py-24 bg-white text-[#021422] font-sans w-full">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-16">
        
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 py-1 border-b border-[#F6AE0D] rounded-none">
              <span className="text-[11px] font-bold text-[#021422]/70 tracking-wider uppercase">
                {t("Services.badge")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
              {t("Services.title")}
            </h2>
          </div>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed max-w-sm">
            {t("Services.description")}
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isExternal = service.target === "_blank";
            
            return (
              <Link
                key={index}
                href={service.href}
                target={service.target}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative bg-white p-8 flex flex-col justify-between min-h-[320px] overflow-hidden rounded-none hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                
                <Icon className="absolute right-0 bottom-0 w-60 h-60 text-gray-100 opacity-70 pointer-events-none z-0" />
                
                <div className="relative z-10 space-y-6">
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#F6AE0D] font-mono tracking-widest bg-[#F6AE0D]/10 px-2.5 py-1 rounded-none">
                      {service.number}
                    </span>
                  </div>

                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-[#021422] font-title leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                
                <div className="relative z-10 pt-6 flex justify-between items-center mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {service.footer}
                  </span>
                  <div className="w-9 h-9 rounded-none border border-gray-100 flex items-center justify-center text-[#021422] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" weight="bold" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
