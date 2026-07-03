"use client";

import Image from "next/image";

export default function Partners() {
  const logos = [
    { src: "/marcas/parktool.webp", alt: "Park Tool" },
    { src: "/marcas/knipex.webp", alt: "Knipex" },
    { src: "/marcas/joes.webp", alt: "Joe's No Flats" },
    { src: "/marcas/session.webp", alt: "Session Parts" },
    { src: "/marcas/blump.webp", alt: "Blump" },
    { src: "/marcas/cmb.webp", alt: "CMB" },
    { src: "/marcas/evoil.webp", alt: "Evoil" },
    { src: "/marcas/gantech.webp", alt: "Gantech" },
  ];

  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section
      id="parceiros"
      className="py-12 overflow-hidden w-full relative z-10 select-none bg-white"
    >
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none"></div>

      <div className="w-full flex">
        <div className="animate-marquee flex items-center gap-16 sm:gap-24">
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-28 h-10 shrink-0 opacity-85 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                priority={index < 8}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
