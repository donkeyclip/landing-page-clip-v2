import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);
import css from "./clip.css";
import html from "./clip.html";
import {
  BorderWidth,
  Height,
  Left,
  Opacity,
  Stroke,
  Top,
  Width,
} from "./effects/incidents";
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
clip.addIncident(Top("0%", "105%", ".grid-card-card", 300), 200);
clip.addIncident(Top("420px", "480px", ".cursor", 300), 500);
clip.addIncident(Left("1000px", "1280px", ".cursor", 300), 500);
clip.addIncident(BorderWidth("10px", "0px", ".grid-card-5", 100), 719);
clip.addIncident(
  Stroke("#4786FF", "#595961", ".grid-card-5 > svg > path", 100),
  719
);
clip.addIncident(Top("350px", "420px", ".cursor", 600), 819);
clip.addIncident(Left("518px", "1000px", ".cursor", 600), 819);
clip.addIncident(BorderWidth("0px", "10px", ".grid-card-5", 100), 1067);
clip.addIncident(
  Stroke("#595961", "#4786FF", ".grid-card-5 > svg > path", 100),
  1067
);
clip.addIncident(BorderWidth("10px", "0px", ".grid-card-4", 100), 1087);
clip.addIncident(
  Stroke("#8C1BAB", "#595961", ".grid-card-4 > svg > path", 100),
  1087
);
clip.addIncident(Top("240px", "350px", ".cursor", 400), 1419);
clip.addIncident(Left("348px", "518px", ".cursor", 400), 1419);
clip.addIncident(BorderWidth("0px", "10px", ".grid-card-4", 100), 1434);
clip.addIncident(
  Stroke("#595961", "#4786FF", ".grid-card-4 > svg > path", 100),
  1434
);
clip.addIncident(BorderWidth("10px", "0px", ".grid-card-0", 100), 1528);
clip.addIncident(
  Stroke("#47E2FF", "#595961", ".grid-card-0 > svg > path", 100),
  1528
);

clip.addIncident(Width("255px", "275px", ".grid-card-0", 200), 1819);
clip.addIncident(Height("140px", "160px", ".grid-card-0", 200), 1819);
clip.addIncident(Opacity(0, 1, ".first-slide", 10), 2019);
clip.addIncident(Opacity(1, 0, ".second-slide", 10), 2019);

export { clip };
