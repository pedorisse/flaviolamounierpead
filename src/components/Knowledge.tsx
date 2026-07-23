import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import coletores from "@/assets/coletores-esgoto.mp4.asset.json";
import tecnologia from "@/assets/tecnologia-infraestrutura.mp4.asset.json";
import travessiasMnd from "@/assets/travessias-mnd.mp4.asset.json";

const filters = [
  "Todos",
  "Tubos PEAD",
  "Saneamento",
] as const;
type F = typeof filters[number];

type Item = { id: number; title: string; subtitle: string; cat: F[]; tags?: string[]; src: string };

const items: Item[] = [
  { id: 1, title: "Redes adutoras em PEAD", subtitle: "TRANSPORTE DE ÁGUA EM GRANDES DISTÂNCIAS", cat: ["Tubos PEAD"], tags: ["ADUÇÃO", "PEAD", "GRANDE ESCALA"], src: tecnologia.url },
  { id: 2, title: "Travessias em MND", subtitle: "INSTALAÇÃO SEM INTERVENÇÕES DESTRUTIVAS", cat: ["Tubos PEAD"], tags: ["MND", "PEAD", "INFRAESTRUTURA"], src: travessiasMnd.url },
  { id: 3, title: "Coletores de esgoto", subtitle: "ROBUSTEZ PARA SISTEMAS CRÍTICOS", cat: ["Saneamento"], tags: ["ESGOTO", "SANEAMENTO", "DURABILIDADE"], src: coletores.url },
];

export function Knowledge() {
  const [f, setF] = useState<F>("Todos");
  const [open, setOpen] = useState<typeof items[0] | null>(null);
  const filtered = f === "Todos" ? items : items.filter((i) => i.cat.includes(f));

  return (
    <section className="relative py-20 md:py-28 bg-surface-soft grain overflow-hidden">
      <div className="px-6 md:px-16 max-w-7xl mx-auto mb-10">
        <div className="text-aqua-deep text-[11px] uppercase tracking-[0.4em] mb-5 flex items-center gap-3">
          <span className="w-8 h-px bg-aqua-deep" />Conhecimento Técnico
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1] text-balance max-w-2xl text-foreground">
          Engenharia aplicada <span className="italic text-aqua">à rede.</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`text-[10px] uppercase tracking-[0.3em] px-4 py-2 border transition-colors ${
                f === x
                  ? "bg-aqua border-aqua text-primary-foreground"
                  : "bg-card border-[color:var(--border-strong)] text-aqua-deep hover:border-aqua hover:bg-surface-muted"
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((it, i) => (
              <motion.button
                layout
                key={it.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpen(it)}
                className="group relative aspect-[4/5] overflow-hidden bg-card border border-[color:var(--border-strong)] hover:border-aqua transition-colors text-left shadow-soft"
              >
                <video
                  src={it.src}
                  muted
                  playsInline
                  loop
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 scrim-media" />
                <div className="absolute top-4 right-4 w-12 h-12 border border-aqua/60 flex items-center justify-center text-aqua bg-white/20 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-aqua-glow">{it.subtitle}</div>
                  <div className="font-display text-lg md:text-xl font-light leading-tight text-white">{it.title}</div>
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {(it.tags || it.cat.slice(0, 2)).map((c) => (
                      <span key={c} className="text-[9px] uppercase tracking-[0.25em] text-white/85 border border-white/30 px-2 py-0.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-modal-dark backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center gap-4 max-w-[90vw]"
            >
              <div className="flex items-center justify-center bg-surface-dark border border-aqua/30 overflow-hidden">
                <video
                  src={open.src}
                  controls
                  autoPlay
                  className="block object-contain"
                  style={{ maxHeight: "85vh", maxWidth: "90vw" }}
                />
              </div>
              <div className="w-full bg-card border border-border p-5 flex items-center justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-aqua">{open.cat.join(" · ")}</div>
                  <div className="font-display text-xl mt-1">{open.title}</div>
                </div>
                <button
                  onClick={() => setOpen(null)}
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
