'use client';

import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  HeartPulse, 
  Menu, 
  ChevronDown, 
  Plus, 
  Minus, 
  MapPin, 
  Globe, 
  Video, 
  Users, 
  Building2, 
  Stethoscope, 
  Compass, 
  Activity, 
  ShieldCheck, 
  Calendar 
} from "lucide-react";
import { useState, useMemo } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BookAppointmentButton from "../book-appointment-button";
import { usePathname } from "next/navigation";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { Button } from "@/components/ui/button";

const staticServices = [
  { id: "s1", name: "In-Home Physiotherapy", slug: "in-home-physiotherapy" },
  { id: "s2", name: "Virtual Tele-Physiotherapy", slug: "virtual-physiotherapy" },
  { id: "s3", name: "Post-Surgical Joint Rehabilitation", slug: "post-surgical-rehabilitation" },
  { id: "s4", name: "Sports Injury & Concussion (CCMI)", slug: "sports-rehabilitation" },
  { id: "s5", name: "Neurological & Stroke Recovery", slug: "neurological-rehabilitation" },
  { id: "s6", name: "Geriatric Mobility & Fall Prevention", slug: "geriatric-physiotherapy" },
];

function LocationSelector({ current }: { current: string | null }) {
  const [selectedCity, setSelectedCity] = useState(current || "Toronto (GTA)");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 px-3 gap-2 rounded-xl glassmorphic border-border/40 text-xs font-semibold text-foreground hover:text-primary">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>{selectedCity}</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 glassmorphic p-2" align="start">
        <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
          Canadian Metropolitan Hubs
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {CANADIAN_PROVINCES.flatMap((p) =>
          p.majorCities.map((c) => (
            <DropdownMenuItem
              key={c.slug}
              onClick={() => setSelectedCity(c.name)}
              asChild
            >
              <Link href={`/locations/${p.slug}/${c.slug}`} className="flex items-center justify-between py-2 text-xs">
                <span className="font-medium text-foreground">{c.name}</span>
                <span className="text-[10px] font-mono text-primary font-bold">{p.code}</span>
              </Link>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-sm transition-all duration-300">
      <div className="w-full max-w-7xl 2xl:max-w-[1720px] mx-auto flex h-20 md:h-24 items-center px-4 sm:px-6 lg:px-8 relative justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group" prefetch={false}>
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-black text-xl tracking-tight text-foreground">
                  ARIES<span className="premium-gradient-text">XPERT</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400">
                  🍁 CA
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground block -mt-0.5">
                Registered Canadian Physiotherapy
              </span>
            </div>
          </Link>

          {/* Location Selector Desktop */}
          <div className="hidden xl:block">
            <LocationSelector current="Toronto (GTA)" />
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          
          {/* 3D Medical Labs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm 2xl:text-[15px] font-semibold hover:text-primary transition-colors py-2 px-3 focus:outline-none text-foreground whitespace-nowrap">
              <Compass className="h-4 w-4 text-primary" />
              <span>3D Medical Labs</span>
              <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 glassmorphic p-2" align="center">
              <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
                Interactive Biomechanics
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/anatomy-lab" className="flex flex-col items-start p-2" prefetch={false}>
                  <span className="text-xs font-bold text-foreground">3D Anatomy Lab</span>
                  <span className="text-[11px] text-muted-foreground">Interactive musculoskeletal 3D atlas</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/movement-lab" className="flex flex-col items-start p-2" prefetch={false}>
                  <span className="text-xs font-bold text-foreground">Kinematics Movement Lab</span>
                  <span className="text-[11px] text-muted-foreground">ROM & force vector visualizer</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/surgery-and-rehabilitation" className="flex flex-col items-start p-2" prefetch={false}>
                  <span className="text-xs font-bold text-foreground">Surgery to Movement Timeline</span>
                  <span className="text-[11px] text-muted-foreground">Post-op TKR, THR & ACL 3D milestones</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm 2xl:text-[15px] font-semibold hover:text-primary transition-colors py-2 px-3 focus:outline-none text-foreground whitespace-nowrap">
              <span>Services</span>
              <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 glassmorphic p-2" align="center">
              <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
                Clinical Formats
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {staticServices.map((service) => (
                <DropdownMenuItem key={service.id} asChild>
                  <Link href={`/services/${service.slug}`} className="py-2 text-xs font-medium" prefetch={false}>
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services" className="text-xs font-bold text-primary" prefetch={false}>
                  Explore All Clinical Services →
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Conditions */}
          <Link
            href="/conditions"
            className="text-sm 2xl:text-[15px] font-semibold hover:text-primary transition-colors py-2 px-3 text-foreground whitespace-nowrap"
            prefetch={false}
          >
            Conditions
          </Link>

          {/* Registered Therapists */}
          <Link
            href="/experts"
            className="text-sm 2xl:text-[15px] font-semibold hover:text-primary transition-colors py-2 px-3 text-foreground whitespace-nowrap"
            prefetch={false}
          >
            Registered PTs
          </Link>

          {/* Locations */}
          <Link
            href="/locations"
            className="text-sm 2xl:text-[15px] font-semibold hover:text-primary transition-colors py-2 px-3 text-foreground whitespace-nowrap"
            prefetch={false}
          >
            Locations
          </Link>

          {/* Direct Billing Pill */}
          <Link
            href="/faq"
            className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
            prefetch={false}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>Direct Billing</span>
          </Link>
        </nav>

        {/* Right: Actions, ThemeToggle & Mobile Drawer */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Free 15-Min Tele-Assessment CTA */}
          <Link
            href="/virtual-physiotherapy"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border/60 text-xs font-semibold text-foreground hover:bg-muted transition-all"
            prefetch={false}
          >
            <Video className="w-3.5 h-3.5 text-primary" />
            <span>Free 15-Min Call</span>
          </Link>

          {/* Book Home Visit CTA */}
          <BookAppointmentButton className="hidden md:inline-flex shadow-lg" size="default">
            Book In-Home PT
          </BookAppointmentButton>

          {/* Mobile Menu Sheet */}
          <div className="lg:hidden">
            <MobileMenu currentLocationName="Toronto (GTA)" />
          </div>
        </div>

      </div>
    </header>
  );
}

function MobileMenu({ currentLocationName }: { currentLocationName: string | null }) {
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  const handleCollapsibleChange = (name: string) => {
    setOpenCollapsible(prev => (prev === name ? null : name));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md flex flex-col p-0 border-l">
        <SheetHeader className="p-6 pb-4 border-b">
          <SheetTitle>
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Activity className="w-5 h-5 text-primary" />
              <span className="font-headline font-black text-lg text-foreground">
                ARIES<span className="premium-gradient-text">XPERT</span>
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-red-500/10 text-red-500 font-bold">🍁 CA</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-4 text-sm font-medium">
            <div className="mb-4">
              <LocationSelector current={currentLocationName} />
            </div>

            <Link href="/" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Home</Link>
            <Link href="/about" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>About Us</Link>

            <Collapsible open={openCollapsible === '3d'} onOpenChange={() => handleCollapsibleChange('3d')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full py-2.5 px-2 hover:text-primary transition-colors">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-primary" /> 3D Medical Labs
                </span>
                {openCollapsible === '3d' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 flex flex-col gap-1 border-l ml-4 mt-1">
                  <Link href="/anatomy-lab" className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>3D Anatomy Lab</Link>
                  <Link href="/movement-lab" className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>Kinematics Movement Lab</Link>
                  <Link href="/surgery-and-rehabilitation" className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>Surgery to Movement</Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openCollapsible === 'services'} onOpenChange={() => handleCollapsibleChange('services')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full py-2.5 px-2 hover:text-primary transition-colors">
                <span>Services</span>
                {openCollapsible === 'services' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 flex flex-col gap-1 border-l ml-4 mt-1">
                  {staticServices.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}`} className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link href="/conditions" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Conditions (140+ Topics)</Link>
            <Link href="/experts" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Registered Physiotherapists</Link>
            <Link href="/locations" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Canadian Locations</Link>
            <Link href="/resources" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Health Resources</Link>
            <Link href="/contact" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Contact &amp; Triage</Link>
          </nav>
        </div>
        <div className="p-4 border-t mt-auto">
          <BookAppointmentButton className="w-full">
            Book Assessment
          </BookAppointmentButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
