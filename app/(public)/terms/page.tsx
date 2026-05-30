"use client";

import { motion } from "framer-motion";
import { Scale, FileText, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
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
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <FileText size={16} className="text-gold-500" />
            <span className="text-xs font-bold tracking-widest text-silver uppercase">Legal Disclosure</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Syarat & <span className="text-gold-500">Ketentuan</span>
          </h1>
          <p className="text-silver/60">Terakhir diperbarui: 30 Mei 2026</p>
        </motion.div>

        {/* Konten Utama */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[32px] space-y-10">
          
          <div className="prose prose-invert max-w-none">
            <p className="text-silver/80 leading-relaxed text-lg">
              Selamat datang di portal resmi Syah Group. Harap membaca dokumen ini dengan saksama sebelum melanjutkan aktivitas penelusuran atau interaksi bisnis dengan entitas kami.
            </p>
          </div>

          <div className="space-y-8">
            {terms.map((term, idx) => (
              <div key={idx} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-gold-500 shrink-0" size={20} />
                  {term.title}
                </h3>
                <p className="text-silver/80 leading-relaxed text-justify">
                  {term.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Alert */}
        <div className="mt-12 p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-start gap-4">
          <AlertTriangle className="text-gold-500 shrink-0 mt-1" size={24} />
          <p className="text-silver/90 text-sm md:text-base">
            <strong>Pemberitahuan Hukum:</strong> Jika Anda adalah mitra bisnis atau klien yang terikat dalam kontrak kerja sama (Service Level Agreement), ketentuan yang tertuang dalam dokumen kontrak fisik akan mengesampingkan Syarat & Ketentuan umum ini jika terjadi perbedaan interpretasi.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Beranda
          </Link>
        </div>

      </div>
    </main>
  );
}