"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek mendeteksi scroll untuk efek liquid glass
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk menutup menu mobile secara otomatis jika layar diubah ke ukuran desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fungsi untuk menutup menu saat tautan diklik
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <nav
        className={`relative flex items-center justify-between w-full max-w-6xl px-6 md:px-8 py-4 rounded-full transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-display font-bold text-white tracking-wide z-50"
          onClick={closeMenu}
        >
          SYAH <span className="text-gold-500">GROUP</span>
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-silver">
          <li>
            <Link href="/" className="hover:text-gold-500 transition-colors">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gold-500 transition-colors">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="/business" className="hover:text-gold-500 transition-colors">
              Pilar Bisnis
            </Link>
          </li>
          <li>
            <Link href="/innovation" className="hover:text-gold-500 transition-colors">
              Inovasi
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-gold-500 transition-colors">
              Karier
            </Link>
          </li>
        </ul>

        {/* Tombol Call-to-Action (Desktop) */}
        <Link 
          href="/contact"
          className="hidden md:block px-6 py-2.5 text-sm font-bold text-navy-900 bg-gold-500 rounded-full hover:bg-gold-600 transition-transform hover:scale-105"
        >
          Hubungi Kami
        </Link>
        
        {/* Tombol Hamburger Menu (Mobile & Tablet) */}
        <button 
          className="md:hidden text-white hover:text-gold-500 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Dropdown Mobile (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Posisi dropdown tepat di bawah navbar pill
            className="absolute top-[80px] md:hidden w-[calc(100%-2rem)] max-w-md bg-navy-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <Link 
                  href="/" 
                  className="block text-lg font-medium text-white hover:text-gold-500 transition-colors"
                  onClick={closeMenu}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-lg font-medium text-white hover:text-gold-500 transition-colors"
                  onClick={closeMenu}
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link 
                  href="/business" 
                  className="block text-lg font-medium text-white hover:text-gold-500 transition-colors"
                  onClick={closeMenu}
                >
                  Pilar Bisnis
                </Link>
              </li>
              <li>
                <Link 
                  href="/innovation" 
                  className="block text-lg font-medium text-white hover:text-gold-500 transition-colors"
                  onClick={closeMenu}
                >
                  Inovasi
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="block text-lg font-medium text-white hover:text-gold-500 transition-colors"
                  onClick={closeMenu}
                >
                  Karier
                </Link>
              </li>
            </ul>
            
            <hr className="border-white/10" />
            
            <Link 
              href="/contact"
              onClick={closeMenu}
              className="w-full py-3 text-center text-base font-bold text-navy-900 bg-gold-500 rounded-full hover:bg-gold-600 transition-colors"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}