"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import MagneticButton from "./motion/MagneticButton";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./icons/BrandIcons";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "PROBLEM SOLVING", href: "#problem-solving" },
  { label: "DSA LAB", href: "#interactive-lab" },
  { label: "STACK", href: "#stack" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

const TOP_NAV_SOCIALS = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/TechPrateek",
    icon: LeetCodeIcon,
    title: "190+ LeetCode (1548 Rating)",
    accentHover: "hover:text-amber-400 hover:border-amber-400/40",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prateekyadav360/",
    icon: LinkedinIcon,
    title: "Prateek Yadav on LinkedIn",
    accentHover: "hover:text-sky-400 hover:border-sky-400/40",
  },
  {
    name: "GitHub",
    url: "https://github.com/TechPrateek",
    icon: GithubIcon,
    title: "TechPrateek on GitHub",
    accentHover: "hover:text-white hover:border-white/40",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-3 sm:p-5 transition-all duration-500 pointer-events-none">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 transition-all duration-500 rounded-full ${
            scrolled
              ? "py-2.5 sm:py-3 bg-[#101010]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "py-3.5 sm:py-4 bg-[#080808]/60 backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Logo / Name */}
          <MagneticButton magneticStrength={0.2} asAnchor href="#hero">
            <span className="flex items-center gap-2.5 group">
              <span className="font-bold text-sm sm:text-base tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors">
                PRATEEK YADAV
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#5A5A5A] uppercase border border-white/10 rounded px-1.5 py-0.5">
                DEV
              </span>
            </span>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-wider text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Control Buttons & Socials */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle (Dark / Light White Mode) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer flex items-center justify-center shadow-sm"
              title={`Switch to ${theme === "dark" ? "Light (White)" : "Dark (Black)"} Mode`}
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-amber-400" />
              ) : (
                <Moon size={15} className="text-sky-400" />
              )}
            </button>

            {/* Direct Social Icon Links in Navbar */}
            <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full p-1">
              {TOP_NAV_SOCIALS.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={soc.title}
                    className={`p-1.5 sm:p-2 rounded-full text-[#8A8A8A] hover:bg-white/10 transition-all flex items-center justify-center border border-transparent ${soc.accentHover}`}
                    aria-label={`Open ${soc.name} profile`}
                  >
                    <IconComponent size={15} />
                  </a>
                );
              })}
            </div>

            {/* Availability Beacon */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-[#8A8A8A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase text-[10px] text-zinc-300 font-medium">
                AVAILABLE
              </span>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 rounded-full bg-white/[0.06] border border-white/10 text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-[0.25em]">
                NAVIGATION
              </span>
              <div className="flex flex-col gap-5">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    className="flex items-center justify-between text-2xl font-medium tracking-tight text-[#8A8A8A] hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={20} className="text-[#5A5A5A]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {TOP_NAV_SOCIALS.map((soc) => {
                    const IconComponent = soc.icon;
                    return (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/[0.05] border border-white/10 text-white flex items-center justify-center"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>

                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-white/[0.05] border border-white/10 text-white flex items-center justify-center"
                  aria-label="Toggle theme in mobile menu"
                >
                  {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-sky-400" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
