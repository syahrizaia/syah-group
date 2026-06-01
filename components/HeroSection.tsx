"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video (Ganti src dengan video asli Anda di folder public) */}
      <div className="absolute inset-0 z-0 bg-black/60">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-overlay"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight tracking-tight"
        >
          Syah Group <br />
          <span className="text-gold-500">Building the Future,</span> Shaping the Vision.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-silver/80 font-light tracking-wide"
        >
          Sinergi kekuatan industri alat berat, teknologi mutakhir, dan inovasi visual.
        </motion.p>
      </div>
    </section>
  );
}