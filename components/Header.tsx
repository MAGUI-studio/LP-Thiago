"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Wrench, CaretDown, ArrowUpRight, List, X, InstagramLogo, YoutubeLogo, FacebookLogo } from "@phosphor-icons/react";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  const getLocaleName = (loc: string) => {
    switch (loc) {
      case "pt": return "Português";
      case "en": return "Inglês";
      case "es": return "Espanhol";
      default: return "Português";
    }
  };

  return (
    <header className="bg-[#021422] text-white border-b border-white/10 relative z-50">
      
      {/* ROW 1: TOP PANEL (BADGE / LOGO CENTER / ACTIONS) */}
      <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/5 relative">
        
        {/* Top Left: Translated Badge (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest">
          <Wrench className="w-4 h-4 text-[#F6AE0D]" weight="bold" />
          <span>{t("Header.badge")}</span>
        </div>

        {/* Top Center: Logo (Absolutely Centered, Original Colors) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <a href="#" className="relative w-28 h-16 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Thiago Mecânico Logo" 
              width={112} 
              height={64} 
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Top Right: Custom Language Selector + CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3 ml-auto lg:ml-0">
          
          {/* Custom Language Selector (Desktop Only) */}
          <div className="relative hidden md:block">
            <button 
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className="flex items-center gap-2 border border-white/10 px-3 py-2 rounded-lg text-xs font-bold text-white bg-transparent hover:border-[#F6AE0D] transition-colors cursor-pointer select-none"
            >
              <Image 
                src={`/idiomas/${locale}.png`} 
                alt={getLocaleName(locale)} 
                width={18} 
                height={12} 
                className="object-contain rounded-[1px]"
              />
              <span>{getLocaleName(locale)}</span>
              <CaretDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDesktopDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 bg-[#021422] border border-white/10 rounded-xl shadow-2xl py-1.5 z-50 w-40 overflow-hidden">
                {["pt", "en", "es"].map((loc) => {
                  if (loc === locale) return null;
                  return (
                    <button
                      key={loc}
                      onClick={() => {
                        handleLocaleChange(loc);
                        setIsDesktopDropdownOpen(false);
                      }}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/5 w-full text-left transition-colors cursor-pointer"
                    >
                      <Image 
                        src={`/idiomas/${loc}.png`} 
                        alt={getLocaleName(loc)} 
                        width={18} 
                        height={12} 
                        className="object-contain rounded-[1px]"
                      />
                      <span>{getLocaleName(loc)}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Desktop WhatsApp CTA */}
          <a 
            href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#F6AE0D] text-[#021422] font-black px-4 py-2.5 rounded-lg hover:bg-white hover:text-[#021422] transition-all duration-300 text-xs shadow-sm uppercase tracking-wider"
          >
            {t("Header.cta")}
            <ArrowUpRight className="w-4 h-4" weight="bold" />
          </a>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
          >
            <List className="w-5 h-5" weight="bold" />
          </button>

        </div>
      </div>

      {/* ROW 2: SUB-HEADER (DESKTOP NAVIGATION LINKS) */}
      <div className="hidden md:flex w-full px-4 sm:px-6 lg:px-8 h-12 items-center justify-between text-xs font-semibold text-white uppercase tracking-wider bg-black/10">
        <nav className="flex items-center gap-10">
          <a href="#sobre" className="text-gray-300 hover:text-[#F6AE0D] transition-colors"><span className="text-white/40 font-light mr-1">01</span> {t("Header.about")}</a>
          <a href="#servicos" className="text-gray-300 hover:text-[#F6AE0D] transition-colors"><span className="text-white/40 font-light mr-1">02</span> {t("Header.services")}</a>
          <a href="#escola" className="text-gray-300 hover:text-[#F6AE0D] transition-colors"><span className="text-white/40 font-light mr-1">03</span> {t("Header.school")}</a>
          <a href="#contato" className="text-gray-300 hover:text-[#F6AE0D] transition-colors"><span className="text-white/40 font-light mr-1">04</span> {t("Footer.addressTitle")}</a>
        </nav>
      </div>

      {/* MOBILE MENU DRAWER (SLIDE-IN OVERLAY) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          
          {/* Backdrop Blur */}
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-[#021422]/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          ></div>

          {/* Drawer Panel (Glassmorphism design) */}
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-[#021422]/95 border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl animate-slide-in-right">
            
            <div className="space-y-8">
              {/* Drawer Header (Close Button & Logo) */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="relative w-24 h-14">
                  <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
                >
                  <X className="w-5 h-5" weight="bold" />
                </button>
              </div>

              {/* Navigation Links with custom layout */}
              <nav className="flex flex-col gap-2 font-black uppercase tracking-wider font-title text-base">
                <a 
                  href="#sobre" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                >
                  <span>{t("Header.about")}</span>
                  <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">01/</span>
                </a>
                <a 
                  href="#servicos" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                >
                  <span>{t("Header.services")}</span>
                  <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">02/</span>
                </a>
                <a 
                  href="#escola" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                >
                  <span>{t("Header.school")}</span>
                  <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">03/</span>
                </a>
                <a 
                  href="#contato" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 transition-colors group"
                >
                  <span>{t("Footer.addressTitle")}</span>
                  <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">04/</span>
                </a>
              </nav>
            </div>

            {/* Bottom Panel (Language selector, CTA & Socials) */}
            <div className="space-y-6 border-t border-white/10 pt-6">
              
              {/* Custom Language Selector inside Drawer */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                  Idioma
                </span>
                
                <div className="relative w-full">
                  <button 
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="flex items-center justify-between w-full border border-white/15 px-4 py-3 rounded-xl text-xs font-bold text-white bg-white/5 hover:border-[#F6AE0D] transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Image 
                        src={`/idiomas/${locale}.png`} 
                        alt={getLocaleName(locale)} 
                        width={18} 
                        height={12} 
                        className="object-contain rounded-[1px]"
                      />
                      <span>{getLocaleName(locale)}</span>
                    </div>
                    <CaretDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu inside Drawer */}
                  {isMobileDropdownOpen && (
                    <div className="absolute left-0 right-0 bottom-full mb-1.5 bg-[#021422] border border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden">
                      {["pt", "en", "es"].map((loc) => {
                        if (loc === locale) return null;
                        return (
                          <button
                            key={loc}
                            onClick={() => {
                              handleLocaleChange(loc);
                              setIsMobileDropdownOpen(false);
                            }}
                            className="flex items-center gap-2.5 px-4 py-3 text-xs font-semibold text-white hover:bg-white/5 w-full text-left transition-colors cursor-pointer"
                          >
                            <Image 
                              src={`/idiomas/${loc}.png`} 
                              alt={getLocaleName(loc)} 
                              width={18} 
                              height={12} 
                              className="object-contain rounded-[1px]"
                            />
                            <span>{getLocaleName(loc)}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <a 
                href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F6AE0D] text-[#021422] font-black px-4 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-colors"
              >
                {t("Header.cta")}
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </a>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}
