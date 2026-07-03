"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WorkspaceGallery() {
  const t = useTranslations();

  const items = [
    { src: "/painel-de-ferramentas.png", tag: "CONCEPT WORKBENCH // OFICINA" },
    { src: "/ferramentas.png", tag: "PRECISE CALIBRATION // FERRAMENTAS" },
    { src: "/servico-sendo-realizado-01.png", tag: "SUSPENSION CLINIC // SUSPENSÃO" },
    { src: "/servico-sendo-realizado-02.png", tag: "ELECTRONIC DIAGNOSTICS // TECNOLOGIA" },
  ];

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

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="relative aspect-[4/5] rounded-none overflow-hidden border border-gray-100 group shadow-md"
            >
              <Image 
                src={item.src} 
                alt={item.tag} 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#021422]/90 via-[#021422]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-[#F6AE0D] tracking-wider font-mono">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
