import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import dynamic from "next/dynamic";

const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));

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
          <div className="md:w-1/2 flex justify-end w-full md:w-auto">
                {/* Animasi Inti Energi "Future" dengan Ukuran Responsif */}
                <div className="relative flex items-center justify-center w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 group">
                
                {/* Latar Belakang Cahaya (Glow) yang Disesuaikan */}
                <div className="absolute inset-0 bg-gold-500/60 rounded-full blur-[16px] md:blur-[24px] group-hover:blur-[24px] md:group-hover:blur-[32px] transition-all duration-500 animate-pulse" />
                
                {/* Cincin Orbit Berputar (Mengikuti Skala Wadah) */}
                <div className="absolute inset-[-10px] md:inset-[-15px] rounded-full border-t-2 border-r-2 border-gold-400/80 animate-[spin_4s_linear_infinite]" />
                <div className="absolute inset-[-20px] md:inset-[-30px] rounded-full border-b border-l border-gold-500/40 animate-[spin_6s_linear_infinite_reverse]" />

                {/* Lingkaran Kaca Inti (Core) */}
                <div className="relative z-10 w-full h-full rounded-full border border-gold-300 bg-gold-500/20 backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.6)] md:shadow-[0_0_40px_rgba(212,175,55,0.8)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    
                    {/* Logo Syah Group dengan Kontrol Lebar/Tinggi CSS Responsif */}
                    <Image
                        src="/icon.png"
                        alt="Syah Group Logo"
                        width={80}
                        height={80}
                        className="w-14 h-14 md:w-20 md:h-20 object-contain text-white font-display font-bold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
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