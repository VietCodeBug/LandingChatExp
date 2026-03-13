import en from "@/messages/en.json";
import vi from "@/messages/vi.json";

export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

const dictionaries = {
  en,
  vi
} satisfies Record<Locale, Dictionary>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  vi: "VI"
};
