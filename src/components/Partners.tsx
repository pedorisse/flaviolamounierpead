import { motion } from "motion/react";

const highlights = [
  { t: "Coletores de Esgoto", d: "Tubos PEAD para coletores de esgoto em redes urbanas de alta exigência." },
  { t: "Redes Adutoras", d: "Tubos PEAD para adução de água em sistemas de larga escala e longa distância." },
  { t: "Drenagem", d: "Tubos PEAD para redes de drenagem urbana e infraestruturas pluviais." },
  { t: "Emissários", d: "Tubos PEAD para emissários terrestres e subaquáticos em obras críticas." },
];

export function Partners() {
  return (
    <section className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto bg-card">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <div className="text-aqua-deep text-xs uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-aqua-deep" />Principais Soluções
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-extralight leading-tight text-balance text-foreground">
          Tubos PEAD para <span className="italic text-aqua">sistemas críticos.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative grid md:grid-cols-12 gap-10 md:gap-16 md:pt-6">
          <div className="md:col-span-5 space-y-6">
            <div className="text-[10px] uppercase tracking-[0.4em] text-aqua-deep">Linha PEAD · Infraestrutura</div>
            <div className="font-display text-5xl md:text-7xl font-extralight tracking-tight text-foreground">Politejo</div>
            <p className="text-graphite leading-relaxed font-light max-w-md">
              Portfólio dedicado a redes de saneamento, adução, drenagem e emissários, com foco em durabilidade e eficiência hídrica.
            </p>
            <div className="w-12 h-px bg-aqua" />
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-[color:var(--border-strong)] border border-[color:var(--border-strong)] bg-surface-soft/60">
            {highlights.map((h) => (
              <div key={h.t} className="bg-card p-6 md:p-8 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.3em] text-aqua-deep">{h.t}</div>
                <p className="text-graphite text-sm font-light leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
