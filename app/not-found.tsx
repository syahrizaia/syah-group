"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-navy-900 overflow-hidden px-6">
      {/* Efek Latar Belakang (Glow Besar) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animasi Teks 404 Raksasa */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[200px] font-display font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gold-500 via-gold-600 to-navy-900">
            404
          </h1>
          {/* Animasi kabut/bayangan bergerak di bawah teks 404 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-navy-900 to-transparent"
          />
        </motion.div>

        {/* Konten Teks */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
            Visi Tidak Ditemukan
          </h2>
          <p className="mt-4 text-silver/80 max-w-md mx-auto leading-relaxed">
            Halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau sedang dalam tahap konstruksi oleh tim infrastruktur kami.
          </p>
        </motion.div>

        {/* Tombol Kembali (Glassmorphism + Shine Effect) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            {/* Efek Cahaya Lewat saat di-hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/20 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            
            <ArrowLeft size={20} className="text-gold-500 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-white font-medium tracking-wide">Kembali ke Beranda</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}