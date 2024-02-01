import "./style.css";
import { Video } from "./components/VideoComponente/Video.js";
import { Barra } from "./components/Barra/Barra.js";
import { Controls } from "./components/Controls/Controls.js";

window.onload;
const videos = [
  "./video/helicoptero.mp4",
  "./video/montaña.mp4",
  "./video/oceano.mp4",
];
document.querySelector("#app").innerHTML = `
  ${Video(videos[0])}
  ${Barra}
  ${Controls}
`;

setupCounter(document.querySelector("#counter"));
