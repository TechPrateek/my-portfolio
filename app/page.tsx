"use client";

import { useState } from "react";
import CinematicLoader from "@/components/CinematicLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CodingStats from "@/components/CodingStats";
import InteractiveSandbox from "@/components/InteractiveSandbox";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#080808] text-[#F5F5F5] overflow-x-hidden">
      {/* 1. Cinematic Entrance Loading Experience */}
      <CinematicLoader onComplete={() => setLoaderFinished(true)} />

      {/* 2. Floating Navbar with Audio Haptics */}
      <Navbar />

      {/* 3. Hero Section with Multi-Geometry 3D Core & Typography */}
      <Hero />

      {/* 4. Infinite Marquee Ticker */}
      <Marquee />

      {/* 5. Editorial About Section */}
      <About />

      {/* 6. Featured Selected Projects */}
      <Projects />

      {/* 7. Problem Solving & DSA Telemetry */}
      <CodingStats />

      {/* 8. Interactive Engineering Lab (Live DSA Visualizer & CLI Terminal) */}
      <InteractiveSandbox />

      {/* 9. Interactive Technology Ecosystem */}
      <Skills />

      {/* 10. Experience / Journey Roadmap (Galgotias College 2024-2028) */}
      <Experience />

      {/* 11. Verified Benchmarks & Achievements */}
      <Achievements />

      {/* 12. Dramatic Contact Section */}
      <Contact />

      {/* 13. Minimal Footer with Live IST Clock */}
      <Footer />
    </main>
  );
}
