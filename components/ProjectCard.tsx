"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, ShieldCheck, Activity, Layers } from "lucide-react";
import { Project } from "@/data/projects";
import { LUXURY_EASE } from "@/lib/animations";
import { GithubIcon } from "./icons/BrandIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt calculations
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: LUXURY_EASE }}
      className="group relative w-full"
      data-cursor="project"
      data-cursor-text={`VIEW ${project.num}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onClick={() => onOpenModal(project)}
        className="relative flex flex-col lg:flex-row items-stretch rounded-2xl sm:rounded-3xl bg-white dark:bg-[#101010]/85 border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Subtle dynamic glow accent */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
          style={{ background: project.accentGlow }}
        />

        {/* Visual Preview / Blueprint Side */}
        <div className="relative w-full lg:w-1/2 min-h-[300px] sm:min-h-[380px] lg:min-h-full bg-zinc-50 dark:bg-[#0B0B0B] border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Top Project Tag and Status */}
          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-xs text-zinc-600 dark:text-[#8A8A8A] tracking-wider font-medium">
              {project.category}
            </span>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-[#5A5A5A] border border-zinc-300 dark:border-white/[0.08] rounded-full px-2.5 py-0.5 bg-white dark:bg-transparent">
              {project.year}
            </span>
          </div>

          {/* Interactive Graphic / Blueprint Representation */}
          <div className="my-auto py-8 relative flex items-center justify-center">
            {project.id === "mechonway" ? (
              // MechOnWay Visual Concept Component
              <div className="relative w-full max-w-sm flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-[#121212]/90 border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                    <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-[#F5F5F5]">GEO-DISPATCH ENGINE</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800/50 font-medium">
                    MATCHING
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-600 dark:text-[#8A8A8A]">
                  <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/5 flex flex-col">
                    <span className="text-[10px] text-zinc-400 dark:text-[#5A5A5A]">USER LAT/LONG</span>
                    <span className="text-zinc-900 dark:text-zinc-300 font-medium">28.6139° N, 77.2090° E</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/5 flex flex-col">
                    <span className="text-[10px] text-zinc-400 dark:text-[#5A5A5A]">NEAREST MECHANIC</span>
                    <span className="text-zinc-900 dark:text-zinc-300 font-medium">1.2 km away • 4 min</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-[#8A8A8A] pt-1">
                  <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 font-medium">
                    <ShieldCheck size={13} className="text-emerald-500" />
                    Verified Partner Network
                  </span>
                  <span className="text-zinc-900 dark:text-white font-medium">Auto-Routed</span>
                </div>
              </div>
            ) : (
              // PhysioConnect Visual Concept Component
              <div className="relative w-full max-w-sm flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-[#121212]/90 border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-emerald-500" />
                    <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-[#F5F5F5]">CLINICAL REHAB PORTAL</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50 font-medium">
                    RECOVERY 86%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-600 dark:text-[#8A8A8A]">
                  <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/5 flex flex-col">
                    <span className="text-[10px] text-zinc-400 dark:text-[#5A5A5A]">PRESCRIPTION</span>
                    <span className="text-zinc-900 dark:text-zinc-300 font-medium">Cervical Mobility & Stretches</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/5 flex flex-col">
                    <span className="text-[10px] text-zinc-400 dark:text-[#5A5A5A]">COMPLIANCE</span>
                    <span className="text-zinc-900 dark:text-zinc-300 font-medium">14-Day Streak • Active</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-[#8A8A8A] pt-1">
                  <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 font-medium">
                    <Layers size={13} className="text-emerald-500" />
                    PostgreSQL Schema
                  </span>
                  <span className="text-zinc-900 dark:text-white font-medium">Encrypted Telemetry</span>
                </div>
              </div>
            )}
          </div>

          {/* Metric Telemetry Row */}
          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200 dark:border-white/[0.08] pt-4 text-center">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 dark:text-[#5A5A5A] uppercase">{m.label}</span>
                <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-[#F5F5F5]">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content & Details Side */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Project Index Number */}
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-light tracking-tighter text-zinc-400 dark:text-[#5A5A5A] group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-500">
                {project.num}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  EXPLORE ARCHITECTURE
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/5 group-hover:bg-zinc-950 dark:group-hover:bg-white text-zinc-900 dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-[#F5F5F5] group-hover:text-sky-600 dark:group-hover:text-white transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-[#8A8A8A] leading-relaxed">
              {project.description}
            </p>

            {/* Bullet features */}
            <div className="flex flex-col gap-2 pt-2">
              {project.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-[#8A8A8A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills & Action Bar */}
          <div className="flex flex-col gap-5 border-t border-zinc-200 dark:border-white/[0.08] pt-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] text-[11px] font-mono text-zinc-700 dark:text-[#8A8A8A] group-hover:border-zinc-300 dark:group-hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(project);
                }}
                className="flex-1 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-[#F5F5F5] text-xs font-mono uppercase tracking-wider transition-colors border border-transparent dark:border-white/10 flex items-center justify-center gap-2 cursor-pointer font-medium"
              >
                <span>Full Case Study</span>
                <ArrowUpRight size={14} />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/[0.04] hover:bg-zinc-200 dark:hover:bg-white/[0.1] text-zinc-800 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white transition-colors border border-zinc-200 dark:border-white/10"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <GithubIcon size={16} />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/[0.04] hover:bg-zinc-200 dark:hover:bg-white/[0.1] text-zinc-800 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white transition-colors border border-zinc-200 dark:border-white/10"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
