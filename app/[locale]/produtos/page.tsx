"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/routing";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MagnifyingGlass, ArrowRight, Package } from "@phosphor-icons/react";
import { productsData } from "@/data/products";

export default function ProdutosPage() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <main className="bg-[#FDFDFD] min-h-screen py-20 px-6 sm:px-12 lg:px-20 font-sans text-[#021422]">
      <div className="w-full space-y-12">
        {/* Back link */}
        <div>
          <LocaleLink
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#021422] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" weight="bold" />
            {t("Products.back")}
          </LocaleLink>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none font-title text-[#021422]">
            {t("Products.title")}
          </h1>
          <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
            {t("Products.description")}
          </p>
          <div className="w-20 h-1.5 bg-[#F6AE0D]"></div>
        </div>

        {/* Search */}
        <div className="max-w-md relative">
          <input
            type="text"
            placeholder={t("Products.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-sm focus:outline-none focus:border-[#F6AE0D] transition-colors text-[#021422]"
          />
          <MagnifyingGlass className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-6 w-full pt-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg sm:text-xl font-black tracking-wider text-[#021422] font-title uppercase">
                {t("Products.badge")}
              </h2>
              <div className="flex-grow h-[1px] bg-gray-200"></div>
              <span className="text-xs font-bold text-[#F6AE0D] font-mono">
                {filteredProducts.length} {filteredProducts.length === 1 ? t("Products.product") : t("Products.products")}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
              {filteredProducts.map((product, index) => {
                const waMessage = `Gostaria de comprar o item ${product.name} que você anunciou no seu site`;
                const waLink = `https://wa.me/5512981389215?text=${encodeURIComponent(waMessage)}`;

                return (
                  <div
                    key={product.id}
                    className="relative bg-white border border-gray-200/80 p-8 rounded-none flex flex-col justify-between h-140 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
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

                      {/* Product Photo */}
                      <div className="relative w-full h-80 flex items-center justify-center">
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

                      {/* Price */}
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
                        className="w-4 h-4 text-gray-300 transition-transform group-hover:translate-x-1"
                        weight="bold"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-none border border-dashed border-gray-200 w-full">
            <p className="text-gray-500 text-sm font-light">Nenhum item encontrado com esse nome.</p>
          </div>
        )}
      </div>
    </main>
  );
}
