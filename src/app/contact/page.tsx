"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Calendar } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <MessageSquare className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Patient Coordination</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          CONNECT WITH ARIESXPERT CANADA
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Speak with our intake coordinators to verify private insurance coverage, coordinate post-op in-home care, or book clinic visits.
        </p>
      </div>

      {/* Grid: Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
            <h2 className="text-2xl font-display font-bold text-white">Clinical Coordination</h2>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <Phone className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Toll-Free Patient Line:</strong>
                  <a href="tel:+18002743778" className="hover:text-clinical-cyan transition-colors text-slate-200">
                    1 (800) ARIES-PT / 1 (800) 274-3778
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mon–Sat: 8:00 AM – 8:00 PM EST / PST</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <Mail className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Clinical Care Inquiries:</strong>
                  <a href="mailto:care@ariesxpert.ca" className="hover:text-recovery-mint transition-colors text-slate-200">
                    care@ariesxpert.ca
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Responses within 2 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <MapPin className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Canadian Regional Operations:</strong>
                  <span>Ontario (Toronto / GTA), British Columbia (Vancouver), Alberta (Calgary)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online Assessment Now</span>
            </button>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/80 border border-slate-800 shadow-glass">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-recovery-mint/20 border border-recovery-mint text-recovery-mint flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  A licensed care coordinator will contact you shortly to review your condition and answer your questions.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-300">
                  Have a question regarding insurance direct billing, specific clinician experience, or corporate physiotherapy?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-clinical-cyan focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. sarah@example.ca"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-clinical-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. (416) 555-0192"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-clinical-cyan focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Province *</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-clinical-cyan focus:outline-none"
                    >
                      <option value="ON">Ontario</option>
                      <option value="BC">British Columbia</option>
                      <option value="AB">Alberta</option>
                      <option value="OTHER">Other Province</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">How Can We Help? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your pain, post-surgical timeline, or care format questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-clinical-cyan focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
