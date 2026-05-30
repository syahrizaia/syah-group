"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreValues = [
  {
    title: "Inovasi Berkelanjutan",
    description: "Kami tidak hanya mengikuti tren teknologi, kami menciptakannya. Dari perangkat lunak hingga infrastruktur fisik.",
    icon: <Lightbulb size={32} className="text-blue-400" />,
  },
  {
    title: "Integritas & Keandalan",
    description: "Kepercayaan adalah mata uang paling berharga kami. Kami memberikan standar tertinggi di setiap sektor industri.",
    icon: <ShieldCheck size={32} className="text-gold-500" />,
  },
  {
    title: "Visi Masa Depan",
    description: "Setiap langkah ekspansi kami didorong oleh presisi dan tujuan untuk membentuk ekosistem yang lebih baik.",
    icon: <Target size={32} className="text-purple-400" />,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* 1. Hero Section */}
      <section className="relative px-6 max-w-7xl mx-auto mb-32">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Mendefinisikan Ulang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
              Standar Keunggulan.
            </span>
          </h1>
          <p className="text-xl text-silver/80 font-light leading-relaxed max-w-2xl">
            Syah Group lahir dari sebuah ambisi sederhana, mensinergikan kekuatan industri konvensional dengan kelincahan teknologi modern dan kreativitas visual yang tanpa batas.
          </p>
        </motion.div>
      </section>

      {/* 2. Visi & Misi (Split Layout) */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4">Visi Kami</h2>
            <p className="text-3xl md:text-4xl font-display font-medium text-white leading-snug">
              Menjadi konglomerat global yang memelopori integrasi antara infrastruktur fisik, kecerdasan digital, dan media kreatif.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4">Misi Kami</h2>
            <ul className="space-y-6 text-silver/80 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-gold-500 font-bold">01.</span>
                Menyediakan alat berat dan layanan teknis dengan durabilitas tak tertandingi.
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold-500 font-bold">02.</span>
                Mengembangkan ekosistem IT dan perangkat lunak yang mempercepat eskalasi bisnis.
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold-500 font-bold">03.</span>
                Menciptakan karya visual dan multimedia yang mendobrak batas imajinasi.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values (Glassmorphism Cards) */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">Nilai Inti Kami</h2>
          <p className="text-silver/80">Prinsip yang memandu setiap keputusan di Syah Group.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-6 p-4 bg-navy-900/50 inline-block rounded-2xl">
                {val.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">{val.title}</h3>
              <p className="text-silver/80 leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA (Call to Action) Section */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 bg-gradient-to-br from-navy-800 to-black border border-white/10 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 blur-[80px] -z-10 rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Mari Membangun Masa Depan Bersama
          </h2>
          <p className="text-silver/80 mb-10 text-lg max-w-xl mx-auto">
            Apakah Anda investor, calon mitra, atau talenta cemerlang? Kami selalu terbuka untuk kolaborasi yang bermakna.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Mulai Diskusi <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}