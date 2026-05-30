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
    <footer className="relative bg-[#050B14] pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Bagian Atas Footer (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Brand & Deskripsi (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block text-3xl font-display font-bold text-white tracking-wide">
                <Image
                    src="/icon.png"
                    alt="Syah Group Logo"
                    width={40}
                    height={40}
                    className="inline-block mr-2 mb-1"
                />
              SYAH <span className="text-gold-500">GROUP</span>
            </Link>
            <p className="text-silver/70 leading-relaxed max-w-sm">
              Mendefinisikan ulang standar keunggulan melalui integrasi infrastruktur fisik, inovasi digital, dan kreasi visual tanpa batas.
            </p>
            {/* Ikon Media Sosial */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Perusahaan (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Perusahaan</h4>
            <ul className="space-y-4 text-silver/70 text-sm">
              <li><Link href="/about" className="hover:text-gold-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/business" className="hover:text-gold-500 transition-colors">Portofolio Bisnis</Link></li>
              <li><Link href="/innovation" className="hover:text-gold-500 transition-colors">Inovasi & R&D</Link></li>
              <li><Link href="/careers" className="hover:text-gold-500 transition-colors">Karier</Link></li>
              <li><Link href="/contact" className="hover:text-gold-500 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Pilar Bisnis (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Pilar Bisnis</h4>
            <ul className="space-y-4 text-silver/70 text-sm">
              <li><Link href="https://syahheavyequipment.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Syah Heavy Equipment</Link></li>
              <li><Link href="https://syahtech.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Syah Tech</Link></li>
              <li><Link href="https://syahstudio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Syah Studio</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Investor Relations</h4>
            <p className="text-silver/70 text-sm mb-4">
              Dapatkan pembaruan kuartalan mengenai ekspansi bisnis dan inovasi teknologi kami.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail size={16} className="text-silver/50" />
              </div>
              <input 
                type="email" 
                placeholder="Alamat Email Bisnis" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-24 text-sm text-white placeholder:text-silver/50 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 px-4 bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-bold rounded-full transition-colors"
              >
                Daftar
              </button>
            </form>
          </div>

        </div>

        {/* Garis Pemisah */}
        <hr className="border-white/10 mb-8" />

        {/* Bagian Bawah Footer (Copyright & Back to Top) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Syah Group. Hak Cipta Dilindungi Undang-Undang.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-silver/50 text-sm hover:text-gold-500 transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="text-silver/50 text-sm hover:text-gold-500 transition-colors">Syarat & Ketentuan</Link>
            
            {/* Tombol Back to Top */}
            <button 
              onClick={scrollToTop}
              className="ml-4 p-3 rounded-full bg-white/5 border border-white/10 text-silver hover:text-navy-900 hover:bg-gold-500 hover:border-gold-500 transition-all group"
              aria-label="Kembali ke atas"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}