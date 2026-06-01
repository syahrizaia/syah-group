"use client";

import { motion } from "framer-motion";
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
    // Menggunakan class Tailwind responsif untuk ukuran ikon (w-8 h-8 di mobile, w-10 h-10 di desktop)
    icon: <HardHat className="text-gold-500 w-8 h-8 md:w-10 md:h-10" />,
    color: "from-yellow-900/40 to-transparent",
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
    icon: <Cpu className="text-blue-400 w-8 h-8 md:w-10 md:h-10" />,
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
    icon: <Clapperboard className="text-purple-400 w-8 h-8 md:w-10 md:h-10" />,
    color: "from-purple-900/40 to-transparent",
    imagePlaceholder: "bg-gradient-to-br from-purple-700/20 to-black",
    link: "https://syahstudio.vercel.app",
  },
];

export default function BusinessPage() {
  return (
    // Padding utama disesuaikan untuk mobile (pt-24 pb-16)
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      
      {/* 1. Hero Section Business */}
      {/* Margin bottom disesuaikan (mb-16 di mobile) */}
      <section className="relative px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Ukuran tracking teks atas disesuaikan */}
          <h1 className="text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-gold-500 uppercase mb-4 md:mb-6">
            Portofolio Kami
          </h1>
          {/* Tipografi judul utama diperkecil menjadi text-3xl di mobile */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
            Tiga Pilar, <br />Satu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-white">Sinergi.</span>
          </h2>
          {/* Ukuran subjudul diperkecil menjadi text-base di mobile */}
          <p className="text-base md:text-xl text-silver/80 font-light leading-relaxed">
            Membangun masa depan melalui dominasi di sektor infrastruktur fisik, inovasi digital, dan kreasi visual.
          </p>
        </motion.div>
      </section>

      {/* 2. Subsidiaries List (Alternating Layout) */}
      {/* Jarak vertikal antar pilar disesuaikan (space-y-20 di mobile) */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto space-y-20 md:space-y-32">
        {businesses.map((business, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              // Gap antara konten & visual disesuaikan (gap-8 di mobile)
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 lg:gap-20 items-center`}
            >
              {/* Bagian Visual / Gambar */}
              <div className="w-full md:w-1/2">
                {/* Radius sudut disesuaikan menjadi rounded-2xl untuk perangkat mobile */}
                <div className={`relative w-full aspect-square md:aspect-[4/5] rounded-2xl md:rounded-[40px] overflow-hidden border border-white/10 ${business.imagePlaceholder} flex items-center justify-center group`}>
                   {/* Latar Belakang Cahaya Bersinar */}
                   <div className={`absolute inset-0 bg-gradient-to-t ${business.color} opacity-50`} />
                   
                   {/* Ikon Besar Transparan (Skala disesuaikan di mobile agar tidak pecah/terlalu dominan) */}
                   <div className="absolute opacity-20 scale-[2] md:scale-[3] group-hover:scale-[2.2] md:group-hover:scale-[3.2] transition-transform duration-700">
                     {business.icon}
                   </div>
                   
                   {/* Ukuran teks dan padding placeholder visual disesuaikan */}
                   <span className="relative z-10 text-silver/50 font-medium tracking-widest uppercase text-xs md:text-sm border border-silver/20 px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-sm">
                     Visual {business.name}
                   </span>
                </div>
              </div>

              {/* Bagian Konten & Deskripsi */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                {/* Padding dan ukuran font kategori tag disesuaikan */}
                <div className="mb-4 md:mb-6 inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit">
                  {business.icon}
                  <span className="text-xs md:text-sm font-bold tracking-wider text-white uppercase">
                    {business.category}
                  </span>
                </div>
                
                {/* Ukuran judul utama pilar diperkecil menjadi text-2xl di mobile */}
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                  {business.name}
                </h3>
                
                {/* Ukuran teks deskripsi diperkecil menjadi text-sm di mobile */}
                <p className="text-sm md:text-lg text-silver/80 leading-relaxed mb-6 md:mb-8">
                  {business.description}
                </p>

                {/* Gap dan margin pada daftar fitur disesuaikan */}
                <ul className="space-y-3 mb-6 md:space-y-4 md:mb-10">
                  {business.features.map((feature, i) => (
                    // Ukuran teks list fitur menjadi text-sm di mobile
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-white text-sm md:text-lg">
                      {/* Ukuran ikon ceklis disesuaikan */}
                      <CheckCircle2 className="text-gold-500 shrink-0 w-5 h-5 md:w-6 md:h-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ukuran link interaksi diperkecil */}
                <Link 
                  href={business.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 md:gap-3 text-gold-500 font-bold text-sm md:text-lg hover:text-white transition-colors w-fit"
                >
                  Pelajari Lebih Lanjut 
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. Bottom Banner CTA */}
      {/* Margin top disesuaikan untuk mobile */}
      <section className="mt-20 md:mt-32 border-t border-white/10 bg-white/[0.02]">
        {/* Padding dalam container dioptimalkan (py-16 px-4) */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          {/* Ukuran judul banner diperkecil menjadi text-xl di mobile */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-white mb-4 md:mb-6">
            Punya Proyek yang Membutuhkan Sinergi Kami?
          </h2>
          {/* Ukuran deskripsi banner diperkecil menjadi text-xs di mobile */}
          <p className="text-xs sm:text-sm md:text-base text-silver/80 mb-6 md:mb-10 max-w-2xl mx-auto">
            Gunakan satu pilar bisnis kami, atau gabungkan ketiganya untuk hasil yang maksimal. Kami siap mendiskusikan kebutuhan Anda.
          </p>
          {/* Padding & ukuran font tombol disesuaikan */}
          <Link 
            href="/contact"
            className="inline-block bg-white text-navy-900 font-bold text-sm md:text-lg py-3 px-6 md:py-4 md:px-10 rounded-full hover:bg-gold-500 transition-colors duration-300"
          >
            Hubungi Tim Enterprise
          </Link>
        </div>
      </section>
    </main>
  );
}