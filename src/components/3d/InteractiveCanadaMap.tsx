"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { MapPin, CheckCircle2, ShieldCheck, ChevronRight, Home, Video, Building2 } from "lucide-react";

interface InteractiveCanadaMapProps {
  onSelectCity?: (provinceSlug: string, citySlug: string) => void;
  onOpenBooking?: () => void;
}

export const InteractiveCanadaMap: React.FC<InteractiveCanadaMapProps> = ({
  onSelectCity,
  onOpenBooking,
}) => {
  const [selectedProvinceCode, setSelectedProvinceCode] = useState("ON");
  const selectedProvince = CANADIAN_PROVINCES.find((p) => p.code === selectedProvinceCode) || CANADIAN_PROVINCES[0];

  return (
    <div className="w-full rounded-3xl bg-midnight-900/90 border border-slate-800 p-6 lg:p-10 space-y-8 shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
            Canadian Care Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
            Registered Physiotherapy Across Canada
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-relaxed">
            Select a province to explore licensed college affiliations, metropolitan in-home mobile territories, and direct billing insurance partners.
          </p>
        </div>

        {/* Province Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {CANADIAN_PROVINCES.map((prov) => (
            <button
              key={prov.code}
              onClick={() => setSelectedProvinceCode(prov.code)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedProvinceCode === prov.code
                  ? "bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 shadow-clinical-glow scale-105"
                  : "bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              <span className="font-mono font-black">{prov.code}</span>
              <span>{prov.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Province Visual & Metropolitan Hubs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Regulatory & Delivery Credentials */}
        <div className="lg:col-span-5 space-y-6 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-recovery-mint font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Provincial Regulatory Authority</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              {selectedProvince.regulatoryCollegeName}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              {selectedProvince.telehealthCoverageRegulations}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Supported Care Formats:</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Home className="w-4 h-4 text-recovery-mint shrink-0" />
                <span>Mobile In-Home Clinical Physiotherapy Visits</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Video className="w-4 h-4 text-clinical-cyan shrink-0" />
                <span>PIPEDA-Compliant Virtual Tele-Rehabilitation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-clinical-teal shrink-0" />
                <span>Partner Physical Rehabilitation Centers</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Assessment in {selectedProvince.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/book-assessment"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Assessment in {selectedProvince.name}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Right Column: Major Cities and Coverage Hubs */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-clinical-cyan font-bold flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Metropolitan Service Territories
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedProvince.majorCities.map((city) => (
              <div
                key={city.slug}
                className="p-5 rounded-2xl bg-midnight-950/90 border border-slate-800 hover:border-clinical-cyan/60 transition-all flex flex-col justify-between space-y-3 shadow-glass"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-display font-bold text-white">{city.name}</h4>
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800">
                      {city.postalCodePrefixes.slice(0, 3).join(", ")}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {city.subhead}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                      Neighbourhoods Served:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {city.keyServiceHubs.slice(0, 3).map((hub) => (
                        <span key={hub} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800">
                          {hub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-850 flex items-center justify-between">
                  <Link
                    href={`/locations/${selectedProvince.slug}/${city.slug}`}
                    className="text-xs font-bold text-clinical-cyan hover:underline flex items-center gap-1"
                  >
                    <span>City Landing Page</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking ? onOpenBooking() : null}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-clinical-cyan hover:text-slate-950 text-xs font-bold text-slate-200 transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
