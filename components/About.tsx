"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";


export default function About() {
  const t = useTranslations();

  return (
    <section
      id={t("Header.anchorAbout")}
      className="w-full bg-white text-[#021422] overflow-hidden pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="relative w-full h-[400px] lg:h-auto min-h-[450px] lg:min-h-[650px] overflow-hidden bg-gray-100 [clip-path:polygon(0_0,100%_0,100%_90%,50%_100%,0_90%)] lg:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]">
          <Image
            src="/thiago.webp"
            alt="Thiago Bustamante"
            fill
            className="object-cover object-top scale-105"
            priority
          />
        </div>

        <div className="px-8 py-20 lg:py-32 lg:px-24 flex flex-col justify-center bg-white">
          <div className="space-y-12 max-w-2xl">
            <div className="space-y-8">
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#F6AE0D] border-b-2 border-[#F6AE0D] pb-1">
                {t("About.badge")}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] text-[#021422] font-title">
                {t("About.title")}
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 font-light text-base sm:text-lg leading-relaxed">
              <p className="text-[#021422] font-medium leading-tight">
                {t("About.paragraph1")}
              </p>
              <p className="text-gray-500 max-w-2xl">{t("About.paragraph2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
