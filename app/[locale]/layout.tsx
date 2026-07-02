import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { montserrat, spaceGrotesk } from "../fonts";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import "../globals.css";

export const metadata: Metadata = {
  title: "Thiago Mecânico | Oficina Mecânica",
  description: "Serviços automotivos profissionais e de confiança.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  const locales = ['pt', 'en', 'es'];
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-full max-w-[110rem] mx-auto shadow-sm bg-white font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
