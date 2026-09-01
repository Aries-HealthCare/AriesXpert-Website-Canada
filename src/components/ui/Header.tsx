"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Video, 
  Compass, 
  Sparkles, 
  PhoneCall, 
  Layers,
  HeartPulse,
  Home
} from "lucide-react";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { SERVICE_CATEGORIES } from "@/lib/canadian-data";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState("Ontario");

  return (
    <header className="sticky top-0 z-50 w-full bg-midnight-950/90 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Left: Brand Logo with Canadian Maple Leaf Badge */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-clinical-cyan/20 to-recovery-mint/10 border border-clinical-cyan/40 flex items-center justify-center group-hover:scale-105 transition-transform shadow-clinical-glow">
            <Activity className="w-5 h-5 text-clinical-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-tight text-white">
                ARIES<span className="bg-gradient-to-r from-clinical-cyan to-recovery-mint bg-clip-text text-transparent">XPERT</span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-400">
                🍁 CA
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
              Registered Canadian Physiotherapy
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          
          {/* 3D Medical Labs Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("3d-labs")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-slate-900 transition-colors">
              <Compass className="w-3.5 h-3.5 text-clinical-cyan" />
              <span>3D Medical Labs</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {activeDropdown === "3d-labs" && (
              <div className="absolute top-full left-0 w-72 pt-2 z-50">
                <div className="p-3 rounded-2xl bg-midnight-900/95 backdrop-blur-2xl border border-slate-700 shadow-2xl space-y-1">
                  <Link
                    href="/anatomy-lab"
                    className="block p-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-xs font-bold text-white block">3D Anatomy Lab</span>
                    <span className="text-[11px] text-slate-400 block">Interactive musculoskeletal 3D atlas</span>
                  </Link>
                  <Link
                    href="/movement-lab"
                    className="block p-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-xs font-bold text-white block">Kinematics Movement Lab</span>
                    <span className="text-[11px] text-slate-400 block">ROM & force vector visualizer</span>
                  </Link>
                  <Link
                    href="/surgery-and-rehabilitation"
                    className="block p-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-xs font-bold text-white block">Surgery to Movement Timeline</span>
                    <span className="text-[11px] text-slate-400 block">Post-op TKR, THR & ACL 3D milestones</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-slate-900 transition-colors">
              <span>Services</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 w-80 pt-2 z-50">
                <div className="p-3 rounded-2xl bg-midnight-900/95 backdrop-blur-2xl border border-slate-700 shadow-2xl space-y-1">
                  <Link
                    href="/home-physiotherapy"
                    className="block p-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-xs font-bold text-white block flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-clinical-cyan" />
                      In-Home Physiotherapy
                    </span>
                    <span className="text-[11px] text-slate-400 block">GTA, Vancouver, Calgary, Ottawa, Montreal</span>
                  </Link>
                  <Link
                    href="/virtual-physiotherapy"
                    className="block p-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-xs font-bold text-white block flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-recovery-mint" />
                      Virtual Tele-Rehab
                    </span>
                    <span className="text-[11px] text-slate-400 block">Across all 10 provinces & territories</span>
                  </Link>
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-500 px-2.5 block mb-1">Clinical Specialties</span>
                    {SERVICE_CATEGORIES.slice(0, 3).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-2.5 py-1.5 text-xs text-clinical-cyan font-semibold hover:underline"
                    >
                      View All Clinical Services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conditions Link */}
          <Link
            href="/conditions"
            className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-slate-900 transition-colors"
          >
            Conditions
          </Link>

          {/* Locations Link */}
          <Link
            href="/locations"
            className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-slate-900 transition-colors"
          >
            Locations
          </Link>

          {/* Therapists Link */}
          <Link
            href="/experts"
            className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-slate-900 transition-colors"
          >
            Registered PTs
          </Link>

          {/* Direct Billing Badge Link */}
          <Link
            href="/faq"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-medium text-recovery-mint hover:border-recovery-mint/40 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-recovery-mint" />
            <span>Direct Billing</span>
          </Link>
        </nav>

        {/* Right: Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Free Tele-Assessment Button */}
          <Link
            href="/virtual-physiotherapy"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-glass"
          >
            <Video className="w-3.5 h-3.5 text-clinical-cyan" />
            <span>Free 15-Min Call</span>
          </Link>

          {/* Book In-Home PT CTA */}
          <Link
            href="/book-assessment"
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-xs uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Assessment</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-midnight-950 border-b border-slate-800 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Home
            </Link>
            <Link
              href="/home-physiotherapy"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900 flex items-center justify-between"
            >
              <span>In-Home Physiotherapy</span>
              <span className="text-[10px] font-mono text-clinical-cyan">GTA, Van, Cal, Ott</span>
            </Link>
            <Link
              href="/virtual-physiotherapy"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Virtual Tele-Rehab</span>
              <span className="text-[10px] font-mono text-recovery-mint">All Provinces</span>
            </Link>
            <Link
              href="/anatomy-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              3D Anatomy Lab
            </Link>
            <Link
              href="/movement-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Kinematics Movement Lab
            </Link>
            <Link
              href="/surgery-and-rehabilitation"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Surgery to Movement Timeline
            </Link>
            <Link
              href="/conditions"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Conditions (140+ Library)
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Canadian Locations
            </Link>
            <Link
              href="/experts"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Registered Physiotherapists
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              About AriesXpert
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-slate-900"
            >
              Contact &amp; Triage
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href="tel:+18002743722"
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-clinical-cyan" />
              <span>Call Toll-Free: 1-800-ARIES-CA</span>
            </a>
            <Link
              href="/book-assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Movement Assessment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
