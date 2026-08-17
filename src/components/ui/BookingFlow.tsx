"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  Home, 
  Video, 
  Building2, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Activity,
  AlertTriangle
} from "lucide-react";
import { CANADIAN_PROVINCES } from "@/lib/canadian-geo";
import { CANADIAN_INSURANCE_PROVIDERS } from "@/lib/canadian-insurance";
import { VERIFIED_EXPERTS } from "@/lib/verified-experts";
import { BodyRegion } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

interface BookingFlowProps {
  initialRegion?: BodyRegion | "";
  initialCareMode?: "in-clinic" | "in-home" | "virtual" | "";
  onSuccess?: () => void;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({
  initialRegion = "",
  initialCareMode = "",
  onSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [concern, setConcern] = useState("Pain / Stiffness");
  const [bodyRegion, setBodyRegion] = useState<string>(initialRegion);
  const [careMode, setCareMode] = useState<string>(initialCareMode || "in-home");
  const [province, setProvince] = useState("Ontario");
  const [city, setCity] = useState("Toronto (GTA)");
  const [expertId, setExpertId] = useState("auto-match");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (9:00 AM – 12:00 PM)");
  const [insurance, setInsurance] = useState("Sun Life Financial");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const concernsList = [
    { title: "Joint or Muscle Pain", desc: "Back, neck, knee, shoulder or hip pain" },
    { title: "Post-Surgery Rehabilitation", desc: "TKR, THR, ACL reconstruction, spine post-op" },
    { title: "Sports Injury", desc: "Ligament sprains, tendon strains, running injuries" },
    { title: "Neurological Recovery", desc: "Stroke, Parkinson's, nerve injury rehabilitation" },
    { title: "Senior Mobility & Balance", desc: "Fall prevention, joint stiffness, gentle strength" },
    { title: "Posture & Desk Ergonomics", desc: "Tech neck, upper back fatigue, tension headaches" }
  ];

  const regions: { id: BodyRegion; name: string }[] = [
    { id: "spine", name: "Spine & Lower Back" },
    { id: "neck", name: "Neck & Cervical" },
    { id: "shoulder", name: "Shoulder & Rotator Cuff" },
    { id: "knee", name: "Knee Joint & Ligaments" },
    { id: "hip", name: "Hip & Pelvis" },
    { id: "ankle", name: "Ankle & Achilles" },
    { id: "wrist", name: "Wrist, Hand & Forearm" },
    { id: "elbow", name: "Elbow" },
    { id: "foot", name: "Foot & Plantar Fascia" }
  ];

  const handleNext = () => {
    trackEvent("booking_step_progressed", { step: step + 1 });
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent("booking_completed", {
      concern,
      bodyRegion,
      careMode,
      province,
      city,
      insurance
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-recovery-mint/20 border border-recovery-mint/40 text-recovery-mint flex items-center justify-center mx-auto shadow-recovery-glow animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold text-white">Your Movement Assessment is Requested!</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you, <strong className="text-white">{patientName || "Patient"}</strong>. Our clinical coordination team in <strong>{city}, {province}</strong> will reach out at <strong>{patientPhone || "your phone"}</strong> within 2 hours to confirm your registered physiotherapist appointment.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2">
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Care Format:</span>
            <span className="text-slate-200 font-medium capitalize">{careMode.replace("-", " ")}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Primary Focus:</span>
            <span className="text-slate-200 font-medium">{concern} ({bodyRegion})</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Direct Billing Insurer:</span>
            <span className="text-slate-200 font-medium">{insurance}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-400">Preferred Window:</span>
            <span className="text-slate-200 font-medium">{timeSlot}</span>
          </div>
        </div>

        <p className="text-xs text-slate-400">
          No credit card is required right now. Direct billing will be processed at the time of clinical service.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
      {/* Progress Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
          <span>STEP {step} OF 5</span>
          <span className="text-clinical-cyan font-bold">
            {step === 1 && "Primary Concern"}
            {step === 2 && "Anatomy & Care Format"}
            {step === 3 && "Location & Expert"}
            {step === 4 && "Schedule & Timing"}
            {step === 5 && "Patient & Insurance Details"}
          </span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-clinical-cyan to-recovery-mint transition-all duration-300 rounded-full"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Concern */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-display font-bold text-white">What would you like assistance with?</h3>
            <p className="text-xs text-slate-400">Select the primary reason for your movement assessment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {concernsList.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setConcern(item.title)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  concern === item.title
                    ? "bg-slate-800/90 border-clinical-cyan text-white shadow-clinical-glow ring-1 ring-clinical-cyan"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40"
                }`}
              >
                <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </button>
            ))}
          </div>

          <div className="pt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-sm flex items-center gap-2 hover:brightness-110 shadow-clinical-glow transition-all"
            >
              <span>Next: Body Region</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Body Region & Care Mode */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white">Where is the issue & how should we treat you?</h3>
            <p className="text-xs text-slate-400">Isolate your anatomical focus and preferred delivery model.</p>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5">Body Region / Joint</label>
            <div className="grid grid-cols-3 gap-2">
              {regions.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setBodyRegion(r.id)}
                  className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                    bodyRegion === r.id
                      ? "bg-clinical-cyan/20 border-clinical-cyan text-white shadow-clinical-glow"
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5">Care Delivery Format</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setCareMode("in-home")}
                className={`p-4 rounded-xl border text-center transition-all ${
                  careMode === "in-home"
                    ? "bg-slate-800 border-recovery-mint text-white shadow-recovery-glow ring-1 ring-recovery-mint"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <Home className="w-5 h-5 mx-auto mb-2 text-recovery-mint" />
                <p className="text-sm font-semibold text-white">In-Home Visit</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Therapist comes to you</p>
              </button>

              <button
                type="button"
                onClick={() => setCareMode("virtual")}
                className={`p-4 rounded-xl border text-center transition-all ${
                  careMode === "virtual"
                    ? "bg-slate-800 border-clinical-cyan text-white shadow-clinical-glow ring-1 ring-clinical-cyan"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <Video className="w-5 h-5 mx-auto mb-2 text-clinical-cyan" />
                <p className="text-sm font-semibold text-white">Virtual Telehealth</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Video consultation</p>
              </button>

              <button
                type="button"
                onClick={() => setCareMode("in-clinic")}
                className={`p-4 rounded-xl border text-center transition-all ${
                  careMode === "in-clinic"
                    ? "bg-slate-800 border-clinical-teal text-white shadow-clinical-glow ring-1 ring-clinical-teal"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <Building2 className="w-5 h-5 mx-auto mb-2 text-clinical-teal" />
                <p className="text-sm font-semibold text-white">Clinical Hub</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Partner clinic facility</p>
              </button>
            </div>
          </div>

          <div className="pt-6 flex justify-between">
            <button
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 text-sm hover:bg-slate-900 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-sm flex items-center gap-2 hover:brightness-110 shadow-clinical-glow transition-all"
            >
              <span>Next: Location & Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Canadian Location & Clinician */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white">Where in Canada are you located?</h3>
            <p className="text-xs text-slate-400">Match with registered physiotherapists licensed in your jurisdiction.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Province</label>
              <select
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  const prov = CANADIAN_PROVINCES.find(p => p.name === e.target.value);
                  if (prov && prov.majorCities.length > 0) {
                    setCity(prov.majorCities[0].name);
                  }
                }}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
              >
                {CANADIAN_PROVINCES.map((p) => (
                  <option key={p.code} value={p.name}>{p.name} ({p.code})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">City / Region</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
              >
                {CANADIAN_PROVINCES.find(p => p.name === province)?.majorCities.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Registered Clinician Preference</label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setExpertId("auto-match")}
                className={`w-full p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between ${
                  expertId === "auto-match"
                    ? "bg-slate-800 border-clinical-cyan text-white shadow-clinical-glow"
                    : "bg-slate-900/60 border-slate-800 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-clinical-cyan" />
                  <div>
                    <p className="font-semibold text-sm text-white">Auto-Match Best Available Registered PT</p>
                    <p className="text-[11px] text-slate-400">Fastest booking based on your specific condition</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold text-recovery-mint bg-slate-950 px-2 py-1 rounded">Recommended</span>
              </button>

              {VERIFIED_EXPERTS.map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setExpertId(exp.id)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between ${
                    expertId === exp.id
                      ? "bg-slate-800 border-clinical-cyan text-white shadow-clinical-glow"
                      : "bg-slate-900/60 border-slate-800 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="font-semibold text-sm text-white">{exp.fullName}, {exp.credentials}</p>
                      <p className="text-[11px] text-slate-400">{exp.specialties.join(", ")}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 flex justify-between">
            <button
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 text-sm hover:bg-slate-900 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-sm flex items-center gap-2 hover:brightness-110 shadow-clinical-glow transition-all"
            >
              <span>Next: Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Schedule */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white">Select your preferred appointment timing</h3>
            <p className="text-xs text-slate-400">Our team will confirm the exact 60-minute window within your chosen slot.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Preferred Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Time of Day Window</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Morning (9:00 AM – 12:00 PM)", "Afternoon (1:00 PM – 4:00 PM)", "Evening (5:00 PM – 8:00 PM)"].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                      timeSlot === slot
                        ? "bg-slate-800 border-clinical-cyan text-white shadow-clinical-glow"
                        : "bg-slate-900/60 border-slate-800 text-slate-300"
                    }`}
                  >
                    <Clock className="w-4 h-4 mx-auto mb-1.5 text-clinical-cyan" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-between">
            <button
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 text-sm hover:bg-slate-900 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-sm flex items-center gap-2 hover:brightness-110 shadow-clinical-glow transition-all"
            >
              <span>Next: Patient Info & Insurance</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Patient Details & Insurance */}
      {step === 5 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white">Patient & Direct Billing Details</h3>
            <p className="text-xs text-slate-400">All health information is kept strictly confidential under Canadian PIPEDA standards.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Full Legal Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.ca"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Phone Number (Canadian) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (416) 555-0199"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Extended Health Insurance Provider</label>
              <select
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
              >
                {CANADIAN_INSURANCE_PROVIDERS.map((ins) => (
                  <option key={ins.code} value={ins.name}>{ins.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Brief Description of Symptoms or Goals (Optional)</label>
              <textarea
                rows={3}
                placeholder="e.g. Experiencing sharp knee pain when bending for past 3 weeks post-skiing."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-clinical-cyan focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-6 flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 text-sm hover:bg-slate-900 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-extrabold text-sm shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Assessment Booking</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
