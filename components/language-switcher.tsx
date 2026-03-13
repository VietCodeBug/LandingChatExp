import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm"
      aria-label="Language switcher"
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            className={`rounded-full px-3 py-2 text-xs font-semibold tracking-[0.18em] transition ${
              isActive
                ? "bg-slate-950 text-white"
                : "text-slate-500 hover:text-slate-950"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
