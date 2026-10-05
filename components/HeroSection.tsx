"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Camera, Cpu, HardHat } from "lucide-react";

const pillars = [
  { label: "Heavy equipment", href: "#heavy-equipment", icon: HardHat, color: "text-amber-400" },
  { label: "Technology", href: "#technology", icon: Cpu, color: "text-cyan-400" },
  { label: "Multimedia", href: "#syah-studio", icon: Camera, color: "text-violet-300" },
];

const heroMessages = [
  "sinergi nyata.",
  "inovasi yang terhubung.",
  "industri yang lebih tangguh.",
  "visual yang bercerita.",
  "konten yang menginspirasi.",
  "setiap momen jadi bermakna.",
];

export default function HeroSection() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(heroMessages[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const currentMessage = heroMessages[messageIndex];
    const isComplete = characterCount === currentMessage.length;
    const delay = isDeleting ? 36 : isComplete ? 1800 : 64;
    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && characterCount === 0) {
        setMessageIndex((index) => (index + 1) % heroMessages.length);
        setIsDeleting(false);
      } else {
        setCharacterCount((count) => count + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterCount, isDeleting, messageIndex]);

  return (
    <section className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden border-b border-white/[0.06] px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[#090d14]" />
      <video autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]">
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090d14] via-[#090d14]/90 to-[#090d14]/40" />
      <div className="absolute -right-24 top-1/4 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.09] blur-[120px]" />
      <div className="mx-auto grid w-full max-w-7xl items-end gap-16 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[.18em] text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            Satu grup · tiga pilar terhubung
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="max-w-4xl font-display text-5xl font-semibold leading-[1.03] tracking-[-.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            Menggerakkan bisnis<br className="hidden sm:block" /> lewat{" "}<span aria-label={heroMessages[messageIndex]} className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">{heroMessages[messageIndex].slice(0, characterCount)}<span aria-hidden="true" className="ml-0.5 inline-block h-[.78em] w-[2px] translate-y-[.08em] animate-pulse bg-cyan-300" /></span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .2 }} className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Syah Group menghubungkan kapabilitas industri, teknologi yang relevan, dan kreativitas visual dalam satu ekosistem bisnis.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .3 }} className="mt-9 flex flex-wrap gap-3">
            <Link href="#pillars" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a0d14] transition hover:bg-cyan-100">Jelajahi grup <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/contact" className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]">Hubungi tim kami</Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .25 }} className="hidden lg:block">
          <div className="ml-auto max-w-sm rounded-3xl border border-white/10 bg-[#111722]/70 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between"><span className="text-xs font-medium uppercase tracking-[.16em] text-slate-500">Ekosistem kami</span><span className="text-xs text-slate-500">01 / 03</span></div>
            <div className="space-y-2">
              {pillars.map(({ label, href, icon: Icon, color }, i) => <Link key={label} href={href} className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.04]"><span className={`grid h-11 w-11 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] ${color}`}><Icon size={19} className="transition-transform group-hover:scale-110" /></span><span className="flex-1"><span className="block text-sm font-semibold text-slate-100">{label}</span><span className="mt-1 block text-xs text-slate-500">Pilar 0{i + 1}</span></span><ArrowRight size={15} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-white" /></Link>)}
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-white/[0.07] px-3 pt-4 text-xs text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Terintegrasi sejak awal</div>
          </div>
        </motion.div>
      </div>
      <Link href="#group-advantage" aria-label="Lihat keunggulan grup" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.16em] text-slate-500 transition hover:text-white md:flex"><ArrowDown size={14} /> Lihat selengkapnya</Link>
    </section>
  );
}
