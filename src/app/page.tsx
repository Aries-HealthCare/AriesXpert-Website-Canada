"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Video, 
  Building2, 
  Clock, 
  Compass, 
  ChevronRight,
  Flame,
  Zap,
  Layers,
  PhoneCall,
  UserCheck
} from "lucide-react";
import { InteractiveBodyMap } from "@/components/3d/InteractiveBodyMap";
import { SpineViewer3D } from "@/components/3d/SpineViewer3D";
import { KneeViewer3D } from "@/components/3d/KneeViewer3D";
import { SurgeryTimeline3D } from "@/components/3d/SurgeryTimeline3D";
import { KinematicsMovement3D } from "@/components/3d/KinematicsMovement3D";
import { BookingModal } from "@/components/ui/BookingModal";
import { VERIFIED_EXPERTS } from "@/lib/verified-experts";
import { CONDITIONS_LIBRARY, SERVICE_CATEGORIES } from "@/lib/canadian-data";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { BodyRegion } from "@/lib/types";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRegionForBooking, setSelectedRegionForBooking] = useState<BodyRegion | "">("");

  const handleOpenBooking = (region?: BodyRegion) => {
    if (region) setSelectedRegionForBooking(region);
    setBookingModalOpen(true);
  };

  return (
    <div className="relative w-full space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* ========================================================================= */}
      {/* CHAPTER 01: THE BODY (HERO SECTION) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-6">
        {/* Ambient Bioluminescent Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-clinical-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-recovery-mint/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Chapter Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs font-mono text-slate-300 shadow-glass">
            <span className="w-2 h-2 rounded-full bg-clinical-cyan animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">Chapter 01</span>
            <span className="text-slate-500">|</span>
            <span>The Human Movement Journey</span>
          </div>

          {/* Main Cinematic Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.08]">
            MOVE WITHOUT <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">LIMITS.</span>
          </h1>

          {/* Supporting Medical Narrative */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Your body was engineered for fluid, resilient motion. When pain or injury disrupts your kinetic chain, we combine <strong className="text-white font-medium">3D anatomical intelligence</strong> with <strong className="text-white font-medium">registered physiotherapy</strong> to rebuild your strength from within.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm tracking-wide uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Movement Assessment</span>
            </button>

            <a
              href="#interactive-anatomy"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm backdrop-blur-xl transition-all hover:border-clinical-cyan flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-clinical-cyan" />
              <span>Explore Your 3D Body</span>
            </a>
          </div>

          {/* Canadian Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-recovery-mint" />
              <span>Registered Canadian PTs (CPO / CPTBC)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-clinical-cyan" />
              <span>Direct Billing to Sun Life, Manulife & More</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-clinical-teal" />
              <span>Clinic, In-Home & Virtual Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02 & 03: THE PAIN & UNDERSTAND (INTERACTIVE BODY MAP) */}
      {/* ========================================================================= */}
      <section id="interactive-anatomy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-pain-crimson">
            <Flame className="w-3.5 h-3.5" />
            <span className="uppercase font-bold">Chapter 02 & 03: The Pain & Understanding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Pain is a signal. <br />
            <span className="text-gradient-gold">Understanding it changes what you do next.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select any anatomical region below to rotate the 3D model, isolate joints, and discover evidence-informed rehabilitation protocols.
          </p>
        </div>

        <InteractiveBodyMap onOpenBookingWithRegion={handleOpenBooking} />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04: WHAT'S HAPPENING? (SIGNATURE 3D LABS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span className="uppercase font-bold">Chapter 04: What is Happening?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            See Beneath the Surface
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Interactive medical simulations demonstrating the biomechanical root causes of common spinal and joint pathologies.
          </p>
        </div>

        {/* 3D Spine Experience */}
        <SpineViewer3D />

        {/* 3D Knee Joint Experience */}
        <KneeViewer3D />

        {/* Kinematics Movement Lab */}
        <KinematicsMovement3D onOpenBooking={handleOpenBooking} />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 05 & 06: THE ASSESSMENT & INTERVENTION (CARE DELIVERED 3 WAYS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-recovery-mint">
            <Zap className="w-3.5 h-3.5" />
            <span className="uppercase font-bold">Chapter 05 & 06: The Assessment & Intervention</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Care Designed Around Your Life
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Receive hospital-grade physical therapy in the environment best suited to your recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Care Mode 1: In-Home Care */}
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-recovery-mint/50 transition-all flex flex-col justify-between space-y-6 shadow-glass group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-recovery-mint/10 border border-recovery-mint/30 text-recovery-mint flex items-center justify-center shadow-recovery-glow group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">In-Home Physiotherapy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our registered physiotherapists bring specialized portable clinical equipment directly to your residence. Eliminates commuting stress, ideal for post-op, senior mobility, and busy professionals across the GTA, Vancouver, and Calgary.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" /> 60-minute intensive home sessions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" /> Home environmental fall audits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" /> Direct billing to private insurance</li>
              </ul>
            </div>
            <Link
              href="/home-physiotherapy"
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Explore In-Home Care</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Care Mode 2: Virtual Telehealth */}
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-clinical-cyan/50 transition-all flex flex-col justify-between space-y-6 shadow-glass group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-clinical-cyan/10 border border-clinical-cyan/30 text-clinical-cyan flex items-center justify-center shadow-clinical-glow group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Virtual Tele-Rehab</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                PIPEDA-compliant secure HD video consultations with real-time movement screening, ergonomic coaching, guided self-mobilization, and interactive digital rehabilitation programs.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-cyan" /> Licensed across Ontario, BC & Alberta</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-cyan" /> Zero commute time required</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-cyan" /> HD video exercise prescription app</li>
              </ul>
            </div>
            <Link
              href="/virtual-physiotherapy"
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Explore Virtual Care</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Care Mode 3: Clinical Hubs */}
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-clinical-teal/50 transition-all flex flex-col justify-between space-y-6 shadow-glass group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-clinical-teal/10 border border-clinical-teal/30 text-clinical-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Clinical Partner Hubs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                For conditions requiring advanced clinic-based modalities like computerized spinal decompression, laser photobiomodulation, or specialized gym rehabilitation equipment.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" /> Advanced mechanical modalities</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" /> Dedicated private treatment suites</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" /> Multi-disciplinary rehabilitation</li>
              </ul>
            </div>
            <Link
              href="/locations"
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Find Clinical Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 07: SURGERY TO MOVEMENT (PHASED RECOVERY) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SurgeryTimeline3D onOpenBooking={handleOpenBooking} />
      </section>

      {/* ========================================================================= */}
      {/* OUR REGISTERED EXPERTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
              Clinical Credibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
              Meet Our Registered Physiotherapists
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-1">
              Licensed under Canadian provincial regulatory colleges with advanced certifications in manual therapy, sports injury, and neuro-rehabilitation.
            </p>
          </div>
          <Link
            href="/experts"
            className="text-xs font-bold text-clinical-cyan hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View Full Clinician Directory</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_EXPERTS.map((expert) => (
            <div
              key={expert.id}
              className="rounded-2xl bg-midnight-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.02] shadow-glass"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={expert.imageUrl}
                  alt={expert.fullName}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-clinical-cyan font-bold">
                  {expert.experienceYears}+ Years Exp
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-white">{expert.fullName}</h3>
                  <p className="text-xs font-mono text-clinical-cyan">{expert.credentials}</p>
                  <p className="text-[11px] text-slate-400">{expert.regulatoryCollege}</p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {expert.specialties.slice(0, 2).map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleOpenBooking()}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-clinical-cyan hover:text-slate-950 text-xs font-bold text-slate-200 transition-colors"
                  >
                    Book with {expert.fullName.split(" ")[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 08: RETURN TO LIFE & FINAL CTA */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-midnight-900 to-midnight-950 border border-slate-700/80 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-clinical-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-xs font-mono text-recovery-mint border border-slate-800">
            <CheckCircle2 className="w-4 h-4" />
            <span className="uppercase font-bold">Chapter 08: Return to Life</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            READY TO RECLAIM YOUR MOVEMENT?
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Move better. Feel stronger. Return to what you love with confidence. Your personalized Canadian rehabilitation journey starts with an evidence-based assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Assessment Now</span>
            </button>

            <a
              href="tel:+18002743778"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-clinical-cyan" />
              <span>Speak with Clinical Coordinator</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            Direct billing available to Sun Life, Manulife, Canada Life, Green Shield, Desjardins, and Blue Cross.
          </p>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRegion={selectedRegionForBooking}
      />
    </div>
  );
}
