'use client';

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { 
  HeartPulse, 
  Accessibility, 
  Stethoscope, 
  Users, 
  BrainCircuit, 
  Home, 
  Video, 
  Activity, 
  ShieldCheck,
  Zap
} from 'lucide-react';

const canadianServices = [
  { id: "cs1", name: "In-Home Physiotherapy", slug: "in-home-physiotherapy", icon: Home },
  { id: "cs2", name: "Virtual Tele-Rehab", slug: "virtual-physiotherapy", icon: Video },
  { id: "cs3", name: "Post-Op Surgery (TKR/THR)", slug: "post-surgical-rehabilitation", icon: ShieldCheck },
  { id: "cs4", name: "Sports & Concussion (CCMI)", slug: "sports-rehabilitation", icon: Activity },
  { id: "cs5", name: "Spine & Sciatica Therapy", slug: "physiotherapy", icon: HeartPulse },
  { id: "cs6", name: "Neuro & Stroke Recovery", slug: "neurological-rehabilitation", icon: BrainCircuit },
  { id: "cs7", name: "Geriatric Mobility & Falls", slug: "geriatric-physiotherapy", icon: Users },
  { id: "cs8", name: "MVA & Auto Claims (ICBC/WSIB)", slug: "sports-rehabilitation", icon: Stethoscope },
];

export default function ServicesStrip() {
  const extendedServices = [...canadianServices, ...canadianServices, ...canadianServices];

  return (
    <section className="py-6 md:py-10 bg-background/80 border-y border-border/10 relative overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-services hover:[animation-play-state:paused]">
          {extendedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={`${service.id}-${index}`} className="px-4 py-4">
                <Link href={`/services/${service.slug}`} prefetch={false}>
                  <Card className="premium-card w-64 h-36 flex flex-col justify-center items-center p-6 bg-card border border-primary/10 hover:border-primary/30 group cursor-pointer transition-all duration-500">
                    <div className="text-primary bg-primary/10 rounded-2xl p-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary/30 group-hover:scale-110 group-hover:-translate-y-2">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="mt-4 text-[17px] font-semibold font-headline text-center tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Edge Fades for Clinical Depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-transparent to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes scroll-services {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-services {
          animation: scroll-services 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
