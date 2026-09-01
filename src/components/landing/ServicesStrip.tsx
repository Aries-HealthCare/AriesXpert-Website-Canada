"use client";

import React from "react";
import Link from "next/link";
import { 
  Home, 
  Video, 
  Activity, 
  Car, 
  HardHat, 
  Zap, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface ServicesStripProps {
  onSelectService?: (serviceSlug: string) => void;
}

const CANADIAN_SERVICES = [
  {
    id: "in-home-physio",
    title: "In-Home Physiotherapy",
    tagline: "Hospital-grade therapy at your home",
    description: "Our licensed Canadian physiotherapists bring assessment tables, therapeutic modalities, and tailored exercises right to your living room.",
    icon: Home,
    badge: "Available in GTA, Vancouver, Calgary, Ottawa & Montreal",
    color: "from-clinical-cyan to-clinical-teal",
    accentColor: "text-clinical-cyan",
    href: "/home-physiotherapy",
    features: ["Zero travel fatigue", "Ergonomic home environment assessment", "Direct insurance billing"]
  },
  {
    id: "virtual-telehealth",
    title: "Virtual Tele-Rehab",
    tagline: "1-on-1 HD secure video physiotherapy",
    description: "Direct access to registered physiotherapists from anywhere in Canada. Complete clinical movement diagnosis and guided exercise correction.",
    icon: Video,
    badge: "Across All 10 Provinces & Territories",
    color: "from-recovery-mint to-clinical-teal",
    accentColor: "text-recovery-mint",
    href: "/virtual-physiotherapy",
    features: ["No waitlists", "PIPEDA / PHIPA encrypted", "Instant digital exercise prescription"]
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Care",
    tagline: "Total Knee, Hip, ACL & Spine Recovery",
    description: "Surgeon-aligned phased protocols starting immediately post-discharge to manage swelling, restore range of motion, and rebuild functional strength.",
    icon: Activity,
    badge: "Surgeon-Aligned Protocols",
    color: "from-purple-500 to-indigo-600",
    accentColor: "text-purple-400",
    href: "/surgery-and-rehabilitation",
    features: ["Scar mobilization", "Objective milestone tracking", "Gait & stairs restoration"]
  },
  {
    id: "mva-auto-claims",
    title: "MVA & Auto Claims",
    tagline: "Ontario OCF-18, BC ICBC & Alberta Section B",
    description: "Direct billing and complete rehabilitation for whiplash, soft-tissue trauma, and orthopedic injuries sustained in motor vehicle accidents.",
    icon: Car,
    badge: "$0 Out-of-Pocket Direct Billing",
    color: "from-amber-500 to-orange-600",
    accentColor: "text-amber-400",
    href: "/services/sports-rehabilitation",
    features: ["Direct insurer paperwork", "Whiplash specialized therapy", "No referral needed"]
  },
  {
    id: "wsib-workplace",
    title: "WSIB & WorkSafe",
    tagline: "Occupational Injury & Return-to-Work",
    description: "Authorized provider for Ontario WSIB, WorkSafeBC, and WCB Alberta. Structured ergonomic retraining and functional work capacity conditioning.",
    icon: HardHat,
    badge: "WSIB & WorkSafe Authorized",
    color: "from-blue-500 to-cyan-600",
    accentColor: "text-blue-400",
    href: "/services/physiotherapy",
    features: ["Job-specific conditioning", "Direct employer / board reporting", "Ergonomic analysis"]
  },
  {
    id: "sports-concussion",
    title: "Sports & Concussion",
    tagline: "CCMI Protocols & Athletic Mastery",
    description: "Advanced biomechanical assessments, return-to-sport testing, and evidence-informed concussion management for athletes and active Canadians.",
    icon: Zap,
    badge: "Evidence-Based Return-to-Play",
    color: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-400",
    href: "/movement-lab",
    features: ["Kinematic movement screen", "Force-velocity profiling", "Post-concussion rehab"]
  },
];

export const ServicesStrip: React.FC<ServicesStripProps> = () => {
  return (
    <section className="relative w-full bg-midnight-900/60 py-20 border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-clinical-cyan">
              Full Spectrum Clinical Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Hospital-Grade Physiotherapy Modalities
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            Delivering personalized, evidence-informed physical therapy tailored to Canadian lifestyle demands, weather conditions, and direct billing benefits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CANADIAN_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <Link
                key={srv.id}
                href={srv.href}
                className="group relative p-7 rounded-3xl bg-midnight-950/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />

                <div className="space-y-4">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${srv.accentColor}`} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-clinical-cyan transition-colors">
                      {srv.title}
                    </h3>
                    <p className={`text-xs font-medium ${srv.accentColor}`}>
                      {srv.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {srv.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-clinical-cyan" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-4 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white border-t border-slate-800/60">
                  <span>Explore Care Protocol</span>
                  <ChevronRight className="w-4 h-4 text-clinical-cyan group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesStrip;
