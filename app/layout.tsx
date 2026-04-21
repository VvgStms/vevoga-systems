import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vevoga Systems",
  description:
    "KI-gestützte Systeme für Einzelhandel und Fertigung. Retail System und Knowledge System — einsatzbereit in einer Stunde, ohne IT-Projekt.",
  openGraph: {
    title: "Vevoga Systems",
    description:
      "KI-gestützte Systeme für Einzelhandel und Fertigung. Einsatzbereit in einer Stunde.",
    url: "https://vevoga-systems.de",
    siteName: "Vevoga Systems",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="m-0 p-0 overflow-hidden">{children}</body>
    </html>
  );
}
