let music = document.getElementById("music");
let player = document.getElementById("player");
let muted = document.getElementById("muted");
music.volume = 0.3;
player.onclick = function () { toggleMusic(); }
muted.onclick = function () { toggleMusic(); }

let playing = false;

const toggleMusic = () => {

  if (playing) {
    muted.style.display = "flex";
    fadeOut();
    playing = false;
  } else {
    muted.style.display = "none";
    fadeIn();
    playing = true;
  }

}

var vol = 0.3;
var interval = 30;

const fadeOut = () => {
  var fade = setInterval(
    function() {
      if (playing) {
        return;
      } else if (vol > 0.3) {
        vol = 0.3;
      } else if (vol > 0.2) {
        music.volume = vol;
        vol -= 0.05;
      } else if (vol > 0) {
        music.volume = vol;
        vol -= 0.01;
      } else {
        clearInterval(fade);
        music.pause();
      }
    }, interval);
}

const fadeIn = () => {
  music.play();
  var fade = setInterval(
    function() {
      if (!playing) {
        return;
      } else if (vol < 0 ) {
        vol = 0;
      } else if (vol == 0) {
        music.volume = vol;
        vol += 0.01;
      } else if (vol < 0.3) {
        music.volume = vol;
        vol += 0.05;
      } else {
        clearInterval(fade);
      }
    }, interval);
}
