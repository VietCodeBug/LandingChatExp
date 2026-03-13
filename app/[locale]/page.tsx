import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getDictionary, isLocale, type Dictionary, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

function Container({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`section-shell ${className}`.trim()}>{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <AnimatedSection direction="up" className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title text-balance">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </AnimatedSection>
  );
}

function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
    >
      {label}
    </a>
  );
}

function SecondaryButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/105 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-950"
    >
      {label}
    </a>
  );
}

function LightButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
    >
      {label}
    </a>
  );
}

function MailButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
    >
      <MailIcon />
      <span className="ml-2">{label}</span>
    </a>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const className = "h-6 w-6 text-slate-950";

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="4" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <rect x="3" y="10" width="10" height="4" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <rect x="15" y="10" width="6" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <rect x="3" y="16" width="10" height="4" rx="2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7.5 5l1-2M16.5 5l1-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M8.5 8 5 12l3.5 4M15.5 8 19 12l-3.5 4M13.5 5 10.5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 12h17M12 3.5c2.6 2.4 4.1 5.42 4.1 8.5S14.6 18.1 12 20.5M12 3.5C9.4 5.9 7.9 8.92 7.9 12s1.5 6.1 4.1 8.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

function PrivacyIcon({ index }: { index: number }) {
  const className = "h-6 w-6 text-slate-950";

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 3 5.5 5.6v5.9c0 4.3 2.7 8.1 6.5 9.5 3.8-1.4 6.5-5.2 6.5-9.5V5.6L12 3Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="m9.3 12.2 1.8 1.8 3.7-4.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M6 19h12M7 5h10M8.5 9h7M5 9.5 3.5 12 5 14.5M19 9.5 20.5 12 19 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M6.5 7.5A2.5 2.5 0 0 1 9 5h6a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 15 19H9a2.5 2.5 0 0 1-2.5-2.5v-9Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 9.5h6M9 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5.5 7 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-500" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FloatingNote({
  title,
  subtitle,
  className = "",
  delay = "0s"
}: {
  title: string;
  subtitle: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div className={`floating-note ${className}`.trim()} style={{ animationDelay: delay }}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
    </div>
  );
}

function LandingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const installHref = siteConfig.chromeStoreUrl;
  const emailHref = `mailto:${siteConfig.contactEmail}`;
  const year = new Date().getFullYear();
  const pageUrl = `${siteConfig.domain}/${locale}`;
  const platformGradients = [
    "from-sky-100 to-white",
    "from-emerald-100 to-white",
    "from-amber-100 to-white",
    "from-rose-100 to-white"
  ];

  const softwareStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BrowserApplication",
    applicationSubCategory: "Chrome Extension",
    operatingSystem: "Chrome, Edge, Brave, Arc",
    browserRequirements: "Requires a Chromium-based browser",
    description: dict.meta.description,
    url: pageUrl,
    inLanguage: locale === "en" ? "en-US" : "vi-VN",
    offers: [
      {
        "@type": "Offer",
        name: dict.pricing.plans[0].name,
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: installHref
      }
    ],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
      email: siteConfig.contactEmail
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      contactType: "customer support"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <main className="relative overflow-hidden pb-10">
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div className="ambient-orb one left-[-7rem] top-16 h-72 w-72" />
          <div className="ambient-orb two right-[-6rem] top-28 h-72 w-72" />
          <div className="ambient-orb three bottom-20 left-1/3 h-64 w-64" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_65%)]" />

        <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-white/72 backdrop-blur-xl">
          <Container className="flex items-center justify-between gap-5 py-4">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-extrabold tracking-[0.18em] text-white shadow-lg shadow-sky-200">
                AI
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {dict.nav.badge}
                </p>
                <p className="text-base font-semibold text-slate-950">AI Chat Exporter</p>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <nav className="flex items-center gap-6">
                {dict.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <LanguageSwitcher locale={locale} />
                <PrimaryButton href={installHref} label={dict.nav.install} />
              </div>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <LanguageSwitcher locale={locale} />
              <PrimaryButton href={installHref} label={dict.nav.install} />
            </div>
          </Container>
        </header>

        <section className="relative pt-16 sm:pt-20 lg:pt-24">
          <Container className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
            <AnimatedSection direction="left" className="max-w-3xl">
              <p className="eyebrow">{dict.hero.eyebrow}</p>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl xl:text-7xl">
                {dict.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {dict.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryButton href={installHref} label={dict.hero.primaryCta} />
                <SecondaryButton href="#features" label={dict.hero.secondaryCta} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {dict.hero.badges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-slate-200 bg-white/100 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:scale-105"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {dict.hero.stats.map((stat) => (
                  <div key={stat.label} className="panel-surface p-5 hover:-translate-y-1 transition duration-300">
                    <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <div className="relative lg:pl-6">
              <div className="absolute -left-6 top-20 h-40 w-40 rounded-full bg-sky-300/35 blur-3xl" />
              <div className="absolute bottom-2 right-2 h-40 w-40 rounded-full bg-emerald-300/35 blur-3xl" />

              <div className="absolute -right-4 -top-8 hidden w-56 xl:block">
                <FloatingNote
                  title={dict.hero.floatingCards[0].title}
                  subtitle={dict.hero.floatingCards[0].subtitle}
                />
              </div>
              <div className="absolute -left-10 top-1/2 hidden w-56 xl:block">
                <FloatingNote
                  title={dict.hero.floatingCards[1].title}
                  subtitle={dict.hero.floatingCards[1].subtitle}
                  delay="0.8s"
                />
              </div>
              <div className="absolute -bottom-4 left-10 hidden w-60 xl:block">
                <FloatingNote
                  title={dict.hero.floatingCards[2].title}
                  subtitle={dict.hero.floatingCards[2].subtitle}
                  delay="1.4s"
                />
              </div>

              <div className="panel-surface animate-float overflow-hidden p-4 sm:p-6">
                <div className="rounded-[1.75rem] border border-slate-900/10 bg-slate-950 text-white shadow-2xl">
                  <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                      aichatexporter.io.vn
                    </span>
                    <span className="ml-auto text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                      {dict.hero.previewLabel}
                    </span>
                  </div>

                  <div className="grid gap-5 p-5 xl:grid-cols-[1.05fr_15rem]">
                    <div className="space-y-4">
                      <div className="max-w-[78%] rounded-[1.6rem] bg-white px-4 py-4 text-slate-950 shadow-lg">
                        <p className="text-sm font-semibold text-slate-950">{dict.hero.previewConversation}</p>
                        <div className="mt-3 h-2 rounded-full bg-slate-200" />
                        <div className="mt-2 h-2 w-10/12 rounded-full bg-slate-200" />
                        <div className="mt-2 h-2 w-7/12 rounded-full bg-slate-200" />
                      </div>

                      <div className="ml-auto max-w-[86%] rounded-[1.6rem] border border-sky-400/20 bg-sky-400/10 px-4 py-4">
                        <div className="h-2 rounded-full bg-sky-100/90" />
                        <div className="mt-2 h-2 w-11/12 rounded-full bg-sky-100/90" />
                        <div className="mt-2 h-2 w-8/12 rounded-full bg-sky-100/90" />
                      </div>

                      <div className="max-w-[82%] rounded-[1.6rem] border border-emerald-400/20 bg-white/5 px-4 py-4">
                        <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                          <span>Code</span>
                          <span>TS</span>
                        </div>
                        <div className="space-y-2 font-mono text-xs text-emerald-200">
                          <div className="h-2 w-10/12 rounded-full bg-emerald-200/30" />
                          <div className="h-2 w-8/12 rounded-full bg-emerald-200/30" />
                          <div className="h-2 w-9/12 rounded-full bg-emerald-200/30" />
                          <div className="h-2 w-6/12 rounded-full bg-emerald-200/30" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.7rem] bg-white p-4 text-slate-950 shadow-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {dict.hero.previewSidebarTitle}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {["PDF", "MD", "TXT", "JSON"].map((format) => (
                          <div
                            key={format}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs font-semibold tracking-[0.18em] text-slate-700"
                          >
                            {format}
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-[1.5rem] bg-slate-50 p-4">
                        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>{dict.hero.previewSelection}</span>
                          <span>24 / 31</span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="h-2 rounded-full bg-slate-200" />
                          <div className="h-2 w-10/12 rounded-full bg-slate-200" />
                          <div className="h-2 w-9/12 rounded-full bg-slate-200" />
                          <div className="h-2 w-7/12 rounded-full bg-slate-200" />
                        </div>
                      </div>

                      <div className="mt-4 rounded-[1.4rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">
                        {dict.hero.previewPrivacy}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-4">
                  {dict.supported.items.map((platform) => (
                    <div
                      key={platform.name}
                      className="rounded-2xl border border-slate-200 bg-white/105 px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {platform.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="problem" className="py-24">
          <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow={dict.problem.eyebrow}
              title={dict.problem.title}
              description={dict.problem.description}
            />

            <div className="grid gap-5 md:grid-cols-3">
              {dict.problem.items.map((item, index) => (
                <AnimatedSection delay={0.1 * index} key={item.title}>
                  <article className="panel-surface p-6 h-full transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">0{index + 1}</p>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        <section id="features" className="py-24">
          <Container>
            <SectionHeading
              eyebrow={dict.features.eyebrow}
              title={dict.features.title}
              description={dict.features.description}
              centered
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {dict.features.items.map((item, index) => (
                <AnimatedSection delay={0.1 * index} key={item.title}>
                  <article
                    className="panel-surface h-full p-7 transition duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-inner">
                      <FeatureIcon index={index} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                    <p className="mt-4 text-sm font-medium leading-6 text-slate-500">{item.detail}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        <section id="how-it-works" className="py-24">
          <Container>
            <SectionHeading eyebrow={dict.how.eyebrow} title={dict.how.title} centered />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {dict.how.items.map((item, index) => (
                <AnimatedSection delay={0.1 * index} key={item.title}>
                  <article className="panel-surface relative overflow-hidden p-7 transition duration-300 hover:shadow-xl hover:scale-[1.02]">
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-sky-300/30 blur-2xl" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-sky-300/50">
                        {index + 1}
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
        <section className="py-24">
          <Container>
            <SectionHeading
              eyebrow={dict.supported.eyebrow}
              title={dict.supported.title}
              description={dict.supported.description}
              centered
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {dict.supported.items.map((item, index) => (
                <article
                  key={item.name}
                  className={`panel-surface bg-gradient-to-br ${platformGradients[index]} p-6`}
                >
                  <div className="inline-flex rounded-full border border-white/80 bg-white/100 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm">
                    {item.name}
                  </div>
                  <p className="mt-6 text-base leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="privacy" className="py-24">
          <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <SectionHeading
              eyebrow={dict.privacy.eyebrow}
              title={dict.privacy.title}
              description={dict.privacy.description}
            />

            <div className="space-y-6">
              <div className="grid gap-5 md:grid-cols-3">
                {dict.privacy.items.map((item, index) => (
                  <article key={item.title} className="panel-surface p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950/5">
                      <PrivacyIcon index={index} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="privacy-stage p-8 lg:p-10">
                <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                      {dict.privacy.visualTitle}
                    </p>
                    <h3 className="mt-5 text-3xl font-semibold text-white">
                      {dict.privacy.visualDescription}
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {dict.privacy.badges.map((badge) => (
                        <div
                          key={badge}
                          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200"
                        >
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative mx-auto w-full max-w-md">
                    <Image
                      src="/privacy-illustration.png"
                      alt="Privacy Core"
                      width={300}
                      height={300}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-50 blur-[2px]"
                    />

                    <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                          privacy flow
                        </span>
                        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                          local only
                        </span>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                            Step 1
                          </p>
                          <div className="mt-3 h-2 rounded-full bg-white/30" />
                          <div className="mt-2 h-2 w-9/12 rounded-full bg-white/25" />
                        </div>

                        <div className="rounded-[1.5rem] border border-white/10 bg-sky-400/10 p-4">
                          <div className="flex items-center gap-3 text-sky-200">
                            <PrivacyIcon index={0} />
                            <div>
                              <p className="text-sm font-semibold text-white">Protected export</p>
                              <p className="text-xs uppercase tracking-[0.18em] text-sky-200">browser-side processing</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                            Step 3
                          </p>
                          <div className="mt-3 h-2 rounded-full bg-white/30" />
                          <div className="mt-2 h-2 w-7/12 rounded-full bg-white/25" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-24">
          <Container>
            <SectionHeading
              eyebrow={dict.demo.eyebrow}
              title={dict.demo.title}
              description={dict.demo.description}
              centered
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {dict.demo.items.map((item, index) => (
                <article key={item.title} className="panel-surface overflow-hidden p-0">
                  <div className="border-b border-slate-900/5 px-6 py-6">
                    <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                  </div>

                  <div className="p-6">
                    {index === 0 ? (
                      <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5">
                        <div className="rounded-2xl bg-white p-5 shadow-sm">
                          <div className="h-3 w-28 rounded-full bg-slate-900" />
                          <div className="mt-5 h-2 rounded-full bg-slate-200" />
                          <div className="mt-3 h-2 w-11/12 rounded-full bg-slate-200" />
                          <div className="mt-3 h-2 w-9/12 rounded-full bg-slate-200" />
                          <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="h-20 rounded-2xl bg-sky-100" />
                            <div className="h-20 rounded-2xl bg-emerald-100" />
                            <div className="h-20 rounded-2xl bg-amber-100" />
                          </div>
                        </div>
                      </div>
                    ) : index === 1 ? (
                      <div className="rounded-[1.6rem] bg-slate-950 p-5 text-emerald-200">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                          <span className="text-xs uppercase tracking-[0.18em] text-emerald-300">markdown</span>
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                          <div className="h-2 w-8/12 rounded-full bg-emerald-200/35" />
                          <div className="h-2 w-11/12 rounded-full bg-emerald-200/35" />
                          <div className="h-2 w-10/12 rounded-full bg-emerald-200/35" />
                          <div className="mt-5 rounded-2xl bg-white/5 p-4">
                            <div className="h-2 w-9/12 rounded-full bg-sky-200/25" />
                            <div className="mt-2 h-2 w-7/12 rounded-full bg-sky-200/25" />
                            <div className="mt-2 h-2 w-10/12 rounded-full bg-sky-200/25" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-white to-rose-50 p-5">
                        <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-slate-200" />
                            <span className="h-3 w-3 rounded-full bg-slate-200" />
                            <span className="h-3 w-3 rounded-full bg-slate-200" />
                          </div>
                          <div className="mt-5 space-y-4">
                            <div className="max-w-[82%] rounded-[1.4rem] bg-slate-100 px-4 py-4">
                              <div className="h-2 rounded-full bg-slate-300" />
                              <div className="mt-2 h-2 w-9/12 rounded-full bg-slate-300" />
                            </div>
                            <div className="ml-auto max-w-[86%] rounded-[1.4rem] bg-sky-100 px-4 py-4">
                              <div className="h-2 rounded-full bg-sky-300" />
                              <div className="mt-2 h-2 w-8/12 rounded-full bg-sky-300" />
                            </div>
                            <div className="max-w-[70%] rounded-[1.4rem] bg-emerald-100 px-4 py-4">
                              <div className="h-2 rounded-full bg-emerald-300" />
                              <div className="mt-2 h-2 w-7/12 rounded-full bg-emerald-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <AnimatedSection direction="up" className="panel-surface mt-6 grid gap-8 overflow-hidden p-7 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center">
                <p className="eyebrow">Demo</p>
                <h3 className="mt-6 text-3xl font-semibold text-balance">{dict.demo.codeCard.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  {dict.demo.codeCard.description}
                </p>
              </div>

              <div className="rounded-[1.8rem] bg-slate-950 p-1 overflow-hidden shadow-2xl transition hover:scale-[1.02] duration-500">
                <Image 
                  src="/hero-preview.png"
                  alt="Dashboard Preview"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-[1.6rem]"
                />
              </div>
            </AnimatedSection>
          </Container>
        </section>

        <section id="pricing" className="py-24">
          <Container>
            <SectionHeading
              eyebrow={dict.pricing.eyebrow}
              title={dict.pricing.title}
              description={dict.pricing.description}
              centered
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {dict.pricing.plans.map((plan, index) => {
                const featured = index === 1;

                return (
                  <AnimatedSection delay={0.2 * index} key={plan.name}>
                    <article
                      className={`panel-surface relative h-full overflow-hidden p-8 transition duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                        featured ? "border-slate-950 bg-slate-950 text-white" : ""
                      }`}
                    >
                      {featured ? (
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300" />
                      ) : null}

                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p
                              className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                                featured ? "text-sky-200" : "text-slate-500"
                              }`}
                            >
                              {plan.name}
                            </p>
                            <h3 className={`mt-4 text-4xl font-semibold ${featured ? "text-white" : ""}`}>
                              {plan.price}
                            </h3>
                          </div>
                          {featured ? (
                            <span className="animate-pulse-soft rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                              {plan.badge}
                            </span>
                          ) : null}
                        </div>

                        <p className={`mt-4 max-w-xl text-base leading-7 ${featured ? "text-slate-200" : "text-slate-600"}`}>
                          {plan.description}
                        </p>

                        <div className="mt-8">
                          {featured ? (
                            <LightButton href={installHref} label={plan.cta} />
                          ) : (
                            <PrimaryButton href={installHref} label={plan.cta} />
                          )}
                        </div>

                        <div className="mt-8 space-y-4">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                              <div className="mt-0.5">
                                <CheckIcon />
                              </div>
                              <p className={featured ? "text-slate-200" : "text-slate-700"}>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                );
              })}
            </div>
          </Container>
        </section>
        <section id="faq" className="py-24">
          <Container className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.title} />

            <div className="space-y-4">
              {dict.faq.items.map((item, index) => (
                <AnimatedSection delay={0.1 * index} key={item.question}>
                  <details className="panel-surface group p-6 transition duration-200 hover:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950">
                      {item.question}
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-500 transition group-open:rotate-45 group-open:bg-slate-950 group-open:text-white group-open:border-slate-950">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl pr-8 text-base leading-7 text-slate-600">{item.answer}</p>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-24">
          <Container>
            <div className="panel-surface relative overflow-hidden p-8 sm:p-10">
              <div className="ambient-orb one -right-20 -top-16 h-48 w-48" />
              <div className="ambient-orb two -bottom-20 left-10 h-48 w-48" />

              <div className="relative">
                <SectionHeading
                  eyebrow={dict.contact.eyebrow}
                  title={dict.contact.title}
                  description={dict.contact.description}
                />

                <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                  <AnimatedSection direction="left" className="grid gap-5 md:grid-cols-3">
                    {dict.contact.items.map((item) => (
                      <article key={item.title} className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {item.title}
                        </p>
                        <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                      </article>
                    ))}
                  </AnimatedSection>

                  <AnimatedSection direction="right" className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl transition hover:scale-[1.02] duration-500">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <MailIcon />
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {dict.contact.emailLabel}
                    </p>
                    <a
                      href={emailHref}
                      className="mt-3 inline-flex items-center gap-2 break-all text-2xl font-semibold text-white transition hover:text-sky-200"
                    >
                      {siteConfig.contactEmail}
                      <ArrowUpRightIcon />
                    </a>
                    <p className="mt-4 max-w-md text-base leading-7 text-slate-300">{dict.contact.note}</p>
                    <div className="mt-8">
                      <MailButton href={emailHref} label={dict.contact.button} />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-20 pt-8">
          <Container>
            <AnimatedSection direction="up" className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-12 text-white shadow-2xl shadow-slate-900/20 sm:px-10 lg:px-12">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-sky-400/25 blur-3xl animate-pulse-soft" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow border-white/10 bg-white/10 text-white">AI Chat Exporter</p>
                  <h2 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl">
                    {dict.cta.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">{dict.cta.description}</p>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-sky-200">
                    {dict.cta.note}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <LightButton href={installHref} label={dict.cta.button} />
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
                  >
                    {dict.cta.secondaryCta}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        <footer className="border-t border-slate-900/5 py-8">
          <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-950">AI Chat Exporter</p>
              <p className="mt-1 text-sm text-slate-500">{dict.footer.description}</p>
              <a href={emailHref} className="mt-2 inline-flex text-sm font-medium text-slate-700 transition hover:text-slate-950">
                {dict.footer.emailLabel}: {siteConfig.contactEmail}
              </a>
            </div>
            <p className="text-sm text-slate-500">Copyright {year} AI Chat Exporter. {dict.footer.copyright}</p>
          </Container>
        </footer>
      </main>
    </>
  );
}

export default async function LocalePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return <LandingPage locale={locale} dict={dict} />;
}

