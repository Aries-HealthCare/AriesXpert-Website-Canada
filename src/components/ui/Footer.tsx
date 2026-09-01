"use client";

import React from "react";
import Link from "next/link";
import { 
  Activity, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  Lock,
  Globe
} from "lucide-react";
import { CANADIAN_INSURANCE_PROVIDERS } from "@/lib/canadian-insurance";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-950 border-t border-slate-800 text-slate-400 pt-16 pb-28 lg:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Brand & Direct Billing Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Vision */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-clinical-cyan/20 to-recovery-mint/10 border border-clinical-cyan/40 flex items-center justify-center shadow-clinical-glow">
                <Activity className="w-5 h-5 text-clinical-cyan" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-white">
                  ARIES<span className="bg-gradient-to-r from-clinical-cyan to-recovery-mint bg-clip-text text-transparent">XPERT</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-400">
                  🍁 Canada
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed font-light">
              Transforming physical rehabilitation through immersive 3D anatomical modeling, objective kinematic movement diagnostics, and hospital-grade in-home and virtual care across Canada.
            </p>

            {/* Compliance Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-slate-900 border border-slate-800 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-clinical-cyan" />
                <span>PIPEDA &amp; PHIPA Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-slate-900 border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" />
                <span>Direct Billing via TELUS eClaims</span>
              </span>
            </div>
          </div>

          {/* Insurer Logos / Badges Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-3xl bg-midnight-900/70 border border-slate-800/80 p-6 sm:p-7 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Direct Billing &amp; Extended Health Partners
              </h4>
              <span className="text-[10px] font-mono text-recovery-mint">Instant Claims Adjudication</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-medium text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">Sun Life</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">Manulife</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">Canada Life</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">Green Shield</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">Desjardins</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">Blue Cross</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">ClaimSecure</div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-semibold">WSIB / MVA</div>
            </div>
          </div>

        </div>

        {/* Navigation Hierarchy Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-6 border-b border-slate-800/80 text-xs sm:text-sm">
          
          {/* 3D Medical Labs */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs font-mono text-clinical-cyan">
              3D Medical Labs
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/anatomy-lab" className="hover:text-clinical-cyan transition-colors">3D Anatomy Lab</Link></li>
              <li><Link href="/movement-lab" className="hover:text-clinical-cyan transition-colors">Kinematics Movement Lab</Link></li>
              <li><Link href="/surgery-and-rehabilitation" className="hover:text-clinical-cyan transition-colors">Surgery to Movement</Link></li>
              <li><Link href="/anatomy-lab#spine" className="hover:text-clinical-cyan transition-colors">Interactive 3D Spine</Link></li>
              <li><Link href="/anatomy-lab#knee" className="hover:text-clinical-cyan transition-colors">Interactive 3D Knee</Link></li>
              <li><Link href="/technology" className="hover:text-clinical-cyan transition-colors">Clinical AI Tech</Link></li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs font-mono text-clinical-cyan">
              Care Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/home-physiotherapy" className="hover:text-clinical-cyan transition-colors font-medium text-white">In-Home Physiotherapy</Link></li>
              <li><Link href="/virtual-physiotherapy" className="hover:text-clinical-cyan transition-colors font-medium text-white">Virtual Tele-Rehab</Link></li>
              <li><Link href="/services/physiotherapy" className="hover:text-clinical-cyan transition-colors">Orthopaedic PT</Link></li>
              <li><Link href="/services/sports-rehabilitation" className="hover:text-clinical-cyan transition-colors">Sports Rehabilitation</Link></li>
              <li><Link href="/services/post-surgical-rehabilitation" className="hover:text-clinical-cyan transition-colors">Post-Op Recovery</Link></li>
              <li><Link href="/services/neurological-rehabilitation" className="hover:text-clinical-cyan transition-colors">Neuro &amp; Stroke Care</Link></li>
              <li><Link href="/services/geriatric-physiotherapy" className="hover:text-clinical-cyan transition-colors">Geriatric Mobility</Link></li>
            </ul>
          </div>

          {/* Conditions Library */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs font-mono text-clinical-cyan">
              Conditions
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/conditions/sciatica" className="hover:text-clinical-cyan transition-colors">Sciatica &amp; Disc Care</Link></li>
              <li><Link href="/conditions/acl-tear" className="hover:text-clinical-cyan transition-colors">ACL &amp; Knee Tears</Link></li>
              <li><Link href="/conditions/rotator-cuff-injury" className="hover:text-clinical-cyan transition-colors">Rotator Cuff Tears</Link></li>
              <li><Link href="/conditions/osteoarthritis" className="hover:text-clinical-cyan transition-colors">Knee Osteoarthritis</Link></li>
              <li><Link href="/conditions/lumbar-spondylosis" className="hover:text-clinical-cyan transition-colors">Lumbar Spondylosis</Link></li>
              <li><Link href="/conditions/carpal-tunnel-syndrome" className="hover:text-clinical-cyan transition-colors">Carpal Tunnel (CTS)</Link></li>
              <li><Link href="/conditions" className="hover:text-clinical-cyan transition-colors text-clinical-cyan font-medium">All 140+ Conditions →</Link></li>
            </ul>
          </div>

          {/* Coverage Hubs */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs font-mono text-clinical-cyan">
              Canadian Locations
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/locations/ontario/toronto" className="hover:text-clinical-cyan transition-colors">Toronto &amp; GTA</Link></li>
              <li><Link href="/locations/ontario/ottawa" className="hover:text-clinical-cyan transition-colors">Ottawa &amp; NCR</Link></li>
              <li><Link href="/locations/british-columbia/vancouver" className="hover:text-clinical-cyan transition-colors">Metro Vancouver</Link></li>
              <li><Link href="/locations/british-columbia/surrey" className="hover:text-clinical-cyan transition-colors">Surrey &amp; Fraser Valley</Link></li>
              <li><Link href="/locations/alberta/calgary" className="hover:text-clinical-cyan transition-colors">Calgary &amp; Area</Link></li>
              <li><Link href="/locations/alberta/edmonton" className="hover:text-clinical-cyan transition-colors">Edmonton Metro</Link></li>
              <li><Link href="/locations/quebec/montreal" className="hover:text-clinical-cyan transition-colors">Montreal &amp; Laval</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs font-mono text-clinical-cyan">
              Clinical Support
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="tel:+18002743722" className="flex items-center gap-1.5 text-white font-bold hover:text-clinical-cyan transition-colors">
                  <PhoneCall className="w-3.5 h-3.5 text-clinical-cyan" />
                  <span>1-800-ARIES-CA</span>
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-clinical-cyan transition-colors">Clinical Triage Desk</Link></li>
              <li><Link href="/faq" className="hover:text-clinical-cyan transition-colors">Insurance FAQ</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-clinical-cyan transition-colors">PIPEDA Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-clinical-cyan transition-colors">Terms of Clinical Care</Link></li>
              <li><Link href="/accessibility" className="hover:text-clinical-cyan transition-colors">AODA Accessibility</Link></li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="space-y-4 text-xs text-slate-500 font-light leading-relaxed">
          <p>
            <strong className="text-slate-400 font-medium">Canadian Regulatory Compliance:</strong> AriesXpert operates as a designated health service network connecting patients with Registered Physiotherapists licensed by provincial regulatory colleges, including the College of Physiotherapists of Ontario (CPO), College of Physical Therapists of British Columbia (CPTBC), Physiotherapy Alberta College + Association, and the Ordre professionnel de la physiothérapie du Québec (OPPQ).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono">
            <span>© {new Date().getFullYear()} AriesXpert Health Technologies Inc. (Canada). All rights reserved.</span>
            <div className="flex items-center gap-4 text-slate-400">
              <Link href="/privacy-policy" className="hover:underline">Privacy</Link>
              <span>·</span>
              <Link href="/terms-of-service" className="hover:underline">Terms</Link>
              <span>·</span>
              <Link href="/accessibility" className="hover:underline">AODA Compliant</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
