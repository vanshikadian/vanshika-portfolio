import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans, Nunito } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanshika Kadian",
  description:
    "CS + Cognitive Science @ Michigan State. I build ML pipelines, multi-agent AI, and backend infrastructure. Graduating May 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrument.variable} ${nunito.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
