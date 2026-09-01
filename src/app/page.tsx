import React from "react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { Hero } from "@/components/landing/Hero";
import { ServicesStrip } from "@/components/landing/ServicesStrip";
import { ProvinceCarousel } from "@/components/landing/ProvinceCarousel";
import { AiPrecisionRecovery } from "@/components/landing/AiPrecisionRecovery";
import { FreeConsultationBlock } from "@/components/landing/FreeConsultationBlock";
import { Specialities } from "@/components/landing/Specialities";
import { DirectBillingInsuranceSection } from "@/components/landing/DirectBillingInsuranceSection";
import { PricingPackagesSection } from "@/components/landing/PricingPackagesSection";
import { GoogleReviewsCanada } from "@/components/landing/GoogleReviewsCanada";
import { VettedExpertsCanada } from "@/components/landing/VettedExpertsCanada";
import { WhatWeTreatCanada } from "@/components/landing/WhatWeTreatCanada";
import { BlogSectionCanada } from "@/components/landing/BlogSectionCanada";
import { FaqSectionCanada } from "@/components/landing/FaqSectionCanada";

export const metadata = {
  title: "AriesXpert Canada | In-Home & Virtual Registered Physiotherapy",
  description: "Hospital-grade in-home and virtual physiotherapy across Canada. Direct billing to Sun Life, Manulife, Canada Life, Desjardins & Blue Cross. CPO & CPTBC licensed therapists.",
  alternates: {
    canonical: "https://www.ariesxpert.ca",
  },
  openGraph: {
    title: "AriesXpert Canada | In-Home & Virtual Registered Physiotherapy",
    description: "Modern physical rehabilitation delivered to your home or virtually across Canada. Direct billing, 0 wait times, and evidence-informed care.",
    url: "https://www.ariesxpert.ca",
    siteName: "AriesXpert Canada",
    locale: "en_CA",
    type: "website",
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "AriesXpert Canada",
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
    "name": "AriesXpert Canada - In-Home & Virtual Physiotherapy",
    "image": "https://www.ariesxpert.ca/og-image.jpg",
    "@id": "https://www.ariesxpert.ca",
    "url": "https://www.ariesxpert.ca",
    "telephone": "+1-800-274-3722",
    "priceRange": "$$$",
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
      <ProvinceCarousel />
      <AiPrecisionRecovery />
      <FreeConsultationBlock />
      <Specialities />
      <DirectBillingInsuranceSection />
      <PricingPackagesSection />
      <GoogleReviewsCanada />
      <VettedExpertsCanada />
      <WhatWeTreatCanada />
      <BlogSectionCanada />
      <FaqSectionCanada />
    </>
  );
}
