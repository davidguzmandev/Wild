/* import type { Metadata } from "next"; */
import { Poppins } from "next/font/google";
import "./globals.css";
import { getDictionary } from "../i18n/dictionary";

export interface Dictionary {
  home: {
    title: string;
    description: string;
  };
}

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
