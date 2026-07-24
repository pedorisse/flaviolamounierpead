import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";

export const Route = createFileRoute("/projeto-pead-7f42k9")({
  head: () => ({
    meta: [
      { title: "Flávio Lamounier | Infraestrutura Hídrica e Soluções em PEAD" },
      { name: "description", content: "Portfólio técnico de Flávio Lamounier, com atuação em infraestrutura hídrica, saneamento, tubulações PEAD e grandes projetos de água e esgoto." },
      { property: "og:title", content: "Flávio Lamounier | Infraestrutura Hídrica e Soluções em PEAD" },
      { property: "og:description", content: "Portfólio técnico de Flávio Lamounier, com atuação em infraestrutura hídrica, saneamento, tubulações PEAD e grandes projetos de água e esgoto." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: HomePage,
});
