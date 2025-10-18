import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Glass Landing",
  description: "A modern, glassmorphic landing page with dark mode aesthetics",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans min-h-screen`}>
        {/* Subtle blur accents behind content */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div style={{ background: "radial-gradient(closest-side, rgba(124,92,255,0.12), transparent 40%)" }} className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] blur-[100px] rounded-full" />
          <div style={{ background: "radial-gradient(closest-side, rgba(6,182,212,0.08), transparent 40%)" }} className="absolute bottom-[-5%] right-[-5%] w-[420px] h-[420px] blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10">
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
