"use client";

import { motion } from "framer-motion";
import { link } from "fs";
import { HardHat, Cpu, Clapperboard, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

// Data Pilar Bisnis
const businesses = [
  {
    id: "heavy-equipment",
    name: "Syah Heavy Equipment",
    category: "Infrastruktur & Alat Berat",
    description: "Mitra tepercaya untuk proyek skala besar. Kami menyediakan, menyewakan, dan memelihara alat berat kelas industri dengan standar keamanan dan durabilitas tertinggi untuk memastikan proyek Anda berjalan tanpa hambatan.",
    features: [
      "Pengadaan Alat Berat Baru & Bekas",
      "Perbaikan & Pemeliharaan Terjadwal",
      "Penyewaan Armada Skala Besar",
    ],
    icon: <HardHat size={40} className="text-gold-500" />,
    color: "from-yellow-900/40 to-transparent",
    // Placeholder untuk gambar (nantinya diganti dengan gambar asli)
    imagePlaceholder: "bg-gradient-to-br from-yellow-700/20 to-black",
    link: "https://syahheavyequipment.vercel.app",
  },
  {
    id: "tech",
    name: "Syah Tech",
    category: "Teknologi & Informasi",
    description: "Mendorong transformasi digital melalui solusi perangkat lunak yang tangguh dan infrastruktur perangkat keras yang skalabel. Kami membangun ekosistem digital yang siap menghadapi tantangan masa depan.",
    features: [
      "Pengembangan Enterprise Software",
      "Pengadaan Hardware & Server",
      "Keamanan Siber & Cloud Infrastructure",
    ],
    icon: <Cpu size={40} className="text-blue-400" />,
    color: "from-blue-900/40 to-transparent",
    imagePlaceholder: "bg-gradient-to-bl from-blue-700/20 to-black",
    link: "https://syahtech.vercel.app",
  },
  {
    id: "studio",
    name: "Syah Studio",
    category: "Multimedia & Visual",
    description: "Mengubah gagasan menjadi mahakarya visual. Studio kami dilengkapi dengan teknologi produksi mutakhir untuk menghasilkan fotografi, videografi, dan efek visual kelas komersial yang memukau audiens Anda.",
    features: [
      "Produksi Video Komersial & Company Profile",
      "Corporate & Product Photography",
      "Post-Production & Video Editing",
    ],
    icon: <Clapperboard size={40} className="text-purple-400" />,
    color: "from-purple-900/40 to-transparent",
    imagePlaceholder: "bg-gradient-to-br from-purple-700/20 to-black",
    link: "https://syahstudio.vercel.app",
  },
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 1. Hero Section Business */}
      <section className="relative px-6 max-w-7xl mx-auto mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-sm font-bold tracking-[0.3em] text-gold-500 uppercase mb-6">
            Portofolio Kami
          </h1>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Tiga Pilar, <br />Satu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-white">Sinergi.</span>
          </h2>
          <p className="text-xl text-silver/80 font-light leading-relaxed">
            Membangun masa depan melalui dominasi di sektor infrastruktur fisik, inovasi digital, dan kreasi visual.
          </p>
        </motion.div>
      </section>

      {/* 2. Subsidiaries List (Alternating Layout) */}
      <section className="px-6 max-w-7xl mx-auto space-y-32">
        {businesses.map((business, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Bagian Visual / Gambar */}
              <div className="w-full md:w-1/2">
                <div className={`relative w-full aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 ${business.imagePlaceholder} flex items-center justify-center group`}>
                   {/* Latar Belakang Cahaya Bersinar */}
                   <div className={`absolute inset-0 bg-gradient-to-t ${business.color} opacity-50`} />
                   
                   {/* Ikon Besar Transparan sebagai Placeholder */}
                   <div className="absolute opacity-20 scale-[3] group-hover:scale-[3.2] transition-transform duration-700">
                     {business.icon}
                   </div>
                   
                   {/* Teks Petunjuk untuk Anda (Hapus saat gambar asli dimasukkan) */}
                   <span className="relative z-10 text-silver/50 font-medium tracking-widest uppercase text-sm border border-silver/20 px-6 py-3 rounded-full backdrop-blur-sm">
                     Visual {business.name}
                   </span>
                </div>
              </div>

              {/* Bagian Konten & Deskripsi */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  {business.icon}
                  <span className="text-sm font-bold tracking-wider text-white uppercase">
                    {business.category}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  {business.name}
                </h3>
                
                <p className="text-lg text-silver/80 leading-relaxed mb-8">
                  {business.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {business.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-white text-lg">
                      <CheckCircle2 size={24} className="text-gold-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={business.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-gold-500 font-bold text-lg hover:text-white transition-colors w-fit"
                >
                  Pelajari Lebih Lanjut 
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. Bottom Banner CTA */}
      <section className="mt-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Punya Proyek yang Membutuhkan Sinergi Kami?
          </h2>
          <p className="text-silver/80 mb-10 max-w-2xl mx-auto">
            Gunakan satu pilar bisnis kami, atau gabungkan ketiganya untuk hasil yang maksimal. Kami siap mendiskusikan kebutuhan Anda.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-navy-900 font-bold text-lg py-4 px-10 rounded-full hover:bg-gold-500 transition-colors duration-300"
          >
            Hubungi Tim Enterprise
          </Link>
        </div>
      </section>
    </main>
  );
}