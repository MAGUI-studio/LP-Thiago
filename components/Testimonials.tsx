"use client";

import { useTranslations } from "next-intl";
import { Quotes, Star } from "@phosphor-icons/react";
import Image from "next/image";

export default function Testimonials() {
  const t = useTranslations();

  const reviews = [
    { 
      name: t("Testimonials.t1Name"), 
      role: t("Testimonials.t1Role"), 
      text: t("Testimonials.t1Text"),
      avatar: "/utils/placeholder.svg",
      rating: 5
    },
    { 
      name: t("Testimonials.t2Name"), 
      role: t("Testimonials.t2Role"), 
      text: t("Testimonials.t2Text"),
      avatar: "/utils/placeholder.svg",
      rating: 5
    },
    { 
      name: t("Testimonials.t3Name"), 
      role: t("Testimonials.t3Role"), 
      text: t("Testimonials.t3Text"),
      avatar: "/utils/placeholder.svg",
      rating: 5
    },
  ];

  // Duplicate list to achieve a seamless loop in the marquee
  const marqueeReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section id="depoimentos" className="py-24 bg-white text-[#021422] font-sans w-full relative overflow-hidden select-none">
      {/* Shadow overlay to fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

      <div className="w-full space-y-16">
        
        {/* Header Block (Centered) */}
        <div className="w-full px-6 sm:px-12 lg:px-20 text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#F6AE0D] tracking-[0.2em] uppercase block">
            {t("Testimonials.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none font-title">
            {t("Testimonials.title")}
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
            {t("Testimonials.desc")}
          </p>
        </div>

        {/* Testimonials Marquee Track (No borders) */}
        <div className="w-full flex overflow-hidden">
          <div className="animate-marquee flex items-stretch gap-8 sm:gap-12">
            {marqueeReviews.map((review, index) => (
              <div 
                key={index}
                className="w-[280px] sm:w-[380px] shrink-0 bg-gray-50/40 p-8 flex flex-col justify-between space-y-6 rounded-none border-none shadow-none"
              >
                <div className="space-y-4">
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 text-[#F6AE0D]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5" weight="fill" />
                      ))}
                    </div>
                    <Quotes className="w-6 h-6 text-[#F6AE0D] opacity-40" weight="fill" />
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Section (No borders, avatar + info) */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="relative w-10 h-10 bg-gray-100 rounded-none overflow-hidden shrink-0">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#021422] text-xs sm:text-sm font-title leading-tight">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-[#F6AE0D] font-bold uppercase tracking-wider block mt-0.5">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
