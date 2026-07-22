import { motion } from "motion/react";
import horizon from "@/assets/horizon-pipe.jpg";

export function FinalCTA() {
  return (
    <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-background">
      <img src={horizon} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90" />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 text-center max-w-5xl px-6 space-y-10 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }} viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight text-balance drop-shadow-lg"
        >
          A infraestrutura do futuro começa na tubulação certa.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }} viewport={{ once: true }}
          className="font-body text-lg md:text-2xl text-foreground/90 font-light text-balance max-w-3xl leading-relaxed drop-shadow"
        >
          Tubos PEAD para saneamento, adução, drenagem e emissários. Fale com a Politejo para especificar a solução mais adequada ao seu projeto.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }} viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 pt-6"
        >
          <a href="#" className="group relative px-10 py-4 bg-aqua text-primary-foreground uppercase tracking-[0.25em] text-xs font-medium overflow-hidden">
            <span className="relative z-10">Falar com a Politejo</span>
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity delay-200 uppercase tracking-[0.25em] text-xs font-medium">Falar com a Politejo</span>
          </a>
          <a href="#projetos" className="px-10 py-4 border border-foreground/30 text-foreground uppercase tracking-[0.25em] text-xs hover:border-aqua hover:text-aqua transition-colors">
            Ver Soluções
          </a>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 bg-surface-dark py-5 px-6 md:px-16 flex flex-wrap gap-3 justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/60">
        <div>Politejo · Infraestrutura Hídrica</div>
        <div className="text-aqua-glow">PEAD · Saneamento · Sustentabilidade</div>
      </footer>
    </section>
  );
}
