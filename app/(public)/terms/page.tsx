"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

const terms = [
  {
    title: "1. Penerimaan Ketentuan",
    content: "Dengan mengakses dan menggunakan situs web Syah Group, Anda secara sadar setuju untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak menyetujui salah satu bagian dari ketentuan ini, Anda dilarang menggunakan layanan kami."
  },
  {
    title: "2. Hak Kekayaan Intelektual",
    content: "Seluruh konten yang terdapat di situs ini, termasuk namun tidak terbatas pada desain, logo, kode sumber, teks, gambar, dan aset visual lainnya, adalah milik eksklusif Syah Group dan dilindungi oleh undang-undang hak cipta internasional. Penggunaan tanpa izin tertulis dilarang keras."
  },
  {
    title: "3. Penggunaan Layanan",
    content: "Anda setuju untuk tidak menggunakan situs ini untuk tujuan ilegal, merusak infrastruktur digital kami, atau menyebarkan perangkat lunak berbahaya. Setiap upaya peretasan atau manipulasi data akan ditindak sesuai hukum yang berlaku."
  },
  {
    title: "4. Batasan Tanggung Jawab",
    content: "Syah Group tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan atau ketidakmampuan menggunakan situs web kami. Layanan disediakan 'sebagaimana adanya' (as is) tanpa jaminan dalam bentuk apa pun."
  },
  {
    title: "5. Hubungan Pihak Ketiga",
    content: "Situs kami mungkin memuat tautan ke situs pihak ketiga. Kami tidak memiliki kendali atas konten, kebijakan privasi, atau praktik dari situs pihak ketiga tersebut dan tidak bertanggung jawab atas segala dampak yang ditimbulkan."
  },
  {
    title: "6. Perubahan Ketentuan",
    content: "Syah Group berhak untuk mengubah atau memperbarui Syarat & Ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan situs secara berkelanjutan setelah perubahan dianggap sebagai penerimaan Anda terhadap ketentuan yang baru."
  }
];

export default function TermsPage() {
  return (
    // Padding top & bottom disesuaikan untuk layar handphone (pt-24 pb-16)
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Padding horizontal dioptimalkan untuk mobile (px-4) */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        {/* Jarak margin bawah diperkecil di mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6">
            <FileText size={14} className="text-gold-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-silver uppercase">Legal Disclosure</span>
          </div>
          {/* Tipografi judul utama diperkecil menjadi text-2xl di mobile */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-3 md:mb-6">
            Syarat & <span className="text-gold-500">Ketentuan</span>
          </h1>
          {/* Ukuran subteks tanggal diperkecil */}
          <p className="text-silver/60 text-xs md:text-sm">Terakhir diperbarui: 30 Mei 2026</p>
        </motion.div>

        {/* Konten Utama (Glassmorphism Box) */}
        {/* Padding (p-5 md:p-12) & radius sudut (rounded-2xl) disesuaikan untuk mobile */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-[32px] space-y-6 md:space-y-10">
          
          <div className="prose prose-invert max-w-none">
            {/* Ukuran font paragraf pengantar diubah menjadi text-sm responsif */}
            <p className="text-silver/80 leading-relaxed text-sm md:text-lg">
              Selamat datang di portal resmi Syah Group. Harap membaca dokumen ini dengan saksama sebelum melanjutkan aktivitas penelusuran atau interaksi bisnis dengan entitas kami.
            </p>
          </div>

          {/* Jarak gap vertikal antar baris kebijakan disesuaikan */}
          <div className="space-y-6 md:space-y-8">
            {terms.map((term, idx) => (
              // Jarak padding bawah border list disesuaikan (pb-5 di mobile)
              <div key={idx} className="border-b border-white/5 pb-5 md:pb-8 last:border-0 last:pb-0">
                {/* Ukuran teks subjudul diubah menjadi text-base di mobile */}
                <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                  {/* Ukuran ikon indikator diatur menggunakan class Tailwind responsif */}
                  <CheckCircle2 className="text-gold-500 shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  {term.title}
                </h3>
                {/* Ukuran isi teks pasal diubah menjadi text-xs di mobile */}
                <p className="text-silver/80 leading-relaxed text-xs md:text-base text-justify">
                  {term.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Alert Banner */}
        {/* Jarak margin (mt-8), padding (p-4), dan kelengkungan sudut (rounded-xl) dioptimalkan */}
        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl md:rounded-2xl flex items-start gap-3 md:gap-4">
          {/* Dimensi ikon segitiga peringatan responsif */}
          <AlertTriangle className="text-gold-500 shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
          {/* Ukuran teks pemberitahuan hukum diubah menjadi text-xs di mobile */}
          <p className="text-silver/90 text-xs md:text-base">
            <strong>Pemberitahuan Hukum:</strong> Jika Anda adalah mitra bisnis atau klien yang terikat dalam kontrak kerja sama (Service Level Agreement), ketentuan yang tertuang dalam dokumen kontrak fisik akan mengesampingkan Syarat & Ketentuan umum ini jika terjadi perbedaan interpretasi.
          </p>
        </div>

        {/* Navigation */}
        {/* Jarak margin atas disesuaikan */}
        <div className="mt-8 md:mt-12 text-center">
          <Link 
            href="/" 
            // Ukuran font teks kembali diubah menjadi text-xs di mobile
            className="inline-flex items-center gap-1.5 md:gap-2 text-gold-500 hover:text-white text-xs md:text-sm transition-colors"
          >
            {/* Ukuran panah kembali responsif */}
            <ArrowLeft className="w-4 h-4 md:w-[18px] md:h-[18px]" /> Kembali ke Beranda
          </Link>
        </div>

      </div>
    </main>
  );
}