import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MARK Capital Management",
  description:
    "MARK is an independent, pan-European real estate investment and asset manager, managing private real estate across Europe since 2004.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
