"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, Building2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulasi pengiriman form (Nantinya bisa disambungkan ke Supabase/API)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset notifikasi setelah 5 detik
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    // Padding utama disesuaikan untuk mobile (pt-24 pb-16)
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Padding horizontal dioptimalkan untuk mobile (px-4) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* 1. Header Section */}
        {/* Jarak margin bottom diperkecil di layar kecil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          {/* Tipografi judul utama diperkecil menjadi text-3xl di mobile */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
            Mari Mulai <br />
            <span className="inline-block border border-gold-400/40 px-3 py-0.5 md:px-5 md:py-1 rounded-xl md:rounded-2xl bg-gold-400/5 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 align-middle mt-2 md:mt-4">
              Diskusi Strategis.
            </span>
          </h1>
          {/* Ukuran subjudul diperkecil menjadi text-base di mobile */}
          <p className="text-base md:text-xl text-silver/80 font-light max-w-2xl">
            Dari pengadaan alat berat berskala besar, infrastruktur digital, hingga produksi visual kelas komersial. Sampaikan visi Anda, dan tim kami akan merespons.
          </p>
        </motion.div>

        {/* 2. Main Content (Grid) */}
        {/* Jarak celah gap antar kolom disesuaikan (gap-10 di mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 relative">
          
          {/* Latar Belakang Cahaya (Glow) - Diperkecil dimensinya di mobile agar tidak pecah */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gold-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10" />

          {/* Kolom Kiri: Informasi Kontak */}
          {/* Jarak spasi vertikal antar elemen disesuaikan */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8 md:space-y-12"
          >
            {/* Info Kantor Pusat */}
            <div>
              {/* Ukuran teks atas, jarak margin bawah, dan ikon disesuaikan */}
              <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4 md:mb-6 flex items-center gap-2">
                <Building2 className="w-4 h-4 md:w-[18px] md:h-[18px]" /> Global Headquarters
              </h3>
              {/* Ukuran font nama gedung disesuaikan */}
              <p className="text-xl md:text-2xl font-display font-medium text-white mb-2 md:mb-4">Syah Tower, SCBD</p>
              {/* Ukuran font alamat disesuaikan menjadi text-sm responsif */}
              <p className="text-sm md:text-base text-silver/80 leading-relaxed flex items-start gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-1 text-gold-500/50" />
                Jl. Jend. Sudirman Kav. 52-53,<br />
                Kebayoran Baru, Jakarta Selatan<br />
                DKI Jakarta 12190, Indonesia
              </p>
            </div>

            <hr className="border-white/10" />

            {/* Info Kontak Langsung */}
            {/* Jarak spasi antar link kontak disesuaikan */}
            <div className="space-y-4 md:space-y-6">
              <a href="mailto:syahgroup09@gmail.com" className="group flex items-center gap-3 md:gap-4 text-silver/80 hover:text-white transition-colors">
                {/* Padding wadah ikon disesuaikan */}
                <div className="p-2.5 md:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
                </div>
                {/* Ukuran teks tautan responsif */}
                <span className="text-base md:text-lg">syahgroup09@gmail.com</span>
              </a>
              
              <a href="tel:+6281228134488" className="group flex items-center gap-3 md:gap-4 text-silver/80 hover:text-white transition-colors">
                <div className="p-2.5 md:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
                </div>
                <span className="text-base md:text-lg">+62 821 1448 7163</span>
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan: Form Kontak (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Padding (p-6) & radius sudut (rounded-2xl) dioptimalkan untuk mobile */}
            <div className="p-6 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[32px] relative overflow-hidden">
              {/* Ukuran teks judul form diperkecil */}
              <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-6 md:mb-8">Kirimkan Pesan</h2>
              
              {/* Jarak spasi antar baris form disesuaikan */}
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Celah gap antar grid input disesuaikan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Nama Lengkap */}
                  <div className="space-y-1.5 md:space-y-2">
                    {/* Ukuran label dan margin kiri disesuaikan */}
                    <label htmlFor="name" className="text-xs md:text-sm font-medium text-silver/80 ml-1 md:ml-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      // Padding (px-4 py-3), kelengkungan sudut, dan ukuran font disesuaikan di mobile
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  {/* Instansi / Perusahaan */}
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="company" className="text-xs md:text-sm font-medium text-silver/80 ml-1 md:ml-2">Perusahaan / Instansi</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                      placeholder="Nama Perusahaan"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="email" className="text-xs md:text-sm font-medium text-silver/80 ml-1 md:ml-2">Email Bisnis</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Divisi Tujuan */}
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="subject" className="text-xs md:text-sm font-medium text-silver/80 ml-1 md:ml-2">Pilar Bisnis yang Dituju</label>
                  <select 
                    id="subject"
                    className="w-full bg-[#111827] border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="general">Pertanyaan Umum (General Inquiry)</option>
                    <option value="heavy">Syah Heavy Equipment (Alat Berat)</option>
                    <option value="tech">Syah Tech (Teknologi & IT)</option>
                    <option value="studio">Syah Studio (Multimedia & Visual)</option>
                  </select>
                </div>

                {/* Pesan */}
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="message" className="text-xs md:text-sm font-medium text-silver/80 ml-1 md:ml-2">Pesan & Kebutuhan</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
                    placeholder="Ceritakan detail proyek atau kebutuhan bisnis Anda di sini..."
                  />
                </div>

                {/* Tombol Submit */}
                <button 
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  // Ukuran teks (text-sm md:text-lg), tinggi (py-3 md:py-4), dan radius tombol disesuaikan
                  className="w-full flex items-center justify-center gap-3 bg-gold-500 text-navy-900 font-bold text-sm md:text-lg py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-gold-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" /> Mengirim...
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-800">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> Pesan Terkirim!
                      </motion.div>
                    ) : (
                      <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 z-10">
                        Kirim Pesan <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}