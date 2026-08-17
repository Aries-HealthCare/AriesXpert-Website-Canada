import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Accessibility Policy (AODA & WCAG 2.1 AA) | AriesXpert Canada",
  description: "Our commitment to digital accessibility for all Canadians in accordance with AODA and WCAG 2.1 Level AA standards."
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="space-y-3 pb-6 border-b border-slate-800">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 text-clinical-cyan border border-slate-800">
          Accessibility Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          DIGITAL ACCESSIBILITY STATEMENT
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Compliant with AODA (Ontario) & WCAG 2.1 Level AA Guidelines
        </p>
      </div>

      <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">01. Our Accessibility Commitment</h2>
          <p>
            Aries HealthCare Canada Ltd. is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards under the <em>Accessibility for Ontarians with Disabilities Act (AODA)</em> and the <em>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</em>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">02. 3D WebGL Graceful Fallback Architecture</h2>
          <p>
            We recognize that complex 3D WebGL canvases can present barriers for screen reader users or assistive technologies. In response:
          </p>
          <ul className="space-y-2 pt-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
              <span><strong>Automated Reduced-Motion Detection:</strong> When your operating system requests reduced motion, 3D orbits and bioluminescent animations are instantly replaced with accessible static high-contrast 2.5D SVG diagrams.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
              <span><strong>Full Screen-Reader Equivalents:</strong> Every 3D anatomical viewer includes accessible ARIA tables, text descriptions, and keyboard tab stops.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
              <span><strong>High Contrast Mode:</strong> Our clinical palette exceeds WCAG 2.1 Level AA color contrast requirements (minimum 4.5:1 ratio for body text).</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">03. Feedback and Support</h2>
          <p>
            We welcome your feedback on the accessibility of AriesXpert Canada. If you encounter accessibility barriers, please contact our Accessibility Coordinator:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
            Email: accessibility@ariesxpert.ca <br />
            Phone: 1 (800) 274-3778 <br />
            Response Time: Within 2 business days
          </div>
        </section>
      </div>
    </div>
  );
}
