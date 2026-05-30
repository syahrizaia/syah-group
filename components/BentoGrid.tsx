"use client";
import { motion } from "framer-motion";
import { HardHat, MonitorPlay, Camera } from "lucide-react";

const subsidiaries = [
  {
    title: "Syah Heavy Equipment",
    desc: "Jual beli dan perbaikan alat berat dengan standar keandalan tertinggi.",
    icon: <HardHat size={32} className="text-gold-500 mb-4" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-navy-800 to-black",
  },
  {
    title: "Syah Tech",
    desc: "Solusi IT, software, dan hardware futuristik untuk bisnis.",
    icon: <MonitorPlay size={32} className="text-blue-400 mb-4" />,
    className: "md:col-span-1 md:row-span-1 bg-navy-800 border border-white/5",
  },
  {
    title: "Syah Studio",
    desc: "Produksi multimedia, fotografi, dan videografi sinematik.",
    icon: <Camera size={32} className="text-purple-400 mb-4" />,
    className: "md:col-span-1 md:row-span-1 bg-navy-800 border border-white/5",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-display font-bold text-white">Pilar Bisnis Kami</h2>
        <p className="text-silver mt-2">Fondasi yang kokoh untuk masa depan yang tanpa batas.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {subsidiaries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`p-8 rounded-3xl flex flex-col justify-end relative overflow-hidden group cursor-pointer ${item.className}`}
          >
            <div className="relative z-10">
              {item.icon}
              <h3 className="text-2xl font-bold font-display text-white mb-2">{item.title}</h3>
              <p className="text-silver/80 text-sm">{item.desc}</p>
            </div>
            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}