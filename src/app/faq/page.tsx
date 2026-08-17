"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, CheckCircle2, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function FaqPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      category: "Appointments & Care Formats",
      question: "Do I need a doctor's referral to see a physiotherapist in Canada?",
      answer: "In Canada, registered physiotherapists are primary healthcare practitioners. You do not legally require a physician referral to book an assessment. However, some private extended health insurance policies may require a referral note for reimbursement purposes. We recommend checking your individual policy details."
    },
    {
      category: "Insurance & Direct Billing",
      question: "Which Canadian insurance providers do you direct bill?",
      answer: "We direct bill the vast majority of Canadian extended health plans, including Sun Life Financial, Manulife, Canada Life (Great-West Life), Green Shield Canada (GSC), Desjardins, Pacific Blue Cross, Alberta Blue Cross, Medavie Blue Cross, and ClaimSecure. For self-pay claims, we provide official itemized receipts with our clinician's College registration number for direct submission or tax deductions."
    },
    {
      category: "In-Home Physiotherapy",
      question: "How does in-home physiotherapy work and what equipment do I need?",
      answer: "You do not need to provide any specialized equipment. Our registered physiotherapist brings portable clinical modalities, examination equipment, resistance bands, and treatment supplies directly to your residence. You only need a comfortable space (such as a living room or bedroom) where you can sit, lie down, or move safely."
    },
    {
      category: "Virtual Tele-Rehabilitation",
      question: "Is virtual tele-physiotherapy as effective as in-person visits?",
      answer: "Clinical trials in orthopaedic and post-surgical rehabilitation demonstrate that virtual physical therapy produces comparable functional outcomes to in-person care for many conditions. Video consultations allow for high-precision movement analysis, real-time exercise correction, ergonomic workplace adjustments, and consistent progressive loading."
    },
    {
      category: "Post-Surgical Recovery",
      question: "When should I begin rehabilitation after a knee or hip replacement?",
      answer: "Early rehabilitation typically begins within 24 to 48 hours after leaving the hospital. Our in-home physical therapy service is specifically designed to bridge this crucial transition, focusing on passive knee extension (0° milestone), clot-prevention exercises, safe transfers, and early swelling control."
    },
    {
      category: "Clinical Safety",
      question: "What qualifications do AriesXpert physiotherapists hold?",
      answer: "Every treating physiotherapist is registered and in good standing with their provincial regulatory college (e.g. College of Physiotherapists of Ontario, College of Physical Therapists of BC, Physiotherapy Alberta). They hold accredited university degrees (BSc.PT, MSc.PT, or DPT) and carry full professional liability insurance."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <HelpCircle className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Patient Knowledge & FAQ</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Clear answers regarding Canadian physiotherapy regulations, direct billing, in-home care protocols, and virtual tele-rehabilitation.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className="rounded-2xl bg-midnight-900/80 border border-slate-800 overflow-hidden transition-colors shadow-glass"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-clinical-cyan font-bold tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-base sm:text-lg font-display font-bold text-white">
                    {item.question}
                  </h2>
                </div>
                <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-clinical-cyan" : ""}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-850">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action CTA */}
      <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Still have questions about your specific condition?</h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Our clinical coordinators are available to help match you with the ideal care format and registered therapist.
        </p>
        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs font-bold shadow-clinical-glow hover:brightness-110"
        >
          Book Movement Assessment
        </button>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
