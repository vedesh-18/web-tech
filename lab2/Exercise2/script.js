<<<<<<< HEAD
const audio = document.getElementById('audioPlayer');
const video = document.getElementById('videoPlayer');
const audioDisplay = document.getElementById('audioTime');
const videoDisplay = document.getElementById('videoTime');

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

audio.addEventListener('timeupdate', () => {
  audioDisplay.textContent = formatTime(audio.currentTime);
});

video.addEventListener('timeupdate', () => {
  videoDisplay.textContent = formatTime(video.currentTime);
});
=======
const audio = document.getElementById('audioPlayer');
const video = document.getElementById('videoPlayer');
const audioDisplay = document.getElementById('audioTime');
const videoDisplay = document.getElementById('videoTime');

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

audio.addEventListener('timeupdate', () => {
  audioDisplay.textContent = formatTime(audio.currentTime);
});

video.addEventListener('timeupdate', () => {
  videoDisplay.textContent = formatTime(video.currentTime);
});
>>>>>>> aa10dc0e3687c52e445df8d251edd0c7082bdd1a
