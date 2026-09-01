"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Calculator, 
  BadgePercent, 
  CreditCard, 
  FileText, 
  ArrowRight,
  HelpCircle,
  Zap,
  Building2
} from "lucide-react";
import { CANADIAN_INSURANCE_PROVIDERS } from "@/lib/canadian-insurance";

export const DirectBillingInsuranceSection: React.FC = () => {
  const [selectedInsurer, setSelectedInsurer] = useState("sunlife");
  const [coveragePercent, setCoveragePercent] = useState(80);
  const [sessionCost] = useState(140); // CAD

  const calculatedCovered = Math.round((sessionCost * coveragePercent) / 100);
  const calculatedPatientPortion = sessionCost - calculatedCovered;

  return (
    <section className="relative w-full bg-midnight-900/80 py-20 border-y border-slate-800/80 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-recovery-mint/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-recovery-mint">
              Hassle-Free Direct Reimbursement
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Direct Billing to 25+ Canadian Insurers
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            We submit your claims directly to your extended health provider via TELUS Health eClaims & Provider Connect. In most cases, you pay <span className="text-white font-medium">$0 out-of-pocket</span> on the day of treatment.
          </p>
        </div>

        {/* Insurers Logo / Name Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CANADIAN_INSURANCE_PROVIDERS.map((ins) => (
            <button
              key={ins.code}
              type="button"
              onClick={() => setSelectedInsurer(ins.code)}
              className={`p-3.5 rounded-2xl text-center border transition-all ${
                selectedInsurer === ins.code
                  ? "bg-slate-800 border-clinical-cyan text-white shadow-lg shadow-clinical-cyan/10"
                  : "bg-midnight-950/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              <span className="text-xs font-bold block truncate">{ins.name.split(" ")[0]}</span>
              <span className="text-[10px] text-slate-500 block truncate">{ins.name.split(" ").slice(1).join(" ")}</span>
            </button>
          ))}
        </div>

        {/* Interactive Coverage Estimator & Step Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct Billing Estimator Card */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-midnight-950 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-clinical-cyan" />
                <h3 className="font-bold text-white text-base">Canadian Coverage Calculator</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Sample $140 In-Home Session</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Your Plan Typical Coverage:</span>
                  <span className="text-clinical-cyan font-bold font-mono">{coveragePercent}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={100}
                  step={5}
                  value={coveragePercent}
                  onChange={(e) => setCoveragePercent(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 accent-clinical-cyan cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>50%</span>
                  <span>80% (Most Common)</span>
                  <span>100% (Full Coverage)</span>
                </div>
              </div>

              {/* Calculated Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block mb-1">Direct Billed to Insurer</span>
                  <span className="text-xl font-bold text-recovery-mint font-mono">${calculatedCovered} CAD</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block mb-1">Estimated Co-Pay</span>
                  <span className="text-xl font-bold text-white font-mono">${calculatedPatientPortion} CAD</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-clinical-cyan shrink-0" />
                <span>
                  Official registered physiotherapy receipts issued with College License ID for instant tax and manual claims.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Direct Billing Process */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">How Direct Billing Works</h3>

            <div className="p-4 rounded-2xl bg-midnight-950/60 border border-slate-800 flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-clinical-cyan/10 border border-clinical-cyan/30 text-clinical-cyan font-bold font-mono text-xs flex items-center justify-center shrink-0">
                01
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Provide Policy & Member ID</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  During online booking or your initial intake, enter your insurance card details (e.g. Sun Life, Manulife, Canada Life).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-950/60 border border-slate-800 flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-clinical-teal/10 border border-clinical-teal/30 text-clinical-teal font-bold font-mono text-xs flex items-center justify-center shrink-0">
                02
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Electronic Claim Adjudication</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Following your treatment session, your therapist submits the digital claim via TELUS Health eClaims directly to your provider.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-950/60 border border-slate-800 flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-recovery-mint/10 border border-recovery-mint/30 text-recovery-mint font-bold font-mono text-xs flex items-center justify-center shrink-0">
                03
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Instant Payment & Zero Paperwork</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Your insurer pays us directly. If your plan has a co-pay deductible (e.g. 20%), you only pay the remaining balance.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DirectBillingInsuranceSection;
