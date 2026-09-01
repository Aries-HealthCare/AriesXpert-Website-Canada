"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Sparkles,
  Building2,
  Car
} from "lucide-react";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { CanadianCity } from "@/lib/types";

export const ProvinceCarousel: React.FC = () => {
  const [activeProvIndex, setActiveProvIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const activeProvince = CANADIAN_PROVINCES[activeProvIndex] || CANADIAN_PROVINCES[0];

  const filteredCities = activeProvince.majorCities.filter((c: CanadianCity) => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.postalCodePrefixes.some((fsa: string) => fsa.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="relative w-full bg-midnight-950 py-20 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-clinical-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-clinical-cyan">
              Nationwide Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              In-Home &amp; Virtual Physiotherapy Across Canada
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search City or FSA (e.g. M5V, V6B)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:border-clinical-cyan focus:outline-none transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Province Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {CANADIAN_PROVINCES.map((prov, idx) => (
            <button
              key={prov.code}
              type="button"
              onClick={() => {
                setActiveProvIndex(idx);
                setSearchQuery("");
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeProvIndex === idx
                  ? "bg-slate-800 border-clinical-cyan/60 text-white shadow-lg shadow-clinical-cyan/10"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              <span>{prov.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-clinical-cyan border border-slate-800">
                {prov.code}
              </span>
            </button>
          ))}
        </div>

        {/* Province Meta & College Banner */}
        <div className="p-6 rounded-3xl bg-midnight-900/80 border border-slate-800/80 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{activeProvince.name}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                {activeProvince.regulatoryCollegeName}
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Regulatory Standards: <span className="text-white font-medium">{activeProvince.telehealthCoverageRegulations}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-clinical-cyan" />
              <span>Avg In-Home Arrival: &lt; 60 mins</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-recovery-mint" />
              <span>Direct Insurance Billing</span>
            </div>
          </div>
        </div>

        {/* Major Cities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCities.map((city: CanadianCity) => (
            <Link
              key={city.slug}
              href={`/locations/${activeProvince.slug}/${city.slug}`}
              className="group p-5 rounded-2xl bg-midnight-900/60 border border-slate-800 hover:border-clinical-cyan/50 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-base group-hover:text-clinical-cyan transition-colors">
                    {city.name}
                  </span>
                  <MapPin className="w-4 h-4 text-slate-500 group-hover:text-clinical-cyan transition-colors" />
                </div>

                <div className="flex flex-wrap gap-1">
                  {city.postalCodePrefixes.slice(0, 4).map((fsa: string) => (
                    <span key={fsa} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400">
                      {fsa}
                    </span>
                  ))}
                  {city.postalCodePrefixes.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 text-slate-500">
                      +{city.postalCodePrefixes.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                <span className="flex items-center gap-1 text-[11px] text-recovery-mint">
                  <Car className="w-3 h-3" />
                  <span>In-Home &amp; Virtual</span>
                </span>
                <span className="flex items-center gap-1 font-semibold group-hover:text-clinical-cyan">
                  <span>View City Hub</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Locations Footer */}
        <div className="text-center pt-4">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-glass"
          >
            <span>Explore All 100+ Canadian Coverage Hubs</span>
            <ArrowRight className="w-4 h-4 text-clinical-cyan" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProvinceCarousel;
