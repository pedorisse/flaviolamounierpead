import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Knowledge } from "@/components/Knowledge";
import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Politejo · Infraestrutura Hídrica, Saneamento e Sustentabilidade" },
      { name: "description", content: "Politejo desenvolve soluções técnicas para infraestrutura hídrica, saneamento e eficiência de recursos, com foco em durabilidade, sustentabilidade e impacto positivo nas cidades." },
      { property: "og:title", content: "Politejo · Infraestrutura Hídrica, Saneamento e Sustentabilidade" },
      { property: "og:description", content: "Politejo desenvolve soluções técnicas para infraestrutura hídrica, saneamento e eficiência de recursos, com foco em durabilidade, sustentabilidade e impacto positivo nas cidades." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Knowledge />
      <Partners />
      <FinalCTA />
    </main>
  );
}
