"use client";

import React from "react";
import { X } from "lucide-react";
import { BookingFlow } from "./BookingFlow";
import { BodyRegion } from "@/lib/types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRegion?: BodyRegion | "";
  initialCareMode?: "in-clinic" | "in-home" | "virtual" | "";
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRegion = "",
  initialCareMode = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight-950/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-midnight-900 border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <BookingFlow
          initialRegion={initialRegion}
          initialCareMode={initialCareMode}
          onSuccess={() => {
            // keep open for confirmation screen
          }}
        />
      </div>
    </div>
  );
};
