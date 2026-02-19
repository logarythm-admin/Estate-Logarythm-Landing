import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logarythm.AI Estates | AI Visibility for Real Estate",
  description:
    "Logarythm.AI Estates helps real estate developers and brands get discovered in AI-powered buyer journeys across ChatGPT, Gemini, and Perplexity.",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
