"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShieldCheck, Wrench, Globe } from "@phosphor-icons/react";

export default function About() {
  const t = useTranslations();

  return (
    <section
      id={t("Header.anchorAbout")}
      className="w-full bg-white py-32 px-8 md:px-16 lg:px-24 text-[#021422]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
          <Image
            src="/thiago.png"
            alt="Thiago Bustamante"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col gap-12">
          <div className="space-y-8">
            <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#F6AE0D] border-b-2 border-[#F6AE0D] pb-1">
              {t("About.badge")}
            </span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-[#021422]">
              {t("About.title")}
            </h2>
          </div>

          <div className="space-y-8 text-gray-700 font-light text-lg md:text-xl leading-relaxed">
            <p className="text-[#021422] font-medium leading-tight">
              {t("About.paragraph1")}
            </p>
            <p className="text-gray-500 max-w-2xl">{t("About.paragraph2")}</p>
          </div>

          <div className="flex flex-col gap-2 pt-8">
            {[
              { icon: ShieldCheck, text: t("About.bullet1") },
              { icon: Wrench, text: t("About.bullet2") },
              { icon: Globe, text: t("About.bullet3") },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative w-full py-8 border-b border-gray-200 flex items-center justify-between overflow-hidden transition-colors hover:border-[#021422]"
              >
                <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] text-[#021422]">
                  {item.text}
                </span>

                <item.icon
                  className="w-12 h-12 text-gray-100 group-hover:text-[#F6AE0D] transition-colors duration-500"
                  weight="duotone"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
