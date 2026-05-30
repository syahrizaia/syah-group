"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  ArrowRight, 
  HeartPulse, 
  GraduationCap, 
  Laptop, 
  Globe 
} from "lucide-react";
import Link from "next/link";

// Data Keuntungan Kerja (Perks)
const perks = [
  {
    title: "Kesehatan & Kesejahteraan",
    description: "Asuransi kesehatan premium kelas eksekutif untuk Anda dan keluarga inti Anda.",
    icon: <HeartPulse size={28} className="text-red-400" />,
  },
  {
    title: "Pengembangan Diri",
    description: "Anggaran tak terbatas untuk sertifikasi, kursus, dan konferensi global.",
    icon: <GraduationCap size={28} className="text-gold-500" />,
  },
  {
    title: "Infrastruktur Elit",
    description: "Dukungan perangkat keras mutakhir (MacBook Pro/Studio) dan setup workstation kustom.",
    icon: <Laptop size={28} className="text-blue-400" />,
  },
  {
    title: "Eksposur Global",
    description: "Kesempatan rotasi proyek antar-pilar bisnis dan kolaborasi dengan klien internasional.",
    icon: <Globe size={28} className="text-purple-400" />,
  },
];

// Data Lowongan Pekerjaan (Job Board)
const jobs = [
  {
    department: "Syah Tech",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    roles: [
      { title: "Senior Full-Stack Engineer (Next.js/Node)", type: "Full-time", location: "Hybrid - Jakarta" },
      { title: "Cloud Security Architect", type: "Full-time", location: "Remote" },
    ]
  },
  {
    department: "Syah Heavy Equipment",
    color: "text-gold-500",
    bg: "bg-gold-500/10 border-gold-500/20",
    roles: [
      { title: "Heavy Equipment Lead Mechanic", type: "Full-time", location: "On-site - Kalimantan" },
      { title: "Enterprise Account Executive", type: "Full-time", location: "On-site - Jakarta" },
    ]
  },
  {
    department: "Syah Studio",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
    roles: [
      { title: "Senior 3D Generalist / CGI Artist", type: "Full-time", location: "On-site - Jakarta Studio" },
      { title: "Commercial Videographer", type: "Contract", location: "Willing to Travel" },
    ]
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative px-6 max-w-7xl mx-auto mb-32 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Briefcase size={16} className="text-gold-500" />
            <span className="text-xs font-bold tracking-widest text-silver uppercase">Bergabung Bersama Kami</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Bukan Sekadar Karier, <br /> Ini Adalah <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Panggilan.</span>
          </h1>
          <p className="text-xl text-silver/80 font-light leading-relaxed max-w-3xl mx-auto">
            Kami mengumpulkan 1% talenta terbaik di bidang rekayasa infrastruktur, teknologi, dan seni visual untuk memecahkan tantangan terbesar di masa depan.
          </p>
        </motion.div>
      </section>

      {/* 2. Perks & Benefits (Grid) */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Standar Eksekutif</h2>
          <p className="text-silver/80">Kami menuntut yang terbaik, maka kami memberikan yang terbaik.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-6">{perk.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
              <p className="text-silver/80 text-sm leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Job Board (Daftar Lowongan) */}
      <section className="px-6 max-w-5xl mx-auto mb-32">
        <div className="text-left mb-12 border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Posisi Terbuka</h2>
        </div>

        <div className="space-y-12">
          {jobs.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Header Departemen */}
              <div className={`inline-block px-4 py-2 rounded-full border mb-6 backdrop-blur-sm ${group.bg}`}>
                <span className={`text-sm font-bold tracking-wider uppercase ${group.color}`}>
                  {group.department}
                </span>
              </div>

              {/* List Pekerjaan */}
              <div className="space-y-4">
                {group.roles.map((role, roleIdx) => (
                  <Link href="#apply" key={roleIdx} className="block group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300">
                      
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-silver/70">
                          <span className="flex items-center gap-1.5 bg-navy-900/50 px-3 py-1 rounded-full border border-white/5">
                            <Briefcase size={14} /> {role.type}
                          </span>
                          <span className="flex items-center gap-1.5 bg-navy-900/50 px-3 py-1 rounded-full border border-white/5">
                            <MapPin size={14} /> {role.location}
                          </span>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 transition-all duration-300">
                        <ArrowRight size={20} className="text-silver group-hover:text-navy-900 transition-colors" />
                      </div>

                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Open Application CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 border border-white/10 rounded-[40px] bg-gradient-to-t from-gold-500/10 to-transparent relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Tidak Menemukan Posisi yang Tepat?
          </h2>
          <p className="text-silver/80 mb-8 max-w-xl mx-auto">
            Kami selalu membuka pintu untuk individu luar biasa. Kirimkan CV dan portofolio Anda secara proaktif, dan kami akan menghubungi Anda saat ada peluang yang sesuai.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-navy-900 font-bold text-lg py-4 px-10 rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Kirim Lamaran Terbuka
          </Link>
        </motion.div>
      </section>
    </main>
  );
}