import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Install AI Chat Exporter to save ChatGPT, Gemini, Claude, and Perplexity conversations as PDF, Markdown, Text, JSON, and polished screenshots with local-first privacy.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "productivity",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI Chat Exporter",
    "export ChatGPT conversations",
    "export Gemini chats",
    "Claude export extension",
    "Perplexity export tool",
    "Chrome extension for AI chats",
    "AI conversation to PDF",
    "AI chat screenshot exporter",
    "Markdown export for ChatGPT"
  ],
  alternates: {
    canonical: siteConfig.domain
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    url: siteConfig.domain,
    title: siteConfig.name,
    description:
      "Export AI chats beautifully with a fast, privacy-friendly Chrome extension built for ChatGPT, Gemini, Claude, and Perplexity.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Export AI chats to PDF, Markdown, Text, JSON, and screenshots with local-first privacy.",
    images: ["/twitter-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={beVietnamPro.variable}>
      <body>{children}</body>
    </html>
  );
}
