import { motion } from "motion/react";
import horizon from "@/assets/horizon-pipe.jpg";

export function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col bg-background">
      <div className="relative flex items-center justify-center py-24 md:py-32">
        <img src={horizon} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-7 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-balance text-foreground"
          >
            A infraestrutura do futuro começa na solução certa.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }}
            className="font-body text-base md:text-lg text-graphite text-balance max-w-2xl leading-relaxed"
          >
            Fale com Flávio Lamounier sobre soluções em PEAD, saneamento, adução, drenagem e projetos de infraestrutura hídrica.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }}
            className="flex items-center justify-center pt-3 w-full"
          >
            <a
              href="https://wa.me/5511983894242?text=Ol%C3%A1%2C%20Fl%C3%A1vio.%20Tenho%20interesse%20em%20uma%20solu%C3%A7%C3%A3o%20com%20tubos%20PEAD."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Flávio no WhatsApp"
              className="group relative inline-block px-8 py-3.5 bg-aqua text-primary-foreground uppercase tracking-[0.25em] text-xs font-semibold overflow-hidden cursor-pointer w-full max-w-xs sm:w-auto text-center"
            >
              <span className="relative z-10">Falar com Flávio</span>
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity delay-200 uppercase tracking-[0.25em] text-xs font-semibold">Falar com Flávio</span>
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="bg-surface-dark py-5 px-6 md:px-16 flex flex-wrap gap-3 justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/70">
        <div>Flávio Lamounier · Infraestrutura Hídrica</div>
        <div className="text-aqua-glow">PEAD · Saneamento · Soluções Técnicas</div>
      </footer>
    </section>
  );
}
