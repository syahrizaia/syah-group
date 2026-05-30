import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Bagian Visi (Scroll Reveal Sederhana) */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-light leading-relaxed text-silver">
          &quot;Kami tidak hanya membangun bisnis. Kami membangun ekosistem di mana <strong className="text-gold-500 font-bold">infrastruktur fisik</strong>, <strong className="text-blue-400 font-bold">kecerdasan digital</strong>, dan <strong className="text-purple-400 font-bold">seni visual</strong> bersatu.&quot;
        </h2>
      </section>

      <BentoGrid />
      
      {/* Bagian Inovasi & Skalabilitas */}
      <section className="py-20 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-display font-bold mb-4">Inovasi Tanpa Henti</h3>
            <p className="text-silver/80">Syah Group dirancang untuk tumbuh. Kami terus mengeksplorasi sektor baru untuk memperluas portofolio kami demi menjawab tantangan masa depan.</p>
          </div>
          <div className="md:w-1/2 flex justify-end">
                {/* Animasi Inti Energi "Future" */}
                <div className="relative flex items-center justify-center w-32 h-32 group">
                
                {/* 1. Latar Belakang Cahaya (Glow) yang Sangat Terang */}
                <div className="absolute inset-0 bg-gold-500/60 rounded-full blur-[24px] group-hover:blur-[32px] transition-all duration-500 animate-pulse" />
                
                {/* 2. Cincin Orbit Berputar (Efek Futuristik) */}
                <div className="absolute inset-[-15px] rounded-full border-t-2 border-r-2 border-gold-400/80 animate-[spin_4s_linear_infinite]" />
                <div className="absolute inset-[-30px] rounded-full border-b border-l border-gold-500/40 animate-[spin_6s_linear_infinite_reverse]" />

                {/* 3. Lingkaran Kaca Inti (Core) */}
                <div className="relative z-10 w-full h-full rounded-full border border-gold-300 bg-gold-500/20 backdrop-blur-md shadow-[0_0_40px_rgba(212,175,55,0.8)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    
                    {/* 4. Teks Menyala */}
                    {/* <span className="text-white font-display font-bold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                    FUTURE
                    </span> */}
                    <Image
                        src="/icon.png"
                        alt="Syah Group Logo"
                        width={80}
                        height={80}
                        className="text-white font-display font-bold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                    />
                    
                </div>
                </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}