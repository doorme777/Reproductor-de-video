import "./style.css";
window.onload;
const videos = [
  "./video/helicoptero.mp4",
  "./video/montaña.mp4",
  "./video/oceano.mp4",
];
document.querySelector("#app").innerHTML = `
  <video src="${videos[0]}" controls autoplay   id="video"></video>
  <div class="barra01">
    <div class="barra01"></div>
  </div>

  <div class="controls">
  <div></div> 
  <div></div>
  </div>

`;

const video = document.getElementById("video");

function pause() {}

setupCounter(document.querySelector("#counter"));
