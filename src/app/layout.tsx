import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

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
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
