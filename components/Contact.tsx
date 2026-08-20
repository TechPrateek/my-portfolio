"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, Sparkles, Send } from "lucide-react";
import MagneticButton from "./motion/MagneticButton";
import ScrollReveal from "./motion/ScrollReveal";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./icons/BrandIcons";

const EMAIL = "prateekyadav8006@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;
    const mailtoUrl = `mailto:${EMAIL}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      name || "Visitor"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background dynamic ambient glow */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-gradient-to-t from-sky-500/10 via-white/[0.02] to-transparent opacity-40" />

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-[0.25em]">
          07 // GET IN TOUCH
        </span>
        <div className="h-[1px] flex-1 bg-white/[0.08]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Headline & Direct Socials */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] uppercase leading-[0.95]">
              LET&apos;S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">MEANINGFUL.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#8A8A8A] max-w-lg mt-2">
              Have an idea, opportunity, or interesting problem? Let&apos;s talk about software engineering, competitive algorithms, or high-impact web products.
            </p>
          </div>

          {/* Interactive Email Copy Capsule */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <a
              href={`mailto:${EMAIL}`}
              className="px-7 py-3.5 rounded-full bg-[#F5F5F5] hover:bg-white text-black font-medium text-xs sm:text-sm tracking-wide uppercase flex items-center gap-3 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              <Mail size={16} />
              <span>EMAIL ME DIRECTLY</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 text-xs font-mono uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">EMAIL COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-zinc-400" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Direct External Profiles */}
          <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">
              CONNECTED PLATFORMS
            </span>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                asAnchor
                href="https://www.linkedin.com/in/prateekyadav360/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2.5 rounded-xl bg-[#121212] hover:bg-[#1A1A1A] border border-white/[0.08] hover:border-sky-400/40 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-all"
              >
                <LinkedinIcon size={15} className="text-sky-400" />
                <span>LINKEDIN</span>
                <ArrowUpRight size={13} className="text-[#5A5A5A] group-hover:text-white" />
              </MagneticButton>

              <MagneticButton
                asAnchor
                href="https://github.com/TechPrateek"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2.5 rounded-xl bg-[#121212] hover:bg-[#1A1A1A] border border-white/[0.08] hover:border-white/30 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-all"
              >
                <GithubIcon size={15} className="text-white" />
                <span>GITHUB</span>
                <ArrowUpRight size={13} className="text-[#5A5A5A] group-hover:text-white" />
              </MagneticButton>

              <MagneticButton
                asAnchor
                href="https://leetcode.com/u/TechPrateek"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2.5 rounded-xl bg-[#121212] hover:bg-[#1A1A1A] border border-white/[0.08] hover:border-amber-400/40 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-all"
              >
                <LeetCodeIcon size={15} className="text-amber-400" />
                <span>LEETCODE</span>
                <ArrowUpRight size={13} className="text-[#5A5A5A] group-hover:text-white" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form Card */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={0.2} className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#101010]/95 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5F5F5] flex items-center gap-2 font-semibold">
                <Sparkles size={14} className="text-sky-400" />
                SEND A MESSAGE
              </span>
              <span className="text-[11px] font-mono text-[#5A5A5A]">RESPONSE: &lt; 24H</span>
            </div>

            <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-[11px] font-mono text-[#8A8A8A] uppercase">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-[11px] font-mono text-[#8A8A8A] uppercase">
                  Your Email <span className="text-sky-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-[11px] font-mono text-[#8A8A8A] uppercase">
                  Message / Project Brief <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Dispatch Message</span>
                <Send size={14} />
              </button>

              {formSent && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-300 text-center font-medium">
                  ✓ Mail client triggered. Looking forward to speaking!
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
