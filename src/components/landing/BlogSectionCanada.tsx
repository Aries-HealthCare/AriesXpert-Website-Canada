"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ChevronRight, Sparkles, UserCheck } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
}

const CANADIAN_ARTICLES: BlogPost[] = [
  {
    slug: "canadian-winter-slip-fall-prevention",
    title: "Canadian Winter Slip-and-Fall Prevention: Core & Vestibular Protocols",
    excerpt: "Ice and snow dramatically increase fracture and ligament tear risks. Discover clinical balance strategies, proprioceptive training, and fall-safe recovery mechanics.",
    category: "Preventative Health",
    readTime: "5 min read",
    author: "Elena Vance, PT",
    authorRole: "MSc.PT, FCAMPT",
    date: "Aug 2026"
  },
  {
    slug: "mva-whiplash-ontario-bc-claims-guide",
    title: "Navigating MVA & Whiplash Injury Claims in Ontario (OCF-18) & BC (ICBC)",
    excerpt: "A complete patient guide to starting your motor vehicle accident physiotherapy claim, understanding direct insurer billing, and recovering from cervical trauma.",
    category: "MVA & Auto Claims",
    readTime: "7 min read",
    author: "Marcus Thorne, PT",
    authorRole: "B.Sc.Kin, MPT, CSCS",
    date: "Aug 2026"
  },
  {
    slug: "post-op-knee-replacement-milestone-guide",
    title: "Total Knee Replacement (TKR): The 12-Week Post-Op In-Home Milestone Guide",
    excerpt: "From day 1 passive extension to week 12 independent stair descent. What Canadian patients need to know about post-surgical in-home physiotherapy.",
    category: "Post-Surgical Care",
    readTime: "6 min read",
    author: "Sophie Tremblay, PT",
    authorRole: "MSc.PT, CIDN",
    date: "Jul 2026"
  }
];

export const BlogSectionCanada: React.FC = () => {
  return (
    <section className="relative w-full bg-midnight-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-clinical-cyan">
              Canadian Clinical Knowledge Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Physiotherapy Research &amp; Health Insights
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            Written and reviewed by registered Canadian physical therapists. Grounded in peer-reviewed clinical research and Canadian healthcare guidelines.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CANADIAN_ARTICLES.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group p-7 rounded-3xl bg-midnight-900/60 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-clinical-cyan font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-clinical-cyan transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read CTA */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-clinical-cyan">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">{post.author}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{post.authorRole}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white pt-1">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 text-clinical-cyan group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Resources CTA */}
        <div className="text-center pt-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-glass"
          >
            <span>Explore Complete Clinical Resource Library</span>
            <ArrowRight className="w-4 h-4 text-clinical-cyan" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSectionCanada;
