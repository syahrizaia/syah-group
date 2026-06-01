"use client";
import { motion } from "framer-motion";
import { HardHat, MonitorPlay, Camera } from "lucide-react";

const subsidiaries = [
  {
    title: "Syah Heavy Equipment",
    desc: "Jual beli dan perbaikan alat berat dengan standar keandalan tertinggi.",
    // Ukuran ikon responsif menggunakan utility class Tailwind (w-7 h-7 di mobile, w-8 h-8 di desktop)
    icon: <HardHat className="text-gold-500 mb-3 md:mb-4 w-7 h-7 md:w-8 md:h-8" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-navy-800 to-black",
  },
  {
    title: "Syah Tech",
    desc: "Solusi IT, software, dan hardware futuristik untuk bisnis.",
    icon: <MonitorPlay className="text-blue-400 mb-3 md:mb-4 w-7 h-7 md:w-8 md:h-8" />,
    className: "md:col-span-1 md:row-span-1 bg-navy-800 border border-white/5",
  },
  {
    title: "Syah Studio",
    desc: "Produksi multimedia, fotografi, dan videografi sinematik.",
    icon: <Camera className="text-purple-400 mb-3 md:mb-4 w-7 h-7 md:w-8 md:h-8" />,
    className: "md:col-span-1 md:row-span-1 bg-navy-800 border border-white/5",
  },
];

export default function BentoGrid() {
  return (
    // Padding section disesuaikan (py-16 px-4 di mobile)
    <section className="py-16 px-4 md:py-24 md:px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12"
      >
        {/* Ukuran teks judul utama responsif */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Pilar Bisnis Kami</h2>
        <p className="text-silver text-sm md:text-base mt-1 md:mt-2">Fondasi yang kokoh untuk masa depan yang tanpa batas.</p>
      </motion.div>

      {/* auto-rows disesuaikan menjadi 200px di mobile agar tidak terlalu tinggi, gap menjadi 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        {subsidiaries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            // Padding (p-6) dan kelengkungan sudut (rounded-2xl) disesuaikan untuk mobile
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-end relative overflow-hidden group cursor-pointer ${item.className}`}
          >
            <div className="relative z-10">
              {item.icon}
              {/* Ukuran font judul kartu responsif */}
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-1 md:mb-2">{item.title}</h3>
              {/* Ukuran font deskripsi kartu responsif */}
              <p className="text-silver/80 text-xs md:text-sm">{item.desc}</p>
            </div>
            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}