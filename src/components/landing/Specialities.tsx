"use client";

import React from "react";
import Link from "next/link";
import { 
  Activity, 
  Zap, 
  ShieldCheck, 
  Brain, 
  Heart, 
  UserCheck, 
  Compass, 
  ArrowRight,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/canadian-data";

export const Specialities: React.FC = () => {
  return (
    <section className="relative w-full bg-midnight-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-clinical-cyan">
              Clinical Excellence & Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Specialized Physical Therapy Disciplines
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            Every clinical specialty is led by Canadian Registered Physiotherapists with advanced postgraduate certifications (FCAMPT, Pelvic Health, Neuro-Bobath, CCMI Concussion).
          </p>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/services/${cat.slug}`}
              className="group p-7 rounded-3xl bg-midnight-900/60 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6 text-clinical-cyan" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                    {cat.careFormats.join(" · ")}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-clinical-cyan transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-medium text-recovery-mint">
                    {cat.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {cat.description}
                </p>

                {/* Target Conditions Preview */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.targetConditions.slice(0, 3).map((cond, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800/80 text-slate-400"
                    >
                      {cond}
                    </span>
                  ))}
                  {cat.targetConditions.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 text-slate-500">
                      +{cat.targetConditions.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>View Full Protocol</span>
                <ChevronRight className="w-4 h-4 text-clinical-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Footer CTA */}
        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-glass"
          >
            <span>Explore All Specialized Services</span>
            <ArrowRight className="w-4 h-4 text-clinical-cyan" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Specialities;
