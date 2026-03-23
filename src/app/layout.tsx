import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FixedCTA from "@/components/layout/FixedCTA";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { companyInfo } from "@/data/company";
import { pageMeta } from "@/data/metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  metadataBase: new URL("https://kobayashi-kensetsu.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: companyInfo.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyInfo.name,
  description: pageMeta.home.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "桜木町1-2-3",
    addressLocality: "さいたま市大宮区",
    addressRegion: "埼玉県",
    postalCode: "330-0000",
    addressCountry: "JP",
  },
  telephone: companyInfo.phone,
  openingHours: "Mo-Sa 08:00-18:00",
  url: "https://kobayashi-kensetsu.com",
  areaServed: companyInfo.serviceAreaCities.map((city) => ({
    "@type": "City",
    name: city,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <FixedCTA />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
