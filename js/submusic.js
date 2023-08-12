let on_off = document.querySelector('.form-switch .form-check-input');
let subAudio = document.querySelector('.subMusicOn audio');

subAudio.volume = 0.1;

on_off.onclick = function() {
  subAudio.paused ? audio.play() : music_stop();
}

function music_stop() {
  subAudio.pause();
  subAudio.currentTime = 0;
}