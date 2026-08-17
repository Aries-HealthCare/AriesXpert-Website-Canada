"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Phone, Sparkles } from "lucide-react";

interface StickyCareBarProps {
  onOpenBooking?: () => void;
}

export const StickyCareBar: React.FC<StickyCareBarProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating Quick CTA */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <Link
          href="/anatomy-lab"
          className="px-4 py-2.5 rounded-full bg-midnight-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-xl shadow-glass transition-all hover:scale-105 flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-clinical-cyan" />
          <span>Explore 3D Body</span>
        </Link>

        {onOpenBooking ? (
          <button
            onClick={onOpenBooking}
            className="px-5 py-3 rounded-full bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-sm font-bold shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment</span>
          </button>
        ) : (
          <Link
            href="/book-assessment"
            className="px-5 py-3 rounded-full bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-sm font-bold shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment</span>
          </Link>
        )}
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-midnight-950/95 backdrop-blur-xl border-t border-slate-800/90 px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+18002743778"
          className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-bold text-slate-200 text-center flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-clinical-cyan" />
          <span>Call Care Team</span>
        </a>

        {onOpenBooking ? (
          <button
            onClick={onOpenBooking}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs font-bold text-center shadow-clinical-glow flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment</span>
          </button>
        ) : (
          <Link
            href="/book-assessment"
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs font-bold text-center shadow-clinical-glow flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment</span>
          </Link>
        )}
      </div>
    </>
  );
};
