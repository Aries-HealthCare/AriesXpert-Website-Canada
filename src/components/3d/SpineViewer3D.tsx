"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Layers, Activity, AlertCircle, Sparkles, CheckCircle2, RotateCw } from "lucide-react";

export const SpineViewer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedLevel, setSelectedLevel] = useState<"C5-C6" | "T4-T5" | "L4-L5" | "L5-S1">("L4-L5");
  const [isHerniated, setIsHerniated] = useState(false);
  const [isDecompressed, setIsDecompressed] = useState(false);

  const levelDetails = {
    "C5-C6": {
      name: "C5–C6 Cervical Segment",
      region: "Neck / Cervical Spine",
      nerveInvolved: "C6 Nerve Root (Biceps, wrist extensors, thumb/index sensation)",
      conditions: ["Cervical Radiculopathy", "Disc Herniation", "Cervical Spondylosis"],
      physioIntervention: "Gentle manual traction, neural glides, and deep cervical flexor retraining."
    },
    "T4-T5": {
      name: "T4–T5 Thoracic Segment",
      region: "Mid-Back / Thoracic Spine & Rib Articulation",
      nerveInvolved: "T4 Intercostal Nerve (Ribcage and postural sensation)",
      conditions: ["Thoracic Kyphosis", "Costovertebral Joint Dysfunction", "Upper Crossed Syndrome"],
      physioIntervention: "Thoracic extension foam roller mobilizations and scapular retractor strengthening."
    },
    "L4-L5": {
      name: "L4–L5 Lumbar Segment",
      region: "Lower Back / Most Common Site of Disc Herniation",
      nerveInvolved: "L5 Nerve Root (Tibialis anterior, great toe extension, lateral calf sensation)",
      conditions: ["L4-L5 Disc Herniation", "Sciatica", "Lumbar Canal Stenosis", "Spondylolisthesis"],
      physioIntervention: "McKenzie extension exercises, core multifidus stabilization, and lumbar decompression."
    },
    "L5-S1": {
      name: "L5–S1 Lumbosacral Junction",
      region: "Base of Spine & Sacral Transition",
      nerveInvolved: "S1 Nerve Root (Achilles reflex, gastrocnemius plantarflexion, lateral foot)",
      conditions: ["L5-S1 Disc Bulge", "Sacroiliac (SI) Joint Dysfunction", "Piriformis Syndrome"],
      physioIntervention: "Pelvic symmetry alignment, neural tension flossing, and gluteus medius loading."
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b12, 0.04);

    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0ea5e9, 1.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 2.5);
    keyLight.position.set(4, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 1.5);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Spine 3D Model Group
    const spineGroup = new THREE.Group();
    scene.add(spineGroup);

    // Vertebrae material
    const boneMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf1f5f9,
      roughness: 0.25,
      metalness: 0.1,
      transmission: 0.3,
      thickness: 0.4,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.1,
    });

    const discMaterial = new THREE.MeshStandardMaterial({
      color: isHerniated ? 0xef4444 : isDecompressed ? 0x10b981 : 0x00f2fe,
      emissive: isHerniated ? 0xef4444 : isDecompressed ? 0x10b981 : 0x00f2fe,
      emissiveIntensity: 0.6,
      roughness: 0.3,
    });

    const nerveMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.7,
    });

    // Construct 3-Vertebrae Functional Spinal Unit (FSU)
    const upperVertebra = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.75, 0.45, 24), boneMaterial);
    upperVertebra.position.y = 0.8 + (isDecompressed ? 0.2 : 0);
    spineGroup.add(upperVertebra);

    // Spinous process (posterior spine spike)
    const spinousUpper = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.8, 16), boneMaterial);
    spinousUpper.position.set(0, 0.8 + (isDecompressed ? 0.2 : 0), -0.7);
    spinousUpper.rotation.x = -Math.PI / 3;
    spineGroup.add(spinousUpper);

    // Intervertebral Disc
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, isDecompressed ? 0.32 : 0.22, 24), discMaterial);
    disc.position.y = 0.4;
    spineGroup.add(disc);

    // Herniation Bulge extrusion (if toggled)
    if (isHerniated) {
      const herniationBulge = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 1.0 })
      );
      herniationBulge.position.set(0.35, 0.38, -0.45);
      spineGroup.add(herniationBulge);
    }

    // Lower Vertebra
    const lowerVertebra = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.8, 0.5, 24), boneMaterial);
    lowerVertebra.position.y = 0;
    spineGroup.add(lowerVertebra);

    const spinousLower = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.85, 16), boneMaterial);
    spinousLower.position.set(0, 0, -0.75);
    spinousLower.rotation.x = -Math.PI / 3;
    spineGroup.add(spinousLower);

    // Spinal Cord & Exiting Nerve Roots
    const spinalCord = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.2, 16), nerveMaterial);
    spinalCord.position.set(0, 0.4, -0.35);
    spineGroup.add(spinalCord);

    // Exiting bilateral nerve roots
    const nerveRootL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.8, 12), nerveMaterial);
    nerveRootL.position.set(0.45, 0.35, -0.35);
    nerveRootL.rotation.z = Math.PI / 3;
    spineGroup.add(nerveRootL);

    const nerveRootR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.8, 12), nerveMaterial);
    nerveRootR.position.set(-0.45, 0.35, -0.35);
    nerveRootR.rotation.z = -Math.PI / 3;
    spineGroup.add(nerveRootR);

    // Interactive Drag / Orbit
    let isDragging = false;
    let previousPos = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousPos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPos.x;
      const deltaY = e.clientY - previousPos.y;

      spineGroup.rotation.y += deltaX * 0.01;
      spineGroup.rotation.x = Math.max(-0.5, Math.min(0.5, spineGroup.rotation.x + deltaY * 0.01));

      previousPos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        spineGroup.rotation.y = Math.sin(time * 0.4) * 0.3 + 0.3; // Angle toward nerve root
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isHerniated, isDecompressed, selectedLevel]);

  const currentLevel = levelDetails[selectedLevel];

  return (
    <div className="w-full rounded-3xl bg-midnight-900/80 border border-slate-800 p-6 lg:p-8 space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
            Signature Experience 01
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            3D Spine & Intervertebral Disc Lab
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          Rotate the functional spinal unit in 3D. Toggle disc herniation and decompression to understand how mechanical therapy relieves radiating sciatic nerve pressure.
        </p>
      </div>

      {/* Level Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {(["C5-C6", "T4-T5", "L4-L5", "L5-S1"] as const).map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedLevel === lvl
                ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow scale-105"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            {lvl} ({levelDetails[lvl].region.split("/")[0]})
          </button>
        ))}
      </div>

      {/* 3D Viewport + Pathology Interactive Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 3D Canvas */}
        <div className="lg:col-span-7 h-[420px] rounded-2xl bg-midnight-950/90 border border-slate-800/90 relative overflow-hidden flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Interactive Pathology Toggles */}
          <div className="absolute bottom-4 inset-x-4 z-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => {
                setIsHerniated(!isHerniated);
                if (!isHerniated) setIsDecompressed(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                isHerniated
                  ? "bg-pain-crimson text-white shadow-pain-glow ring-2 ring-pain-crimson"
                  : "bg-slate-900/90 text-slate-300 border border-slate-700 hover:bg-slate-800"
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Simulate Disc Herniation</span>
            </button>

            <button
              onClick={() => {
                setIsDecompressed(!isDecompressed);
                if (!isDecompressed) setIsHerniated(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                isDecompressed
                  ? "bg-recovery-mint text-slate-950 shadow-recovery-glow ring-2 ring-recovery-mint"
                  : "bg-slate-900/90 text-slate-300 border border-slate-700 hover:bg-slate-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulate Decompression</span>
            </button>
          </div>
        </div>

        {/* Right Clinical Inspection Data */}
        <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-midnight-950/60 border border-slate-800/80">
          <div>
            <span className="text-[10px] font-mono uppercase text-clinical-cyan font-bold tracking-wider">
              Segment Analysis
            </span>
            <h4 className="text-xl font-display font-bold text-white mt-0.5">{currentLevel.name}</h4>
            <p className="text-xs text-slate-400">{currentLevel.region}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs space-y-1">
            <span className="font-semibold text-clinical-cyan block">Nerve Root Interface:</span>
            <p className="text-slate-300">{currentLevel.nerveInvolved}</p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-slate-400 block mb-1.5">Common Conditions:</span>
            <div className="flex flex-wrap gap-1.5">
              {currentLevel.conditions.map((c) => (
                <span key={c} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-clinical-cyan/10 border border-clinical-cyan/30 text-xs space-y-1">
            <span className="font-semibold text-clinical-cyan flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Physiotherapy Target:
            </span>
            <p className="text-slate-300">{currentLevel.physioIntervention}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
