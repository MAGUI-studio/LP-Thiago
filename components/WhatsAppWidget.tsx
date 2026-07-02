"use client";

import Image from "next/image";

export default function WhatsAppWidget() {
  return (
    <a 
      href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full overflow-hidden hover:scale-110 active:scale-95 transition-transform duration-300 shadow-2xl bg-white border border-gray-100 flex items-center justify-center cursor-pointer"
    >
      <Image 
        src="/whatsapp.png" 
        alt="WhatsApp" 
        width={56} 
        height={56} 
        className="object-cover w-full h-full"
      />
    </a>
  );
}
