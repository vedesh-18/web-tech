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
