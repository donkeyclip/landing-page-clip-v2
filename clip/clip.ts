import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);
import css from "./clip.css";
import html from "./clip.html";
import { Top } from "./effects/incidents";
import initParams from "./initParams";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
    },
  ],
});

clip.addIncident(Top("0%", "100%", ".latter", 300, "@stagger(0,300)"), 0);
clip.addIncident(
  Top("0%", "105%", ".grid-card-card", 300, "@stagger(0,500)"),
  200
);

export { clip };
