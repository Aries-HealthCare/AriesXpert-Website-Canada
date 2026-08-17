"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { MapPin, CheckCircle2, ChevronRight, Home, Video, Building2, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function LocationsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <MapPin className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Canadian Care Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          FIND CARE NEAR YOU
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Select your province and metropolitan city to explore in-home mobile coverage zones, partner clinic hubs, and virtual tele-rehabilitation availability.
        </p>
      </div>

      {/* Provinces & Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CANADIAN_PROVINCES.map((prov) => (
          <div
            key={prov.code}
            className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h2 className="text-2xl font-display font-bold text-white">{prov.name}</h2>
                <span className="px-2.5 py-1 rounded bg-slate-950 text-xs font-mono text-clinical-cyan font-bold border border-slate-800">
                  {prov.code}
                </span>
              </div>

              <p className="text-xs font-mono text-slate-400">
                {prov.regulatoryCollegeName}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                  Metropolitan Service Hubs:
                </span>
                <div className="space-y-2">
                  {prov.majorCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${prov.slug}/${city.slug}`}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-clinical-cyan/60 transition-all flex items-center justify-between text-xs font-semibold text-slate-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-recovery-mint shrink-0" />
                        <span>{city.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-clinical-cyan group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-clinical-cyan hover:text-slate-950 text-xs font-bold text-slate-200 transition-colors"
              >
                Book Care in {prov.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
