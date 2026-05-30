"use client";

import { motion } from "framer-motion";
import { Sparkles, Network, Fingerprint, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const innovations = [
  {
    title: "IoT & Telematika Alat Berat",
    description: "Sinergi antara Syah Tech dan Syah Heavy Equipment. Kami menanamkan sensor pintar pada setiap mesin untuk memantau performa, memprediksi kerusakan (Predictive Maintenance), dan melacak efisiensi bahan bakar secara real-time.",
    icon: <Network size={32} className="text-blue-400" />,
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Virtual Production & CGI",
    description: "Menggabungkan daya komputasi Syah Tech dengan kreativitas Syah Studio. Kami membangun infrastruktur server rendering berkecepatan tinggi untuk menghasilkan efek visual dan produksi virtual kelas Hollywood.",
    icon: <Sparkles size={32} className="text-purple-400" />,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Infrastruktur Pintar Berkelanjutan",
    description: "Mempersiapkan masa depan energi dan konstruksi. Riset kami berfokus pada elektrifikasi alat berat dan pusat data ramah lingkungan untuk mengurangi jejak karbon di setiap proyek.",
    icon: <Fingerprint size={32} className="text-gold-500" />,
    gradient: "from-gold-500/20 to-transparent",
  },
];

const roadmapNodes = [
  { year: "2026", title: "Integrasi Ekosistem", desc: "Penyatuan data dari ketiga pilar bisnis ke dalam satu platform cloud terpusat." },
  { year: "2027", title: "Ekspansi AI & Otomatisasi", desc: "Penerapan kecerdasan buatan pada manajemen armada dan post-production otomatis." },
  { year: "2028", title: "Global R&D Center", desc: "Pembangunan fasilitas riset teknologi dan multimedia berskala internasional." },
  { year: "2030+", title: "Dominasi Sektor Baru", desc: "Ekspansi portofolio Syah Group ke sektor energi terbarukan dan antariksa." },
];

export default function InnovationPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative px-6 max-w-7xl mx-auto mb-32 text-center">
        {/* Ornamen Garis Futuristik */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto pt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Rocket size={16} className="text-gold-500" />
            <span className="text-xs font-bold tracking-widest text-silver uppercase">Research & Development</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Merancang <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Esok Hari,</span> <br /> Hari Ini.
          </h1>
          <p className="text-xl text-silver/80 font-light leading-relaxed">
            Inovasi bukanlah departemen di Syah Group, melainkan DNA kami. Kami menolak untuk tetap diam di dunia yang terus bergerak.
          </p>
        </motion.div>
      </section>

      {/* 2. Sinergi Inovasi (Cards) */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:border-white/20 transition-all duration-500"
            >
              {/* Background Gradient Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <div className="mb-6 p-4 bg-navy-900/50 inline-block rounded-2xl border border-white/5 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
              <p className="text-silver/80 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Peta Jalan Masa Depan (Roadmap Timeline) */}
      <section className="relative px-6 max-w-5xl mx-auto mb-32 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Visi 2030 & Seterusnya</h2>
          <p className="text-silver/80 text-lg">Cetak biru ekspansi agresif Syah Group.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
          {/* Garis Tengah untuk Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {roadmapNodes.map((node, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Titik Node (Lingkaran) */}
                  <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10" />
                  
                  {/* Konten Timeline */}
                  <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                  }`}>
                    <span className="text-gold-500 font-display font-bold text-xl mb-2 block">{node.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{node.title}</h3>
                    <p className="text-silver/80">{node.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center pb-10">
        <div className="p-10 border-t border-white/10">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Jadilah Bagian dari Revolusi Ini</h2>
          <p className="text-silver/80 mb-8 max-w-xl mx-auto">
            Kami mencari inovator, insinyur, dan kreator visual terbaik untuk bergabung membangun ekosistem teknologi masa depan.
          </p>
          <Link 
            href="/careers"
            className="group inline-flex items-center gap-2 bg-white text-navy-900 font-bold text-sm md:text-base py-4 px-8 rounded-full transition-all duration-300 hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Lihat Peluang Karier <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}