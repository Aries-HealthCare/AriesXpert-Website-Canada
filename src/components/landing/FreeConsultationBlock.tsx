"use client";

import React, { useState } from "react";
import { 
  Video, 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  User,
  Mail,
  MapPin
} from "lucide-react";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";

export const FreeConsultationBlock: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("ON");
  const [painArea, setPainArea] = useState("Low Back / Sciatica");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-midnight-950 py-20 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-clinical-cyan/10 to-recovery-mint/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900/95 via-midnight-900/90 to-slate-950/95 border border-slate-700/80 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          {/* Subtle Ambient Badge */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-clinical-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Offer Details & Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free · No Obligation Discovery</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                  Free 15-Minute <br />
                  <span className="bg-gradient-to-r from-clinical-cyan to-recovery-mint bg-clip-text text-transparent">
                    Virtual Tele-Assessment.
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Unsure whether in-home physical therapy is right for your condition? Speak directly with a licensed Canadian Registered Physiotherapist. We will review your symptoms, answer your direct billing questions, and outline a tailored recovery plan.
                </p>
              </div>

              {/* Assurance Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0" />
                  <span>Direct consultation with CPO / CPTBC / Alberta licensed PT</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-clinical-cyan shrink-0" />
                  <span>Instant insurance coverage & direct billing check</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Same-day callback or scheduled HD video appointment</span>
                </div>
              </div>

              {/* Direct Toll-Free */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                <PhoneCall className="w-4 h-4 text-clinical-cyan" />
                <span>Urgent clinical question? Call toll-free: </span>
                <a href="tel:+18002743722" className="text-white font-bold hover:text-clinical-cyan transition-colors">
                  1-800-ARIES-CA (1-800-274-3722)
                </a>
              </div>
            </div>

            {/* Right Column: Quick Intake Card */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-5">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-recovery-glow">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
                      <p className="text-xs text-slate-300 max-w-sm mx-auto">
                        A Canadian Registered Physiotherapist will review your details and contact you at <span className="text-white font-medium">{phone}</span> within 15–30 minutes.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-clinical-cyan hover:underline pt-2"
                    >
                      ← Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">Claim Your Free Tele-Assessment</h3>
                      <p className="text-xs text-slate-400">Complete the form below to connect with a Canadian PT.</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">Your Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-clinical-cyan focus:outline-none transition-all placeholder:text-slate-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">Canadian Phone Number</label>
                          <div className="relative">
                            <PhoneCall className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type="tel"
                              required
                              placeholder="e.g. (647) 555-0199"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-clinical-cyan focus:outline-none transition-all placeholder:text-slate-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">Province</label>
                          <select
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-clinical-cyan focus:outline-none transition-all cursor-pointer"
                          >
                            {CANADIAN_PROVINCES.map((p) => (
                              <option key={p.code} value={p.code} className="bg-slate-900">
                                {p.name} ({p.code})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">Primary Pain / Injury Area</label>
                        <select
                          value={painArea}
                          onChange={(e) => setPainArea(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-clinical-cyan focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="Low Back / Sciatica" className="bg-slate-900">Low Back Pain / Sciatica / Herniated Disc</option>
                          <option value="Knee / ACL / Meniscus" className="bg-slate-900">Knee Osteoarthritis / ACL / Meniscus Tear</option>
                          <option value="Shoulder / Rotator Cuff" className="bg-slate-900">Shoulder Pain / Rotator Cuff / Frozen Shoulder</option>
                          <option value="Neck / Whiplash / MVA" className="bg-slate-900">Neck Pain / MVA Whiplash</option>
                          <option value="Post-Surgical Joint" className="bg-slate-900">Post-Op Surgery (Knee/Hip Replacement)</option>
                          <option value="Sports / Athletic" className="bg-slate-900">Sports Injury / Concussion Management</option>
                          <option value="Geriatric / Mobility" className="bg-slate-900">Geriatric Fall Prevention & Balance</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-recovery-mint via-clinical-teal to-clinical-cyan text-slate-950 font-black text-sm uppercase tracking-wider shadow-recovery-glow hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <Video className="w-4 h-4" />
                      <span>Request Free Tele-Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-slate-500 text-center">
                      🔒 PHIPA & PIPEDA medical privacy compliant. Your health data is never shared.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeConsultationBlock;
