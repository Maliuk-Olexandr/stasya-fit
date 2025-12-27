import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Montserrat,
  Reddit_Mono,
  Notable,
  Oswald,
} from "next/font/google";
import "./globals.css";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/modules/components/Header/Header";
import { setRequestLocale, getMessages } from "next-intl/server";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--cormorant-garamond-font",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--montserrat-font",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});
const redditMono = Reddit_Mono({
  variable: "--reddit-font",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});
const notable = Notable({
  variable: "--notable-font",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
const oswald = Oswald({
  variable: "--display-oswald-font",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Stasya Fit",
  description:
    "Get a fully personalised workout plan, clear guidance, and full support during every session. I help you train safely, build strength, improve your form, and reach your goals faster — with a program created just for your body and lifestyle.",
  keywords: [
    "personal trainer",
    "online personal training",
    "personalized workout plan",
    "fitness coaching",
    "strength training",
    "home workouts",
    "virtual fitness trainer",
    "custom exercise program",
    "fitness support",
    "goal-oriented training",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stasyafit.com",
    title: "Stasya Fit",
    description:
      "Get a fully personalised workout plan, clear guidance, and full support during every session. I help you train safely, build strength, improve your form, and reach your goals faster — with a program created just for your body and lifestyle.",
    images: [
      {
        url: "https://www.stasyafit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stasya Fit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stasya Fit",
    description:
      "Get a fully personalised workout plan, clear guidance, and full support during every session. I help you train safely, build strength, improve your form, and reach your goals faster — with a program created just for your body and lifestyle.",
    images: ["https://www.stasyafit.com/og-image.jpg"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  console.log("LocaleLayout locale:", locale);

  return (
    <html lang={locale}>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${redditMono.variable} ${notable.variable} ${oswald.variable}`}
      ><NextIntlClientProvider>
        <Header />
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
