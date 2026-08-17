"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getExpertBySlug } from "@/lib/verified-experts";
import { BookingModal } from "@/components/ui/BookingModal";
import { UserCheck, ShieldCheck, MapPin, Calendar, Globe, Award, HeartHandshake } from "lucide-react";

interface ExpertPageProps {
  params: Promise<{
    expertSlug: string;
  }>;
}

export default function ExpertDetailPage({ params }: ExpertPageProps) {
  const { expertSlug } = use(params);
  const expert = getExpertBySlug(expertSlug);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!expert) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link href="/experts" className="hover:text-clinical-cyan transition-colors">Our Experts</Link>
        <span>/</span>
        <span className="text-clinical-cyan font-bold">{expert.fullName}</span>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo & Credentials */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-midnight-900/80 border border-slate-800 p-6 space-y-6 shadow-glass text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto border-2 border-clinical-cyan/40 shadow-clinical-glow bg-slate-950">
              <img
                src={expert.imageUrl}
                alt={expert.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-display font-bold text-white">{expert.fullName}</h1>
              <p className="text-xs font-mono text-clinical-cyan font-semibold">{expert.credentials}</p>
              <p className="text-xs text-slate-400">{expert.regulatoryCollege}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300 text-left">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Experience:</span>
                <span className="font-semibold text-white">{expert.experienceYears} Years</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Languages:</span>
                <span className="font-semibold text-white">{expert.languagesSpoken.join(", ")}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Jurisdictions:</span>
                <span className="font-semibold text-white">{expert.provincesPracticing.join(", ")}</span>
              </div>
            </div>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book with {expert.fullName.split(" ")[0]}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Bio & Clinical Approach */}
        <div className="lg:col-span-8 space-y-8">
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 shadow-glass space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">Clinical Philosophy</span>
              <blockquote className="text-base sm:text-lg text-slate-200 italic mt-2 border-l-2 border-clinical-cyan pl-4 leading-relaxed">
                "{expert.clinicalPhilosophy}"
              </blockquote>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h2 className="text-xl font-display font-bold text-white">Biography & Background</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {expert.bio}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-xs font-mono uppercase text-slate-400 font-bold">Specialized Areas of Clinical Practice</h3>
              <div className="flex flex-wrap gap-2">
                {expert.specialties.map((s) => (
                  <span key={s} className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-xs font-mono uppercase text-slate-400 font-bold">Care Formats Provided</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {expert.serviceModes.map((m) => (
                  <div key={m} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center font-medium capitalize text-slate-300">
                    {m.replace("-", " ")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
