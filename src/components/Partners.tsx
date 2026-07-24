import { motion } from "motion/react";
import { Waves, Droplets, CloudRain, Anchor } from "lucide-react";

const highlights = [
  {
    t: "Coletores de Esgoto",
    d: "Tubos PEAD para coletores de esgoto em redes urbanas de alta exigência.",
    Icon: Waves,
    n: "01",
  },
  {
    t: "Redes Adutoras",
    d: "Tubos PEAD para adução de água em sistemas de larga escala e longa distância.",
    Icon: Droplets,
    n: "02",
  },
  {
    t: "Drenagem",
    d: "Tubos PEAD para redes de drenagem urbana e infraestruturas pluviais.",
    Icon: CloudRain,
    n: "03",
  },
  {
    t: "Emissários",
    d: "Tubos PEAD para emissários terrestres e subaquáticos em obras críticas.",
    Icon: Anchor,
    n: "04",
  },
];

export function Partners() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto bg-card">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-12"
      >
        <div className="text-aqua-deep text-[11px] uppercase tracking-[0.4em] mb-5 flex items-center gap-3">
          <span className="w-8 h-px bg-aqua-deep" />Principais Soluções
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1] text-balance text-foreground">
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
        <div className="relative grid md:grid-cols-12 gap-10 md:gap-14 md:pt-4">
          <div className="md:col-span-5 space-y-5">
            <div className="text-[11px] uppercase tracking-[0.4em] text-aqua-deep">Atuação Técnica · Infraestrutura</div>
            <div className="font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">Soluções em PEAD</div>
            <p className="text-graphite text-base md:text-[17px] leading-relaxed max-w-[46ch]">
              Experiência aplicada a redes de saneamento, adução, drenagem e emissários, com foco em durabilidade, eficiência hídrica e desempenho em sistemas críticos.
            </p>
            <div className="w-12 h-px bg-aqua" />
          </div>

          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-aqua-deep/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-aqua-deep font-semibold">
                Aplicações principais
              </span>
              <span className="text-[10px] tracking-[0.3em] text-steel/70">04</span>
            </div>

            <ul className="grid sm:grid-cols-2 border-t border-l border-[color:var(--border-strong)]">
              {highlights.map(({ t, d, Icon, n }) => (
                <li
                  key={t}
                  className="group relative border-r border-b border-[color:var(--border-strong)] bg-card p-6 md:p-7 transition-colors duration-500 hover:bg-surface-soft/60"
                >
                  <span className="absolute top-4 right-5 text-[10px] tracking-[0.3em] text-steel/60 font-mono">
                    {n}
                  </span>

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-surface-soft/50 text-aqua-deep transition-colors duration-500 group-hover:border-aqua group-hover:text-aqua">
                    <Icon strokeWidth={1.4} className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground leading-snug mb-2">
                    {t}
                  </h3>
                  <p className="text-graphite text-sm md:text-[14.5px] leading-relaxed max-w-[38ch]">
                    {d}
                  </p>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-aqua transition-all duration-700 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
