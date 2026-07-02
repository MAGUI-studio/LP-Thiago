"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { InstagramLogo, YoutubeLogo, FacebookLogo, ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#010a12] text-gray-400 py-16 border-t border-white/5 relative overflow-hidden font-sans">
      
      {/* Huge Display Background Text (Brutalist/Premium look) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden h-[120px] sm:h-[160px] opacity-[0.02]">
        <span className="text-[12vw] font-black tracking-tighter leading-none text-white uppercase font-title whitespace-nowrap block">
          THIAGO MECÂNICO
        </span>
      </div>

      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 space-y-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Brand & Profile */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <a href="#" className="relative w-28 h-16 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Thiago Mecânico Logo" 
                  width={112} 
                  height={64} 
                  className="object-contain"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              {t("Footer.description")}
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/thiago.mecanico" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-white/5 transition-all duration-300"
              >
                <InstagramLogo className="w-5 h-5" weight="bold" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-white/5 transition-all duration-300"
              >
                <YoutubeLogo className="w-5 h-5" weight="bold" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-white/5 transition-all duration-300"
              >
                <FacebookLogo className="w-5 h-5" weight="bold" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest font-title">
              Navegação
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <a href="#sobre" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                Sobre <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#servicos" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                Serviços <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#escola" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                Escola <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Column 3: Address & Base */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest font-title">
              {t("Footer.addressTitle")}
            </h4>
            <p className="text-sm leading-relaxed font-light text-gray-400 whitespace-pre-line">
              {t("Footer.addressText")}
            </p>
          </div>

          {/* Column 4: Workshop Academy */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest font-title">
              {t("Footer.schoolTitle")}
            </h4>
            <p className="text-sm leading-relaxed font-light text-gray-400">
              {t("Footer.schoolText")}
            </p>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>{t("Footer.rights", { year: new Date().getFullYear() })}</p>
          <p className="hover:text-[#F6AE0D] transition-colors">{t("Footer.credits")}</p>
        </div>

      </div>
    </footer>
  );
}
