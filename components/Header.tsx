"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  Wrench,
  CaretDown,
  ArrowUpRight,
  List,
  X,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  Sparkle,
  Megaphone,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const changeLocale = (newLocale: string, cleanPath: string) => {
  document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
  if (cleanPath === "/cursos" || cleanPath === "/courses") {
    const targetPath = newLocale === "en" ? "/courses" : "/cursos";
    window.location.href = targetPath;
  } else {
    window.location.href = cleanPath || "/";
  }
};

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reverbMessages: Record<string, string> = {
    pt: "Olá! Gostaria de comprar o curso Rockshox Reverb AXS anunciado no site por R$ 99,90.",
    en: "Hello! I would like to buy the Rockshox Reverb AXS course advertised on the website for R$ 99.90.",
    es: "¡Hola! Me gustaría comprar el curso Rockshox Reverb AXS anunciado en el sitio por R$ 99,90."
  };
  const reverbMsg = reverbMessages[locale] || reverbMessages.pt;
  const reverbLink = `https://wa.me/5512981389215?text=${encodeURIComponent(reverbMsg)}`;

  const bannerText = activeBanner === 0 ? t("Header.bannerText") : t("Header.bannerTextReverb");
  const bannerLink = activeBanner === 0 ? "https://pay.hotmart.com/E106476498D?off=t79ctl2r&bid=1782556961286" : reverbLink;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDesktopDropdownOpen(false);
      }
    }

    if (isDesktopDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopDropdownOpen]);

  const handleLocaleChange = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(pt|en|es)\b/, "");
    changeLocale(newLocale, cleanPath);
  };

  const getLocaleName = (loc: string) => {
    switch (loc) {
      case "pt":
        return "Português";
      case "en":
        return "Inglês";
      case "es":
        return "Espanhol";
      default:
        return "Português";
    }
  };

  const cleanPath = pathname?.replace(/^\/(pt|en|es)\b/, "") || "/";
  const isHome = cleanPath === "/" || cleanPath === "";

  const anchorAbout = t("Header.anchorAbout");
  const anchorServices = t("Header.anchorServices");
  const anchorSchool = t("Header.anchorSchool");
  const anchorContact = t("Header.anchorContact");
  const anchorStructure = "estrutura";
  const anchorRaffle = "rifa";

  const aboutHref = isHome ? `#${anchorAbout}` : `/#${anchorAbout}`;
  const servicesHref = isHome ? `#${anchorServices}` : `/#${anchorServices}`;
  const schoolHref = isHome ? `#${anchorSchool}` : `/#${anchorSchool}`;
  const structureHref = isHome ? `#${anchorStructure}` : `/#${anchorStructure}`;
  const raffleHref = isHome ? `#${anchorRaffle}` : `/#${anchorRaffle}`;
  const contactHref = isHome ? `#${anchorContact}` : `/#${anchorContact}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
        setIsMobileMenuOpen(false);
      }
    }
  };

  if (transparent) {
    return (
      <>
        <div
          id="inicio"
          className="bg-[#F6AE0D] text-[#021422] py-3.5 px-6 text-center text-xs font-black uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 relative z-50 border-b border-[#021422]/10 w-full transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" style={{ animation: "shimmer 4s infinite" }} />
          </div>

          <Megaphone className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 text-[#021422] opacity-[0.05] pointer-events-none z-0 rotate-12" weight="fill" />
          <Sparkle className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-16 text-[#021422] opacity-[0.05] pointer-events-none z-0 -rotate-12" weight="fill" />

          <span 
            key={activeBanner} 
            className="font-title text-sm sm:text-xs leading-snug relative z-10 flex items-center justify-center gap-1.5"
            style={{
              display: "inline-flex",
              animation: "slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards"
            }}
          >
            {bannerText}
          </span>

          <Link
            href={bannerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full md:w-fit bg-[#021422] text-white hover:bg-white hover:text-[#021422] border border-[#021422] font-black px-6 py-2.5 items-center justify-center gap-2.5 text-[10px] uppercase tracking-widest transition-all duration-300 shadow-[0_4px_12px_rgba(2,20,34,0.15)] hover:shadow-[0_4px_20px_rgba(2,20,34,0.25)] hover:-translate-y-[1px] active:translate-y-[1px] shrink-0 z-20 rounded-none"
          >
            {t("Header.bannerCTA")}
            <ArrowUpRight
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              weight="bold"
            />
          </Link>

          <div className="absolute bottom-0 left-0 h-[2.5px] bg-black/5 w-full z-10 pointer-events-none">
            <div 
              key={activeBanner}
              className="h-full bg-white/40 backdrop-blur-[1px] shadow-[0_0_4px_rgba(255,255,255,0.5)]"
              style={{
                animation: "bannerProgress 5000ms linear forwards"
              }}
            />
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes bannerProgress {
              from { width: 0%; }
              to { width: 100%; }
            }
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes shimmer {
              0% { transform: translateX(-150%); }
              50% { transform: translateX(150%); }
              100% { transform: translateX(150%); }
            }
          `}} />
        </div>

        <header className="relative w-full bg-transparent border-none text-white z-50">
          <div className="w-full px-6 sm:px-12 lg:px-20 h-24 flex items-center justify-between">
          <Link href="/" className="relative w-24 h-12 flex items-center">
            <Image
              src="/logo.webp"
              alt="Thiago Mecânico Logo"
              width={96}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-white/80">
            <Link
              href={aboutHref}
              onClick={(e) => handleScroll(e, anchorAbout)}
              className="hover:text-[#F6AE0D] transition-colors"
            >
              {t("Header.about")}
            </Link>
            <Link
              href={servicesHref}
              onClick={(e) => handleScroll(e, anchorServices)}
              className="hover:text-[#F6AE0D] transition-colors"
            >
              {t("Header.services")}
            </Link>
            <Link
              href={schoolHref}
              onClick={(e) => handleScroll(e, anchorSchool)}
              className="hover:text-[#F6AE0D] transition-colors"
            >
              {t("Header.school")}
            </Link>
            <Link
              href={structureHref}
              onClick={(e) => handleScroll(e, anchorStructure)}
              className="hover:text-[#F6AE0D] transition-colors"
            >
              {t("Header.structure")}
            </Link>
            <Link
              href={raffleHref}
              onClick={(e) => handleScroll(e, anchorRaffle)}
              className="hover:text-[#F6AE0D] transition-colors"
            >
              {t("Header.raffle")}
            </Link>
            <Link
              href={contactHref}
              onClick={(e) => handleScroll(e, anchorContact)}
              className="hover:text-[#F6AE0D] transition-colors"
            >
              {t("Header.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                className="p-1 hover:scale-110 transition-transform duration-300 cursor-pointer select-none flex items-center justify-center"
                aria-haspopup="listbox"
                aria-expanded={isDesktopDropdownOpen}
              >
                <Image
                  src={`/idiomas/${locale}.webp`}
                  alt={getLocaleName(locale)}
                  width={24}
                  height={16}
                  className="object-contain rounded-[2px]"
                />
              </button>

              {isDesktopDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-[32px] flex flex-col items-center gap-2 justify-center origin-top-right animate-fade-in transition-all">
                  {["pt", "en", "es"].map((loc) => {
                    if (loc === locale) return null;
                    return (
                      <button
                        key={loc}
                        onClick={() => {
                          handleLocaleChange(loc);
                          setIsDesktopDropdownOpen(false);
                        }}
                        className="p-0.5 hover:scale-110 transition-transform duration-200 cursor-pointer"
                      >
                        <Image
                          src={`/idiomas/${loc}.webp`}
                          alt={getLocaleName(loc)}
                          width={24}
                          height={16}
                          className="object-contain rounded-[2px]"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="https://instagram.com/thiagooficinaescola"
              target="_blank"
              className="hidden lg:inline-flex bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-bold px-6 py-2.5 rounded-none text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-md"
            >
              {t("Hero.ctaSchedule")}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
              aria-label={t("Header.openMenu")}
            >
              <List className="w-5 h-5" weight="bold" />
            </button>
          </div>
        </div>

        {/* Mobile menu container */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#021422]/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
            ></div>

            <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-[#021422]/95 border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl animate-slide-in-right">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="relative w-24 h-14">
                    <Image
                      src="/logo.webp"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
                    aria-label={t("Header.closeMenu")}
                  >
                    <X className="w-5 h-5" weight="bold" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 font-black uppercase tracking-wider font-title text-base">
                  <Link
                    href={aboutHref}
                    onClick={(e) => handleScroll(e, anchorAbout)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.about")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      01/
                    </span>
                  </Link>
                  <Link
                    href={servicesHref}
                    onClick={(e) => handleScroll(e, anchorServices)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.services")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      02/
                    </span>
                  </Link>
                  <Link
                    href={schoolHref}
                    onClick={(e) => handleScroll(e, anchorSchool)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.school")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      03/
                    </span>
                  </Link>
                  <Link
                    href={structureHref}
                    onClick={(e) => handleScroll(e, anchorStructure)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.structure")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      04/
                    </span>
                  </Link>
                  <Link
                    href={raffleHref}
                    onClick={(e) => handleScroll(e, anchorRaffle)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.raffle")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      05/
                    </span>
                  </Link>
                  <Link
                    href={contactHref}
                    onClick={(e) => handleScroll(e, anchorContact)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 transition-colors group"
                  >
                    <span>{t("Header.contact")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      06/
                    </span>
                  </Link>
                </nav>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                    Idioma
                  </span>

                  <div className="relative w-full">
                    <button
                      onClick={() =>
                        setIsMobileDropdownOpen(!isMobileDropdownOpen)
                      }
                      className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={`/idiomas/${locale}.webp`}
                          alt={getLocaleName(locale)}
                          width={24}
                          height={16}
                          className="object-contain rounded-[2px]"
                        />
                        <span className="font-semibold">
                          {getLocaleName(locale)}
                        </span>
                      </div>
                      <CaretDown
                        className={`w-4 h-4 text-white/60 transition-transform ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isMobileDropdownOpen && (
                      <div className="absolute left-0 right-0 bottom-full mb-2 bg-[#021422] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50">
                        {["pt", "en", "es"].map((loc) => {
                          if (loc === locale) return null;
                          return (
                            <button
                              key={loc}
                              onClick={() => {
                                handleLocaleChange(loc);
                                setIsMobileDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-sm text-left transition-colors text-white"
                            >
                              <Image
                                src={`/idiomas/${loc}.webp`}
                                alt={getLocaleName(loc)}
                                width={24}
                                height={16}
                                className="object-contain rounded-[2px]"
                              />
                              <span className="font-semibold">
                                {getLocaleName(loc)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center border-t border-white/5 pt-6">
                  <Link
                    href="https://www.instagram.com/thiagooficinaescola"
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
                  >
                    <InstagramLogo className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@thiago.mecanico"
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
                  >
                    <TiktokLogo className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@ThiagoMecanico"
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
                  >
                    <YoutubeLogo className="w-5 h-5" />
                  </Link>
                </div>

                <Link
                  href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-4 py-3.5 rounded-none text-xs uppercase tracking-wider shadow-lg hover:bg-white hover:text-black transition-all duration-300 mt-6"
                >
                  {t("Header.cta")}
                  <ArrowUpRight className="w-4 h-4" weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

  return (
    <>
      <div
        id="inicio"
        className="bg-[#F6AE0D] text-[#021422] py-3.5 px-6 text-center text-xs font-black uppercase tracking-wider flex flex-col sm:flex-row items-center justify-around gap-3 sm:gap-6 relative z-50 border-b border-[#021422]/10 transition-all duration-500 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" style={{ animation: "shimmer 4s infinite" }} />
        </div>

        <Megaphone className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 text-[#021422] opacity-[0.05] pointer-events-none z-0 rotate-12" weight="fill" />
        <Sparkle className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-16 text-[#021422] opacity-[0.05] pointer-events-none z-0 -rotate-12" weight="fill" />

        <span 
          key={activeBanner} 
          className="font-title text-sm sm:text-xs leading-snug relative z-10 flex items-center justify-center gap-1.5"
          style={{
            display: "inline-flex",
            animation: "slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }}
        >
          {bannerText}
        </span>

        <Link
          href={bannerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full md:w-fit bg-[#021422] text-white hover:bg-white hover:text-[#021422] border border-[#021422] font-black px-8 py-3.5 items-center justify-center gap-2.5 text-[10px] uppercase tracking-widest transition-all duration-300 shadow-[0_4px_12px_rgba(2,20,34,0.15)] hover:shadow-[0_4px_20px_rgba(2,20,34,0.25)] hover:-translate-y-[1px] active:translate-y-[1px] shrink-0 z-20 rounded-none"
        >
          {t("Header.bannerCTA")}
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            weight="bold"
          />
        </Link>

        <div className="absolute bottom-0 left-0 h-[2.5px] bg-black/5 w-full z-10 pointer-events-none">
          <div 
            key={activeBanner}
            className="h-full bg-white/40 backdrop-blur-[1px] shadow-[0_0_4px_rgba(255,255,255,0.5)]"
            style={{
              animation: "bannerProgress 5000ms linear forwards"
            }}
          />
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bannerProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes shimmer {
            0% { transform: translateX(-150%); }
            50% { transform: translateX(150%); }
            100% { transform: translateX(150%); }
          }
        `}} />
      </div>

      <header className="bg-[#021422] text-white border-b border-white/10 relative z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/5 relative">
          <div className="hidden lg:flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest">
            <Wrench className="w-4 h-4 text-[#F6AE0D]" weight="bold" />
            <span>{t("Header.badge")}</span>
          </div>

          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center">
            <Link
              href="/"
              className="relative w-28 h-16 flex items-center justify-center"
            >
              <Image
                src="/logo.webp"
                alt="Thiago Mecânico Logo"
                width={112}
                height={64}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 ml-auto lg:ml-0">
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                className="p-1 hover:scale-110 transition-transform duration-300 cursor-pointer select-none flex items-center justify-center"
                aria-haspopup="listbox"
                aria-expanded={isDesktopDropdownOpen}
              >
                <Image
                  src={`/idiomas/${locale}.webp`}
                  alt={getLocaleName(locale)}
                  width={24}
                  height={16}
                  className="object-contain rounded-[2px]"
                />
                <span className="sr-only">
                  Alterar idioma (Atual: {getLocaleName(locale)})
                </span>
              </button>

              {isDesktopDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-[32px] flex flex-col items-center gap-2 justify-center origin-top-right animate-fade-in transition-all">
                  {["pt", "en", "es"].map((loc) => {
                    if (loc === locale) return null;
                    return (
                      <button
                        key={loc}
                        onClick={() => {
                          handleLocaleChange(loc);
                          setIsDesktopDropdownOpen(false);
                        }}
                        className="p-0.5 hover:scale-110 transition-transform duration-200 cursor-pointer"
                      >
                        <Image
                          src={`/idiomas/${loc}.webp`}
                          alt={getLocaleName(loc)}
                          width={24}
                          height={16}
                          className="object-contain rounded-[2px]"
                        />
                        <span className="sr-only">{getLocaleName(loc)}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="https://instagram.com/thiagooficinaescola"
              target="_blank"
              className="hidden md:inline-flex bg-white text-[#021422] font-black px-8 py-4 rounded-none hover:bg-[#F6AE0D] items-center gap-3 text-xs uppercase tracking-widest transition-all duration-300"
            >
              {t("Hero.ctaSchedule")}
              <ArrowUpRight className="w-4 h-4" weight="bold" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
              aria-label={t("Header.openMenu")}
            >
              <List className="w-5 h-5" weight="bold" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex w-full px-4 sm:px-6 lg:px-8 h-12 items-center justify-between text-xs font-semibold text-white uppercase tracking-wider bg-black/10">
          <nav className="flex items-center gap-10">
            <Link
              href={aboutHref}
              onClick={(e) => handleScroll(e, anchorAbout)}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">01</span>{" "}
              {t("Header.about")}
            </Link>
            <Link
              href={servicesHref}
              onClick={(e) => handleScroll(e, anchorServices)}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">02</span>{" "}
              {t("Header.services")}
            </Link>
            <Link
              href={schoolHref}
              onClick={(e) => handleScroll(e, anchorSchool)}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">03</span>{" "}
              {t("Header.school")}
            </Link>
            <Link
              href={structureHref}
              onClick={(e) => handleScroll(e, anchorStructure)}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">04</span>{" "}
              {t("Header.structure")}
            </Link>
            <Link
              href={raffleHref}
              onClick={(e) => handleScroll(e, anchorRaffle)}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">05</span>{" "}
              {t("Header.raffle")}
            </Link>
            <Link
              href={contactHref}
              onClick={(e) => handleScroll(e, anchorContact)}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">06</span>{" "}
              {t("Header.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/thiagooficinaescola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors flex items-center justify-center"
            >
              <InstagramLogo className="w-6 h-6" weight="duotone" />
            </Link>
            <Link
              href="https://www.tiktok.com/@thiago.mecanico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors flex items-center justify-center"
            >
              <TiktokLogo className="w-6 h-6" weight="duotone" />
            </Link>
            <Link
              href="https://www.youtube.com/@ThiagoMecanico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors flex items-center justify-center"
            >
              <YoutubeLogo className="w-6 h-6" weight="duotone" />
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#021422]/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
            ></div>

            <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-[#021422]/95 border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl animate-slide-in-right">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="relative w-24 h-14">
                    <Image
                      src="/logo.webp"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:border-[#F6AE0D] transition-colors"
                    aria-label={t("Header.closeMenu")}
                  >
                    <X className="w-5 h-5" weight="bold" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 font-black uppercase tracking-wider font-title text-base">
                  <Link
                    href={aboutHref}
                    onClick={(e) => handleScroll(e, anchorAbout)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.about")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      01/
                    </span>
                  </Link>
                  <Link
                    href={servicesHref}
                    onClick={(e) => handleScroll(e, anchorServices)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.services")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      02/
                    </span>
                  </Link>
                  <Link
                    href={schoolHref}
                    onClick={(e) => handleScroll(e, anchorSchool)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.school")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      03/
                    </span>
                  </Link>
                  <Link
                    href={structureHref}
                    onClick={(e) => handleScroll(e, anchorStructure)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.structure")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      04/
                    </span>
                  </Link>
                  <Link
                    href={raffleHref}
                    onClick={(e) => handleScroll(e, anchorRaffle)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.raffle")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      05/
                    </span>
                  </Link>
                  <Link
                    href={contactHref}
                    onClick={(e) => handleScroll(e, anchorContact)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 transition-colors group"
                  >
                    <span>{t("Header.contact")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      06/
                    </span>
                  </Link>
                </nav>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                    Idioma
                  </span>

                  <div className="relative w-full">
                    <button
                      onClick={() =>
                        setIsMobileDropdownOpen(!isMobileDropdownOpen)
                      }
                      className="flex items-center justify-between w-full border border-white/15 px-4 py-3 rounded-xl text-xs font-bold text-white bg-white/5 hover:border-[#F6AE0D] transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/idiomas/${locale}.webp`}
                          alt={getLocaleName(locale)}
                          width={18}
                          height={12}
                          className="object-contain rounded-[1px]"
                        />
                        <span>{getLocaleName(locale)}</span>
                      </div>
                      <CaretDown
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

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
                                src={`/idiomas/${loc}.webp`}
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

                <div className="flex items-center justify-center gap-6 pt-2">
                  <Link
                    href="https://www.instagram.com/thiagooficinaescola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F6AE0D] transition-colors"
                  >
                    <InstagramLogo className="w-5 h-5" weight="bold" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@thiago.mecanico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F6AE0D] transition-colors"
                  >
                    <TiktokLogo className="w-5 h-5" weight="bold" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@ThiagoMecanico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F6AE0D] transition-colors"
                  >
                    <YoutubeLogo className="w-5 h-5" weight="bold" />
                  </Link>
                </div>

                <Link
                  href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-4 py-3.5 rounded-none text-xs uppercase tracking-wider shadow-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  {t("Header.cta")}
                  <ArrowUpRight className="w-4 h-4" weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
