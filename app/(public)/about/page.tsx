"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreValues = [
  {
    title: "Inovasi Berkelanjutan",
    description: "Kami tidak hanya mengikuti tren teknologi, kami menciptakannya. Dari perangkat lunak hingga infrastruktur fisik.",
    // Ukuran ikon menggunakan utility class responsif (w-6 h-6 di mobile, w-8 h-8 di desktop)
    icon: <Lightbulb className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />,
  },
  {
    title: "Integritas & Keandalan",
    description: "Kepercayaan adalah mata uang paling berharga kami. Kami memberikan standar tertinggi di setiap sektor industri.",
    icon: <ShieldCheck className="text-gold-500 w-6 h-6 md:w-8 md:h-8" />,
  },
  {
    title: "Visi Masa Depan",
    description: "Setiap langkah ekspansi kami didorong oleh presisi dan tujuan untuk membentuk ekosistem yang lebih baik.",
    icon: <Target className="text-purple-400 w-6 h-6 md:w-8 md:h-8" />,
  },
];

export default function AboutPage() {
  return (
    // Padding top & bottom utama disesuaikan untuk mobile
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20">
      
      {/* 1. Hero Section */}
      {/* Margin bottom disesuaikan (mb-16 di mobile) */}
      <section className="relative px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32">
        {/* Ukuran & blur efek cahaya disesuaikan agar pas di mobile */}
        <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-gold-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Tipografi judul utama diperkecil menjadi text-3xl di mobile */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
            Mendefinisikan Ulang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
              Standar Keunggulan.
            </span>
          </h1>
          {/* Ukuran deskripsi hero diperkecil menjadi text-base di mobile */}
          <p className="text-base md:text-xl text-silver/80 font-light leading-relaxed max-w-2xl">
            Syah Group lahir dari sebuah ambisi sederhana, mensinergikan kekuatan industri konvensional dengan kelincahan teknologi modern dan kreativitas visual yang tanpa batas.
          </p>
        </motion.div>
      </section>

      {/* 2. Visi & Misi (Split Layout) */}
      {/* Padding & margin bottom disesuaikan */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32">
        {/* Gap antar kolom disesuaikan agar lebih rapat di mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Ukuran tracking & text title atas diperkecil sedikit */}
            <h2 className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase mb-2 md:mb-4">Visi Kami</h2>
            {/* Ukuran teks konten visi responsif (text-xl di mobile) */}
            <p className="text-xl sm:text-2xl md:text-4xl font-display font-medium text-white leading-snug">
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
            <h2 className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase mb-2 md:mb-4">Misi Kami</h2>
            {/* Ukuran teks & gap list misi responsif (text-sm & space-y-4 di mobile) */}
            <ul className="space-y-4 md:space-y-6 text-silver/80 text-sm md:text-lg">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-gold-500 font-bold">01.</span>
                Menyediakan alat berat dan layanan teknis dengan durabilitas tak tertandingi.
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-gold-500 font-bold">02.</span>
                Mengembangkan ekosistem IT dan perangkat lunak yang mempercepat eskalasi bisnis.
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-gold-500 font-bold">03.</span>
                Menciptakan karya visual dan multimedia yang mendobrak batas imajinasi.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values (Glassmorphism Cards) */}
      {/* Padding & margin bottom disesuaikan */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Ukuran font judul utama diperkecil */}
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 md:mb-4">Nilai Inti Kami</h2>
          <p className="text-silver/80 text-sm md:text-base">Prinsip yang memandu setiap keputusan di Syah Group.</p>
        </motion.div>

        {/* Gap grid disesuaikan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              // Padding kartu (p-6) & kelengkungan sudut (rounded-2xl) disesuaikan untuk mobile
              className="p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              {/* Padding & margin kontainer ikon disesuaikan */}
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-navy-900/50 inline-block rounded-xl md:rounded-2xl">
                {val.icon}
              </div>
              {/* Ukuran text judul kartu diperkecil */}
              <h3 className="text-lg md:text-2xl font-display font-bold text-white mb-2 md:mb-3">{val.title}</h3>
              {/* Ukuran deskripsi kartu diperkecil */}
              <p className="text-silver/80 text-xs md:text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA (Call to Action) Section */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          // Padding (p-8) dan radius sudut (rounded-3xl) disesuaikan agar rapi di layar kecil
          className="p-8 md:p-16 bg-gradient-to-br from-navy-800 to-black border border-white/10 rounded-3xl md:rounded-[40px] relative overflow-hidden"
        >
          {/* Efek cahaya latar belakang disesuaikan */}
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-gold-500/20 blur-[50px] md:blur-[80px] -z-10 rounded-full" />
          
          {/* Ukuran teks judul CTA disesuaikan */}
          <h2 className="text-2xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
            Mari Membangun Masa Depan Bersama
          </h2>
          {/* Jarak margin & ukuran teks deskripsi responsif */}
          <p className="text-silver/80 mb-6 md:mb-10 text-sm md:text-lg max-w-xl mx-auto">
            Apakah Anda investor, calon mitra, atau talenta cemerlang? Kami selalu terbuka untuk kolaborasi yang bermakna.
          </p>
          {/* Padding & ukuran teks tombol disesuaikan */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-sm md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Mulai Diskusi <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}