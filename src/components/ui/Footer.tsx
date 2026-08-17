import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, MapPin, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand & Direct Billing Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-clinical-cyan/20 to-clinical-teal/10 border border-clinical-cyan/40 flex items-center justify-center">
                <Activity className="w-4 h-4 text-clinical-cyan" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                ARIES<span className="text-clinical-cyan">XPERT</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 ml-1.5 font-normal">Canada</span>
              </span>
            </Link>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Transforming physical rehabilitation through immersive 3D medical education, personalized registered physiotherapy, and hospital-grade in-home and virtual care across Canada.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-slate-900 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-clinical-cyan" />
                <span>PIPEDA & PHIPA Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-slate-900 border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" />
                <span>Direct Billing to Major Insurers</span>
              </span>
            </div>
          </div>

          {/* Insurer Logos / Badges summary */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl bg-midnight-900/60 border border-slate-800/80 p-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Direct Billing & Extended Health Partners
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">Sun Life</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">Manulife</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">Canada Life</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">Green Shield</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">Desjardins</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">Blue Cross</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">ClaimSecure</div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">WSIB / MVA</div>
            </div>
          </div>
        </div>

        {/* Quick Links Hierarchy */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800/80 text-sm">
          <div>
            <h4 className="font-semibold text-white mb-4">3D Medical Labs</h4>
            <ul className="space-y-2.5">
              <li><Link href="/anatomy-lab" className="hover:text-clinical-cyan transition-colors">3D Anatomy Lab</Link></li>
              <li><Link href="/movement-lab" className="hover:text-clinical-cyan transition-colors">Biomechanics Lab</Link></li>
              <li><Link href="/surgery-and-rehabilitation" className="hover:text-clinical-cyan transition-colors">Surgery to Movement</Link></li>
              <li><Link href="/anatomy-lab#spine" className="hover:text-clinical-cyan transition-colors">Interactive 3D Spine</Link></li>
              <li><Link href="/anatomy-lab#knee" className="hover:text-clinical-cyan transition-colors">Interactive 3D Knee</Link></li>
              <li><Link href="/technology" className="hover:text-clinical-cyan transition-colors">AI & Clinical Tech</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Clinical Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services/physiotherapy" className="hover:text-clinical-cyan transition-colors">Orthopaedic Physio</Link></li>
              <li><Link href="/services/sports-rehabilitation" className="hover:text-clinical-cyan transition-colors">Sports Rehabilitation</Link></li>
              <li><Link href="/services/post-surgical-rehabilitation" className="hover:text-clinical-cyan transition-colors">Post-Op Recovery</Link></li>
              <li><Link href="/services/neurological-rehabilitation" className="hover:text-clinical-cyan transition-colors">Neuro Rehabilitation</Link></li>
              <li><Link href="/services/geriatric-physiotherapy" className="hover:text-clinical-cyan transition-colors">Geriatric & Fall Care</Link></li>
              <li><Link href="/home-physiotherapy" className="hover:text-clinical-cyan transition-colors">In-Home Physiotherapy</Link></li>
              <li><Link href="/virtual-physiotherapy" className="hover:text-clinical-cyan transition-colors">Virtual Tele-Rehab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Conditions Library</h4>
            <ul className="space-y-2.5">
              <li><Link href="/conditions/lumbar-spondylosis" className="hover:text-clinical-cyan transition-colors">Lumbar Spondylosis</Link></li>
              <li><Link href="/conditions/acl-tear" className="hover:text-clinical-cyan transition-colors">ACL & Knee Tears</Link></li>
              <li><Link href="/conditions/sciatica" className="hover:text-clinical-cyan transition-colors">Sciatica & Disc Care</Link></li>
              <li><Link href="/conditions/rotator-cuff-injury" className="hover:text-clinical-cyan transition-colors">Rotator Cuff Tears</Link></li>
              <li><Link href="/conditions/osteoarthritis" className="hover:text-clinical-cyan transition-colors">Knee Osteoarthritis</Link></li>
              <li><Link href="/conditions/carpal-tunnel-syndrome" className="hover:text-clinical-cyan transition-colors">Carpal Tunnel (CTS)</Link></li>
              <li><Link href="/conditions" className="hover:text-clinical-cyan transition-colors text-clinical-cyan font-medium">View 140+ Conditions →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Canadian Locations</h4>
            <ul className="space-y-2.5">
              <li><Link href="/locations/ontario/toronto" className="hover:text-clinical-cyan transition-colors">Toronto (GTA), ON</Link></li>
              <li><Link href="/locations/ontario/mississauga" className="hover:text-clinical-cyan transition-colors">Mississauga, ON</Link></li>
              <li><Link href="/locations/ontario/ottawa" className="hover:text-clinical-cyan transition-colors">Ottawa Region, ON</Link></li>
              <li><Link href="/locations/british-columbia/vancouver" className="hover:text-clinical-cyan transition-colors">Vancouver, BC</Link></li>
              <li><Link href="/locations/british-columbia/victoria" className="hover:text-clinical-cyan transition-colors">Victoria, BC</Link></li>
              <li><Link href="/locations/alberta/calgary" className="hover:text-clinical-cyan transition-colors">Calgary, AB</Link></li>
              <li><Link href="/locations/alberta/edmonton" className="hover:text-clinical-cyan transition-colors">Edmonton, AB</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">AriesXpert Hub</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="hover:text-clinical-cyan transition-colors">About Our Brand</Link></li>
              <li><Link href="/experts" className="hover:text-clinical-cyan transition-colors">Meet Our Clinicians</Link></li>
              <li><Link href="/resources" className="hover:text-clinical-cyan transition-colors">Movement Library (Blog)</Link></li>
              <li><Link href="/faq" className="hover:text-clinical-cyan transition-colors">Medical & Insurance FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-clinical-cyan transition-colors">Contact Care Team</Link></li>
              <li><Link href="/book-assessment" className="text-clinical-cyan font-semibold hover:underline">Book Assessment</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory, Privacy & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Aries HealthCare Canada Ltd. All rights reserved. Registered Physiotherapy in Canada.
          </p>
          <div className="flex flex-wrap gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy (PIPEDA/PHIPA)</Link>
            <Link href="/terms-of-service" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-slate-200 transition-colors">Accessibility (AODA)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
