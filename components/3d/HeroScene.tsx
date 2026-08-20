"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [activeMetric, setActiveMetric] = useState<string>("GRAPH: 48 VERTICES");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;

    container.appendChild(renderer.domElement);

    // OrbitControls for intuitive 360 degree drag
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.maxPolarAngle = Math.PI / 2 + 0.3;
    controls.minPolarAngle = Math.PI / 6;

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // =========================================================
    // 2. CENTRAL QUANTUM CRYSTAL CORE (Obsidian & Laser Blue)
    // =========================================================
    const innerCrystalGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerCrystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0f1d,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      metalness: 0.95,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.98,
      flatShading: true,
    });
    const innerCrystal = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    masterGroup.add(innerCrystal);

    // Outer Wireframe Geodesic Cage
    const outerCageGeo = new THREE.IcosahedronGeometry(1.65, 1);
    const outerCageMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const outerCage = new THREE.Mesh(outerCageGeo, outerCageMat);
    masterGroup.add(outerCage);

    // =========================================================
    // 3. ALGORITHMIC NEURAL GRAPH (Nodes & Laser Edges)
    // =========================================================
    const nodeCount = 36;
    const nodePositions: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.8,
    });

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.6;
      const pos = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      nodePositions.push(pos);

      const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      masterGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);
    }

    // Connect Nearby Nodes with Laser Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
    });

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 1.35) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const line = new THREE.Line(lineGeo, lineMaterial);
          masterGroup.add(line);
        }
      }
    }

    // Dynamic Flowing Data Pulse Packets
    const pulseCount = 14;
    const pulseMeshes: THREE.Mesh[] = [];
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });

    for (let i = 0; i < pulseCount; i++) {
      const pGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const pMesh = new THREE.Mesh(pGeo, pulseMat);
      masterGroup.add(pMesh);
      pulseMeshes.push(pMesh);
    }

    // =========================================================
    // 4. COORDINATE ORBITAL RINGS
    // =========================================================
    const createRing = (radius: number, color = 0x38bdf8, opacity = 0.35) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.02, 64);
      const rMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity,
      });
      const rMesh = new THREE.Mesh(ringGeo, rMat);
      return rMesh;
    };

    const ring1 = createRing(2.7, 0x38bdf8, 0.3);
    ring1.rotation.x = Math.PI / 2.2;
    masterGroup.add(ring1);

    const ring2 = createRing(3.1, 0x10b981, 0.25);
    ring2.rotation.y = Math.PI / 2.5;
    masterGroup.add(ring2);

    // Volumetric Ambient Quantum Particles
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // =========================================================
    // 5. LIGHTING MATRIX
    // =========================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x38bdf8, 3.5, 12);
    coreLight.position.set(0, 0, 0);
    masterGroup.add(coreLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 2.0, 10);
    emeraldLight.position.set(3, 3, 2);
    scene.add(emeraldLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // =========================================================
    // 6. 60FPS ANIMATION LOOP
    // =========================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Crystal & Cage rotations
      innerCrystal.rotation.y = elapsedTime * 0.35;
      innerCrystal.rotation.x = elapsedTime * 0.2;
      outerCage.rotation.y = -elapsedTime * 0.25;
      outerCage.rotation.z = Math.sin(elapsedTime * 0.4) * 0.15;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.1;
      particleCloud.rotation.y = elapsedTime * 0.02;

      // Animate dynamic data pulse packets traveling along nodes
      pulseMeshes.forEach((pulse, idx) => {
        const fromIdx = idx % nodeCount;
        const toIdx = (idx + 7) % nodeCount;
        const p1 = nodePositions[fromIdx];
        const p2 = nodePositions[toIdx];
        const t = (Math.sin(elapsedTime * 2.0 + idx) + 1) / 2;
        pulse.position.lerpVectors(p1, p2, t);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      innerCrystalGeo.dispose();
      outerCageGeo.dispose();
      innerCrystalMat.dispose();
      outerCageMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
        title="Interactive 3D Algorithmic Core — Drag to rotate 360°"
      />
    </div>
  );
}
