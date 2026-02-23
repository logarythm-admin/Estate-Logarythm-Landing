import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logarythm.AI Estates | AI Visibility for Real Estate",
  description:
    "Logarythm.AI Estates helps real estate developers and brands get discovered in AI-powered buyer journeys across ChatGPT, Gemini, and Perplexity.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Logarythm.AI Estates | AI Visibility for Real Estate",
    description:
      "Logarythm.AI Estates helps real estate developers and brands get discovered in AI-powered buyer journeys across ChatGPT, Gemini, and Perplexity.",
    type: "website",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${fraunces.variable} overflow-x-hidden`}
    >
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
