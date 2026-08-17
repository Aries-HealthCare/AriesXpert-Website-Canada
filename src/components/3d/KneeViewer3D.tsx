"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CheckCircle2, AlertTriangle, ShieldCheck, Activity } from "lucide-react";

type KneeMode = "healthy" | "osteoarthritis" | "acl-tear" | "tkr-implant";

export const KneeViewer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [kneeMode, setKneeMode] = useState<KneeMode>("healthy");
  const [visibleLayers, setVisibleLayers] = useState({
    bones: true,
    cartilage: true,
    meniscus: true,
    cruciates: true,
    collaterals: true,
  });

  const modeDescriptions = {
    healthy: {
      title: "Healthy Physiological Knee",
      status: "Optimal Joint Homeostasis",
      statusColor: "text-recovery-mint",
      description: "Smooth hyaline articular cartilage buffers tibiofemoral ground reaction forces. Intact cruciate (ACL/PCL) and collateral (MCL/LCL) ligaments provide robust dynamic stability during pivoting.",
      rehabKey: "Prevention, core-to-hip kinetic chain conditioning, and deceleration biomechanics."
    },
    osteoarthritis: {
      title: "Degenerative Knee Osteoarthritis",
      status: "Cartilage Fibrillation & Narrowed Joint Space",
      statusColor: "text-pain-amber",
      description: "Progressive thinning and breakdown of articular cartilage, accompanied by subchondral sclerosis and marginal osteophytes. Causes morning stiffness, crepitus, and load-dependent discomfort.",
      rehabKey: "High-repetition low-impact joint lubrication (cycling), progressive quad strengthening, and off-loading exercises."
    },
    "acl-tear": {
      title: "Acute Anterior Cruciate Ligament (ACL) Tear",
      status: "Structural Ligamentous Laxity",
      statusColor: "text-pain-crimson",
      description: "Complete or partial disruption of the ACL fibers, resulting in anterior tibial translation and rotational instability ('giving way' sensation under pivoting loads).",
      rehabKey: "Restoration of terminal extension (0°), neuromuscular hamstring/quad stabilization, and pre/post-operative athletic progression."
    },
    "tkr-implant": {
      title: "Post-Surgical Total Knee Arthroplasty (TKR)",
      status: "Prosthetic Joint Integration",
      statusColor: "text-clinical-cyan",
      description: "Precision medical-grade titanium femoral/tibial trays with an ultra-high-molecular-weight polyethylene spacer replacing arthritic joint surfaces.",
      rehabKey: "Phased post-operative rehabilitation: 0° extension priority, scar tissue mobilization, quad activation, and gait normalization."
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b12, 0.04);

    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 5.0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0x0ea5e9, 0.9));
    const keyLight = new THREE.DirectionalLight(0x00f2fe, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 1.5);
    rimLight.position.set(-4, -3, -3);
    scene.add(rimLight);

    const kneeGroup = new THREE.Group();
    scene.add(kneeGroup);

    // Materials based on Mode
    const isImplant = kneeMode === "tkr-implant";
    const isOA = kneeMode === "osteoarthritis";
    const isAclTorn = kneeMode === "acl-tear";

    const boneMaterial = new THREE.MeshPhysicalMaterial({
      color: isImplant ? 0x94a3b8 : isOA ? 0xd1d5db : 0xf8fafc,
      metalness: isImplant ? 0.85 : 0.1,
      roughness: isImplant ? 0.2 : isOA ? 0.6 : 0.3,
      emissive: isImplant ? 0x00f2fe : 0x00f2fe,
      emissiveIntensity: isImplant ? 0.3 : 0.1,
    });

    const cartilageMaterial = new THREE.MeshPhysicalMaterial({
      color: isOA ? 0x92400e : 0x00f2fe,
      transmission: isOA ? 0.1 : 0.6,
      thickness: 0.3,
      transparent: true,
      opacity: isOA ? 0.4 : 0.85,
    });

    const meniscusMaterial = new THREE.MeshStandardMaterial({
      color: isOA ? 0xb45309 : 0x06d6a0,
      roughness: 0.4,
      metalness: 0.1,
    });

    const ligamentMaterial = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.4,
    });

    const tornAclMaterial = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.8,
    });

    // 1. Femur (Distal Thigh Bone)
    const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.75, 1.8, 24), boneMaterial);
    femur.position.set(0, 1.1, 0);
    kneeGroup.add(femur);

    // Femoral Condyles (Medial & Lateral)
    const condyleL = new THREE.Mesh(new THREE.SphereGeometry(0.38, 24, 24), boneMaterial);
    condyleL.position.set(-0.35, 0.25, 0);
    kneeGroup.add(condyleL);

    const condyleR = new THREE.Mesh(new THREE.SphereGeometry(0.38, 24, 24), boneMaterial);
    condyleR.position.set(0.35, 0.25, 0);
    kneeGroup.add(condyleR);

    // 2. Tibia (Proximal Shin Bone)
    const tibia = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.5, 1.8, 24), boneMaterial);
    tibia.position.set(0, -1.2, 0);
    kneeGroup.add(tibia);

    // 3. Patella (Knee Cap)
    const patella = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 16), boneMaterial);
    patella.position.set(0, 0.2, 0.65);
    kneeGroup.add(patella);

    // 4. Cartilage & Menisci
    if (visibleLayers.cartilage && !isImplant) {
      const cartilageCap = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, isOA ? 0.04 : 0.1, 24), cartilageMaterial);
      cartilageCap.position.set(0, 0.08, 0);
      kneeGroup.add(cartilageCap);
    }

    if (visibleLayers.meniscus && !isImplant) {
      const medialMeniscus = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.07, 12, 24, Math.PI * 1.5), meniscusMaterial);
      medialMeniscus.position.set(-0.32, -0.05, 0);
      medialMeniscus.rotation.x = Math.PI / 2;
      kneeGroup.add(medialMeniscus);

      const lateralMeniscus = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.07, 12, 24, Math.PI * 1.5), meniscusMaterial);
      lateralMeniscus.position.set(0.32, -0.05, 0);
      lateralMeniscus.rotation.x = Math.PI / 2;
      lateralMeniscus.rotation.z = Math.PI;
      kneeGroup.add(lateralMeniscus);
    }

    // 5. Cruciate Ligaments (ACL & PCL)
    if (visibleLayers.cruciates && !isImplant) {
      // ACL
      const aclGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.65, 12);
      const aclMesh = new THREE.Mesh(aclGeo, isAclTorn ? tornAclMaterial : ligamentMaterial);
      aclMesh.position.set(0.05, 0.1, 0);
      aclMesh.rotation.set(0.4, 0, 0.5);
      kneeGroup.add(aclMesh);

      // PCL
      const pclGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.7, 12);
      const pclMesh = new THREE.Mesh(pclGeo, ligamentMaterial);
      pclMesh.position.set(-0.05, 0.1, -0.1);
      pclMesh.rotation.set(-0.4, 0, -0.5);
      kneeGroup.add(pclMesh);
    }

    // 6. Collateral Ligaments (MCL & LCL)
    if (visibleLayers.collaterals && !isImplant) {
      const mcl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.2, 12), ligamentMaterial);
      mcl.position.set(-0.68, 0.1, 0);
      kneeGroup.add(mcl);

      const lcl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.2, 12), ligamentMaterial);
      lcl.position.set(0.68, 0.1, 0);
      kneeGroup.add(lcl);
    }

    // Interactive Drag
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

      kneeGroup.rotation.y += deltaX * 0.01;
      kneeGroup.rotation.x = Math.max(-0.4, Math.min(0.4, kneeGroup.rotation.x + deltaY * 0.01));

      previousPos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!isDragging) {
        kneeGroup.rotation.y = Math.sin(t * 0.3) * 0.35;
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
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [kneeMode, visibleLayers]);

  const currentModeInfo = modeDescriptions[kneeMode];

  return (
    <div className="w-full rounded-3xl bg-midnight-900/80 border border-slate-800 p-6 lg:p-8 space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase text-recovery-mint font-bold tracking-wider">
            Signature Experience 02
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            3D Knee & Articular Joint Lab
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          Compare a healthy knee joint against Osteoarthritis, acute ACL ligament tears, and post-surgical Total Knee Arthroplasty (TKR) implants.
        </p>
      </div>

      {/* Comparative Mode Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {(
          [
            { id: "healthy", label: "01. Healthy Knee" },
            { id: "osteoarthritis", label: "02. Osteoarthritis" },
            { id: "acl-tear", label: "03. ACL Tear" },
            { id: "tkr-implant", label: "04. TKR Implant" },
          ] as const
        ).map((mode) => (
          <button
            key={mode.id}
            onClick={() => setKneeMode(mode.id)}
            className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${
              kneeMode === mode.id
                ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow scale-[1.02]"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Main 3D Canvas + Clinical Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 3D Viewport */}
        <div className="lg:col-span-7 h-[420px] rounded-2xl bg-midnight-950/90 border border-slate-800/90 relative overflow-hidden flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Layer toggles */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 p-1 rounded-lg bg-midnight-900/90 border border-slate-800 backdrop-blur-md text-[10px]">
            <button
              onClick={() => setVisibleLayers(prev => ({ ...prev, cartilage: !prev.cartilage }))}
              className={`px-2 py-1 rounded ${visibleLayers.cartilage ? "bg-clinical-cyan/20 text-clinical-cyan" : "text-slate-400"}`}
            >
              Cartilage
            </button>
            <button
              onClick={() => setVisibleLayers(prev => ({ ...prev, meniscus: !prev.meniscus }))}
              className={`px-2 py-1 rounded ${visibleLayers.meniscus ? "bg-recovery-mint/20 text-recovery-mint" : "text-slate-400"}`}
            >
              Meniscus
            </button>
            <button
              onClick={() => setVisibleLayers(prev => ({ ...prev, cruciates: !prev.cruciates }))}
              className={`px-2 py-1 rounded ${visibleLayers.cruciates ? "bg-aries-coral/20 text-aries-coral" : "text-slate-400"}`}
            >
              ACL/PCL
            </button>
          </div>
        </div>

        {/* Right Clinical Inspection */}
        <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-midnight-950/60 border border-slate-800/80">
          <div>
            <span className={`text-xs font-mono uppercase font-bold ${currentModeInfo.statusColor}`}>
              {currentModeInfo.status}
            </span>
            <h4 className="text-xl font-display font-bold text-white mt-1">{currentModeInfo.title}</h4>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {currentModeInfo.description}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-clinical-cyan" /> Rehabilitation Focus:
            </span>
            <p className="text-slate-300">{currentModeInfo.rehabKey}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
