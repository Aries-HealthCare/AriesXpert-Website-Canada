"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ShieldCheck, Quote, MapPin } from "lucide-react";

interface ReviewItem {
  id: string;
  patientName: string;
  city: string;
  province: string;
  condition: string;
  rating: number;
  date: string;
  review: string;
  therapistMention: string;
  insurer: string;
}

const CANADIAN_PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    patientName: "Michael Tremblay",
    city: "Toronto",
    province: "ON",
    condition: "Post-Op Total Knee Replacement (TKR)",
    rating: 5,
    date: "2 weeks ago",
    review: "Having my physiotherapist come to my condo in Downtown Toronto after knee replacement surgery was an absolute lifesaver. The 3D progress tracking showed my flexion improving from 60° to 125° in 5 weeks. Direct billing to Sun Life was seamless!",
    therapistMention: "Care by Elena V., PT (CPO #14892)",
    insurer: "Direct Billed: Sun Life"
  },
  {
    id: "rev-2",
    patientName: "David Chen",
    city: "Vancouver",
    province: "BC",
    condition: "Acute Lumbar Disc Herniation & Sciatica",
    rating: 5,
    date: "1 month ago",
    review: "I could barely stand up from my desk due to severe sciatic nerve pain. Marcus came to my home in Kitsilano the same day I booked. Within 3 sessions of manual traction and nerve flossing, the radiating leg pain dropped from an 8/10 to zero.",
    therapistMention: "Care by Marcus B., PT (CPTBC #08219)",
    insurer: "Direct Billed: Canada Life"
  },
  {
    id: "rev-3",
    patientName: "Jessica Campbell",
    city: "Calgary",
    province: "AB",
    condition: "MVA Whiplash & Neck Sprain",
    rating: 5,
    date: "3 weeks ago",
    review: "After my car accident on Deerfoot Trail, AriesXpert handled the entire Section B auto insurance claim directly. I didn't have to pay a single dollar out of pocket. The vestibular and cervical rehab got me back to work headache-free.",
    therapistMention: "Care by Priya S., PT (Physiotherapy Alberta #06184)",
    insurer: "Direct Billed: Alberta Section B"
  },
  {
    id: "rev-4",
    patientName: "Robert MacLeod",
    city: "Ottawa",
    province: "ON",
    condition: "Rotator Cuff Tendinopathy",
    rating: 5,
    date: "1 month ago",
    review: "Exceptional clinical knowledge. The therapist brought diagnostic tools and resistance bands right to my home in Kanata. Manulife covered 100% of my sessions. I can finally sleep on my left side and play golf again without shoulder impingement.",
    therapistMention: "Care by Alexandre D., PT (CPO #18923)",
    insurer: "Direct Billed: Manulife"
  },
  {
    id: "rev-5",
    patientName: "Amandeep Gill",
    city: "Surrey",
    province: "BC",
    condition: "ACL Reconstruction Rehab",
    rating: 5,
    date: "2 months ago",
    review: "The objective return-to-sport testing and biomechanics analysis gave me total confidence going back into soccer. Top-tier evidence-based physiotherapy delivered right at home.",
    therapistMention: "Care by Jaspreet K., PT (CPTBC #09412)",
    insurer: "Direct Billed: Pacific Blue Cross"
  },
  {
    id: "rev-6",
    patientName: "Sophie Gagnon",
    city: "Montreal",
    province: "QC",
    condition: "Post-Stroke Gait & Balance Restoration",
    rating: 5,
    date: "3 weeks ago",
    review: "Our elderly mother needed intensive stroke rehabilitation at home. The therapist was bilingual, compassionate, and achieved noticeable balance improvements in her daily walking without any hospital commute stress.",
    therapistMention: "Care by Julien M., pht (OPPQ #52910)",
    insurer: "Direct Billed: Desjardins"
  }
];

export const GoogleReviewsCanada: React.FC = () => {
  const [filterCity, setFilterCity] = useState("all");

  const filteredReviews = filterCity === "all"
    ? CANADIAN_PATIENT_REVIEWS
    : CANADIAN_PATIENT_REVIEWS.filter(r => r.city.toLowerCase() === filterCity.toLowerCase());

  return (
    <section className="relative w-full bg-midnight-900/60 py-20 border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-white">4.9 / 5.0 Rating</span>
              <span className="text-xs text-slate-500 font-mono">|</span>
              <span className="text-xs text-slate-400">1,850+ Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Real Recovery Stories Across Canada
            </h2>
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {["all", "Toronto", "Vancouver", "Calgary", "Ottawa"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilterCity(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all capitalize whitespace-nowrap ${
                  filterCity === c
                    ? "bg-clinical-cyan text-slate-950 font-bold shadow-clinical-glow"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {c === "all" ? "All Canadian Cities" : c}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-3xl bg-midnight-950/90 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Name, City & Stars */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-base">{rev.patientName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3 h-3 text-clinical-cyan" />
                      <span>{rev.city}, {rev.province}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-[11px] text-slate-500">{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Condition Tag */}
                <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-clinical-cyan font-medium">
                  {rev.condition}
                </span>

                {/* Review Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-light italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Footer: Therapist License & Insurer */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1">
                <p className="text-[11px] font-mono text-slate-400 truncate">
                  {rev.therapistMention}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-recovery-mint font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{rev.insurer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoogleReviewsCanada;
