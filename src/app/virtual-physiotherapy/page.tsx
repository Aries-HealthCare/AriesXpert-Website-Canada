"use client";

import React, { useState } from "react";
import { Video, ShieldCheck, CheckCircle2, AlertCircle, Calendar, HelpCircle, ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function VirtualPhysiotherapyPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const suitabilityScenarios = [
    {
      id: "desk-strain",
      title: "Postural Neck & Back Strain from Desk Work",
      suitable: true,
      recommendation: "Highly Suitable for Virtual Tele-Rehab",
      details: "Ergonomic adjustments, motor control exercises, and active neck flexor retraining are exceptionally effective via video consultation."
    },
    {
      id: "acute-trauma",
      title: "Sudden Severe Joint Inability to Bear Weight",
      suitable: false,
      recommendation: "Requires In-Person Clinical Assessment",
      details: "Physical palpation, ligament stress testing (e.g. Lachman test), or diagnostic X-rays are recommended before virtual management."
    },
    {
      id: "sports-rehab",
      title: "Running Gait & Chronic Tendinopathy Progression",
      suitable: true,
      recommendation: "Highly Suitable for Virtual Tele-Rehab",
      details: "Video motion analysis of your squat, lunges, and loading progression can be reviewed in real-time."
    },
    {
      id: "post-op-late",
      title: "Post-Op Week 4+ Rehabilitation & Strength Checks",
      suitable: true,
      recommendation: "Highly Suitable for Virtual Tele-Rehab",
      details: "Once initial surgical wounds are stable, exercise progression and range of motion tracking can be seamlessly conducted virtually."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Video className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Canadian Telehealth Portal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          VIRTUAL PHYSIOTHERAPY IN CANADA
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Secure, PIPEDA-compliant video rehabilitation with Canadian Registered Physiotherapists. Connect from anywhere in Ontario, British Columbia, or Alberta.
        </p>

        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 mt-4"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Virtual Consultation</span>
        </button>
      </div>

      {/* Interactive Clinical Suitability Screener */}
      <div className="p-8 sm:p-12 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-8 shadow-glass">
        <div>
          <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
            Triage & Clinical Appropriateness
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            Is Virtual Care Right for Your Condition?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Click an example scenario to see if virtual telehealth or in-person evaluation is clinically recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {suitabilityScenarios.map((scen) => (
            <button
              key={scen.id}
              onClick={() => setSelectedScenario(scen.id)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedScenario === scen.id
                  ? "bg-slate-800/90 border-clinical-cyan text-white shadow-clinical-glow ring-1 ring-clinical-cyan"
                  : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded ${
                  scen.suitable ? "bg-recovery-mint/20 text-recovery-mint" : "bg-pain-amber/20 text-pain-amber"
                }`}>
                  {scen.recommendation}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">{scen.title}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{scen.details}</p>
            </button>
          ))}
        </div>
      </div>

      {/* What a Virtual Session Involves */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-3">
          <CheckCircle2 className="w-6 h-6 text-clinical-cyan" />
          <h3 className="text-lg font-bold text-white">Movement Screening</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Real-time postural and range of motion evaluation using visual cues and functional movement tests on camera.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-3">
          <CheckCircle2 className="w-6 h-6 text-clinical-cyan" />
          <h3 className="text-lg font-bold text-white">Guided Self-Mobilization</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Learn targeted active mobilizations, nerve gliding drills, and foam rolling techniques under live clinician supervision.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-3">
          <CheckCircle2 className="w-6 h-6 text-clinical-cyan" />
          <h3 className="text-lg font-bold text-white">Direct Insurance Billing</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Electronic billing to Sun Life, Manulife, Canada Life, Green Shield, and other major Canadian carriers.
          </p>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialCareMode="virtual"
      />
    </div>
  );
}
