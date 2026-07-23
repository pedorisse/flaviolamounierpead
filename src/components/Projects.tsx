import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import sao from "@/assets/project-saolourenco.jpg";
import cubataoVideo from "@/assets/subadutora-cubatao.mp4.asset.json";
import litoralVideo from "@/assets/litoral-norte.mp4.asset.json";

type P = {
  n: string;
  title: string;
  loc: string;
  img: string;
  video?: string;
  previewVimeoId?: string;
  demoVimeoId?: string;
  headline: string;
  body: string;
  tags: string[];
};

const projects: P[] = [
  { n: "01", title: "Subadutora Cubatão", loc: "Santos / Cubatão · SP", img: sao, video: cubataoVideo.url, demoVimeoId: "1211900787",
    headline: "Travessia subaquática em PEAD para reforçar a segurança hídrica na Baixada Santista.",
    body: "Projeto executado com MND (Método Não Destrutivo), utilizando tubulações lisas em PEAD azul instaladas sob o leito do mar e do Canal do Porto de Santos, sem a necessidade de intervenções destrutivas nas vias urbanas. A solução amplia a estabilidade e a segurança hídrica para quase meio milhão de moradores e turistas da região. Fornecemos 100% da tubulação do trecho, com mais de 5.000 metros lineares e mais de 100 carretas entregues em tempo recorde, garantindo agilidade logística e suporte a uma obra estratégica para o abastecimento regional.",
    tags: ["PEAD", "MND", "Travessia Subaquática", "Segurança Hídrica"] },
  { n: "02", title: "Sistema Integrado do Litoral Norte", loc: "Litoral Norte · SP", img: sao, video: litoralVideo.url, demoVimeoId: "1211900786",
    headline: "Ampliação e segurança hídrica para os municípios do Litoral Norte de São Paulo.",
    body: "Projeto voltado à ampliação, modernização e garantia da segurança do sistema de abastecimento de água dos municípios do Litoral Norte de São Paulo. A solução foi desenvolvida para reduzir os riscos de desabastecimento provocados pelo crescimento populacional e pelo aumento expressivo da demanda durante as temporadas de turismo da região. Fornecemos centenas de carretas para a modernização dos sistemas de água e esgoto, contribuindo para ampliar a capacidade operacional, a confiabilidade da rede e a segurança hídrica para moradores e visitantes.",
    tags: ["Abastecimento", "Segurança Hídrica", "Litoral Norte", "Grande Escala"] },
];

function ProjectPanel({ p, idx, onOpenDemo }: { p: P; idx: number; onOpenDemo: (vimeoId: string, title: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const reverse = idx % 2 === 1;
  const hasDemo = !!p.demoVimeoId;

  return (
    <div ref={ref} className="relative flex items-center py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className={`relative grid md:grid-cols-12 gap-8 md:gap-14 max-w-7xl mx-auto w-full items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        <motion.div style={{ y, opacity }} className={`md:col-span-8 relative ${reverse ? "md:order-2" : ""}`}>
          <div
            className={`relative aspect-[16/10] overflow-hidden group ${hasDemo ? "cursor-pointer" : ""}`}
            onClick={hasDemo ? () => onOpenDemo(p.demoVimeoId!, p.title) : undefined}
            role={hasDemo ? "button" : undefined}
            tabIndex={hasDemo ? 0 : undefined}
            onKeyDown={hasDemo ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpenDemo(p.demoVimeoId!, p.title); } } : undefined}
            aria-label={hasDemo ? `Ver demonstração de ${p.title}` : undefined}
          >
            {p.previewVimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${p.previewVimeoId}?background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&title=0&byline=0&portrait=0&controls=0`}
                className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-[400ms] ${hasDemo ? "group-hover:brightness-105 group-hover:scale-[1.01]" : ""}`}
                style={{ border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                title={p.title}
                loading="lazy"
              />
            ) : p.video ? (
              <video
                src={p.video}
                className={`w-full h-full object-cover transition-all duration-[400ms] ${hasDemo ? "group-hover:brightness-105 group-hover:scale-[1.01]" : ""}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={p.title}
              />
            ) : (
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
            )}
            <div className="absolute inset-0 scrim-media-soft pointer-events-none" />
            <div className="absolute top-6 left-6 font-display text-7xl md:text-9xl font-extralight text-white/90 mix-blend-overlay pointer-events-none">{p.n}</div>

            {hasDemo && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
                  <span className="absolute inset-0 rounded-full bg-aqua/20 animate-ping" />
                  <span className="absolute inset-2 rounded-full bg-background/40 backdrop-blur-sm border border-white/30" />
                  <svg viewBox="0 0 24 24" className="relative w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`md:col-span-4 space-y-6 ${reverse ? "md:order-1" : ""}`}
        >
          <div className="flex items-center gap-4 text-aqua-deep text-[10px] uppercase tracking-[0.4em]">
            <span className="font-display text-2xl text-aqua/70 font-light">{p.n}</span>
            <span className="w-8 h-px bg-aqua-deep" />
            {p.loc}
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-extralight leading-tight text-balance text-foreground">{p.title}</h3>
          <p className="text-aqua text-lg md:text-xl italic font-light text-balance">{p.headline}</p>
          <p className="text-graphite leading-relaxed font-light">{p.body}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {p.tags.map((t) => (
              <span key={t} className="text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 border border-[color:var(--border-strong)] text-graphite/85">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Projects() {
  const [demo, setDemo] = useState<{ vimeoId: string; title: string; loc: string } | null>(null);

  useEffect(() => {
    if (!demo) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setDemo(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [demo]);

  return (
    <section id="projetos" className="relative bg-card">
      <div className="pt-20 pb-8 md:pt-28 md:pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-aqua-deep text-[11px] uppercase tracking-[0.4em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-aqua-deep" />Presença em Grandes Obras
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] text-balance text-foreground">
            Infraestrutura que <span className="italic text-aqua">sustenta</span> o Brasil.
          </h2>
        </motion.div>
      </div>
      {projects.map((p, i) => (
        <ProjectPanel key={p.n} p={p} idx={i} onOpenDemo={(vimeoId, title) => setDemo({ vimeoId, title, loc: p.loc })} />
      ))}

      <AnimatePresence>
        {demo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-modal-dark backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setDemo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center gap-4 w-full max-w-[1200px]"
            >
              <div
                className="relative mx-auto bg-surface-dark border border-aqua/30 overflow-hidden"
                style={{ aspectRatio: "9 / 16", width: "min(100%, calc(85vh * 9 / 16))" }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${demo.vimeoId}?autoplay=1&muted=0&controls=1&autopause=0&playsinline=1`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={demo.title}
                />
              </div>
              <div className="w-full bg-card border border-border p-5 flex items-center justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-aqua">Demonstração</div>
                  <div className="font-display text-xl mt-1">{demo.title}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mt-1">{demo.loc}</div>
                </div>
                <button
                  onClick={() => setDemo(null)}
                  className="px-4 py-2 border border-border text-xs uppercase tracking-[0.3em] hover:border-aqua shrink-0"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
