"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 380;
      
      if (direction === "left") {
        if (container.scrollLeft <= 10) {
          container.scrollTo({
            left: container.scrollWidth - container.clientWidth,
            behavior: "smooth"
          });
        } else {
          container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 15) {
          container.scrollTo({
            left: 0,
            behavior: "smooth"
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

  const teamMembers = [
    {
      name: "Thiago Bustamante",
      role: "Fundador & Especialista",
      desc: "Campeão Nacional do Desafio Mecânico, especialista em suspensões e transmissões de alta performance.",
      photo: "/thiago.png",
      instagram: "https://www.instagram.com/thiagooficinaescola"
    },
    {
      name: "Funcionário 1",
      role: "Mecânico Sênior",
      desc: "Especialista em diagnósticos de sistemas eletrônicos complexos e manutenção de transmissões.",
      photo: "/utils/placeholder.svg",
      instagram: "https://www.instagram.com/thiagooficinaescola"
    },
    {
      name: "Funcionário 2",
      role: "Especialista em Suspensão",
      desc: "Técnico de suspensões e sistemas hidráulicos formado pela Thiago Oficina Escola.",
      photo: "/utils/placeholder.svg",
      instagram: "https://www.instagram.com/thiagooficinaescola"
    },
    {
      name: "Funcionário 3",
      role: "Mecânico Assistente",
      desc: "Responsável pelas revisões padrão, calibração precisa e montagem fina de bicicletas.",
      photo: "/utils/placeholder.svg",
      instagram: "https://www.instagram.com/thiagooficinaescola"
    },
    {
      name: "Funcionário 4",
      role: "Atendimento & Suporte",
      desc: "Gerencia o fluxo de agendamentos técnicos e cuida do suporte personalizado ao cliente.",
      photo: "/utils/placeholder.svg",
      instagram: "https://www.instagram.com/thiagooficinaescola"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-white text-[#021422] font-sans w-full relative z-10">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-16">
        
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-100">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 py-1 border-b border-[#F6AE0D] rounded-none">
              <span className="text-[11px] font-bold text-[#021422]/70 tracking-wider uppercase">
                Nosso Time
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none font-title text-[#021422]">
              Equipe Técnica Especializada
            </h2>
          </div>
          <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed max-w-sm">
            Profissionais dedicados e treinados sob o padrão cirúrgico de qualidade da Thiago Oficina Escola.
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
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-[calc((100%-64px)/3)] flex flex-col justify-between rounded-none transition-all duration-300 min-h-[420px]"
              >
                <div className="space-y-6">
                  
                  
                  <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden">
                    <Image 
                      src={member.photo} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-center"
                    />
                  </div>

                  
                  <div className="space-y-2 p-5">
                    <span className="text-[10px] font-bold text-[#F6AE0D] uppercase tracking-wider block">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-black text-[#021422] tracking-tight leading-tight font-title">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                      {member.desc}
                    </p>
                  </div>

                </div>

                
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-6 px-5 pb-5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Contato
                  </span>
                  <Link 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-none border border-gray-100 flex items-center justify-center text-[#021422] hover:text-[#F6AE0D] hover:border-[#F6AE0D] hover:bg-gray-50 transition-colors"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <InstagramLogo className="w-4 h-4" weight="bold" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
