import "./Controls.css";

// aquí la clase para transformar a pause fa-pause
// También aquí esta el compres para expand fa-compress
export function Controls(play) {
  return `
    <div class="controls">
      <div>
        <i class="fa-solid fa-backward fa-lg"></i>
        <i id="play" class="fa-solid fa-play fa-lg"></i>
        <i class="fa-solid fa-forward fa-lg"></i>
        <div class="estado"></div>
      </div> 

      <div>
       <i class="fa-solid fa-gear fa-lg"></i>
       <i id="expand" class="fa-solid fa-expand fa-lg"></i>
      </div>
    </div>
    `;
}
