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
            A infraestrutura do futuro começa na tubulação certa.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }}
            className="font-body text-base md:text-lg text-graphite text-balance max-w-2xl leading-relaxed"
          >
            Tubos PEAD para saneamento, adução, drenagem e emissários. Fale com a Politejo para especificar a solução mais adequada ao seu projeto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 pt-3"
          >
            <a href="#" className="group relative px-8 py-3.5 bg-aqua text-primary-foreground uppercase tracking-[0.25em] text-xs font-semibold overflow-hidden">
              <span className="relative z-10">Falar com a Politejo</span>
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity delay-200 uppercase tracking-[0.25em] text-xs font-semibold">Falar com a Politejo</span>
            </a>
            <a href="#projetos" className="px-8 py-3.5 border border-[color:var(--border-strong)] text-aqua-deep uppercase tracking-[0.25em] text-xs font-semibold hover:border-aqua hover:bg-surface-muted transition-colors">
              Ver Soluções
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="bg-surface-dark py-5 px-6 md:px-16 flex flex-wrap gap-3 justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/70">
        <div>Politejo · Infraestrutura Hídrica</div>
        <div className="text-aqua-glow">PEAD · Saneamento · Sustentabilidade</div>
      </footer>
    </section>
  );
}
