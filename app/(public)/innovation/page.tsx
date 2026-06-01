"use client";

import { motion } from "framer-motion";
import { Sparkles, Network, Fingerprint, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const innovations = [
  {
    title: "IoT & Telematika Alat Berat",
    description: "Sinergi antara Syah Tech dan Syah Heavy Equipment. Kami menanamkan sensor pintar pada setiap mesin untuk memantau performa, memprediksi kerusakan (Predictive Maintenance), dan melacak efisiensi bahan bakar secara real-time.",
    // Menggunakan class Tailwind responsif untuk ukuran ikon (w-6 h-6 di mobile, w-8 h-8 di desktop)
    icon: <Network className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Virtual Production & CGI",
    description: "Menggabungkan daya komputasi Syah Tech dengan kreativitas Syah Studio. Kami membangun infrastruktur server rendering berkecepatan tinggi untuk menghasilkan efek visual dan produksi virtual kelas Hollywood.",
    icon: <Sparkles className="text-purple-400 w-6 h-6 md:w-8 md:h-8" />,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Infrastruktur Pintar Berkelanjutan",
    description: "Mempersiapkan masa depan energi dan konstruksi. Riset kami berfokus pada elektrifikasi alat berat dan pusat data ramah lingkungan untuk mengurangi jejak karbon di setiap proyek.",
    icon: <Fingerprint className="text-gold-500 w-6 h-6 md:w-8 md:h-8" />,
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
    // Padding utama disesuaikan untuk mobile (pt-24 pb-16)
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      {/* Margin bottom disesuaikan (mb-16 di mobile) */}
      <section className="relative px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32 text-center">
        {/* Ornamen Garis Futuristik (Disesuaikan tingginya di mobile) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 md:h-32 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-50" />
        
        {/* Padding top kontainer disesuaikan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto pt-10 md:pt-16"
        >
          {/* Jarak margin badge diturunkan */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 md:mb-6">
            <Rocket size={14} className="text-gold-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-silver uppercase">Research & Development</span>
          </div>
          {/* Tipografi judul utama diperkecil menjadi text-3xl di mobile */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
            Merancang <span className="inline-block border border-gold-400/40 px-2.5 py-0.5 md:px-4 md:py-1 rounded-xl md:rounded-2xl bg-gold-400/5 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 align-middle decoration-clone">Esok Hari,</span> <br /> Hari Ini.
          </h1>
          {/* Ukuran deskripsi hero diperkecil menjadi text-base di mobile */}
          <p className="text-base md:text-xl text-silver/80 font-light leading-relaxed">
            Inovasi bukanlah departemen di Syah Group, melainkan DNA kami. Kami menolak untuk tetap diam di dunia yang terus bergerak.
          </p>
        </motion.div>
      </section>

      {/* 2. Sinergi Inovasi (Cards) */}
      {/* Padding & margin bottom disesuaikan */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32">
        {/* Gap antar grid disesuaikan agar lebih rapat di mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {innovations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              // Padding (p-6) & kelengkungan sudut (rounded-2xl) disesuaikan untuk mobile
              className="relative p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[32px] overflow-hidden group hover:border-white/20 transition-all duration-500"
            >
              {/* Background Gradient Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              {/* Padding & margin kontainer ikon disesuaikan */}
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-navy-900/50 inline-block rounded-xl md:rounded-2xl border border-white/5 shadow-lg">
                {item.icon}
              </div>
              {/* Ukuran text judul kartu diperkecil */}
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-4">{item.title}</h3>
              {/* Ukuran deskripsi kartu responsif (text-xs di mobile) */}
              <p className="text-silver/80 leading-relaxed text-xs md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Peta Jalan Masa Depan (Roadmap Timeline) */}
      {/* Padding & margin bottom disesuaikan */}
      <section className="relative px-4 md:px-6 max-w-5xl mx-auto mb-16 md:mb-32 py-10 md:py-20">
        {/* Jarak margin bawah header timeline diturunkan */}
        <div className="text-center mb-10 md:mb-20">
          {/* Ukuran teks judul timeline diperkecil */}
          <h2 className="text-2xl md:text-5xl font-display font-bold text-white mb-2 md:mb-4">Visi 2030 & Seterusnya</h2>
          <p className="text-silver/80 text-sm md:text-lg">Cetak biru ekspansi agresif Syah Group.</p>
        </div>

        <div className="relative border-l border-white/10 ml-2 md:ml-0 md:border-l-0">
          {/* Garis Tengah untuk Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Jarak vertikal antar node disesuaikan (space-y-10 di mobile) */}
          <div className="space-y-10 md:space-y-16">
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
                  {/* Padding horizontal (pl-6) disesuaikan untuk layar kecil */}
                  <div className={`pl-6 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                  }`}>
                    {/* Ukuran teks konten timeline responsif */}
                    <span className="text-gold-500 font-display font-bold text-lg md:text-xl mb-1 block">{node.year}</span>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{node.title}</h3>
                    <p className="text-silver/80 text-xs md:text-base">{node.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto text-center pb-6 md:pb-10">
        {/* Padding dalam border-t disesuaikan */}
        <div className="p-6 md:p-10 border-t border-white/10">
          {/* Ukuran teks judul CTA diperkecil */}
          <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6">Jadilah Bagian dari Revolusi Ini</h2>
          {/* Ukuran teks deskripsi CTA diperkecil */}
          <p className="text-silver/80 text-xs md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
            Kami mencari inovator, insinyur, dan kreator visual terbaik untuk bergabung membangun ekosistem teknologi masa depan.
          </p>
          {/* Padding & ukuran font tombol disesuaikan */}
          <Link 
            href="/careers"
            className="group inline-flex items-center gap-2 bg-white text-navy-900 font-bold text-xs md:text-base py-3 px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Lihat Peluang Karier <ArrowRight className="w-4 h-4 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}