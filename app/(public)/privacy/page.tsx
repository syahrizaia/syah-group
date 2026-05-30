"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Server, RefreshCw, Mail, Scale } from "lucide-react";
import Link from "next/link";

const policies = [
  {
    icon: <Eye className="text-gold-500" size={24} />,
    title: "1. Informasi yang Kami Kumpulkan",
    content: "Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti saat mengisi formulir kontak, berlangganan kabar investor, atau berinteraksi dengan layanan kami. Informasi ini mencakup nama, alamat email, instansi perusahaan, dan detail relevan. Kami juga mengumpulkan data teknis secara otomatis melalui cookie, seperti alamat IP, jenis peramban (browser), dan analitik interaksi situs web untuk mengoptimalkan pengalaman Anda."
  },
  {
    icon: <Server className="text-gold-500" size={24} />,
    title: "2. Penggunaan Informasi Data",
    content: "Data yang kami kumpulkan digunakan secara eksklusif untuk memproses kebutuhan bisnis Anda, meningkatkan layanan dari ketiga pilar bisnis kami (Syah Heavy Equipment, Syah Tech, Syah Studio), memberikan dukungan klien, serta mengirimkan pembaruan yang relevan. Kami menggunakan analitik data semata-mata untuk mengoptimalkan infrastruktur digital kami."
  },
  {
    icon: <ShieldCheck className="text-gold-500" size={24} />,
    title: "3. Kerahasiaan & Berbagi Informasi",
    content: "Sebagai entitas holding skala enterprise, Syah Group menjunjung tinggi kerahasiaan. Kami tidak pernah menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga mana pun. Data hanya dibagikan dalam lingkup internal anak perusahaan kami untuk keperluan operasional, atau dengan mitra strategis bersertifikasi yang terikat oleh Perjanjian Kerahasiaan (Non-Disclosure Agreement) yang ketat."
  },
  {
    icon: <Lock className="text-gold-500" size={24} />,
    title: "4. Standar Keamanan Data",
    content: "Kami menerapkan protokol keamanan siber mutakhir, termasuk enkripsi end-to-end pada transmisi data dan penyimpanan basis data yang aman. Infrastruktur pusat data kami dipantau 24/7 untuk mencegah akses tanpa izin, kebocoran data, atau peretasan."
  },
  {
    icon: <Scale className="text-gold-500" size={24} />,
    title: "5. Hak Pengguna",
    content: "Anda memiliki hak penuh atas data pribadi Anda. Anda berhak untuk meminta salinan data yang kami simpan, meminta koreksi atas data yang tidak akurat, atau meminta penghapusan permanen data Anda dari sistem kami (Right to be Forgotten), selama tidak bertentangan dengan kewajiban hukum atau kepatuhan pajak yang berlaku."
  },
  {
    icon: <RefreshCw className="text-gold-500" size={24} />,
    title: "6. Pembaruan Kebijakan",
    content: "Kebijakan Privasi ini dapat ditinjau dan diperbarui secara berkala agar tetap selaras dengan perkembangan regulasi hukum internasional maupun nasional. Pembaruan materiil akan selalu diinformasikan pada halaman ini dengan menyertakan tanggal pembaruan terakhir."
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Latar Belakang Cahaya Halus */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 border-b border-white/10 pb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <ShieldCheck size={16} className="text-gold-500" />
            <span className="text-xs font-bold tracking-widest text-silver uppercase">Legal & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Kebijakan <span className="text-gold-500">Privasi</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-silver/60 text-sm">
            <p>Pembaruan Terakhir: <strong className="text-white">Mei 2026</strong></p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold-500/50" />
            <p>Berlaku untuk seluruh layanan digital Syah Group.</p>
          </div>
        </motion.div>

        {/* Konten Utama */}
        <div className="space-y-12">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-silver/80 leading-relaxed mb-10">
              Syah Group (&quot;Kami&quot;, &quot;Perusahaan&quot;) menghormati privasi Anda dan berkomitmen penuh untuk melindungi data pribadi Anda. Dokumen kebijakan privasi ini menguraikan bagaimana kami mengumpulkan, merawat, menjaga kerahasiaan, dan menggunakan informasi yang Anda berikan saat mengakses situs web kami.
            </p>
          </motion.div>

          {/* Mapping Kebijakan */}
          <div className="space-y-10">
            {policies.map((policy, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                    {policy.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                      {policy.title}
                    </h2>
                    <p className="text-silver/80 leading-relaxed text-sm md:text-base text-justify">
                      {policy.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Kotak Hubungi DPO (Data Protection Officer) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Pertanyaan Terkait Privasi?</h3>
              <p className="text-silver/80 text-sm md:text-base max-w-lg">
                Jika Anda memiliki pertanyaan mendetail mengenai penanganan data Anda atau ingin menggunakan hak penghapusan data, silakan hubungi <strong>Data Protection Officer (DPO)</strong> kami.
              </p>
            </div>
            <a 
              href="mailto:syahgroup09@gmail.com"
              className="w-full md:w-auto shrink-0 flex items-center justify-center gap-3 bg-white text-navy-900 font-bold px-8 py-4 rounded-full hover:bg-gold-500 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <Mail size={18} /> syahgroup09@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Tautan Kembali */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-gold-500 hover:text-gold-400 font-medium text-sm transition-colors border-b border-transparent hover:border-gold-400 pb-1">
            &larr; Kembali ke Beranda
          </Link>
        </div>

      </div>
    </main>
  );
}