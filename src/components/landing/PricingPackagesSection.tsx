"use client";

import React from "react";
import Link from "next/link";
import { 
  Check, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Video, 
  Home, 
  Zap, 
  Sparkles,
  ArrowRight,
  Car
} from "lucide-react";

interface PricingPackagesSectionProps {
  onSelectPlan?: (planName: string) => void;
}

const CANADIAN_PRICING_PLANS = [
  {
    id: "in-home-initial",
    name: "Initial In-Home Assessment & Treatment",
    tagline: "Comprehensive 60-Minute Diagnostic & First Treatment",
    priceCAD: 150,
    unit: "per assessment",
    highlight: false,
    badge: "Most Popular for New Patients",
    features: [
      "Full orthopedic & neurological clinical assessment",
      "Objective range of motion (ROM) & strength testing",
      "First hands-on manual therapy & pain-relief treatment",
      "Ergonomic home & workstation risk review",
      "Personalized digital exercise recovery program",
      "Official medical receipt with PT College License ID",
      "Direct billing to Sun Life, Manulife, Canada Life & 25+ more"
    ],
    ctaText: "Book In-Home Assessment",
    href: "/book-assessment"
  },
  {
    id: "in-home-followup",
    name: "In-Home Follow-Up Rehabilitation",
    tagline: "45–60 Minute 1-on-1 Progressive Treatment",
    priceCAD: 125,
    unit: "per session",
    highlight: true,
    badge: "Recommended Recovery Path",
    features: [
      "1-on-1 hands-on manual joint mobilizations",
      "Soft-tissue release & trigger point therapy",
      "Supervised progressive resistance exercise loading",
      "Gait & balance rehabilitation training",
      "Pain modulation & modality application",
      "Milestone progression updates to referring physician",
      "Direct billing supported"
    ],
    ctaText: "Schedule Follow-Up Care",
    href: "/book-assessment"
  },
  {
    id: "virtual-telehealth",
    name: "Virtual Tele-Physiotherapy",
    tagline: "45-Minute Secure HD Video Consultation",
    priceCAD: 95,
    unit: "per session",
    highlight: false,
    badge: "All 10 Provinces & Territories",
    features: [
      "High-definition encrypted video assessment",
      "Computer vision movement screen & posture analysis",
      "Live guided exercise correction & cueing",
      "Self-mobilization & pain management education",
      "Zero travel or commute time",
      "Official receipt for private insurance reimbursement",
      "Flexible evening & weekend slots"
    ],
    ctaText: "Book Virtual Tele-Rehab",
    href: "/virtual-physiotherapy"
  },
  {
    id: "mva-wsib",
    name: "MVA & WSIB Direct Coverage",
    tagline: "Motor Vehicle Accident (ICBC / OCF-18) & Workplace Claims",
    priceCAD: 0,
    customPrice: "$0 Out-of-Pocket",
    unit: "with approved claim",
    highlight: false,
    badge: "Direct Board & Insurer Billing",
    features: [
      "Authorized provider for WSIB, WorkSafeBC & WCB Alberta",
      "MVA claims direct billing (Ontario OCF-18, BC ICBC, Alberta Section B)",
      "We handle all paperwork and claim submissions",
      "Comprehensive treatment for whiplash, fractures & soft tissue trauma",
      "Structured functional return-to-work program",
      "Zero out-of-pocket payment required for approved claims"
    ],
    ctaText: "Start MVA / WSIB Claim",
    href: "/services/sports-rehabilitation"
  }
];

export const PricingPackagesSection: React.FC<PricingPackagesSectionProps> = ({ onSelectPlan }) => {
  return (
    <section className="relative w-full bg-midnight-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-clinical-cyan">
            <ShieldCheck className="w-3.5 h-3.5 text-recovery-mint" />
            <span>Transparent Canadian Healthcare Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Clear, Standardized Rates. <br />
            <span className="bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint bg-clip-text text-transparent">
              Direct Billing for Zero Surprises.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            All services are provided by licensed Canadian Registered Physiotherapists. Most extended health plans cover 80% to 100% of costs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANADIAN_PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-7 rounded-3xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                plan.highlight
                  ? "bg-gradient-to-b from-midnight-900 to-slate-900/95 border-2 border-clinical-cyan/60 shadow-2xl shadow-clinical-cyan/10 hover:-translate-y-1"
                  : "bg-midnight-900/60 border border-slate-800 hover:border-slate-700 hover:-translate-y-1"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-clinical-glow">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white leading-snug">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-y border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    {plan.customPrice ? (
                      <span className="text-2xl font-black text-recovery-mint font-mono">{plan.customPrice}</span>
                    ) : (
                      <>
                        <span className="text-3xl font-black text-white font-mono">${plan.priceCAD}</span>
                        <span className="text-xs text-slate-400 font-mono">CAD</span>
                      </>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono block mt-0.5">{plan.unit}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-clinical-cyan shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/60">
                <Link
                  href={plan.href}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 shadow-clinical-glow hover:brightness-110 active:scale-98"
                      : "bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white active:scale-98"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{plan.ctaText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Note Footer */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          💡 <span className="text-white font-medium">Physiotherapy Direct Access Rule:</span> Under Canadian provincial regulations, you do not need a doctor&apos;s referral to see a physiotherapist. However, some private insurance policies may request one for reimbursement.
        </div>

      </div>
    </section>
  );
};

export default PricingPackagesSection;
