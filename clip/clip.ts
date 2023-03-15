import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";

setCSSCore(AnimePluginDefinition.CSSEffect);
import css from "./clip.css";
import html from "./clip.html";
import { ClipIncidents } from "./ClipIncidents";
import { BackGroundColor, Left, Opacity, Top } from "./effects/incidents";
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

clip.addIncident(
  Top("0%", "100%", ".first-title-wrapper .latter", 300, "@stagger(0,300)"),
  0
);

clip.addIncident(Top("563px", "480px", ".cursor", 1000), 0);
clip.addIncident(Left("190px", "1280px", ".cursor", 1000), 0);
clip.addIncident(ClipIncidents(".second-slide"), 1000);
clip.addIncident(Opacity(1, 0, "#slide-0", 10), 6889);
clip.addIncident(ClipIncidents("#slide-0"), 6899);
clip.addIncident(Opacity(1, 0, "#slide-1", 10), 12000);
clip.addIncident(ClipIncidents("#slide-1"), 12000);
clip.addIncident(Opacity(1, 0, "#slide-2", 10), 16790);
clip.addIncident(ClipIncidents("#slide-2"), 16790);
clip.addIncident(
  Top("100%", "0%", ".first-title-wrapper .latter", 300, "@stagger(0,300)"),
  5600
);
clip.addIncident(
  Top("0%", "100%", ".second-title-wrapper .latter", 300, "@stagger(0,300)"),
  6299
);
clip.addIncident(Left("65%", "100%", ".client-list-wrapper", 500), 6270);
clip.addIncident(BackGroundColor("#565454", "#1B1B1B", "#card-0", 200), 6270);
clip.addIncident(BackGroundColor("#1B1B1B", "#565454", "#card-0", 200), 12000);
clip.addIncident(BackGroundColor("#565454", "#1B1B1B", "#card-1", 200), 12000);
clip.addIncident(BackGroundColor("#1B1B1B", "#565454", "#card-1", 200), 16790);
clip.addIncident(BackGroundColor("#565454", "#1B1B1B", "#card-2", 200), 16790);

export { clip };
