"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Server, Cpu, Database } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./motion/ScrollReveal";
import { GithubIcon } from "./icons/BrandIcons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-[0.25em]">
          02 // SELECTED WORK
        </span>
        <div className="h-[1px] flex-1 bg-white/[0.08]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F5F5]">
            Engineered for impact.
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A8A] max-w-xl">
            Selected full-stack software products built with modern scalable stacks, resilient database architectures, and type-safe workflows.
          </p>
        </div>

        <div className="text-xs font-mono text-[#5A5A5A] hidden sm:block">
          TOTAL 02 PRODUCTION CASE STUDIES
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10 sm:gap-16">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onOpenModal={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Interactive Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#121212] border border-white/15 p-6 sm:p-10 shadow-2xl no-scrollbar flex flex-col gap-8 text-[#F5F5F5]"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-white/50">PROJECT {selectedProject.num}</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  aria-label="Close project modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-normal">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Deep Architecture Overview */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Database size={14} className="text-sky-400" />
                  SYSTEM OVERVIEW & ARCHITECTURE
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Cpu size={14} className="text-emerald-400" />
                  KEY CAPABILITIES & IMPLEMENTATION
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Server size={14} className="text-purple-400" />
                  TECHNICAL HIGHLIGHTS
                </h4>
                <ul className="flex flex-col gap-2">
                  {selectedProject.architectureHighlights.map((arch, idx) => (
                    <li key={idx} className="text-xs text-zinc-400 pl-4 border-l border-white/20">
                      {arch}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <GithubIcon size={15} />
                  <span>GitHub Repository</span>
                </a>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                  >
                    <ExternalLink size={15} />
                    <span>Live Deployment</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
