"use client";

import React, { useState } from "react";
import { Activity, ShieldCheck, HeartHandshake, Sparkles, Globe, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Activity className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Our Purpose & Vision</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          WHY WE EXIST
        </h1>
        <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-light">
          Healthcare should empower you to truly understand your body—not simply react to pain when movement breaks down.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <div className="w-12 h-12 rounded-2xl bg-clinical-cyan/10 border border-clinical-cyan/30 text-clinical-cyan flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">01. What We Believe</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Movement is fundamental to human autonomy, cognitive clarity, and vitality. When you understand the biomechanical forces acting upon your spine, knee, or shoulder, fear is replaced with confidence.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <div className="w-12 h-12 rounded-2xl bg-recovery-mint/10 border border-recovery-mint/30 text-recovery-mint flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">02. How We Work</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We merge 3D anatomical visualization with compassionate, registered Canadian physiotherapy. Every rehabilitation plan is tailored to your unique anatomical goals, whether in our partner clinical suites, in your home, or via telehealth.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <div className="w-12 h-12 rounded-2xl bg-clinical-teal/10 border border-clinical-teal/30 text-clinical-teal flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">03. The Canadian Healthcare Context</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our clinicians are fully licensed under provincial regulatory bodies including the College of Physiotherapists of Ontario (CPO), CPTBC in British Columbia, and Physiotherapy Alberta, directly billing all major Canadian extended health plans.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <div className="w-12 h-12 rounded-2xl bg-aries-coral/10 border border-aries-coral/30 text-aries-coral flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">04. Our Future</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We are building a more intelligent, interconnected rehabilitation network where technology continuously supports your clinical recovery without ever replacing the irreplaceable value of hands-on human care.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-midnight-900 to-midnight-950 border border-slate-700 text-center space-y-6 shadow-2xl">
        <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
          Begin Your Movement Story with AriesXpert
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Our registered physiotherapists are ready to evaluate your movement and build your personalized path to recovery.
        </p>
        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Movement Assessment</span>
        </button>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
