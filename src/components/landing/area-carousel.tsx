'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";

const CANADIAN_COVERAGE_AREAS = [
  { name: "Downtown Toronto", province: "ontario", city: "toronto" },
  { name: "North York & Yorkville", province: "ontario", city: "toronto" },
  { name: "Mississauga & Oakville", province: "ontario", city: "toronto" },
  { name: "Kitsilano & Yaletown", province: "british-columbia", city: "vancouver" },
  { name: "North Vancouver", province: "british-columbia", city: "vancouver" },
  { name: "Richmond & Burnaby", province: "british-columbia", city: "vancouver" },
  { name: "Calgary Beltline & Kensington", province: "alberta", city: "calgary" },
  { name: "South Calgary & Airdrie", province: "alberta", city: "calgary" },
  { name: "Ottawa Centretown & Glebe", province: "ontario", city: "ottawa" },
  { name: "Kanata & Nepean", province: "ontario", city: "ottawa" },
  { name: "Downtown Edmonton", province: "alberta", city: "edmonton" },
  { name: "Montreal Downtown & Westmount", province: "quebec", city: "montreal" },
];

export default function AreaCarousel() {
  const areaList = [...CANADIAN_COVERAGE_AREAS, ...CANADIAN_COVERAGE_AREAS, ...CANADIAN_COVERAGE_AREAS];

  return (
    <section className="py-6 bg-background border-y border-border/10 relative overflow-hidden">
      {/* Subtle background atmosphere */}
      <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center gap-6">
        {/* High-Authority Leading Tag */}
        <div className="shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-full glassmorphic border-primary/20 shadow-sm">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-primary relative z-10 fill-primary/10" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80 whitespace-nowrap">
            Active in <span className="text-primary font-bold">Canada</span>:
          </span>
        </div>

        {/* Infinite Scroller */}
        <div className="relative flex-1 overflow-hidden h-10 flex items-center">
          <div className="flex w-max animate-scroll-areas gap-12 items-center hover:[animation-play-state:paused]">
            {areaList.map((area, idx) => (
              <Link
                key={`${area.name}-${idx}`}
                href={`/locations/${area.province}/${area.city}`}
                className="group flex items-center gap-3"
                prefetch={false}
              >
                <span className="text-[11px] font-bold text-muted-foreground group-hover:text-primary transition-all duration-300 uppercase tracking-widest whitespace-nowrap">
                  {area.name}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-border/40 group-hover:bg-accent group-hover:scale-125 transition-all duration-500" />
              </Link>
            ))}
          </div>
          
          {/* Edge Fades for Clinical Depth */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-20" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-areas {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-areas {
          animation: scroll-areas 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
