'use client';

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, PhoneCall } from "lucide-react";
import SchemaMarkup from "./seo/SchemaMarkup";

interface Faq {
  id: string;
  question: string;
  answer: string;
}

const CANADIAN_DEFAULT_FAQS: Faq[] = [
  {
    id: "f1",
    question: "Do I need a doctor's referral to see a physiotherapist in Canada?",
    answer: "No. Physiotherapists in Canada are primary healthcare professionals with Direct Access. You do not legally require a physician referral to book an in-home or virtual assessment. However, a small number of private extended health insurance policies may request a referral for reimbursement."
  },
  {
    id: "f2",
    question: "How does direct billing to Sun Life, Manulife, and Canada Life work?",
    answer: "We submit your treatment claims electronically through TELUS Health eClaims, Provider Connect, and provincial Blue Cross portals on the day of your session. In most cases, your insurer pays us directly, and you only pay any remaining co-pay deductible (often $0)."
  },
  {
    id: "f3",
    question: "Is in-home physiotherapy covered under extended health benefits?",
    answer: "Yes. In-home physical therapy delivered by a licensed Canadian Registered Physiotherapist is billed under standard physical therapy billing codes. Your receipts contain our clinician's official College Registration Number (CPO, CPTBC, etc.) and are fully eligible for reimbursement."
  },
  {
    id: "f4",
    question: "Are your clinicians registered with Canadian provincial colleges?",
    answer: "100% yes. Every clinician in our network holds active registration with their respective provincial college—such as the College of Physiotherapists of Ontario (CPO), College of Physical Therapists of British Columbia (CPTBC), Physiotherapy Alberta College + Association, and the Ordre professionnel de la physiothérapie du Québec (OPPQ)."
  },
  {
    id: "f5",
    question: "How does Virtual Tele-Physiotherapy work across provinces?",
    answer: "You connect 1-on-1 with a registered physiotherapist over a secure, PIPEDA/PHIPA-compliant HD video platform. Your therapist performs specialized clinical movement screens, posture analysis, guided manual self-mobilizations, and prescribes interactive digital recovery exercises."
  },
  {
    id: "f6",
    question: "Can I receive physiotherapy for an auto accident (MVA) or workplace injury (WSIB)?",
    answer: "Yes. We are authorized to provide and directly bill for Motor Vehicle Accident claims in Ontario (OCF-18 / FSRA guidelines), British Columbia (ICBC Direct Billing), and Alberta (Section B). We are also registered with Ontario WSIB, WorkSafeBC, and WCB Alberta for workplace injury rehabilitation."
  }
];

interface LocalizedFaqSectionProps {
  className?: string;
  title?: string;
  description?: string;
  faqs?: Faq[];
}

export default function LocalizedFaqSection({
  className = "",
  title = "Frequently Asked Questions",
  description = "Learn more about how AriesXpert brings registered clinical physiotherapy to your doorstep across Canada.",
  faqs = CANADIAN_DEFAULT_FAQS
}: LocalizedFaqSectionProps) {
  const faqSchema = {
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

  return (
    <section className={`py-12 md:py-20 bg-secondary/30 relative overflow-hidden ${className}`}>
      <SchemaMarkup data={faqSchema} />
      
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <HelpCircle className="w-4 h-4" /> Canadian Patient Knowledge
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id || index}
              value={`item-${index}`}
              className="premium-card border border-border/40 px-6 py-1 rounded-2xl overflow-hidden"
            >
              <AccordionTrigger className="text-left font-headline font-bold text-base md:text-lg text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Direct Helpline */}
        <div className="p-6 rounded-3xl premium-card text-center space-y-3">
          <p className="text-xs sm:text-sm text-foreground">
            Have a specific question about your extended health policy or provincial coverage?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <a
              href="tel:+18002743722"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Toll-Free: 1-800-ARIES-CA</span>
            </a>
            <a
              href="mailto:care.canada@ariesxpert.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted transition-all"
            >
              <span>Email: care.canada@ariesxpert.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
