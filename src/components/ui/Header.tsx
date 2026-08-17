"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  MapPin, 
  Calendar, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Home, 
  Video, 
  UserCheck 
} from "lucide-react";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-midnight-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-clinical-cyan/20 to-clinical-teal/10 border border-clinical-cyan/40 flex items-center justify-center shadow-clinical-glow group-hover:border-clinical-cyan transition-colors">
            <Activity className="w-5 h-5 text-clinical-cyan animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                ARIES<span className="text-clinical-cyan">XPERT</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Canada
              </span>
            </div>
            <span className="text-[10px] text-slate-400 tracking-wider font-mono uppercase -mt-0.5">
              Movement Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Explore Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("explore")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors">
              <span>Explore 3D</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === "explore" && (
              <div className="absolute top-full left-0 w-64 pt-2 z-50">
                <div className="p-2 rounded-xl bg-midnight-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl space-y-1">
                  <Link
                    href="/anatomy-lab"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Anatomy Lab</p>
                      <p className="text-xs text-slate-400">Interactive 3D medical museum</p>
                    </div>
                  </Link>
                  <Link
                    href="/movement-lab"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <Activity className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Movement Lab</p>
                      <p className="text-xs text-slate-400">Gait & joint kinematics simulator</p>
                    </div>
                  </Link>
                  <Link
                    href="/surgery-and-rehabilitation"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-aries-coral shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Surgery to Movement</p>
                      <p className="text-xs text-slate-400">Phased post-op recovery timelines</p>
                    </div>
                  </Link>
                  <Link
                    href="/technology"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Intelligence & Tech</p>
                      <p className="text-xs text-slate-400">AI-supported clinical telemetry</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/conditions"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname.startsWith("/conditions")
                ? "text-clinical-cyan bg-slate-800/60"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            Conditions
          </Link>

          <Link
            href="/treatments"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname.startsWith("/treatments")
                ? "text-clinical-cyan bg-slate-800/60"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            Treatments
          </Link>

          {/* Care Modes Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("care")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors">
              <span>How We Help</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === "care" && (
              <div className="absolute top-full left-0 w-64 pt-2 z-50">
                <div className="p-2 rounded-xl bg-midnight-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl space-y-1">
                  <Link
                    href="/home-physiotherapy"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <Home className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Home Physiotherapy</p>
                      <p className="text-xs text-slate-400">Hospital-grade care at your door</p>
                    </div>
                  </Link>
                  <Link
                    href="/virtual-physiotherapy"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <Video className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Virtual Physiotherapy</p>
                      <p className="text-xs text-slate-400">Secure Canadian tele-rehab</p>
                    </div>
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <Activity className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">All Clinical Services</p>
                      <p className="text-xs text-slate-400">Full range of rehabilitation</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/experts"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname.startsWith("/experts")
                ? "text-clinical-cyan bg-slate-800/60"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            Our Experts
          </Link>

          <Link
            href="/locations"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname.startsWith("/locations")
                ? "text-clinical-cyan bg-slate-800/60"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            Locations
          </Link>

          <Link
            href="/resources"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname.startsWith("/resources")
                ? "text-clinical-cyan bg-slate-800/60"
                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            Movement Library
          </Link>
        </nav>

        {/* Right CTA & Region */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-recovery-mint animate-pulse" />
            <span className="font-medium">Direct Billing</span>
          </div>

          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 hover:brightness-110 shadow-clinical-glow transition-all active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Assessment</span>
            </button>
          ) : (
            <Link
              href="/book-assessment"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 hover:brightness-110 shadow-clinical-glow transition-all active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Assessment</span>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-midnight-950/98 backdrop-blur-2xl border-t border-slate-800/80 p-6 overflow-y-auto z-50 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/anatomy-lab"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-white flex flex-col gap-1"
              >
                <Sparkles className="w-4 h-4 text-clinical-cyan" />
                <span>3D Anatomy Lab</span>
              </Link>
              <Link
                href="/movement-lab"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-white flex flex-col gap-1"
              >
                <Activity className="w-4 h-4 text-recovery-mint" />
                <span>Movement Lab</span>
              </Link>
              <Link
                href="/home-physiotherapy"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-white flex flex-col gap-1"
              >
                <Home className="w-4 h-4 text-clinical-cyan" />
                <span>Home Visits</span>
              </Link>
              <Link
                href="/virtual-physiotherapy"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-white flex flex-col gap-1"
              >
                <Video className="w-4 h-4 text-clinical-teal" />
                <span>Virtual Care</span>
              </Link>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-800/80">
              <Link href="/conditions" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Conditions Library
              </Link>
              <Link href="/treatments" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Treatments & Therapies
              </Link>
              <Link href="/surgery-and-rehabilitation" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Surgery to Movement
              </Link>
              <Link href="/experts" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Our Registered Physiotherapists
              </Link>
              <Link href="/locations" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Canadian Service Areas
              </Link>
              <Link href="/resources" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Movement Library (Blog)
              </Link>
              <Link href="/about" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                About AriesXpert
              </Link>
              <Link href="/contact" className="block py-2.5 text-base font-medium text-slate-200 hover:text-clinical-cyan">
                Contact & Clinical Inquiries
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-3.5 text-base font-bold rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 shadow-clinical-glow text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Movement Assessment</span>
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">
              Direct billing to Sun Life, Manulife, Canada Life & more
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
