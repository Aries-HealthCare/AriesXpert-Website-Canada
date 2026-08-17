"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Activity, Calendar, ShieldAlert } from "lucide-react";
import { InteractiveBodyMap } from "@/components/3d/InteractiveBodyMap";
import { SpineViewer3D } from "@/components/3d/SpineViewer3D";
import { KneeViewer3D } from "@/components/3d/KneeViewer3D";
import { BookingModal } from "@/components/ui/BookingModal";
import { BodyRegion } from "@/lib/types";

export default function AnatomyLabPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingRegion, setBookingRegion] = useState<BodyRegion | "">("");

  const handleOpenBooking = (region?: BodyRegion) => {
    if (region) setBookingRegion(region);
    setBookingModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Sparkles className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">AriesXpert Anatomy Lab</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          THE DIGITAL MEDICAL MUSEUM
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Explore human anatomy in high-definition 3D. Isolate bones, joints, muscles, and nerve pathways to understand why pain develops and how targeted physiotherapy restores function.
        </p>
      </div>

      {/* Main Full-Body Anatomy Map */}
      <InteractiveBodyMap onOpenBookingWithRegion={handleOpenBooking} />

      {/* Signature 3D Spine Experience */}
      <div id="spine" className="scroll-mt-28">
        <SpineViewer3D />
      </div>

      {/* Signature 3D Knee Experience */}
      <div id="knee" className="scroll-mt-28">
        <KneeViewer3D />
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRegion={bookingRegion}
      />
    </div>
  );
}
