import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SalesIQ — Enterprise Memory Layer for Sales",
  description: "Every enterprise has a CRM, but conversations disappear. SalesIQ transforms every conversation into searchable organizational intelligence, powered by Gemma 4 on Cerebras.",
  keywords: ["Sales Intelligence", "Enterprise Memory", "CRM", "Sales Coaching", "Cerebras", "Gemma 4", "Real-time AI"],
  authors: [{ name: "SalesIQ Product Launch Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
