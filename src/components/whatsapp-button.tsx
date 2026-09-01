'use client';

import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <div className="hidden md:flex fixed bottom-8 right-6 z-50 items-center gap-2 group">
            {/* Tooltip text - shows on hover on desktop */}
            <span className="hidden md:flex items-center bg-slate-900 text-white border border-slate-700 text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap">
                🍁 Call Toll-Free: 1-800-ARIES-CA
            </span>

            {/* Main button */}
            <a
                href="tel:+18002743722"
                aria-label="Call AriesXpert Canada Toll Free"
                className="relative w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-primary/30"
            >
                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                <PhoneCall className="w-6 h-6 text-white relative z-10" />
            </a>
        </div>
    );
}
