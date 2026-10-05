"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Compass, Cpu, HardHat, Network, ShieldCheck, Target } from "lucide-react";

const pillars = [
  { icon: HardHat, number: "01", title: "Industri & alat berat", copy: "Dukungan peralatan, armada, dan layanan lapangan untuk kebutuhan industri.", tone: "text-amber-300", border: "hover:border-amber-300/30" },
  { icon: Cpu, number: "02", title: "Software & teknologi", copy: "Solusi digital dan infrastruktur teknologi untuk bisnis yang terus berkembang.", tone: "text-cyan-300", border: "hover:border-cyan-300/30" },
  { icon: Camera, number: "03", title: "Multimedia & visual", copy: "Videografi, fotografi, editing, dan pascaproduksi untuk menyampaikan cerita secara visual.", tone: "text-violet-300", border: "hover:border-violet-300/30" },
];

const values = [
  { icon: ShieldCheck, title: "Kepercayaan dibangun", copy: "Bekerja dengan integritas, komunikasi yang jelas, dan komitmen yang dapat diandalkan." },
  { icon: Network, title: "Berpikir lintas bidang", copy: "Menghubungkan keahlian yang berbeda untuk menjawab kebutuhan mitra secara menyeluruh." },
  { icon: Target, title: "Fokus pada kebutuhan", copy: "Memulai dari tantangan nyata, lalu menyusun solusi yang relevan dan berkelanjutan." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden pb-24 pt-28 md:pt-36">
      <section className="relative px-5 sm:px-8 lg:px-12">
        <div className="absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/[0.07] blur-[120px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-slate-300"><Compass size={14} className="text-amber-300" /> Tentang Syah Group</span>
            <h1 className="mt-7 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-.05em] text-white sm:text-6xl md:text-7xl">Satu visi untuk <span className="bg-gradient-to-r from-slate-100 to-slate-500 bg-clip-text text-transparent">membangun kemajuan.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">Syah Group menyatukan kapabilitas industri, teknologi, dan kreativitas visual dalam satu ekosistem yang dirancang untuk mendukung kebutuhan bisnis masa kini.</p>
            <Link href="/business" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-200">Kenali pilar bisnis kami <ArrowRight size={16} /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-8 rounded-full border border-white/[0.08]" />
            <div className="absolute inset-16 rounded-full border border-dashed border-white/[0.12]" />
            <div className="ecosystem-orbit absolute inset-8 rounded-full border-t border-cyan-300/50" />
            <div className="absolute inset-0 m-auto grid h-28 w-28 place-items-center rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_0_90px_rgba(6,182,212,.12)] backdrop-blur-xl"><span className="text-center font-display text-sm font-semibold tracking-wider text-white">SYAH<br /><span className="text-cyan-300">GROUP</span></span></div>
            <div className="absolute left-1/2 top-3 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-2xl border border-amber-300/20 bg-[#151b24] text-amber-300 shadow-xl"><HardHat size={20} /></div>
            <div className="absolute bottom-8 left-2 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-[#151b24] text-cyan-300 shadow-xl"><Cpu size={20} /></div>
            <div className="absolute bottom-8 right-2 grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/20 bg-[#151b24] text-violet-300 shadow-xl"><Camera size={20} /></div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8 lg:mt-32 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Fondasi ekosistem</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tiga disiplin. Saling menguatkan.</h2></div><p className="max-w-lg text-sm leading-6 text-slate-400">Setiap pilar melayani bidang berbeda dan membuka ruang kolaborasi saat kebutuhan mitra melintasi satu bidang.</p></motion.div>
        <div className="grid gap-3 md:grid-cols-3">{pillars.map(({ icon: Icon, number, title, copy, tone, border }, i) => <motion.article key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className={`rounded-3xl border border-white/[0.08] bg-[#101620] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04] ${border}`}><div className="flex items-center justify-between"><Icon className={tone} size={22} /><span className="text-xs tracking-[.18em] text-slate-600">{number}</span></div><h3 className="mt-9 font-display text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></motion.article>)}</div>
      </section>

      <section className="mt-24 border-y border-white/[0.07] bg-white/[0.015] px-5 py-20 sm:px-8 lg:mt-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-300">Arah kami</p><h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tumbuh dengan tujuan.</h2></motion.div><div className="grid gap-8 sm:grid-cols-2"><div><h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Visi</h3><p className="mt-3 text-lg leading-7 text-white">Menjadi grup usaha yang menghubungkan kapabilitas penting bagi kemajuan bisnis dan industri.</p></div><div><h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Misi</h3><p className="mt-3 text-sm leading-6 text-slate-400">Mengembangkan layanan yang relevan, memperkuat kolaborasi antar bidang, dan membangun kemitraan berdasarkan kepercayaan.</p></div></div></div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8 lg:mt-32 lg:px-12"><div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Prinsip kerja</p><h2 className="mt-3 font-display text-3xl font-semibold text-white">Cara kami menciptakan nilai.</h2></div><div className="grid gap-3 md:grid-cols-3">{values.map(({ icon: Icon, title, copy }, i) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6"><Icon size={20} className="text-slate-300" /><h3 className="mt-5 text-base font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></motion.div>)}</div></section>
    </main>
  );
}
