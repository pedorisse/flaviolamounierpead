import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import portraitAsset from "@/assets/flavio-portrait-studio.jpg.asset.json";
const portrait = portraitAsset.url;

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("pt-BR") + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  useEffect(() => { if (inView) animate(mv, value, { duration: 2.2, ease: "easeOut" }); }, [inView, value, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: ["SOLUÇÕES", "TERMOPLÁSTICAS"], l: ["PARA REDES DE", "INFRAESTRUTURA"] },
  { v: ["LÍDER"], l: ["NAS MAIORES", "COMPANHIAS DE", "SANEAMENTO"] },
  { v: ["PRESENÇA"], l: ["NOS MAIORES PROJETOS", "DE TRATAMENTO DE ÁGUA", "E ESGOTO DO BRASIL"] },
  { v: ["REFERÊNCIA"], l: ["EM TUBULAÇÕES PEAD", "PARA INFRAESTRUTURA"] },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-background py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={portrait} alt="Politejo — infraestrutura em tubos PEAD" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 scrim-media" />
            <div className="absolute bottom-0 left-0 right-0 p-6 border-l-2 border-aqua">
              <div className="text-aqua-glow text-[10px] uppercase tracking-[0.3em] mb-1">Tubos PEAD · Saneamento · Infraestrutura</div>
              <div className="font-display text-2xl text-white">Politejo</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 border border-aqua/20 -z-10" />
        </motion.div>

        <div className="md:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-aqua-deep text-[11px] uppercase tracking-[0.4em] mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-aqua-deep" />Sobre a Politejo
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1] text-balance text-foreground">
              Infraestrutura hídrica<br/>
              <span className="italic text-aqua">construída para durar.</span>
            </h2>
            <div className="mt-6 space-y-4 text-graphite text-base md:text-[17px] leading-[1.75] max-w-[60ch]">
              <p><span className="text-foreground font-medium">Referência nacional</span> na produção e extrusão de tubos em PEAD para infraestrutura, saneamento e sistemas críticos de transporte de água, esgoto e outros recursos essenciais.</p>
              <p>Soluções desenvolvidas para grandes demandas operacionais, com foco em longa vida útil, confiabilidade das redes e redução de intervenções ao longo do ciclo dos sistemas.</p>
              <p>Tecnologia aplicada a redes que sustentam cidades — do coletor de esgoto à adutora de larga escala — com o rigor técnico que projetos de longo prazo exigem.</p>
            </div>
          </motion.div>

          <div className="pt-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-aqua-deep/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-aqua-deep font-semibold">
                Diferenciais Institucionais
              </span>
              <span className="ml-auto text-[10px] tracking-[0.3em] text-steel/70 font-mono">04 / 04</span>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[color:var(--border-strong)] border border-[color:var(--border-strong)] min-w-0">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-card p-5 md:p-7 min-w-0 transition-colors duration-500 hover:bg-surface-soft/60"
                >
                  <span className="absolute top-3 right-4 text-[10px] tracking-[0.3em] text-steel/60 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="font-display text-base md:text-xl lg:text-2xl font-semibold text-aqua-deep leading-[1.15] tracking-tight min-w-0 break-words">
                    {Array.isArray(s.v) ? s.v.map((line, idx) => (
                      <span key={idx} className="block">{line}</span>
                    )) : s.v}
                  </div>

                  <div className="mt-3 w-8 h-px bg-aqua/70 transition-all duration-500 group-hover:w-14" />

                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-graphite mt-3 leading-[1.6] min-w-0 break-words font-medium">
                    {s.l.map((line, idx) => (
                      <span key={idx} className="block">{line}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
