let music = document.getElementById("music");
let player = document.getElementById("player");
let muted = document.getElementById("muted");

player.onclick = function () { toggleMusic(); }
muted.onclick = function () { toggleMusic(); }

let playing = false;
const toggleMusic = () => {

  if (playing) {
    muted.style.display = "flex";
    music.pause();
    playing = false;
  } else {
    muted.style.display = "none";
    music.play();
    playing = true;
  }

}
