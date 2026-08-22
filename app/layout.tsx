import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import { offices } from "@/lib/data";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500"],
  display: "swap",
});

const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    { path: "../public/fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
});

const siteUrl = "https://thisismark.com";
const description =
  "MARK is an independent, pan-European real estate investment and asset manager, managing private real estate across Europe since 2004.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MARK Capital Management",
    template: "%s | MARK Capital Management",
  },
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MARK Capital Management",
    title: "MARK Capital Management",
    description,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MARK Capital Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARK Capital Management",
    description,
    images: ["/opengraph-image"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MARK Capital Management",
  alternateName: "MARK",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  description,
  foundingDate: "2004",
  sameAs: ["https://www.linkedin.com/company/thisismark"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "141 Wardour Street",
    addressLocality: "London",
    postalCode: "W1F 0UT",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general enquiries",
    email: "info@thisismark.com",
    telephone: offices[0].phone,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${generalSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
