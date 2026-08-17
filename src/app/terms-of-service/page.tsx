import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | AriesXpert Canada",
  description: "Terms and conditions governing clinical services, tele-rehabilitation, and platform use across Canada."
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="space-y-3 pb-6 border-b border-slate-800">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 text-clinical-cyan border border-slate-800">
          Legal Agreement
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          TERMS OF CLINICAL SERVICE
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Last Updated: February 2026 • Aries HealthCare Canada Ltd.
        </p>
      </div>

      <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">01. Acceptance of Terms</h2>
          <p>
            By accessing the AriesXpert Canada website, booking a movement assessment, participating in virtual tele-rehabilitation, or receiving in-home physical therapy, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">02. Nature of Clinical Services & Surgical Distinction</h2>
          <p>
            AriesXpert provides physical therapy, manual mobilization, exercise rehabilitation, and educational biomechanical content. AriesXpert Registered Physiotherapists do not perform surgical procedures. All post-surgical recovery pathways ("From Surgery to Movement") are designed to support and rehabilitate patients following procedures performed by licensed orthopaedic surgeons.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">03. Emergency Care Disclaimer</h2>
          <p>
            The AriesXpert platform is not intended for acute emergency medical situations. If you experience chest pain, sudden numbness on one side of the body, loss of bowel/bladder control, or severe traumatic injury, please call 911 or visit your nearest Canadian hospital emergency department immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">04. Cancellation and Rescheduling Policy</h2>
          <p>
            We require a minimum of 24 hours notice for cancellation or rescheduling of clinic visits, in-home appointments, and virtual consultations. Late cancellations may incur a standard fee in accordance with provincial college guidelines.
          </p>
        </section>
      </div>
    </div>
  );
}
