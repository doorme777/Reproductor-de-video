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

  <div class="video-footer">
    ${Barra}
    ${Controls}
  </div>
`;

const video = document.getElementById("video");
const playIcon = document.getElementById("play");

playIcon.addEventListener("click", playVideo);
document.addEventListener("keydown", playVideo);
video.addEventListener("click", playVideo);
//KeyboardEvent

function playVideo() {
  if (video.paused) {
    video.play();
    changeIcon("fa-play", "fa-pause", playIcon);
  } else {
    video.pause();
    changeIcon("fa-pause", "fa-play", playIcon);
  }
}

function changeIcon(removeClass, changeClass, element) {
  console.log({
    removeClass,
    changeClass,
    element,
  });
  element.classList.remove(removeClass);
  element.classList.add(changeClass);
}
