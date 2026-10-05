"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera, BriefcaseBusiness, Cpu, HardHat, Sparkles, UsersRound } from "lucide-react";

const pathways = [
  { icon: HardHat, title: "Industri & alat berat", teams: "Teknik lapangan · layanan · operasional", color: "text-amber-300", border: "hover:border-amber-300/30", number: "01" },
  { icon: Cpu, title: "Software & teknologi", teams: "Engineering · sistem · infrastruktur", color: "text-cyan-300", border: "hover:border-cyan-300/30", number: "02" },
  { icon: Camera, title: "Multimedia & visual", teams: "Videografi · fotografi · editing", color: "text-violet-300", border: "hover:border-violet-300/30", number: "03" },
];

const qualities = [
  { icon: UsersRound, title: "Kolaborasi", copy: "Bekerja lintas keahlian untuk memahami tantangan dari berbagai sudut." },
  { icon: BriefcaseBusiness, title: "Tanggung jawab", copy: "Menjaga komitmen dan kejelasan dalam setiap pekerjaan." },
  { icon: Sparkles, title: "Rasa ingin tahu", copy: "Terus belajar dan terbuka pada cara yang lebih baik." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden pb-24 pt-28 md:pt-36">
      <section className="relative px-5 sm:px-8 lg:px-12"><div className="absolute -left-40 -top-24 -z-10 h-96 w-96 rounded-full bg-amber-400/[0.06] blur-[120px]" /><div className="mx-auto max-w-7xl"><motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="max-w-4xl"><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-slate-300"><BriefcaseBusiness size={14} className="text-amber-300" /> Karier di Syah Group</span><h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-[-.05em] text-white sm:text-6xl md:text-7xl">Bangun masa depan<br />di <span className="bg-gradient-to-r from-amber-200 to-slate-400 bg-clip-text text-transparent">berbagai bidang.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">Kami mempertemukan perspektif industri, teknologi, dan rantai pasok. Jika Anda ingin berkontribusi pada pekerjaan yang berdampak nyata, mari berkenalan.</p></motion.div></div></section>

      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:mt-28 lg:px-12"><div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Ruang kontribusi</p><h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Temukan bidang Anda.</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Jalur berikut mengenalkan disiplin dalam ekosistem grup, bukan daftar lowongan aktif.</p></div><div className="grid gap-3 md:grid-cols-3">{pathways.map(({ icon: Icon, title, teams, color, border, number }, i) => <motion.article key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className={`rounded-3xl border border-white/[0.08] bg-[#101620] p-6 transition duration-300 hover:-translate-y-1 ${border}`}><div className="flex items-center justify-between"><Icon size={22} className={color} /><span className="text-xs tracking-[.18em] text-slate-600">{number}</span></div><h3 className="mt-8 font-display text-xl font-semibold text-white">{title}</h3><p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">Bidang yang relevan</p><p className="mt-2 text-sm leading-6 text-slate-400">{teams}</p></motion.article>)}</div></section>

      <section className="mt-20 border-y border-white/[0.07] bg-white/[0.015] px-5 py-20 sm:px-8 lg:mt-28 lg:px-12"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Cara kami bekerja</p><h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Kualitas yang kami hargai.</h2></div><div className="mt-8 grid gap-3 md:grid-cols-3">{qualities.map(({ icon: Icon, title, copy }, i) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="rounded-2xl border border-white/[0.08] bg-[#101620] p-5"><Icon size={20} className="text-slate-300" /><h3 className="mt-5 text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{copy}</p></motion.div>)}</div></div></section>

      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:mt-28 lg:px-12"><div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171d27] to-[#0e131b] p-7 sm:p-10 md:flex md:items-center md:justify-between"><div className="absolute -right-16 -top-28 h-72 w-72 rounded-full bg-amber-300/[0.06] blur-[90px]" /><div className="relative"><p className="text-xs font-semibold uppercase tracking-[.18em] text-amber-200">Terbuka untuk perkenalan</p><h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">Mari mulai percakapan.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Hubungi tim kami dan ceritakan bidang yang Anda minati. Informasi mengenai peluang yang tersedia dapat dikonfirmasi secara langsung.</p></div><Link href="/contact" className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a0d14] transition hover:bg-amber-100 md:mt-0">Hubungi kami <ArrowRight size={16} /></Link></div></section>
    </main>
  );
}
