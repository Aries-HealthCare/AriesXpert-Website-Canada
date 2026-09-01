'use client';

import React from "react";
import Link from "next/link";
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  PhoneCall, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 text-muted-foreground pt-16 pb-28 lg:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-border/20">
          
          {/* Brand Vision */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3" prefetch={false}>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-sm">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-black text-xl tracking-tight text-foreground">
                  ARIES<span className="premium-gradient-text">XPERT</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500">
                  🍁 Canada
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm">
              Bridging hospital and home across Canada. We deliver hospital-grade registered physiotherapy, advanced 3D biomechanical analysis, and direct insurance billing.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com/ariesxpertcanada", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/ariesxpertcanada", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/ariesxpertcanada", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/ariesxpert-canada", label: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                  aria-label={social.label}
                  prefetch={false}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-secondary border border-border text-foreground">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>PIPEDA &amp; PHIPA Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-secondary border border-border text-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>TELUS eClaims Direct Billing</span>
              </span>
            </div>
          </div>

          {/* 3D Labs & Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">3D Labs &amp; Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/anatomy-lab" className="hover:text-primary transition-colors" prefetch={false}>3D Anatomy Lab</Link></li>
              <li><Link href="/movement-lab" className="hover:text-primary transition-colors" prefetch={false}>Kinematics Movement Lab</Link></li>
              <li><Link href="/surgery-and-rehabilitation" className="hover:text-primary transition-colors" prefetch={false}>Surgery to Movement</Link></li>
              <li><Link href="/services/in-home-physiotherapy" className="hover:text-primary transition-colors font-medium text-foreground" prefetch={false}>In-Home Physiotherapy</Link></li>
              <li><Link href="/services/virtual-physiotherapy" className="hover:text-primary transition-colors font-medium text-foreground" prefetch={false}>Virtual Tele-Rehab</Link></li>
              <li><Link href="/services/post-surgical-rehabilitation" className="hover:text-primary transition-colors" prefetch={false}>Post-Op Joint Recovery</Link></li>
              <li><Link href="/services/sports-rehabilitation" className="hover:text-primary transition-colors" prefetch={false}>Sports &amp; Concussion</Link></li>
            </ul>
          </div>

          {/* Coverage & Direct Billing */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Coverage &amp; Plans</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/locations/ontario/toronto" className="hover:text-primary transition-colors" prefetch={false}>Toronto &amp; GTA</Link></li>
              <li><Link href="/locations/british-columbia/vancouver" className="hover:text-primary transition-colors" prefetch={false}>Metro Vancouver</Link></li>
              <li><Link href="/locations/alberta/calgary" className="hover:text-primary transition-colors" prefetch={false}>Calgary &amp; Area</Link></li>
              <li><Link href="/locations/ontario/ottawa" className="hover:text-primary transition-colors" prefetch={false}>Ottawa &amp; NCR</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors" prefetch={false}>All Coverage Hubs</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors" prefetch={false}>Direct Billing FAQ</Link></li>
              <li><Link href="/conditions" className="hover:text-primary transition-colors" prefetch={false}>Conditions Library</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Clinical Coordination</h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-secondary border border-border">
                <PhoneCall className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block text-sm">Canadian Toll-Free Line:</strong>
                  <a href="tel:+18002743722" className="hover:text-primary transition-colors font-bold text-foreground">
                    1-800-ARIES-CA (1-800-274-3722)
                  </a>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Mon–Sat: 7:00 AM – 9:00 PM EST / PST</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-secondary border border-border">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:care.canada@ariesxpert.com" className="hover:text-primary transition-colors font-medium text-foreground">
                  care.canada@ariesxpert.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Statement & Insurer Badges */}
        <div className="space-y-4 text-xs text-muted-foreground font-light leading-relaxed">
          <p>
            <strong className="text-foreground font-medium">Canadian Regulatory Compliance:</strong> AriesXpert connects patients with Registered Physiotherapists licensed by Canadian provincial colleges, including the College of Physiotherapists of Ontario (CPO), College of Physical Therapists of British Columbia (CPTBC), Physiotherapy Alberta College + Association, and the Ordre professionnel de la physiothérapie du Québec (OPPQ).
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/20 text-[11px] font-mono">
            <span>&copy; {new Date().getFullYear()} Aries HealthCare Canada Inc. All Rights Reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors" prefetch={false}>Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors" prefetch={false}>Terms of Service</Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-primary transition-colors" prefetch={false}>AODA Accessibility</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
