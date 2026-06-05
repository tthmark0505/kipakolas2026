import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import { TimerProvider } from "@/components/Header/TimerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const specialGothicExpanded = Special_Gothic_Expanded_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-gothic",
});

export const metadata: Metadata = {
  title: "Kipakolás 2026 Tavasz",
  description: "Tóth Márk Benjámin portfólió oldala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} ${specialGothicExpanded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05030a] text-white">
        <TimerProvider>
          <Header />

          <main className="flex-1">{children}</main>
        </TimerProvider>
      </body>
    </html>
  );
}