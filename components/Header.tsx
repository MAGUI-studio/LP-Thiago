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

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const aboutHref = isHome ? `#${anchorAbout}` : `/#${anchorAbout}`;
  const servicesHref = isHome ? `#${anchorServices}` : `/#${anchorServices}`;
  const schoolHref = isHome ? `#${anchorSchool}` : `/#${anchorSchool}`;
  const contactHref = isHome ? `#${anchorContact}` : `/#${anchorContact}`;

  return (
    <>
      <div
        id="inicio"
        className="bg-[#F6AE0D] text-[#021422] py-3.5 px-6 text-center text-xs font-black uppercase tracking-wider flex flex-col sm:flex-row items-center justify-around gap-3 sm:gap-6 relative z-50 border-b border-[#021422]/10"
      >
        <span className="font-title text-sm sm:text-xs leading-snug">
          {t("Header.bannerText")}
        </span>

        <Link
          href="https://pay.hotmart.com/E106476498D?off=t79ctl2r&bid=1782556961286"
          target="_blank"
          rel="noopener noreferrer"
          className=" group inline-flex w-full md:w-fit bg-white text-[#021422] font-black px-8 py-4 rounded-none hover:bg-[#F6AE0D] items-center gap-3 text-xs uppercase tracking-widest transition-all duration-300"
        >
          {t("Header.bannerCTA")}
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            weight="bold"
          />
        </Link>
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
                src="/logo.png"
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
                  src={`/idiomas/${locale}.png`}
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
                          src={`/idiomas/${loc}.png`}
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
            >
              <List className="w-5 h-5" weight="bold" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex w-full px-4 sm:px-6 lg:px-8 h-12 items-center justify-between text-xs font-semibold text-white uppercase tracking-wider bg-black/10">
          <nav className="flex items-center gap-10">
            <Link
              href={aboutHref}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">01</span>{" "}
              {t("Header.about")}
            </Link>
            <Link
              href={servicesHref}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">02</span>{" "}
              {t("Header.services")}
            </Link>
            <Link
              href={schoolHref}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">03</span>{" "}
              {t("Header.school")}
            </Link>
            <Link
              href={contactHref}
              className="text-gray-300 hover:text-[#F6AE0D] transition-colors"
            >
              <span className="text-white/40 font-light mr-1">04</span>{" "}
              {t("Footer.addressTitle")}
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

                <nav className="flex flex-col gap-2 font-black uppercase tracking-wider font-title text-base">
                  <Link
                    href={aboutHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.about")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      01/
                    </span>
                  </Link>
                  <Link
                    href={servicesHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.services")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      02/
                    </span>
                  </Link>
                  <Link
                    href={schoolHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 border-b border-white/5 transition-colors group"
                  >
                    <span>{t("Header.school")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      03/
                    </span>
                  </Link>
                  <Link
                    href={contactHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#F6AE0D] flex items-center justify-between py-3.5 transition-colors group"
                  >
                    <span>{t("Footer.addressTitle")}</span>
                    <span className="text-xs text-[#F6AE0D] opacity-0 group-hover:opacity-100 transition-opacity">
                      04/
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
                          src={`/idiomas/${locale}.png`}
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
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F6AE0D] text-[#021422] font-black px-4 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-colors"
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
