import "./Controls.css";

// aquí la clase para transformar a pause fa-pause
// También aquí esta el compres para expand fa-compress
export function Controls(videos) {
  return `
    <div class="controls">
      <div>
        <i class="fa-solid fa-backward fa-lg"></i>
        <i class="fa-solid fa-play fa-lg"></i>
        <i class="fa-solid fa-forward fa-lg"></i>
        00:00 / 00:00
      </div> 

      <div>
       <i class="fa-solid fa-gear fa-lg"></i>
       <i class="fa-solid fa-expand fa-lg"></i>
      </div>
    </div>
    `;
}
