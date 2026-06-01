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
    // Menggunakan class Tailwind responsif untuk ukuran ikon (w-6 h-6 di mobile, w-7 h-7 di desktop)
    icon: <HeartPulse className="text-red-400 w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Pengembangan Diri",
    description: "Anggaran tak terbatas untuk sertifikasi, kursus, dan konferensi global.",
    icon: <GraduationCap className="text-gold-500 w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Infrastruktur Elit",
    description: "Dukungan perangkat keras mutakhir (MacBook Pro/Studio) dan setup workstation kustom.",
    icon: <Laptop className="text-blue-400 w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Eksposur Global",
    description: "Kesempatan rotasi proyek antar-pilar bisnis dan kolaborasi dengan klien internasional.",
    icon: <Globe className="text-purple-400 w-6 h-6 md:w-7 md:h-7" />,
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
    // Padding top & bottom disesuaikan untuk layar handphone (pt-24 pb-16)
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      {/* Padding horizontal dan margin-bottom disesuaikan */}
      <section className="relative px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32 text-center">
        {/* Ukuran & tingkat blur efek cahaya latar disesuaikan agar proporsional di mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10" />
        
        {/* Padding top diturunkan sedikit di mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto pt-6 md:pt-10"
        >
          {/* Margin bottom badge diperkecil */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 md:mb-6">
            <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-silver uppercase">Bergabung Bersama Kami</span>
          </div>
          {/* Tipografi judul utama diperkecil menjadi text-3xl di mobile */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
            Bukan Sekadar Karier, <br /> Ini Adalah <span className="inline-block border border-gold-400/40 px-3 py-0.5 md:px-5 md:py-1 rounded-xl md:rounded-2xl bg-gold-400/5 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 align-middle">Panggilan.</span>
          </h1>
          {/* Ukuran teks subjudul disesuaikan menjadi text-base di mobile */}
          <p className="text-base md:text-xl text-silver/80 font-light leading-relaxed max-w-3xl mx-auto">
            Kami mengumpulkan 1% talenta terbaik di bidang rekayasa infrastruktur, teknologi, dan seni visual untuk memecahkan tantangan terbesar di masa depan.
          </p>
        </motion.div>
      </section>

      {/* 2. Perks & Benefits (Grid) */}
      {/* Padding horizontal dan margin-bottom disesuaikan */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32">
        {/* Jarak margin bottom header diturunkan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Ukuran font judul section diturunkan */}
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 md:mb-4">Standar Eksekutif</h2>
          <p className="text-silver/80 text-sm md:text-base">Kami menuntut yang terbaik, maka kami memberikan yang terbaik.</p>
        </motion.div>

        {/* Gap antar grid disesuaikan agar lebih rapat di layar kecil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              // Padding (p-6) & kelengkungan sudut (rounded-2xl) disesuaikan untuk mobile
              className="p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              {/* Jarak margin bawah kontainer ikon diturunkan */}
              <div className="mb-4 md:mb-6">{perk.icon}</div>
              {/* Ukuran font judul perk diperkecil */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{perk.title}</h3>
              {/* Ukuran teks deskripsi perk responsif */}
              <p className="text-silver/80 text-xs md:text-sm leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Job Board (Daftar Lowongan) */}
      {/* Padding horizontal dan margin-bottom disesuaikan */}
      <section className="px-4 md:px-6 max-w-5xl mx-auto mb-16 md:mb-32">
        {/* Padding dan margin-bottom header posisi terbuka diturunkan */}
        <div className="text-left mb-8 md:mb-12 border-b border-white/10 pb-4 md:pb-6">
          {/* Ukuran teks judul diperkecil */}
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white">Posisi Terbuka</h2>
        </div>

        {/* Jarak vertikal antar kelompok departemen disesuaikan */}
        <div className="space-y-8 md:space-y-12">
          {jobs.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Header Departemen */}
              {/* Ukuran teks badge departemen dan margin bottom disesuaikan */}
              <div className={`inline-block px-4 py-1.5 md:py-2 rounded-full border mb-4 md:mb-6 backdrop-blur-sm ${group.bg}`}>
                <span className={`text-xs md:text-sm font-bold tracking-wider uppercase ${group.color}`}>
                  {group.department}
                </span>
              </div>

              {/* List Pekerjaan */}
              {/* Jarak antar kartu pekerjaan disesuaikan */}
              <div className="space-y-3 md:space-y-4">
                {group.roles.map((role, roleIdx) => (
                  <Link href="#apply" key={roleIdx} className="block group">
                    {/* Padding (p-5 md:p-8) & kelengkungan sudut (rounded-xl) disesuaikan untuk mobile */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-8 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300">
                      
                      <div className="mb-3 md:mb-0">
                        {/* Ukuran teks judul pekerjaan responsif */}
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1.5 md:mb-2 group-hover:text-gold-500 transition-colors">
                          {role.title}
                        </h3>
                        {/* Jarak gap dan ukuran font tag meta pekerjaan disesuaikan */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[11px] md:text-sm text-silver/70">
                          {/* Padding dalam badge meta diturunkan sedikit di mobile */}
                          <span className="flex items-center gap-1.5 bg-navy-900/50 px-2.5 py-1 md:px-3 md:py-1 rounded-full border border-white/5">
                            <Briefcase size={12} /> {role.type}
                          </span>
                          <span className="flex items-center gap-1.5 bg-navy-900/50 px-2.5 py-1 md:px-3 md:py-1 rounded-full border border-white/5">
                            <MapPin size={12} /> {role.location}
                          </span>
                        </div>
                      </div>

                      {/* Tombol Panah Kanan (Ukuran disesuaikan di desktop) */}
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 transition-all duration-300">
                        <ArrowRight className="text-silver group-hover:text-navy-900 transition-colors w-5 h-5" />
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
      <section className="px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          // Padding (p-8) & radius sudut (rounded-2xl md:rounded-[40px]) disesuaikan untuk layar kecil
          className="p-8 md:p-12 border border-white/10 rounded-2xl md:rounded-[40px] bg-gradient-to-t from-gold-500/10 to-transparent relative overflow-hidden"
        >
          {/* Ukuran teks judul CTA diperkecil */}
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4">
            Tidak Menemukan Posisi yang Tepat?
          </h2>
          {/* Ukuran teks deskripsi CTA diperkecil */}
          <p className="text-silver/80 text-xs md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
            Kami selalu membuka pintu untuk individu luar biasa. Kirimkan CV dan portofolio Anda secara proaktif, dan kami akan menghubungi Anda saat ada peluang yang sesuai.
          </p>
          {/* Padding & ukuran font tombol disesuaikan */}
          <Link 
            href="/contact"
            className="inline-block bg-white text-navy-900 font-bold text-xs md:text-lg py-3 px-6 md:py-4 md:px-10 rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Kirim Lamaran Terbuka
          </Link>
        </motion.div>
      </section>
    </main>
  );
}