"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Activity, 
  Layers, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Zap,
  TrendingUp,
  Cpu,
  Target
} from "lucide-react";

export const AiPrecisionRecovery: React.FC = () => {
  const [selectedJoint, setSelectedJoint] = useState<"knee" | "spine" | "shoulder">("knee");

  const jointData = {
    knee: {
      title: "Knee Flexion & Biomechanical Loading",
      condition: "Post-Op ACL & Osteoarthritis Trajectory",
      romBaseline: "65° Flexion (Day 0)",
      romTarget: "135° Physiological Flexion (Week 6)",
      currentScore: "94% Symmetry Index",
      metrics: [
        { label: "Peak Valgus Angle", val: "2.1° (Optimal)", status: "normal" },
        { label: "Ground Reaction Force", val: "1.05 BW", status: "normal" },
        { label: "Extensor Lag", val: "0° (Full Extension)", status: "excellent" },
      ]
    },
    spine: {
      title: "Lumbar Lordosis & Segmental Mobility",
      condition: "L4-L5 Disc Herniation & Sciatica Protocol",
      romBaseline: "22° Lumbar Flexion with Pain",
      romTarget: "55° Pain-Free Lumbar Hinge",
      currentScore: "89% Disc Decompression",
      metrics: [
        { label: "Pelvic Tilt Angle", val: "12° Neutral", status: "normal" },
        { label: "Core Co-Contraction", val: "88% MVC", status: "excellent" },
        { label: "Nerve Glide Latency", val: "< 15ms (Resolved)", status: "excellent" },
      ]
    },
    shoulder: {
      title: "Scapulohumeral Rhythm & Overhead Reach",
      condition: "Rotator Cuff Repair & Impingement Recovery",
      romBaseline: "80° Active Abduction",
      romTarget: "175° Bilateral Symmetry",
      currentScore: "91% Functional Capacity",
      metrics: [
        { label: "Scapular Upward Rotation", val: "48°", status: "normal" },
        { label: "Rotator Cuff Torque", val: "38 Nm", status: "excellent" },
        { label: "Glenohumeral Translation", val: "< 1.5mm", status: "normal" },
      ]
    }
  };

  const active = jointData[selectedJoint];

  return (
    <section className="relative w-full bg-midnight-950 py-20 border-y border-slate-800/80 overflow-hidden">
      {/* Volumetric Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-clinical-cyan/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-clinical-cyan">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Kinematics & Computer Vision Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Objective Biomechanics. <br />
            <span className="bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint bg-clip-text text-transparent">
              Precision Recovery Trajectories.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Eliminating guesswork from physical rehabilitation. We measure angular velocities, range of motion (ROM), and kinetic chain symmetry to map your exact path to full functional health.
          </p>
        </div>

        {/* Interactive Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Joint Switcher & Clinical Findings */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Joint Switcher */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedJoint("knee")}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedJoint === "knee"
                    ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Knee & ACL
              </button>
              <button
                type="button"
                onClick={() => setSelectedJoint("spine")}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedJoint === "spine"
                    ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Spine & Disc
              </button>
              <button
                type="button"
                onClick={() => setSelectedJoint("shoulder")}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedJoint === "shoulder"
                    ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Shoulder
              </button>
            </div>

            {/* Selected Joint Protocol Card */}
            <div className="p-6 rounded-3xl bg-midnight-900/90 border border-slate-800 backdrop-blur-xl space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-clinical-cyan font-bold tracking-wider">
                  Active Clinical Pathway
                </span>
                <h3 className="text-xl font-bold text-white">{active.title}</h3>
                <p className="text-xs text-slate-400">{active.condition}</p>
              </div>

              {/* Progress Milestones */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-400">Baseline Assessment</span>
                  <span className="text-white font-mono">{active.romBaseline}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-clinical-cyan to-recovery-mint w-4/5 rounded-full animate-pulse" />
                </div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-400">Target Milestone</span>
                  <span className="text-recovery-mint font-mono font-bold">{active.romTarget}</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-800">
                {active.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                    <span className="text-xs font-bold text-white font-mono">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Lab Link */}
            <div className="flex items-center gap-4">
              <Link
                href="/movement-lab"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white transition-all shadow-glass"
              >
                <Compass className="w-4 h-4 text-clinical-cyan" />
                <span>Open Interactive 3D Movement Lab</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Holographic HUD Display */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-midnight-900/80 border border-slate-700/80 backdrop-blur-2xl shadow-2xl space-y-6">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-clinical-cyan animate-ping" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider">
                    Computer Vision Kinetic Stream · Active
                  </span>
                </div>
                <span className="text-xs font-mono text-recovery-mint px-2.5 py-1 rounded bg-recovery-mint/10 border border-recovery-mint/30">
                  {active.currentScore}
                </span>
              </div>

              {/* Graphical Visualizer Window */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-slate-950 border border-slate-800/90 overflow-hidden flex items-center justify-center">
                {/* Visual Spatial Grid */}
                <div className="absolute inset-0 bg-spatial-grid opacity-30" />
                
                {/* Kinetic Vector Lines Simulation */}
                <div className="relative z-10 text-center space-y-4 px-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-clinical-cyan/20 to-recovery-mint/10 border border-clinical-cyan/40 flex items-center justify-center shadow-clinical-glow animate-pulse">
                    <Activity className="w-10 h-10 text-clinical-cyan" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Dynamic Kinematic Feedback</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Real-time skeletal joint angle computation analyzing angular velocity, compensatory torsion, and force dispersion.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">FPS: 60</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Latency: &lt; 8ms</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-clinical-cyan">Clinical Grade</span>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-recovery-mint" />
                  <span>Calibrated with Canadian Physical Therapy Guidelines</span>
                </div>
                <Link href="/technology" className="text-clinical-cyan hover:underline font-medium">
                  Learn about our clinical AI architecture →
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiPrecisionRecovery;
