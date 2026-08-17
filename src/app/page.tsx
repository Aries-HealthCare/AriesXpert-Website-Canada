"use client";

import React, { useState, useEffect } from "react";
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
  UserCheck,
  RotateCw,
  Award,
  HeartHandshake
} from "lucide-react";
import { MasterCinematicCanvas } from "@/components/3d/MasterCinematicCanvas";
import { SpineViewer3D } from "@/components/3d/SpineViewer3D";
import { KneeViewer3D } from "@/components/3d/KneeViewer3D";
import { SurgeryTimeline3D } from "@/components/3d/SurgeryTimeline3D";
import { KinematicsMovement3D } from "@/components/3d/KinematicsMovement3D";
import { InteractiveCanadaMap } from "@/components/3d/InteractiveCanadaMap";
import { BookingModal } from "@/components/ui/BookingModal";
import { VERIFIED_EXPERTS } from "@/lib/verified-experts";
import { CONDITIONS_LIBRARY, SERVICE_CATEGORIES } from "@/lib/canadian-data";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { BodyRegion, AnatomicalLayer } from "@/lib/types";

export default function CinematicHomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | "">("spine");
  const [activeLayer, setActiveLayer] = useState<AnatomicalLayer>("skeletal");
  const [activeChapter, setActiveChapter] = useState(0);

  const handleOpenBooking = (region?: BodyRegion) => {
    if (region) setSelectedRegion(region);
    setBookingModalOpen(true);
  };

  return (
    <div className="relative w-full text-slate-100 bg-midnight-950 selection:bg-clinical-cyan/30 selection:text-white overflow-hidden space-y-28 sm:space-y-36 pb-32">
      
      {/* ========================================================================= */}
      {/* CHAPTER 00: INTRO & VOID SILHOUETTE */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-4">
        {/* Deep Volumetric Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-clinical-cyan/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-recovery-mint/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Chapter Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl text-xs font-mono text-slate-300 shadow-glass">
            <span className="w-2 h-2 rounded-full bg-clinical-cyan animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">Chapter 00</span>
            <span className="text-slate-500">|</span>
            <span>AriesXpert Canada</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight text-white leading-[1.04]">
            MOVE WITHOUT <br />
            <span className="text-gradient-cyan">LIMITS.</span>
          </h1>

          {/* Spatial Supporting Triad */}
          <div className="space-y-1.5 text-base sm:text-xl text-slate-300 font-light max-w-xl mx-auto">
            <p>Understand your body.</p>
            <p>Understand your movement.</p>
            <p className="text-white font-medium">Understand what is limiting you.</p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Movement Assessment</span>
            </button>

            <a
              href="#chapter-01-human-body"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm backdrop-blur-xl transition-all hover:border-clinical-cyan flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-clinical-cyan" />
              <span>Explore Your Body</span>
            </a>
          </div>

          {/* Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-recovery-mint" />
              <span>Registered Canadian PTs (CPO / CPTBC)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-clinical-cyan" />
              <span>Direct Billing: Sun Life, Manulife & More</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 01: FULL-SCREEN 3D HUMAN BODY (HERO ENVIRONMENT) */}
      {/* ========================================================================= */}
      <section id="chapter-01-human-body" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
              <Layers className="w-3.5 h-3.5" />
              <span className="uppercase font-bold">Chapter 01: The Human Body</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
              The Living Anatomical Environment
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            The human frame is an integrated kinetic system. Click and drag the 3D model to peel back anatomical layers and inspect deep joint structures.
          </p>
        </div>

        {/* Master 3D Canvas */}
        <div className="w-full h-[620px] rounded-3xl bg-midnight-950 border border-slate-800 overflow-hidden shadow-2xl">
          <MasterCinematicCanvas
            selectedRegion={selectedRegion}
            onSelectRegion={(reg) => setSelectedRegion(reg)}
            activeLayer={activeLayer}
            className="w-full h-full"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02: PAIN IS A SIGNAL */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pain-crimson/10 border border-pain-crimson/30 text-xs font-mono text-pain-crimson">
            <Flame className="w-4 h-4" />
            <span className="uppercase font-bold tracking-wider">Chapter 02: Pain</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight">
            PAIN IS A SIGNAL.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            When mechanical loading exceeds tissue tolerance, movement becomes guarded and restricted. Identifying the biomechanical origin transforms how we restore your mobility.
          </p>
        </div>

        {/* Pain Hotspots Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { id: "spine", title: "Spine / Lumbar", desc: "Disc herniation & radiating sciatica" },
            { id: "knee", title: "Knee Joint", desc: "ACL tears & patellofemoral osteoarthritis" },
            { id: "shoulder", title: "Shoulder", desc: "Rotator cuff impingement & instability" },
            { id: "neck", title: "Cervical Neck", desc: "Postural strain & cervicogenic headaches" },
            { id: "hip", title: "Hip / Pelvis", desc: "Labral irritation & gluteal tendinopathy" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedRegion(item.id as BodyRegion)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedRegion === item.id
                  ? "bg-slate-800/90 border-pain-crimson text-white shadow-pain-glow ring-1 ring-pain-crimson"
                  : "bg-midnight-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-pain-crimson block mb-3 animate-pulse" />
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 03: ANATOMY LAB */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase font-bold">Chapter 03: Anatomy Lab</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
              Digital Medical Museum
            </h2>
          </div>
          <Link
            href="/anatomy-lab"
            className="text-xs font-bold text-clinical-cyan hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Enter Full Anatomy Lab Portal</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 140+ Conditions Quick Telemetry Explorer */}
        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-white">Anatomical Condition Directory</h3>
              <p className="text-xs text-slate-300 mt-1">140+ evidence-informed Canadian physical therapy protocols.</p>
            </div>
            <Link
              href="/conditions"
              className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-clinical-cyan hover:bg-slate-700 transition-colors"
            >
              Browse All 140+ Conditions →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONDITIONS_LIBRARY.slice(0, 4).map((cond) => (
              <Link
                key={cond.id}
                href={`/conditions/${cond.slug}`}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-clinical-cyan/60 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-clinical-cyan uppercase font-bold">{cond.category}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-clinical-cyan transition-colors">{cond.name}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{cond.shortDescription}</p>
                </div>
                <span className="text-xs font-semibold text-clinical-cyan flex items-center gap-1">
                  View 3D Protocol <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 04 & 05: SIGNATURE 3D SPINE & KNEE LABS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Spine Lab */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span className="uppercase font-bold">Chapter 04: Spine Lab</span>
          </div>
          <SpineViewer3D />
        </div>

        {/* Knee Lab */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-recovery-mint">
            <Activity className="w-3.5 h-3.5" />
            <span className="uppercase font-bold">Chapter 05: Knee Lab</span>
          </div>
          <KneeViewer3D />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 06: BIOMECHANICS & KINEMATICS LAB */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-teal">
          <Compass className="w-3.5 h-3.5" />
          <span className="uppercase font-bold">Chapter 06: Biomechanics Lab</span>
        </div>
        <KinematicsMovement3D onOpenBooking={handleOpenBooking} />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 07: CARE DELIVERED 3 WAYS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-recovery-mint">
            <HeartHandshake className="w-4 h-4" />
            <span className="uppercase font-bold tracking-wider">Chapter 07: Human Care</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            From 3D Anatomy to Hands-On Recovery
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Registered physiotherapy delivered in the environment where you heal best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Care Mode 1: In-Home */}
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-recovery-mint/50 transition-all flex flex-col justify-between space-y-6 shadow-glass group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-recovery-mint/10 border border-recovery-mint/30 text-recovery-mint flex items-center justify-center group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">In-Home Physiotherapy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hospital-grade physical rehabilitation delivered directly in your residence across the GTA, Vancouver, and Calgary. No commuting strain.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" /> 60-min intensive sessions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" /> Direct private insurance billing</li>
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
              <div className="w-12 h-12 rounded-2xl bg-clinical-cyan/10 border border-clinical-cyan/30 text-clinical-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Virtual Tele-Rehab</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                PIPEDA-compliant secure HD video consultations with real-time range-of-motion analysis, guided self-mobilization, and digital exercise apps.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-cyan" /> Zero commute required</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-cyan" /> Licensed in ON, BC & Alberta</li>
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
              <h3 className="text-2xl font-display font-bold text-white">Partner Clinical Hubs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized facilities for computerized spinal decompression, laser photobiomodulation, and dedicated gym rehabilitation suites.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" /> Advanced mechanical modalities</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-clinical-teal" /> Private treatment suites</li>
              </ul>
            </div>
            <Link
              href="/locations"
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Find Clinical Hubs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 08: SURGERY TO MOVEMENT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-aries-coral">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="uppercase font-bold">Chapter 08: Surgery to Movement</span>
        </div>
        <SurgeryTimeline3D onOpenBooking={handleOpenBooking} />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 09: CLINICIANS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
              <UserCheck className="w-3.5 h-3.5" />
              <span className="uppercase font-bold">Chapter 09: Clinicians</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-2">
              Registered Canadian Physiotherapists
            </h2>
          </div>
          <Link
            href="/experts"
            className="text-xs font-bold text-clinical-cyan hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View Full Clinician Roster</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_EXPERTS.map((expert) => (
            <div
              key={expert.id}
              className="rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.02] shadow-glass"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={expert.imageUrl}
                  alt={expert.fullName}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-clinical-cyan font-bold">
                  {expert.experienceYears}+ Years
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-white">{expert.fullName}</h3>
                  <p className="text-xs font-mono text-clinical-cyan">{expert.credentials}</p>
                  <p className="text-[11px] text-slate-400">{expert.regulatoryCollege}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800/80">
                  <p className="text-[10px] font-mono uppercase text-slate-400 font-bold">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {expert.specialties.slice(0, 2).map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenBooking()}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-clinical-cyan hover:text-slate-950 text-xs font-bold text-slate-200 transition-colors"
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
      {/* CHAPTER 10: LOCATIONS MAP */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Building2 className="w-3.5 h-3.5" />
          <span className="uppercase font-bold">Chapter 10: Locations</span>
        </div>
        <InteractiveCanadaMap onOpenBooking={handleOpenBooking} />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 11: RETURN TO LIFE (EMOTIONAL CULMINATION & CTA) */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-midnight-900 to-midnight-950 border border-slate-700/80 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-clinical-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-xs font-mono text-recovery-mint border border-slate-800">
            <CheckCircle2 className="w-4 h-4" />
            <span className="uppercase font-bold">Chapter 11: Return to Life</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-tight">
            READY TO RECLAIM YOUR MOVEMENT?
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Move better. Feel stronger. Return to what you love with confidence. Your personalized Canadian rehabilitation journey starts with an evidence-based assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Movement Assessment</span>
            </button>

            <a
              href="tel:+18002743778"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
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
        initialRegion={selectedRegion}
      />
    </div>
  );
}
