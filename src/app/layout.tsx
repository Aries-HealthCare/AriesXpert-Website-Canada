import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { StickyCareBar } from "@/components/ui/StickyCareBar";
import { generateMedicalOrganizationSchema } from "@/lib/seo-schemas";

export const metadata: Metadata = {
  title: {
    default: "AriesXpert Canada | Immersive 3D Physiotherapy & Human Movement Experience",
    template: "%s | AriesXpert Canada"
  },
  description: "Experience the human body in 3D. Registered physiotherapy, post-surgical recovery, and in-home/virtual rehabilitation across Ontario, British Columbia, and Alberta. Direct billing available.",
  keywords: [
    "physiotherapy canada",
    "in home physiotherapy toronto",
    "virtual physiotherapy bc",
    "post surgery knee rehabilitation",
    "3d human anatomy physiotherapy",
    "sports physiotherapy vancouver",
    "sciatica treatment calgary",
    "registered physiotherapist direct billing"
  ],
  authors: [{ name: "Aries HealthCare Canada Ltd." }],
  openGraph: {
    title: "AriesXpert Canada | Understand Your Body. Restore Movement.",
    description: "Enter the human body in 3D. Connect with Canadian registered physiotherapists for hospital-grade clinic, in-home, and virtual care.",
    url: "https://ariesxpert.ca",
    siteName: "AriesXpert Canada",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateMedicalOrganizationSchema();

  return (
    <html lang="en-CA" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-midnight-950 text-slate-100 flex flex-col antialiased selection:bg-clinical-cyan/30 selection:text-white">
        <MedicalDisclaimer />
        <Header />
        <main className="flex-1 w-full pt-20 sm:pt-24">
          {children}
        </main>
        <StickyCareBar />
        <Footer />
      </body>
    </html>
  );
}
