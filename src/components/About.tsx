import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Layers, Award, MapPin, BadgeCheck } from "lucide-react";
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

const differentials = [
  {
    n: "01",
    title: "CONHECIMENTO TÉCNICO",
    lines: ["SOLUÇÕES TERMOPLÁSTICAS", "APLICADAS A REDES DE", "INFRAESTRUTURA"],
    Icon: Layers,
  },
  {
    n: "02",
    title: "EXPERIÊNCIA DE CAMPO",
    lines: ["ATUAÇÃO PRÓXIMA A OBRAS,", "EQUIPES TÉCNICAS E", "SISTEMAS DE SANEAMENTO"],
    Icon: Award,
  },
  {
    n: "03",
    title: "GRANDES PROJETOS",
    lines: ["PARTICIPAÇÃO EM PROJETOS", "DE ÁGUA, ESGOTO E", "SEGURANÇA HÍDRICA"],
    Icon: MapPin,
  },
  {
    n: "04",
    title: "VISÃO INTEGRADA",
    lines: ["CONEXÃO ENTRE ESPECIFICAÇÃO,", "PRODUTO, LOGÍSTICA E", "EXECUÇÃO DA OBRA"],
    Icon: BadgeCheck,
  },
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
            <img src={portrait} alt="Flávio Lamounier — infraestrutura hídrica e tubos PEAD" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 scrim-media" />
            <div className="absolute bottom-0 left-0 right-0 p-6 border-l-2 border-aqua">
              <div className="text-aqua-glow text-[10px] uppercase tracking-[0.3em] mb-1">Infraestrutura Hídrica · Saneamento · PEAD</div>
              <div className="font-display text-2xl text-white">Flávio Lamounier</div>
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
              <span className="w-8 h-px bg-aqua-deep" />Sobre Flávio Lamounier
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1] text-balance text-foreground">
              Experiência técnica construída<br/>
              <span className="italic text-aqua">em grandes projetos.</span>
            </h2>
            <div className="mt-6 space-y-4 text-graphite text-base md:text-[17px] leading-[1.75] max-w-[60ch]">
              <p><span className="text-foreground font-medium">Flávio Lamounier</span> atua na conexão entre engenharia, produto e obra, participando de projetos de infraestrutura hídrica, saneamento e sistemas críticos em diferentes regiões do Brasil.</p>
              <p>Sua trajetória reúne experiência em campo, relacionamento com grandes operações de saneamento e conhecimento técnico aplicado à especificação de soluções em PEAD para projetos de alta complexidade.</p>
              <p>Do planejamento à execução, sua atuação é orientada pela confiabilidade das redes, pela durabilidade dos sistemas e pelas demandas reais de cada obra.</p>
            </div>
          </motion.div>

          <div className="pt-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-aqua" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-aqua-deep font-semibold">
                Diferenciais
              </span>
              <span className="text-[10px] tracking-[0.3em] text-steel/70 font-mono">04 / 04</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {differentials.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="group relative bg-card border border-[color:var(--border)] p-6 md:p-7 transition-all duration-500 hover:border-aqua/40 hover:shadow-soft min-w-0 overflow-hidden"
                >
                  {/* Top green accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-aqua/20 group-hover:bg-aqua transition-colors duration-500" />

                  {/* Number — top-right, subtle */}
                  <span className="absolute top-4 right-5 text-[10px] tracking-[0.25em] text-steel/40 font-mono group-hover:text-aqua/60 transition-colors duration-500">
                    {d.n}
                  </span>

                  {/* Icon + title */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-aqua/20 text-aqua/80 group-hover:text-aqua group-hover:border-aqua/40 transition-all duration-500">
                      <d.Icon strokeWidth={1.3} size={22} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-[1.1] tracking-tight text-balance break-words">
                        {d.title}
                      </h3>
                    </div>
                  </div>

                  {/* Animated divider */}
                  <div className="mt-5 mb-4 h-px w-10 bg-aqua/60 group-hover:w-16 transition-all duration-500" />

                  {/* Support text */}
                  <div className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-graphite leading-[1.65] min-w-0 break-words">
                    {d.lines.map((line, idx) => (
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
