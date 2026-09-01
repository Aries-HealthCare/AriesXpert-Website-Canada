"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Video, 
  Home, 
  Clock, 
  ArrowRight, 
  Star, 
  PhoneCall, 
  Zap,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  BadgePercent
} from "lucide-react";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";

interface HeroProps {
  onOpenBooking?: (province?: string, condition?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [careMode, setCareMode] = useState<"home" | "virtual">("home");
  const [selectedProvince, setSelectedProvince] = useState("ON");
  const [postalCode, setPostalCode] = useState("");
  const [condition, setCondition] = useState("");

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking(selectedProvince, condition);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-midnight-950 pt-6 pb-20 lg:pt-10 lg:pb-28">
      {/* Background Volumetric Ambient Lighting & Grid */}
      <div className="absolute inset-0 bg-spatial-grid pointer-events-none opacity-40 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clinical-cyan/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-recovery-mint/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Canadian Trust Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-recovery-mint animate-pulse" />
            <span className="font-semibold text-white">🍁 Canada&apos;s Modern Physiotherapy Network</span>
            <span className="text-slate-500">|</span>
            <span className="text-clinical-cyan">Direct Billing Accepted</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">4.9/5</span>
              <span>(1,850+ Canadian Patient Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-clinical-cyan" />
              <span>CPO &amp; CPTBC Registered PTs</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Headline & Quick Booking Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-clinical-cyan">
                Hospital-Grade Recovery · Delivered To Your Doorstep
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.08]">
                RECOVER FASTER. <br />
                <span className="bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint bg-clip-text text-transparent">
                  MOVE WITHOUT LIMITS.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Experience Canada&apos;s leading registered physiotherapy care. We bring licensed therapists, advanced 3D anatomical insights, and computerized recovery protocols directly to your home in 
              <span className="text-white font-medium"> Toronto, Vancouver, Calgary, Ottawa, Montreal</span>, and virtually across all provinces.
            </p>

            {/* Care Mode Selector Pills */}
            <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 w-fit backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setCareMode("home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  careMode === "home"
                    ? "bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 shadow-clinical-glow font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>In-Home Physiotherapy</span>
              </button>
              <button
                type="button"
                onClick={() => setCareMode("virtual")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  careMode === "virtual"
                    ? "bg-gradient-to-r from-recovery-mint to-clinical-teal text-slate-950 shadow-recovery-glow font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Virtual Tele-Rehab</span>
              </button>
            </div>

            {/* Highlight Badges Triad */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-clinical-cyan mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">0 Wait Time</span>
                </div>
                <p className="text-[11px] text-slate-400">Same-day &amp; next-day in-home appointments</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-recovery-mint mb-1">
                  <BadgePercent className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Direct Billing</span>
                </div>
                <p className="text-[11px] text-slate-400">Sun Life, Manulife, Canada Life &amp; 25+ more</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Direct Access</span>
                </div>
                <p className="text-[11px] text-slate-400">No doctor&apos;s referral required to start</p>
              </div>
            </div>

            {/* Quick Links / Explore Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/anatomy-lab"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-clinical-cyan transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-clinical-cyan" />
                <span>Explore 3D Anatomical Movement Lab →</span>
              </Link>
              <Link
                href="/surgery-and-rehabilitation"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-recovery-mint transition-colors"
              >
                <Activity className="w-3.5 h-3.5 text-recovery-mint" />
                <span>Post-Op Surgery Timelines →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Quick Booking & Availability Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-midnight-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {careMode === "home" ? "Book In-Home Physiotherapy" : "Book Virtual Tele-Rehab"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {careMode === "home" ? "Licensed Canadian PT travels to your home" : "1-on-1 HD secure video assessment"}
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Booking Form Fields */}
              <form onSubmit={handleQuickBook} className="space-y-4">
                
                {/* Province & City Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                    <span>Select Province</span>
                    <span className="text-[10px] text-clinical-cyan font-mono">Canada Wide</span>
                  </label>
                  <select
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none transition-all cursor-pointer"
                  >
                    {CANADIAN_PROVINCES.map((prov) => (
                      <option key={prov.code} value={prov.code} className="bg-slate-900 text-white">
                        {prov.name} ({prov.code})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Postal Code & Pain Region */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Postal Code</label>
                    <input
                      type="text"
                      placeholder="e.g. M5V 2T6"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                      maxLength={7}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none transition-all uppercase placeholder:normal-case placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Pain / Condition</label>
                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="" className="bg-slate-900">Select Condition...</option>
                      <option value="sciatica" className="bg-slate-900">Low Back &amp; Sciatica</option>
                      <option value="knee" className="bg-slate-900">Knee &amp; ACL Injury</option>
                      <option value="shoulder" className="bg-slate-900">Shoulder &amp; Rotator Cuff</option>
                      <option value="neck" className="bg-slate-900">Neck Pain &amp; Whiplash</option>
                      <option value="post-op" className="bg-slate-900">Post-Surgical Joint Care</option>
                      <option value="sports" className="bg-slate-900">Sports &amp; Running Injury</option>
                      <option value="stroke" className="bg-slate-900">Neuro &amp; Stroke Rehab</option>
                      <option value="other" className="bg-slate-900">Other Musculoskeletal Pain</option>
                    </select>
                  </div>
                </div>

                {/* Direct Billing Notice */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-clinical-cyan shrink-0" />
                  <span>
                    Direct billing available for Sun Life, Manulife, Canada Life, GSC, Blue Cross, Desjardins, WSIB &amp; MVA.
                  </span>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Check Availability &amp; Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Direct Telephone Helpline */}
                <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400">
                  <PhoneCall className="w-3.5 h-3.5 text-recovery-mint" />
                  <span>Prefer to speak with clinical triage? Call: </span>
                  <a href="tel:+18002743722" className="text-white font-bold hover:text-clinical-cyan transition-colors">
                    1-800-ARIES-CA
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
