import React from "react";
import Hero from "@/components/landing/hero";
import ServicesStrip from "@/components/landing/services-strip";
import AreaCarousel from "@/components/landing/area-carousel";
import AiPrecisionRecovery from "@/components/landing/ai-precision-recovery";
import Specialities from "@/components/landing/specialities";
import VettedExperts from "@/components/landing/vetted-experts";
import Locations from "@/components/landing/locations";
import WhatWeTreat from "@/components/landing/what-we-treat";
import BlogSection from "@/components/landing/blog-section";
import FaqSection from "@/components/landing/faq-section";
import GoogleReviews from "@/components/google-reviews";
import FreeConsultationBlock from "@/components/landing/free-consultation-block";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import PricingPackagesSection from "@/components/landing/pricing-packages-section";

export const metadata = {
  title: "Aries PhysioCare Canada | In-Home & Virtual Registered Physiotherapy",
  description: "Hospital-grade in-home and virtual registered physiotherapy across Canada. Direct billing to Sun Life, Manulife, Canada Life & 25+ insurers. CPO & CPTBC licensed therapists.",
  alternates: {
    canonical: "https://www.ariesxpert.ca",
  },
  openGraph: {
    title: "Aries PhysioCare Canada | In-Home & Virtual Registered Physiotherapy",
    description: "Modern physical rehabilitation delivered to your home or virtually across Canada. Direct billing, 0 wait times, and evidence-informed care.",
    url: "https://www.ariesxpert.ca",
    siteName: "Aries PhysioCare Canada",
    locale: "en_CA",
    type: "website",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Aries PhysioCare Canada",
    "url": "https://www.ariesxpert.ca",
    "logo": "https://www.ariesxpert.ca/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-274-3722",
      "contactType": "customer service",
      "areaServed": "CA",
      "availableLanguage": ["en", "fr"]
    },
    "sameAs": [
      "https://facebook.com/ariesxpertcanada",
      "https://instagram.com/ariesxpertcanada",
      "https://linkedin.com/company/ariesxpert-canada"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Aries PhysioCare Canada - In-Home & Virtual Physiotherapy",
    "image": "https://www.ariesxpert.ca/og-image.jpg",
    "@id": "https://www.ariesxpert.ca",
    "url": "https://www.ariesxpert.ca",
    "telephone": "+1-800-274-3722",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 King St W, Suite 5600",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5X 1C9",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6487,
      "longitude": -79.3817
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    }
  };

  return (
    <>
      <SchemaMarkup data={organizationSchema} />
      <SchemaMarkup data={localBusinessSchema} />
      <Hero />
      <ServicesStrip />
      <div className="content-auto">
        <AreaCarousel />
      </div>
      <div className="content-auto">
        <AiPrecisionRecovery />
      </div>
      <div className="content-auto">
        <FreeConsultationBlock />
      </div>
      <div className="content-auto">
        <Specialities />
      </div>
      <div className="content-auto">
        <PricingPackagesSection />
      </div>
      <div className="content-auto">
        <GoogleReviews locationName="Toronto &amp; Canada" className="bg-background" />
      </div>
      <div className="content-auto">
        <VettedExperts />
      </div>
      <div className="content-auto">
        <Locations />
      </div>
      <div className="content-auto">
        <WhatWeTreat />
      </div>
      <div className="content-auto">
        <BlogSection />
      </div>
      <div className="content-auto">
        <FaqSection />
      </div>
    </>
  );
}
