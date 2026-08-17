"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCityBySlug } from "@/lib/canadian-geo";
import { BookingModal } from "@/components/ui/BookingModal";
import { MapPin, CheckCircle2, ShieldCheck, Calendar, Home, Video, Building2, HelpCircle } from "lucide-react";

interface CityPageProps {
  params: Promise<{
    province: string;
    city: string;
  }>;
}

export default function CityLandingPage({ params }: CityPageProps) {
  const { province: provinceSlug, city: citySlug } = use(params);
  const geoData = getCityBySlug(provinceSlug, citySlug);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!geoData) {
    return notFound();
  }

  const { province, city } = geoData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb & City Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/locations" className="hover:text-clinical-cyan transition-colors">Locations</Link>
          <span>/</span>
          <span className="text-slate-300">{province.name}</span>
          <span>/</span>
          <span className="text-clinical-cyan font-bold">{city.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              {city.headline}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {city.subhead}
            </p>
          </div>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment in {city.name.split(" ")[0]}</span>
          </button>
        </div>
      </div>

      {/* Local Coverage Hubs & Postal Code Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <h2 className="text-2xl font-display font-bold text-white">Local Service Districts</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our mobile registered physiotherapists and clinical teams actively serve the following neighbourhoods in {city.name}:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {city.keyServiceHubs.map((hub: string) => (
              <div key={hub} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-recovery-mint shrink-0" />
                <span>{hub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <h2 className="text-2xl font-display font-bold text-white">Direct Billing in {city.name}</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            We electronically direct bill extended health insurance policies for zero upfront out-of-pocket hassle on eligible claims:
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {city.directBillingProviders.map((provider: string) => (
              <div key={provider} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-clinical-cyan shrink-0" />
                <span>{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local FAQs */}
      {city.localFaqs.length > 0 && (
        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
          <h3 className="text-2xl font-display font-bold text-white">
            Frequently Asked Questions for {city.name} Patients
          </h3>
          <div className="space-y-4">
            {city.localFaqs.map((faq: { question: string; answer: string }) => (
              <div key={faq.question} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-midnight-900 to-midnight-950 border border-slate-700 text-center space-y-6 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Ready to Start Your Physiotherapy in {city.name}?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Choose between in-home clinical visits or secure virtual consultations with our licensed clinicians.
        </p>
        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Assessment in {city.name}</span>
        </button>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
