import "./style.css";
import { App } from "./components/app";
window.onload;
const VIDEOS_ARRAY = [
  "./video/helicoptero.mp4",
  "./video/montaña.mp4",
  "./video/oceano.mp4",
];
let current = 0;

document.querySelector("#app").innerHTML = `
  ${App(VIDEOS_ARRAY[current])}

`;

// Elements
let VIDEO = document.getElementById("video");
const PLAY_ICON = document.getElementById("play");
const FORWARD = document.querySelector(".fa-forward ");
const BACKWARD = document.querySelector(".fa-backward");
const FULL_DISPLAY = document.getElementById("expand");
document.querySelector(".barra1").onclick = searchMinute;
VIDEO.ontimeupdate = updateTime;
VIDEO.onloadeddata = updateTime;
VIDEO.onended = forward;

// Play and Pause
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
    console.log("Tecla de espacio presionada");
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
    changeIcon("fa-play", "fa-pause", PLAY_ICON);
  } else {
    video.pause();
    changeIcon("fa-pause", "fa-play", PLAY_ICON);
  }
}

function changeIcon(removeClass, changeClass, element) {
  element.classList.remove(removeClass);
  element.classList.add(changeClass);
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

function adjustSize() {
  let anchoVentana =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let altoVentana =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  VIDEO.width = anchoVentana;
  VIDEO.height = altoVentana;
}

function toggleFullScreen() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    // Si ya está en pantalla completa, salir de ella
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    // Si no está en pantalla completa, entrar en ella
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }
}

adjustSize();

window.addEventListener("resize", adjustSize);

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
  let widthBrowser = document.querySelector(".barra1").offsetWidth;
  let percentage = (100 * onClick) / widthBrowser;
  let position = Math.floor(VIDEO.duration * (percentage / 100));
  VIDEO.currentTime = position;
}
