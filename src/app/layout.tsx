import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vantage — Operations Intelligence Platform",
    template: "%s — Vantage",
  },
  description:
    "Vantage gives enterprise teams real-time visibility into their operations. Track performance, automate reporting, and collaborate securely — all in one platform.",
  keywords: [
    "operations intelligence",
    "enterprise analytics",
    "SaaS dashboard",
    "real-time analytics",
    "automated reporting",
    "anomaly detection",
    "SOC 2 certified",
    "team performance monitoring",
  ],
  authors: [{ name: "Peyton Touma", url: "https://github.com/peytontouma" }],
  creator: "Peyton Touma",
  openGraph: {
    title: "Vantage — Operations Intelligence Platform",
    description:
      "Real-time operations intelligence for enterprise teams. Analytics, automated reporting, AI-powered anomaly detection — in one secure platform.",
    type: "website",
    siteName: "Vantage",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantage — Operations Intelligence Platform",
    description:
      "Real-time operations intelligence for enterprise teams. Analytics, automated reporting, AI-powered anomaly detection.",
    creator: "@peytontouma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  themeColor: "#05080f",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
