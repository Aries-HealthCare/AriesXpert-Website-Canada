"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VERIFIED_EXPERTS } from "@/lib/verified-experts";
import { UserCheck, ShieldCheck, MapPin, Calendar, Globe, ChevronRight } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function ExpertsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialtiesList = [
    { id: "all", label: "All Specialties" },
    { id: "spine", label: "Spine & Back" },
    { id: "sports", label: "Sports & Knee" },
    { id: "post-op", label: "Post-Surgical Rehab" },
    { id: "neuro", label: "Neurological Care" },
  ];

  const filteredExperts = VERIFIED_EXPERTS.filter((exp) => {
    if (selectedSpecialty === "all") return true;
    if (selectedSpecialty === "spine") return exp.specialties.some(s => s.toLowerCase().includes("spine"));
    if (selectedSpecialty === "sports") return exp.specialties.some(s => s.toLowerCase().includes("sports") || s.toLowerCase().includes("knee"));
    if (selectedSpecialty === "post-op") return exp.specialties.some(s => s.toLowerCase().includes("post-surgical") || s.toLowerCase().includes("replacement"));
    if (selectedSpecialty === "neuro") return exp.specialties.some(s => s.toLowerCase().includes("neuro") || s.toLowerCase().includes("stroke"));
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <UserCheck className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Clinical Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          REGISTERED PHYSIOTHERAPISTS IN CANADA
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Every clinician on our team is a licensed Registered Physiotherapist (PT) with specialized training in orthopaedics, sports rehabilitation, neurological recovery, or post-surgical care.
        </p>
      </div>

      {/* Specialty Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {specialtiesList.map((spec) => (
          <button
            key={spec.id}
            onClick={() => setSelectedSpecialty(spec.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedSpecialty === spec.id
                ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow scale-105"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            {spec.label}
          </button>
        ))}
      </div>

      {/* Clinician Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredExperts.map((exp) => (
          <div
            key={exp.id}
            className="rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.02] shadow-glass"
          >
            <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
              <img
                src={exp.imageUrl}
                alt={exp.fullName}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-clinical-cyan font-bold">
                {exp.experienceYears}+ Years Exp
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-xl font-display font-bold text-white">{exp.fullName}</h3>
                <p className="text-xs font-mono text-clinical-cyan font-semibold">{exp.credentials}</p>
                <p className="text-[11px] text-slate-400">{exp.regulatoryCollege}</p>
              </div>

              <div className="space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-recovery-mint shrink-0" />
                  <span>{exp.citiesServed.join(", ")}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-clinical-teal shrink-0" />
                  <span>{exp.languagesSpoken.join(", ")}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <p className="text-[10px] font-mono uppercase text-slate-400 font-bold">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {exp.specialties.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <Link
                  href={`/experts/${exp.slug}`}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 text-center transition-colors"
                >
                  View Profile
                </Link>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="flex-1 py-2.5 rounded-xl bg-clinical-cyan hover:bg-clinical-teal text-slate-950 text-xs font-bold text-center transition-colors"
                >
                  Book Assessment
                </button>
              </div>
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
