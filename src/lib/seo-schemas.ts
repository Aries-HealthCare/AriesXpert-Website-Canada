/**
 * JSON-LD Schema Generators for AriesXpert Canada
 */

export function generateMedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "AriesXpert Canada",
    "legalName": "Aries HealthCare Canada Ltd.",
    "url": "https://ariesxpert.ca",
    "logo": "https://ariesxpert.ca/brand/aries-emblem.png",
    "description": "Immersive 3D Physiotherapy, In-Home Rehabilitation, and Virtual Movement Health in Canada.",
    "medicalSpecialty": [
      "Physiotherapy",
      "Orthopaedic Rehabilitation",
      "Sports Physical Therapy",
      "Neurological Rehabilitation",
      "Geriatric Physiotherapy"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "ON",
      "addressLocality": "Toronto"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-ARIES-PT",
        "contactType": "Customer & Clinical Care Booking",
        "areaServed": "CA",
        "availableLanguage": ["English", "French"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/aries-healthcare",
      "https://www.instagram.com/ariesxpert.ca"
    ]
  };
}

export function generateConditionSchema(condition: {
  name: string;
  shortDescription: string;
  symptoms: string[];
  evidenceBasedTreatments: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.name,
    "description": condition.shortDescription,
    "signOrSymptom": condition.symptoms.map(s => ({
      "@type": "MedicalSymptom",
      "name": s
    })),
    "possibleTreatment": condition.evidenceBasedTreatments.map(t => ({
      "@type": "MedicalTherapy",
      "name": t
    }))
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
