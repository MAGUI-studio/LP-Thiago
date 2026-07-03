"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { InstagramLogo, YoutubeLogo, TiktokLogo, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/routing";
import { ScrollTopLink } from "@/components/ScrollTopLink";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#010a12] text-gray-400 py-16 border-t border-white/5 relative overflow-hidden font-sans">
      
      
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden h-[120px] sm:h-[160px] opacity-[0.02]">
        <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-black tracking-tighter leading-none text-white uppercase font-title whitespace-nowrap block">
          THIAGO MECÂNICO
        </span>
      </div>

      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 space-y-16">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Link href="#" className="relative w-28 h-16 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Thiago Mecânico Logo" 
                  width={112} 
                  height={64} 
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              {t("Footer.description")}
            </p>
            
            <div className="flex gap-3">
              <Link 
                href="https://www.instagram.com/thiagooficinaescola" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-none flex items-center justify-center text-gray-400 hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-white/5 transition-all duration-300"
              >
                <InstagramLogo className="w-5 h-5" weight="duotone" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@thiago.mecanico" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="w-10 h-10 rounded-none flex items-center justify-center text-gray-400 hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-white/5 transition-all duration-300"
              >
                <TiktokLogo className="w-5 h-5" weight="duotone" />
              </Link>
              <Link 
                href="https://www.youtube.com/@ThiagoMecanico" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-none flex items-center justify-center text-gray-400 hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-white/5 transition-all duration-300"
              >
                <YoutubeLogo className="w-5 h-5" weight="duotone" />
              </Link>
            </div>
          </div>

          
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest font-title">
              Navegação
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <Link href="#sobre" className="hover:text-[#F6AE0D] transition-colors inline-flex items-center gap-1 group">
                Sobre
              </Link>
              <Link href="#servicos" className="hover:text-[#F6AE0D] transition-colors inline-flex items-center gap-1 group">
                Serviços
              </Link>
              <Link href="#escola" className="hover:text-[#F6AE0D] transition-colors inline-flex items-center gap-1 group">
                Escola
              </Link>
              <Link href="#estrutura" className="hover:text-[#F6AE0D] transition-colors inline-flex items-center gap-1 group">
                Estrutura
              </Link>
            </div>
          </div>

          
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest font-title">
              {t("Footer.addressTitle")}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <Link 
                href="https://maps.google.com/maps?q=THIAGO%20OFICINA%20ESCOLA,%20Av.%20Dep.%20Benedito%20Matarazzo,%205101" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Av. Dep. Benedito Matarazzo, 5101
              </Link>
              <span className="text-gray-500 font-light text-xs sm:text-sm">São José dos Campos - SP</span>
              <Link 
                href="https://maps.google.com/maps?q=THIAGO%20OFICINA%20ESCOLA,%20Av.%20Dep.%20Benedito%20Matarazzo,%205101" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#F6AE0D] hover:text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors mt-1"
              >
                {t("Footer.getDirections")} <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest font-title">
              {t("Footer.schoolTitle")}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <Link href="#escola" className="text-gray-400 hover:text-white transition-colors">
                {t("Footer.inPersonCourses")}
              </Link>
              <Link 
                href="https://instagram.com/thiagooficinaescola" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("Footer.digitalCourses")}
              </Link>
              <LocaleLink 
                href="/cursos" 
                className="text-[#F6AE0D] hover:text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors mt-1"
              >
                {t("Footer.viewCourses")} <ArrowUpRight className="w-3.5 h-3.5" />
              </LocaleLink>
            </div>
          </div>

        </div>

        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>{t("Footer.rights", { year: new Date().getFullYear() })}</p>
          
          <div className="flex flex-wrap items-center gap-3">
            <span>
              {t("Footer.offeredBy")}{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#B8D9EA]"
              >
                <strong>MAGUI</strong>
                <span className="text-[#B8D9EA]">.</span>studio
              </Link>
            </span>
            <span className="text-white/20">|</span>
            <ScrollTopLink className="text-white transition-colors hover:text-[#B8D9EA] cursor-pointer">
              {t("Footer.backToTop")}
            </ScrollTopLink>
          </div>
        </div>

      </div>
    </footer>
  );
}
