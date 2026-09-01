"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const CANADIAN_FAQS: FaqItem[] = [
  {
    q: "Do I need a doctor's referral to see a physiotherapist in Canada?",
    a: "No. Physiotherapists in Canada are primary health care professionals with Direct Access. You do not need a medical doctor's referral to book an in-home or virtual assessment. However, a small number of private extended health insurance policies may request a referral for benefits reimbursement.",
    category: "Direct Access & Regulations"
  },
  {
    q: "How does direct billing to Sun Life, Manulife, and Canada Life work?",
    a: "We submit your treatment claims electronically through TELUS Health eClaims, Provider Connect, and provincial Blue Cross portals on the day of your session. In most cases, your insurer pays us directly, and you only pay any remaining co-pay deductible (often $0).",
    category: "Insurance & Direct Billing"
  },
  {
    q: "Is in-home physiotherapy covered under extended health benefits?",
    a: "Yes. In-home physical therapy delivered by a licensed Canadian Registered Physiotherapist is billed under standard physical therapy billing codes. Your receipts contain our therapist's official College Registration Number (CPO, CPTBC, etc.) and are fully eligible for reimbursement.",
    category: "Insurance & Direct Billing"
  },
  {
    q: "Are your clinicians registered with Canadian provincial colleges?",
    a: "100% yes. Every clinician in our network holds active registration with their respective provincial college—such as the College of Physiotherapists of Ontario (CPO), College of Physical Therapists of British Columbia (CPTBC), Physiotherapy Alberta College + Association, and the Ordre professionnel de la physiothérapie du Québec (OPPQ).",
    category: "Clinical Standards"
  },
  {
    q: "How does Virtual Tele-Physiotherapy work across provinces?",
    a: "You connect 1-on-1 with a registered physiotherapist over a secure, PIPEDA/PHIPA-compliant HD video platform. Your therapist performs specialized clinical movement screens, posture analysis, guided manual self-mobilizations, and prescribes interactive digital recovery exercises.",
    category: "Care Formats"
  },
  {
    q: "Can I receive physiotherapy for an auto accident (MVA) or workplace injury (WSIB)?",
    a: "Yes. We are authorized to provide and directly bill for Motor Vehicle Accident claims in Ontario (OCF-18 / FSRA guidelines), British Columbia (ICBC Direct Billing), and Alberta (Section B). We are also registered with Ontario WSIB, WorkSafeBC, and WCB Alberta for workplace injury rehabilitation.",
    category: "MVA & Workplace Injury"
  },
  {
    q: "What equipment does the in-home physiotherapist bring?",
    a: "Your visiting therapist brings all necessary hospital-grade clinical tools—including portable assessment tables (if needed), therapeutic ultrasound/TENS modalities, goniometric ROM diagnostic tools, resistance bands, dry needling supplies, and balance equipment.",
    category: "In-Home Experience"
  },
  {
    q: "How quickly can an in-home physiotherapist arrive at my home?",
    a: "We offer same-day and next-day in-home appointments across the Greater Toronto Area (GTA), Metro Vancouver, Calgary, Ottawa, and Montreal. Average therapist transit arrival is under 60 minutes from confirmed booking.",
    category: "In-Home Experience"
  }
];

export const FaqSectionCanada: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-midnight-900/60 py-20 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-clinical-cyan">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Canadian Healthcare &amp; Insurance Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Canadian direct billing, provincial college regulations, in-home treatment logistics, and coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {CANADIAN_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-midnight-950 border-slate-700 shadow-xl"
                    : "bg-midnight-950/60 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[10px] font-mono text-clinical-cyan uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white block">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-slate-800 border-clinical-cyan" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-300" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-800/80">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Footer */}
        <div className="p-6 rounded-3xl bg-midnight-950 border border-slate-800 text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a specific question about your extended health policy or provincial coverage?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="tel:+18002743722"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-clinical-cyan" />
              <span>Call 1-800-ARIES-CA</span>
            </a>
            <a
              href="mailto:care.canada@ariesxpert.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all"
            >
              <span>Email: care.canada@ariesxpert.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSectionCanada;
