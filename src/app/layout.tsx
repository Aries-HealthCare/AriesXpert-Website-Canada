import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { RequestCallbackProvider } from "@/components/request-callback-provider";
import { AttributionCapture } from "@/components/attribution-capture";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ariesxpert.ca'),
  title: {
    default: 'Aries PhysioCare Canada | In-Home & Virtual Registered Physiotherapy',
    template: '%s | Aries PhysioCare Canada',
  },
  description: 'Hospital-grade in-home and virtual registered physiotherapy across Ontario, British Columbia, Alberta & Quebec. Direct billing to Sun Life, Manulife, Canada Life & 25+ insurers.',
  keywords: [
    'physiotherapy canada', 'in home physiotherapy toronto', 'virtual physiotherapy bc',
    'registered physiotherapist direct billing', 'post surgery knee rehabilitation vancouver',
    '3d human anatomy physiotherapy', 'sports physiotherapy calgary', 'sciatica treatment ottawa',
    'cpo registered physiotherapist', 'cptbc registered physiotherapist', 'home visit physiotherapy canada'
  ],
  authors: [{ name: 'Aries PhysioCare Canada' }],
  creator: 'Aries HealthCare Canada Inc.',
  publisher: 'Aries HealthCare Canada Inc.',
  category: 'Healthcare',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.ariesxpert.ca',
    siteName: 'Aries PhysioCare Canada',
    title: 'Aries PhysioCare Canada | In-Home & Virtual Registered Physiotherapy',
    description: 'Expert Canadian registered physiotherapy delivered to your home or virtually. Direct billing to Sun Life, Manulife, Canada Life & 25+ insurers.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ariesphysiocare',
    creator: '@ariesphysiocare',
    title: 'Aries PhysioCare Canada | In-Home & Virtual Registered Physiotherapy',
    description: 'Expert Canadian physiotherapy at your doorstep. Book same-day assessment.',
  },
  alternates: {
    canonical: 'https://www.ariesxpert.ca',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-body antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <RequestCallbackProvider>
            <AttributionCapture />
            <SiteLayoutWrapper>
              {children}
            </SiteLayoutWrapper>
            <Toaster />
          </RequestCallbackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
