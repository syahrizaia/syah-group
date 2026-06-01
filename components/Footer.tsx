"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  // Fungsi untuk scroll mulus ke paling atas halaman
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Padding atas & bawah disesuaikan agar lebih padat di mobile
    <footer className="relative bg-[#050B14] pt-14 pb-8 md:pt-20 md:pb-10 border-t border-white/10 overflow-hidden">
      {/* Efek Cahaya Latar Belakang (Disesuaikan ukurannya untuk mobile) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[160px] md:w-[800px] md:h-[400px] bg-gold-500/5 rounded-[100%] blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Bagian Atas Footer (Grid Layout) */}
        {/* Menggunakan grid-cols-2 di mobile agar pilar bisnis & perusahaan bisa berdampingan */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-16">
          
          {/* Kolom 1: Brand & Deskripsi (Mengambil full 2 kolom di mobile) */}
          <div className="col-span-2 lg:col-span-4 space-y-4 md:space-y-6">
            {/* Ukuran text logo disesuaikan (text-2xl di mobile) */}
            <Link href="/" className="inline-block text-2xl md:text-3xl font-display font-bold text-white tracking-wide">
                <Image
                    src="/icon.png"
                    alt="Syah Group Logo"
                    width={32}
                    height={32}
                    className="inline-block mr-2 mb-1 w-7 h-7 md:w-10 md:h-10"
                />
              SYAH <span className="text-gold-500">GROUP</span>
            </Link>
            {/* Ukuran deskripsi menjadi text-xs di mobile */}
            <p className="text-silver/70 text-xs md:text-sm leading-relaxed max-w-sm">
              Mendefinisikan ulang standar keunggulan melalui integrasi infrastruktur fisik, inovasi digital, dan kreasi visual tanpa batas.
            </p>
            {/* Ikon Media Sosial */}
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.twitter.com" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.instagram.com" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Perusahaan (Berdampingan di mobile - col-span-1) */}
          {/* Menggunakan col-span-1 agar membagi area 50/50 dengan pilar bisnis */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold tracking-wider uppercase mb-4 md:mb-6 text-xs md:text-sm">Perusahaan</h4>
            <ul className="space-y-3 md:space-y-4 text-silver/70 text-xs md:text-sm">
              <li><Link href="/about" className="hover:text-gold-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/business" className="hover:text-gold-500 transition-colors">Pilar Bisnis</Link></li>
              <li><Link href="/innovation" className="hover:text-gold-500 transition-colors">Inovasi</Link></li>
              <li><Link href="/careers" className="hover:text-gold-500 transition-colors">Karier</Link></li>
              <li><Link href="/contact" className="hover:text-gold-500 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Pilar Bisnis (Berdampingan di mobile - col-span-1) */}
          {/* Menggunakan col-span-1 */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-white font-bold tracking-wider uppercase mb-4 md:mb-6 text-xs md:text-sm">Pilar Bisnis</h4>
            <ul className="space-y-3 md:space-y-4 text-silver/70 text-xs md:text-sm">
              <li><Link href="https://syahheavyequipment.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Syah Heavy Equipment</Link></li>
              <li><Link href="https://syahtech.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Syah Tech</Link></li>
              <li><Link href="https://syahstudio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Syah Studio</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter (Mengambil full 2 kolom kembali di mobile) */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-white font-bold tracking-wider uppercase mb-4 md:mb-6 text-xs md:text-sm">Investor Relations</h4>
            <p className="text-silver/70 text-xs md:text-sm mb-4">
              Dapatkan pembaruan kuartalan mengenai ekspansi bisnis dan inovasi teknologi kami.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              {/* Posisi icon disesuaikan dengan tinggi input baru */}
              <div className="absolute inset-y-0 left-3.5 md:left-4 flex items-center pointer-events-none">
                <Mail size={14} className="text-silver/50" />
              </div>
              {/* Padding input disesuaikan agar tidak terlalu bulky di mobile */}
              <input 
                type="email" 
                placeholder="Alamat Email Bisnis" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-20 md:py-3 md:pl-12 md:pr-24 text-xs md:text-sm text-white placeholder:text-silver/50 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                required
              />
              {/* Padding & posisi tombol disesuaikan */}
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 px-3 md:px-4 bg-gold-500 hover:bg-gold-600 text-navy-900 text-xs md:text-sm font-bold rounded-full transition-colors"
              >
                Daftar
              </button>
            </form>
          </div>

        </div>

        {/* Garis Pemisah */}
        <hr className="border-white/10 mb-6 md:mb-8" />

        {/* Bagian Bawah Footer (Copyright & Back to Top) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Font copyright dioptimalkan menjadi text-xs di mobile */}
          <p className="text-silver/50 text-xs md:text-sm text-center md:text-left order-2 md:order-1">
            &copy; {new Date().getFullYear()} Syah Group. Hak Cipta Dilindungi Undang-Undang.
          </p>
          
          <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6 order-1 md:order-2 w-full md:w-auto text-xs md:text-sm">
            <Link href="/privacy" className="text-silver/50 hover:text-gold-500 transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="text-silver/50 hover:text-gold-500 transition-colors">Syarat & Ketentuan</Link>
            
            {/* Tombol Back to Top (Sedikit diperkecil paddingnya di mobile) */}
            <button 
              onClick={scrollToTop}
              className="ml-2 md:ml-4 p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 text-silver hover:text-navy-900 hover:bg-gold-500 hover:border-gold-500 transition-all group"
              aria-label="Kembali ke atas"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}