import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);
  const pathname = `/${locale}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: pathname,
      languages: {
        en: "/en",
        vi: "/vi"
      }
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: pathname,
      locale: locale === "en" ? "en_US" : "vi_VN",
      images: [
        {
          url: `${siteConfig.domain}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${siteConfig.domain}/twitter-image`]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return children;
}
