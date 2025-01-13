import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter ({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wild - Agencia de Diseño Web | Desarrollo de Aplicaciones",
  description:
    "Wild Project es una Agencia de desarrollo web y aplicaciones. Traemos a la vida digital los proyectos que tienes en mente.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "es" }
}>) {
  const lang = (await params).lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${inter.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}