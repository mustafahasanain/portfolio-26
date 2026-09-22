import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Alexandria, Jost } from "next/font/google";
import { I18nProvider } from "@/i18n/context";
import { BackToTop } from "@/components";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";
import { siteUrl } from "@/i18n/site-url";
import "../globals.css";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const alexandria = Alexandria({ variable: "--font-alexandria", subsets: ["arabic"], display: "swap" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const seo = dictionaries[lang].seo;
  return {
    metadataBase: siteUrl,
    title: seo.homeTitle,
    description: seo.homeDescription,
    alternates: { canonical: lang === "en" ? "/" : "/ar", languages: { en: "/", ar: "/ar" } },
    openGraph: { title: seo.homeTitle, description: seo.homeDescription, locale: lang === "ar" ? "ar_IQ" : "en_US", alternateLocale: [lang === "ar" ? "en_US" : "ar_IQ"] },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className={`${jost.variable} ${alexandria.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider locale={lang} dictionary={dictionaries[lang]}>
          {children}
          <BackToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
