import "./styles.css";

export function App(videos) {
  return `
    <div class="container">
        <div class="video-footer">
            <div class="barra-invisible">
                <div class="barra1">
                    <div class="barra2"></div>
                </div>
            </div>

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
        </div>
        <video src="${videos}" id="video"></video>
    </div>    
    <span class="loader"></span>
    `;
}
