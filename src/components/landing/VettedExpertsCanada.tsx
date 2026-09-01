"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Star,
  Clock,
  Sparkles
} from "lucide-react";
import { VERIFIED_EXPERTS } from "@/lib/verified-experts";

interface VettedExpertsCanadaProps {
  onBookExpert?: (expertSlug: string) => void;
}

export const VettedExpertsCanada: React.FC<VettedExpertsCanadaProps> = ({ onBookExpert }) => {
  return (
    <section className="relative w-full bg-midnight-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-clinical-cyan">
              Top 1% Canadian Clinical Talent
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Licensed &amp; Vetted Canadian Physiotherapists
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            Every clinician in our network is registered with their provincial college (CPO, CPTBC, Physiotherapy Alberta, OPPQ) and carries extensive post-graduate orthopedic certifications.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_EXPERTS.map((expert) => (
            <div
              key={expert.id}
              className="group p-6 rounded-3xl bg-midnight-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Photo & Badge */}
                <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src={expert.imageUrl}
                    alt={expert.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Experience Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-clinical-cyan backdrop-blur-md">
                    {expert.experienceYears}+ Years Exp.
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-bold text-amber-400 backdrop-blur-md">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Name & Credentials */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-clinical-cyan transition-colors">
                      {expert.fullName}
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-recovery-mint shrink-0" />
                  </div>
                  <p className="text-xs font-mono text-recovery-mint font-semibold">
                    {expert.credentials}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {expert.regulatoryCollege}
                  </p>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {expert.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Location & Languages */}
                <div className="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-clinical-cyan shrink-0" />
                    <span className="truncate">{expert.citiesServed.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{expert.languagesSpoken.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <Link
                  href={`/book-assessment?expert=${expert.slug}`}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase tracking-wider shadow-clinical-glow hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {expert.fullName.split(" ")[0]}</span>
                </Link>
                <Link
                  href={`/experts/${expert.slug}`}
                  className="w-full py-2 rounded-xl text-center text-xs font-semibold text-slate-400 hover:text-white transition-colors block"
                >
                  View Full Profile &amp; Research →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Experts CTA */}
        <div className="text-center pt-4">
          <Link
            href="/experts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-glass"
          >
            <span>Meet All 45+ Verified Canadian Physiotherapists</span>
            <ArrowRight className="w-4 h-4 text-clinical-cyan" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VettedExpertsCanada;
