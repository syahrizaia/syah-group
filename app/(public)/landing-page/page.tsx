import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";
import EcosystemTicker from "@/components/EcosystemTicker";

const BentoGrid = dynamic(() => import("@/components/BentoGrid"));

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <EcosystemTicker />
      <BentoGrid />
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="group relative mx-auto flex max-w-7xl flex-col justify-between gap-7 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121a25] to-[#0c1119] p-7 sm:p-10 md:flex-row md:items-center">
          <div className="ecosystem-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />
          <div className="relative"><p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">Tumbuh bersama mitra</p><h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Mari gerakkan proyek Anda.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Ceritakan kebutuhan alat berat, teknologi, atau konten visual Anda. Kami akan menghubungkan Anda dengan tim yang tepat.</p></div>
          <a href="/contact" className="relative inline-flex w-fit shrink-0 items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a0d14] transition hover:bg-cyan-100">Mulai berdiskusi <span aria-hidden="true" className="ml-2">↗</span></a>
        </div>
      </section>
    </main>
  );
}
