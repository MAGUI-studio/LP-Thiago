"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppWidget() {
  return (
    <Link
      href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 overflow-hidden hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center cursor-pointer"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={0}
        height={0}
        sizes="100vw"
        className="object-contain w-full h-full"
      />
    </Link>
  );
}
