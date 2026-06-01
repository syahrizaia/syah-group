"use client";

export default function ContactForm() {
  return (
    // Padding section disesuaikan (py-16 px-4 di mobile)
    <section className="py-16 px-4 md:py-24 md:px-6 max-w-3xl mx-auto text-center">
      {/* Ukuran teks judul dan margin bottom responsif */}
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 md:mb-8">Siap Berkolaborasi?</h2>
      
      {/* Jarak gap form disesuaikan agar lebih rapat di mobile */}
      <form className="flex flex-col gap-4 md:gap-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Padding dalam (px & py) serta ukuran teks input responsif */}
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-gold-500 transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email Perusahaan" 
            className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>
        {/* Padding dalam dan ukuran teks textarea responsif */}
        <textarea 
          rows={5} 
          placeholder="Jelaskan kebutuhan Anda..." 
          className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-gold-500 transition-colors"
        ></textarea>
        
        {/* Ukuran teks dan padding tombol responsif */}
        <button 
          type="button" 
          className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}