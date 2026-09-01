"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Compass,
  Zap
} from "lucide-react";
import { CONDITIONS_LIBRARY } from "@/lib/canadian-data";
import { BodyRegion } from "@/lib/types";

export const WhatWeTreatCanada: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const regions: { id: string; label: string }[] = [
    { id: "all", label: "All Conditions" },
    { id: "spine", label: "Spine & Low Back" },
    { id: "knee", label: "Knee & ACL" },
    { id: "shoulder", label: "Shoulder & Rotator Cuff" },
    { id: "neck", label: "Neck & Whiplash" },
    { id: "hip", label: "Hip & Joint" },
    { id: "wrist", label: "Hand & Wrist" }
  ];

  const filteredConditions = selectedRegion === "all"
    ? CONDITIONS_LIBRARY
    : CONDITIONS_LIBRARY.filter(c => c.bodyRegion === selectedRegion);

  return (
    <section className="relative w-full bg-midnight-900/60 py-20 border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-clinical-cyan">
              Evidence-Informed Condition Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              What We Treat &amp; Rehabilitate
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            From acute sports tears to persistent chronic spinal degeneration, our clinical pathways combine hands-on therapy, 3D anatomical biomechanics, and active motor retraining.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {regions.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRegion(r.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedRegion === r.id
                  ? "bg-clinical-cyan text-slate-950 font-bold shadow-clinical-glow"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((cond) => (
            <Link
              key={cond.id}
              href={`/conditions/${cond.slug}`}
              className="group p-6 rounded-3xl bg-midnight-950/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-clinical-cyan uppercase tracking-wider">
                    {cond.bodyRegion}
                  </span>
                  <span className="text-xs text-slate-500 font-mono capitalize">
                    {cond.category.replace("-", " ")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-clinical-cyan transition-colors">
                  {cond.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                  {cond.shortDescription}
                </p>

                {/* Key Symptoms */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Hallmark Symptoms:</span>
                  <ul className="space-y-1">
                    {cond.symptoms.slice(0, 2).map((sym, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-recovery-mint" />
                        <span className="truncate">{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>View 3D Protocol</span>
                <ChevronRight className="w-4 h-4 text-clinical-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Conditions & 3D Anatomy CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/conditions"
            className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm font-semibold text-white transition-all shadow-glass text-center"
          >
            Explore Complete Condition Encyclopedia (140+ Topics)
          </Link>
          <Link
            href="/anatomy-lab"
            className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-clinical-glow hover:brightness-110 transition-all text-center flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Launch 3D Anatomy Lab</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhatWeTreatCanada;
