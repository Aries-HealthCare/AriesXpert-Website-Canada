import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy (PIPEDA & PHIPA Compliance) | AriesXpert Canada",
  description: "Our commitment to protecting your personal health information under Canadian privacy laws including PIPEDA, PHIPA (Ontario), and PIPA (BC & Alberta)."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="space-y-3 pb-6 border-b border-slate-800">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 text-clinical-cyan border border-slate-800">
          Canadian Privacy Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          PRIVACY POLICY & HEALTH DATA GOVERNANCE
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Last Updated: February 2026 • Governed by Canadian Federal & Provincial Health Privacy Laws
        </p>
      </div>

      <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">01. Our Commitment to Patient Privacy</h2>
          <p>
            Aries HealthCare Canada Ltd. ("AriesXpert", "we", "us", or "our") is dedicated to protecting the confidentiality, security, and privacy of your Personal Information (PI) and Personal Health Information (PHI). We comply strictly with the federal <em>Personal Information Protection and Electronic Documents Act (PIPEDA)</em>, the Ontario <em>Personal Health Information Protection Act (PHIPA)</em>, the British Columbia <em>Personal Information Protection Act (PIPA)</em>, and the Alberta <em>Health Information Act (HIA)</em>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">02. Collection of Personal Health Information</h2>
          <p>
            We collect health information necessary to provide safe, evidence-informed physiotherapy care. This includes medical history, symptom reports, kinematic movement observations, surgeon referral notes, diagnostic imaging reports, and private health insurance policy numbers for direct billing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">03. Use and Disclosure of Health Data</h2>
          <p>
            Your health records are accessible only by your treating Registered Physiotherapist and authorized clinical coordinators. We never sell, rent, or commercialize patient health data under any circumstance. Information is shared only with:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Your primary care physician or orthopaedic surgeon upon your explicit written consent.</li>
            <li>Your designated private health insurer (e.g. Sun Life, Manulife) solely for claims adjudication.</li>
            <li>Provincial healthcare authorities where mandated by law.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">04. Data Storage and Canadian Residency</h2>
          <p>
            All electronic medical records (EMR), tele-rehabilitation video streams, and encrypted booking data are hosted on secure, SOC-2 compliant servers located geographically within Canada. Data in transit is secured with AES-256 TLS 1.3 encryption.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">05. Privacy Officer Contact</h2>
          <p>
            If you have questions regarding your medical records, wish to request an archive copy, or want to withdraw consent, contact our designated Canadian Privacy Officer at:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
            Email: privacy@ariesxpert.ca <br />
            Phone: 1 (800) 274-3778 <br />
            Attention: Chief Privacy Officer, Aries HealthCare Canada Ltd.
          </div>
        </section>
      </div>
    </div>
  );
}
