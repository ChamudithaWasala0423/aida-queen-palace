import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import NavBar from "@/components/general/navbar";
import ScrollBookNow from "@/components/general/ScrollBookNow";
import ScrollToTop from "@/components/general/ScrollToTop";
import Footer from "@/components/general/Footer";
import { Toaster } from "@/components/ui/sonner";
import TermlyCMP from "@/components/general/TermlyCMP";
import { CookieIcon } from "lucide-react";
import WhatsAppLive from "@/components/general/WhatsAppLive";

const monserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${monserrat.className} ${lora.variable} antialiased`}>
        <ScrollToTop />
        <NextIntlClientProvider>
            <TermlyCMP
            websiteUUID={process.env.NEXT_PUBLIC_WEBSITE_UUID}
            autoBlock={undefined}
            masterConsentsOrigin={undefined}
          />
          <Toaster />
          <NavBar />
          <ScrollBookNow />
          {children}
           <div
            style={{
              position: "fixed",
              bottom: "0",
              left: "1.5rem",
              zIndex: 50,
            }}
          >
            <a href="#" className="termly-display-preferences px-3 py-1">
              <CookieIcon className="mr-1 text-cyan-600 " size={35} />
            </a>
          </div>
          <Footer />
          <WhatsAppLive />  
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
