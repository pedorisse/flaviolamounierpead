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
    <section id="sobre" className="relative py-32 md:py-48 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={portrait} alt="Politejo — infraestrutura em tubos PEAD" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 border-l-2 border-aqua">
              <div className="text-aqua text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-1">Tubos PEAD · Saneamento · Infraestrutura</div>
              <div className="font-display text-2xl">Politejo</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 border border-aqua/30 -z-10" />
        </motion.div>

        <div className="md:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-aqua text-xs uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-aqua" />Sobre a Politejo
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-extralight leading-tight text-balance">
              Infraestrutura hídrica<br/>
              <span className="italic text-aqua">construída para durar.</span>
            </h2>
            <div className="mt-8 space-y-5 text-foreground/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              <p>Referência nacional na produção e extrusão de tubos em PEAD para infraestrutura, saneamento e sistemas críticos de transporte de água, esgoto e outros recursos essenciais.</p>
              <p>Soluções desenvolvidas para grandes demandas operacionais, com foco em longa vida útil, confiabilidade das redes e redução de intervenções ao longo do ciclo dos sistemas.</p>
              <p>Tecnologia aplicada a redes que sustentam cidades — do coletor de esgoto à adutora de larga escala — com o rigor técnico que projetos de longo prazo exigem.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-px bg-border pt-8 mt-12 border-t border-border min-w-0">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 md:p-8 min-w-0"
              >
                <div className="font-display text-[clamp(0.75rem,2.2vw,1.875rem)] font-extralight text-aqua leading-tight min-w-0 break-words">
                  {Array.isArray(s.v) ? s.v.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  )) : s.v}
                </div>
                <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] text-foreground/60 mt-2 leading-snug min-w-0 break-words">
                  {s.l.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
