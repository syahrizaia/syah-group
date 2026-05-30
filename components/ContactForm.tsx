"use client";

export default function ContactForm() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-display font-bold mb-8">Siap Berkolaborasi?</h2>
      <form className="flex flex-col gap-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email Perusahaan" 
            className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>
        <textarea 
          rows={5} 
          placeholder="Jelaskan kebutuhan Anda..." 
          className="w-full bg-navy-800 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
        ></textarea>
        <button 
          type="button" 
          className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}