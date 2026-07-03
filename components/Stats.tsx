"use client";

import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations();

  return (
    <section className="bg-white relative z-25 -mt-6 mx-4 sm:mx-8 border border-gray-900/10 text-[#021422]">
      
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-900/10 bg-white">
        
        {/* Cell 1 */}
        <div className="p-8 space-y-2">
          <span className="text-5xl font-black text-[#021422] tracking-tighter block font-title">
            01º
          </span>
          <h4 className="font-extrabold text-[#021422] text-sm tracking-wider uppercase">
            {t("Stats.desafioTitle")}
          </h4>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            {t("Stats.desafioDesc")}
          </p>
        </div>

        {/* Cell 2 */}
        <div className="p-8 space-y-2">
          <span className="text-5xl font-black text-[#021422] tracking-tighter block font-title">
            100%
          </span>
          <h4 className="font-extrabold text-[#021422] text-sm tracking-wider uppercase">
            {t("Stats.toolsTitle")}
          </h4>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            {t("Stats.toolsDesc")}
          </p>
        </div>

        {/* Cell 3 */}
        <div className="p-8 space-y-2">
          <span className="text-5xl font-black text-[#021422] tracking-tighter block font-title">
            Elite
          </span>
          <h4 className="font-extrabold text-[#021422] text-sm tracking-wider uppercase">
            {t("Stats.locationTitle")}
          </h4>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            {t("Stats.locationDesc")}
          </p>
        </div>

      </div>

    </section>
  );
}
