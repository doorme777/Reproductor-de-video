import "./style.css";
import { App } from "./components/app";
window.onload;
const VIDEOS_ARRAY = [
  "./video/helicoptero.webm",
  "./video/montaña.webm",
  "./video/oceano.webm",
];
let current = 0;

document.querySelector("#app").innerHTML = App(VIDEOS_ARRAY[current]);

// Elements
let VIDEO = document.getElementById("video");
const PLAY_ICON = document.getElementById("play");
const FORWARD = document.querySelector(".fa-forward ");
const BACKWARD = document.querySelector(".fa-backward");
const FULL_DISPLAY = document.getElementById("expand");
const LOADER = document.querySelector(".loader");
const CONTAINER = document.querySelector(".container");
document.querySelector(".barra-invisible").onclick = searchMinute;
VIDEO.ontimeupdate = updateTime;
VIDEO.onloadeddata = updateTime;
VIDEO.onended = forward;

// Play and Pause
function loadVideo() {
  VIDEO.src = VIDEOS_ARRAY[current];
}
loadVideo();
VIDEO.addEventListener("loadeddata", function () {
  LOADER.style.display = "none";
  playVideo();
});
PLAY_ICON.addEventListener("click", playVideo);
VIDEO.addEventListener("click", playVideo);

// Keydown
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    console.log("Tecla de flecha hacia arriba presionada");
  }
  if (event.key === "ArrowDown") {
    console.log("Tecla de flecha hacia abajo presionada");
  }
  if (event.key === " ") {
    playVideo();
  }
  if (event.key === "f" || event.key === "F") {
    toggleFullScreen();
  }
});

// next and before
FORWARD.addEventListener("click", forward);
BACKWARD.addEventListener("click", backward);

//expand
FULL_DISPLAY.addEventListener("click", toggleFullScreen);
VIDEO.addEventListener("dblclick", toggleFullScreen);

//KeyboardEvent usalos como el shift + n o p eso

// Funciones
function playVideo() {
  if (video.paused) {
    video.play();
    PLAY_ICON.classList.replace("fa-play", "fa-pause");
  }
  video.pause();
  PLAY_ICON.classList.replace("fa-pause", "fa-play");
}

function forward() {
  if (current < VIDEOS_ARRAY.length - 1) {
    ++current;
    VIDEO.src = VIDEOS_ARRAY[current];
    playVideo();
  }
}

function backward() {
  if (current > 0) {
    --current;
    VIDEO.src = VIDEOS_ARRAY[current];
    playVideo();
  }
}

function toggleFullScreen() {
  CONTAINER.classList.toggle("toggleFullScren");
  if (document.fullscreenElement) {
    FULL_DISPLAY.classList.replace("fa-compress", "fa-expand");
    return document.exitFullscreen();
  }
  FULL_DISPLAY.classList.replace("fa-expand", "fa-compress");
  CONTAINER.requestFullscreen();
}

function updateTime() {
  const TIME = `${conversion(VIDEO.currentTime)} / ${conversion(
    VIDEO.duration
  )}`;
  document.querySelector(".estado").innerHTML = TIME;
  let percentage = (100 * VIDEO.currentTime) / VIDEO.duration;
  document.querySelector(".barra2").style.width = `${percentage}%`;
}

function conversion(seconds) {
  let d = new Date(seconds * 1000);
  let second = d.getSeconds() <= 9 ? "0" + d.getSeconds() : d.getSeconds();

  let minute = d.getMinutes() <= 9 ? "0" + d.getMinutes() : d.getMinutes();
  return `${minute}:${second}`;
}

function searchMinute(e) {
  let onClick = e.offsetX;
  let widthBrowser = document.querySelector(".barra-invisible").offsetWidth;
  let percentage = (100 * onClick) / widthBrowser;
  let position = Math.floor(VIDEO.duration * (percentage / 100));
  VIDEO.currentTime = position;
}
