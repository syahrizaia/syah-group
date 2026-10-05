"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Clapperboard, Cpu, HardHat, Radio, ShieldCheck } from "lucide-react";

const pillars = [
  {
    id: "heavy-equipment", number: "01", name: "Syah Heavy Equipment", category: "INDUSTRY & EQUIPMENT", icon: HardHat, accent: "amber", color: "text-amber-400", glow: "bg-amber-400/10", edge: "hover:border-amber-400/40",
    description: "Industrial machinery, fleet support, and field service for projects that keep the real economy moving.",
    capabilities: ["Equipment supply", "Fleet rental", "Service & maintenance"],
    metric: "Siap untuk industri", metricLabel: "Armada & dukungan lapangan", href: "https://syahheavyequipment.vercel.app", cta: "Portal alat berat",
  },
  {
    id: "technology", number: "02", name: "Syah Tech", category: "SOFTWARE & TECHNOLOGY", icon: Cpu, accent: "cyan", color: "text-cyan-400", glow: "bg-cyan-400/10", edge: "hover:border-cyan-400/40",
    description: "Software and technology solutions that improve visibility, connect teams, and help businesses scale with confidence.",
    capabilities: ["Enterprise software", "IT hardware", "Cloud & infrastructure"],
    metric: "Siap mendukung digital", metricLabel: "Sistem & infrastruktur", href: "https://syahtech.vercel.app", cta: "Portal teknologi",
  },
  {
    id: "syah-studio", number: "03", name: "Syah Studio", category: "MULTIMEDIA & VISUAL", icon: Camera, accent: "violet", color: "text-violet-300", glow: "bg-violet-400/10", edge: "hover:border-violet-300/40",
    description: "Produksi visual untuk membantu merek dan organisasi menyampaikan cerita melalui videografi, fotografi, dan editing.",
    capabilities: ["Videografi", "Fotografi", "Editing & pascaproduksi"],
    metric: "Visual siap bercerita", metricLabel: "Produksi hingga pascaproduksi", href: "https://syahstudio.vercel.app", cta: "Portal multimedia",
  },
];

const outcomes = [
  { icon: Radio, title: "Connected operations", detail: "Digital systems support teams and assets in the field.", accent: "text-cyan-300" },
  { icon: ShieldCheck, title: "Reliable execution", detail: "Equipment and service capability built around continuity.", accent: "text-amber-300" },
  { icon: Clapperboard, title: "Cerita visual", detail: "Kreativitas dan produksi konten memperkuat cara bisnis berkomunikasi.", accent: "text-violet-300" },
];

export default function BentoGrid() {
  return (
    <>
      <section id="pillars" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
            <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Portofolio yang saling menguatkan</p><h2 className="font-display text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl md:text-5xl">Tiga pilar.<br className="sm:hidden" /> Satu ekosistem.</h2></div>
            <p className="max-w-md text-sm leading-6 text-slate-400 md:text-base">Setiap lini bisnis membawa kapabilitas tersendiri. Bersama, ketiganya menjembatani operasi fisik, teknologi digital, dan komunikasi visual.</p>
          </motion.div>
          <div className="grid gap-4 lg:grid-cols-3">
            {pillars.map(({ id, number, name, category, icon: Icon, color, glow, edge, description, capabilities, metric, metricLabel, href, cta }, i) => (
              <motion.article id={id} key={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .5, delay: i * .1 }} className={`group relative flex min-h-[440px] scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-[#101620] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#131b27] sm:p-7 ${edge}`}>
                <div className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full ${glow} blur-[80px] transition duration-500 group-hover:scale-125`} />
                <div className="relative flex items-center justify-between"><span className="text-xs font-medium tracking-[.16em] text-slate-500">PILAR / {number}</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium tracking-wide text-slate-400">EKOSISTEM GRUP</span></div>
                <div className="relative mt-8"><div className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] ${color} transition duration-300 group-hover:scale-110`}><Icon size={22} /></div><p className={`mb-2 text-[10px] font-semibold tracking-[.16em] ${color}`}>{category}</p><h3 className="font-display text-2xl font-semibold tracking-tight text-white">{name}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{description}</p></div>
                <div className="relative mt-5 grid grid-cols-3 gap-2 border-y border-white/[0.07] py-4">{capabilities.map((capability) => <span key={capability} className="text-[11px] leading-4 text-slate-300">{capability}</span>)}</div>
                <div className="relative mt-auto flex items-end justify-between pt-5"><div><p className="text-sm font-semibold text-white">{metric}</p><p className="mt-1 text-[11px] text-slate-500">{metricLabel}</p></div><Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`inline-flex items-center gap-1.5 text-xs font-semibold ${color} transition hover:text-white`}>{cta}<ArrowUpRight size={14} /></Link></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="group-advantage" className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Keunggulan grup</p><h2 className="font-display text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">Kapabilitas untuk<br />setiap lini operasi.</h2><p className="mt-5 max-w-md text-sm leading-6 text-slate-400">Dari alat berat dan teknologi hingga produksi visual, grup menyatukan kapabilitas yang saling melengkapi.</p><div className="mt-8 flex items-baseline gap-3"><span className="font-display text-5xl font-semibold tracking-[-.06em] text-white">03</span><span className="text-sm text-slate-400">pilar bisnis dalam satu visi grup</span></div></motion.div>
          <div className="grid gap-3 sm:grid-cols-3">{outcomes.map(({ icon: Icon, title, detail, accent }, i) => <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="rounded-2xl border border-white/[0.08] bg-[#101620] p-5"><Icon size={19} className={accent} /><h3 className="mt-5 text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></motion.div>)}</div>
        </div>
      </section>
    </>
  );
}
