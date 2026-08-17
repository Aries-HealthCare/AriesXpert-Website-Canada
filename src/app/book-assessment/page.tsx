"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BookingFlow } from "@/components/ui/BookingFlow";
import { Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BodyRegion, CareFormat } from "@/lib/types";

function BookingContent() {
  const searchParams = useSearchParams();
  const regionParam = (searchParams.get("region") as BodyRegion) || undefined;
  const modeParam = (searchParams.get("mode") as CareFormat) || undefined;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Calendar className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Direct Clinical Booking</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          BOOK YOUR MOVEMENT ASSESSMENT
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
          Match with a licensed Canadian Registered Physiotherapist for in-home, virtual, or clinical care with direct insurance billing.
        </p>
      </div>

      {/* Main Flow */}
      <div className="p-6 sm:p-10 rounded-3xl bg-midnight-900/90 border border-slate-800 shadow-glass">
        <BookingFlow
          initialRegion={regionParam}
          initialCareMode={modeParam}
          onSuccess={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>

      {/* Assurance details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400 text-center">
        <div className="p-4 rounded-xl bg-midnight-900/40 border border-slate-850">
          <CheckCircle2 className="w-4 h-4 text-recovery-mint mx-auto mb-1" />
          <span>Provincial College Licensed PTs</span>
        </div>
        <div className="p-4 rounded-xl bg-midnight-900/40 border border-slate-850">
          <ShieldCheck className="w-4 h-4 text-clinical-cyan mx-auto mb-1" />
          <span>Electronic Direct Billing</span>
        </div>
        <div className="p-4 rounded-xl bg-midnight-900/40 border border-slate-850">
          <CheckCircle2 className="w-4 h-4 text-clinical-teal mx-auto mb-1" />
          <span>PIPEDA & PHIPA Secure</span>
        </div>
      </div>
    </div>
  );
}

export default function BookAssessmentPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-400 font-mono">Loading Booking Engine...</div>}>
      <BookingContent />
    </Suspense>
  );
}
