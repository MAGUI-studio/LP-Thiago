
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { montserrat, spaceGrotesk } from "../fonts";
import WhatsAppWidget from "../../components/WhatsAppWidget";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://thiagooficinaescola.com.br"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `/${locale === "pt" ? "" : locale}`,
      languages: {
        pt: "/",
        en: "/en",
        es: "/es",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      siteName: "Thiago Oficina Escola",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.webp"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const locales = ["pt", "en", "es"];
  if (!locales.includes(locale)) {
    notFound();
  }

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
