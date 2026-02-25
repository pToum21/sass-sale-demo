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
  title: "Vantage — Operations Intelligence Platform",
  description:
    "Vantage gives enterprise teams real-time visibility into their operations. Track performance, automate reporting, and collaborate securely — all in one platform.",
  keywords: [
    "operations intelligence",
    "enterprise analytics",
    "SaaS dashboard",
    "team performance",
    "secure reporting",
  ],
  openGraph: {
    title: "Vantage — Operations Intelligence Platform",
    description:
      "Real-time operations intelligence for enterprise teams.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
