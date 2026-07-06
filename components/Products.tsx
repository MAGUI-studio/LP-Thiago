"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/routing";
import Link from "next/link";
import Image from "next/image";
import {
  CaretLeft,
  CaretRight,
  ArrowRight,
  Package,
} from "@phosphor-icons/react";
import { productsData } from "@/data/products";

export default function Products() {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 380;

      if (direction === "left") {
        if (container.scrollLeft <= 10) {
          container.scrollTo({
            left: container.scrollWidth - container.clientWidth,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 15
        ) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const products = productsData;

  return (
    <section
      id="produtos"
      className="py-24 bg-white text-[#021422] relative overflow-hidden font-sans"
    >
      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 space-y-16">
        <div className="mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
            {t("Products.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
            {t("Products.title")}
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {t("Products.description")}
          </p>
        </div>

        <div className="relative group/carousel">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#021422] hover:bg-gray-50 transition-colors z-30 opacity-0 group-hover/carousel:opacity-100 cursor-pointer duration-300 rounded-none"
            aria-label="Rolar para esquerda"
          >
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#021422] hover:bg-gray-50 transition-colors z-30 opacity-0 group-hover/carousel:opacity-100 cursor-pointer duration-300 rounded-none"
            aria-label="Rolar para direita"
          >
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => {
              const waMessage = `Gostaria de comprar o item ${product.name} que você anunciou no seu site`;
              const waLink = `https://wa.me/5512981389215?text=${encodeURIComponent(waMessage)}`;

              return (
                <div
                  key={index}
                  className="relative snap-start shrink-0 w-[290px] sm:w-[330px] bg-white border border-gray-100 p-8 flex flex-col justify-between h-130 hover:-translate-y-1 transition-all duration-300 rounded-none overflow-hidden group/card"
                >
                  <Package className="absolute -right-6 -bottom-6 w-32 h-32 text-gray-100 opacity-40 pointer-events-none z-0" />

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-300 font-mono tracking-widest">
                        {(index + 1).toString().padStart(2, "0")} /
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 font-mono tracking-wider">
                        {product.stock > 0
                          ? t("Products.stock", { quantity: product.stock })
                          : t("Products.outOfStock")}
                      </span>
                    </div>

                    <div className="relative w-full h-70 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-[#021422] tracking-tight leading-snug font-title line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-baseline gap-2">
                      {product.promoPrice ? (
                        <>
                          <span className="text-base font-extrabold text-[#021422] font-title">
                            {formatPrice(product.promoPrice)}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            {formatPrice(product.price)}
                          </span>
                        </>
                      ) : (
                        <span className="text-base font-extrabold text-[#021422] font-title">
                          {formatPrice(product.price)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <Link
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-black text-[#021422] uppercase tracking-wider hover:text-[#F6AE0D] transition-colors"
                    >
                      {t("Products.buy")}
                    </Link>
                    <ArrowRight
                      className="w-4 h-4 text-gray-300 transition-transform group-hover/card:translate-x-1"
                      weight="bold"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center pt-4">
          <LocaleLink
            href="/produtos"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#021422] group relative py-1.5"
          >
            <span>{t("Products.viewAll")}</span>
            <ArrowRight
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              weight="bold"
            />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#021422] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
