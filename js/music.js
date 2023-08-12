let on_off = document.querySelector('.form-switch .form-check-input');
let audio = document.querySelector('.musicOn audio');

audio.volume = 0.8;

window.onload = init;
function init() {
  audio.load();
  audio.play();
}

function test(element) {
  if (element.checked) {
    audio.play()
  } else {
    music_stop()
  }
}

function music_stop() {
  audio.pause();
  audio.currentTime = 0;
}
