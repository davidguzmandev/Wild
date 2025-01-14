/* import type { Metadata } from "next"; */
import { Inter } from "next/font/google";
import "./globals.css";
import { getDictionary } from "../i18n/dictionary";

export interface Dictionary {
  home: {
    title: string;
    description: string;
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.home.title,
    description: dictionary.home.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}>) {
  const lang = (await params).lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
