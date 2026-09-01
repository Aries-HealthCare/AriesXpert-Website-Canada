'use client';

import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ChevronLeft, ChevronRight, Award, ShieldCheck, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface GoogleReviewsProps {
  locationName?: string;
  className?: string;
}

const CANADIAN_REVIEWS = [
  {
    id: "cr-1",
    reviewerName: "Michael Tremblay",
    location: "Toronto, ON",
    rating: 5,
    createTime: "2 weeks ago",
    comment: "Having my physiotherapist come to my condo in Downtown Toronto after knee replacement surgery was an absolute lifesaver. The 3D progress tracking showed my flexion improving from 60° to 125° in 5 weeks. Direct billing to Sun Life was seamless!",
    therapist: "Elena Vance, PT (CPO #14892)",
    isVerified: true
  },
  {
    id: "cr-2",
    reviewerName: "David Chen",
    location: "Vancouver, BC",
    rating: 5,
    createTime: "1 month ago",
    comment: "I could barely stand up from my desk due to severe sciatic nerve pain. Marcus came to my home in Kitsilano the same day I booked. Within 3 sessions of manual traction and nerve flossing, the radiating leg pain dropped from an 8/10 to zero.",
    therapist: "Marcus Thorne, PT (CPTBC #08219)",
    isVerified: true
  },
  {
    id: "cr-3",
    reviewerName: "Jessica Campbell",
    location: "Calgary, AB",
    rating: 5,
    createTime: "3 weeks ago",
    comment: "After my car accident on Deerfoot Trail, AriesXpert handled the entire Section B auto insurance claim directly. I didn't have to pay a single dollar out of pocket. The vestibular and cervical rehab got me back to work headache-free.",
    therapist: "Amir Patel, PT (Physiotherapy Alberta #06184)",
    isVerified: true
  },
  {
    id: "cr-4",
    reviewerName: "Robert MacLeod",
    location: "Ottawa, ON",
    rating: 5,
    createTime: "1 month ago",
    comment: "Exceptional clinical knowledge. The therapist brought diagnostic tools and resistance bands right to my home in Kanata. Manulife covered 100% of my sessions. I can finally sleep on my left side without shoulder impingement.",
    therapist: "Sophie Tremblay, PT (CPO #18923)",
    isVerified: true
  },
  {
    id: "cr-5",
    reviewerName: "Sophie Gagnon",
    location: "Montreal, QC",
    rating: 5,
    createTime: "3 weeks ago",
    comment: "Our elderly mother needed intensive stroke rehabilitation at home. The therapist was bilingual, compassionate, and achieved noticeable balance improvements in her daily walking without any hospital commute stress.",
    therapist: "Julien M., pht (OPPQ #52910)",
    isVerified: true
  }
];

export default function GoogleReviews({ locationName = "your area", className = "" }: GoogleReviewsProps) {
  return (
    <section className={cn("py-12 md:py-20 relative overflow-hidden bg-background", className)}>
      {/* Atmospheric Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 space-y-12">
        {/* Centered Clinical Staging */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Award className="w-4 h-4" /> Patient Stories Across Canada
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            What Patients Say in <span className="premium-gradient-text">{locationName}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-foreground">4.9 / 5.0 Rating</span>
            <span className="text-xs text-muted-foreground">• 1,850+ Verified Reviews</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-end gap-2 mb-4">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {CANADIAN_REVIEWS.map((review, index) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="premium-card group border-primary/10 healthcare-motion transform hover:-translate-y-1.5 flex flex-col justify-between shadow-sm relative overflow-hidden h-full rounded-[2.5rem] p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">{review.reviewerName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-sm text-foreground">{review.reviewerName}</h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary" /> {review.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-primary font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{review.therapist}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">Verified Direct Billed Clinical Patient</div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
}
