"use client";

import React, { useState } from "react";
import { Home, CheckCircle2, ShieldCheck, Calendar, MapPin, Clock, ArrowRight, UserCheck } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";

export default function HomePhysiotherapyPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const homeSteps = [
    {
      step: "01",
      title: "Equipment & Clinical Preparation",
      desc: "Your registered physiotherapist prepares portable clinical modalities, assessment tools, and sanitized treatment gear."
    },
    {
      step: "02",
      title: "Arrival at Your Home",
      desc: "We arrive at your designated time window across the Greater Toronto Area, Metro Vancouver, or Calgary region."
    },
    {
      step: "03",
      title: "Comprehensive Movement Assessment",
      desc: "We evaluate your range of motion, muscle strength, joint mobility, and perform an environmental home fall-safety audit."
    },
    {
      step: "04",
      title: "Hands-On Treatment & Loading",
      desc: "Delivering joint mobilizations, soft-tissue release, and supervised progressive rehabilitation exercises in your living space."
    },
    {
      step: "05",
      title: "Digital Program & Direct Billing",
      desc: "We assign your HD video home exercise plan and directly bill your extended health insurance provider (Sun Life, Manulife, etc.)."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-recovery-mint">
          <Home className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Care Comes to You</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          IN-HOME PHYSIOTHERAPY ACROSS CANADA
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Experience hospital-grade registered physiotherapy without the physical strain or commuting friction. Ideal for post-surgical joint replacements, senior mobility, and busy professionals.
        </p>

        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-recovery-mint to-clinical-cyan text-slate-950 font-black text-sm uppercase tracking-wider shadow-recovery-glow hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 mt-4"
        >
          <Calendar className="w-4 h-4" />
          <span>Book In-Home Physiotherapy</span>
        </button>
      </div>

      {/* Step by Step Home Care Journey */}
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
            Clinical Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            How In-Home Physiotherapy Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {homeSteps.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-3 shadow-glass flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xl font-mono font-black text-recovery-mint">{step.step}</span>
                <h3 className="text-base font-display font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Canadian Metro Service Hubs */}
      <div className="p-8 sm:p-12 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-display font-bold text-white">In-Home Service Regions in Canada</h3>
            <p className="text-xs text-slate-300 mt-1">Mobile registered physiotherapist coverage zones.</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs text-recovery-mint font-mono font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Direct Billing Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CANADIAN_PROVINCES.map((p) => (
            <div key={p.code} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-base">{p.name}</h4>
                <span className="text-xs font-mono text-clinical-cyan">{p.code}</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {p.majorCities.map((c) => (
                  <li key={c.slug} className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-recovery-mint" />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialCareMode="in-home"
      />
    </div>
  );
}
