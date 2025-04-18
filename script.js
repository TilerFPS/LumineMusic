const audio = document.getElementById('audio');
const playlist = document.getElementById('playlist');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const currentThumb = document.getElementById('current-thumb');

playlist.addEventListener('click', function (e) {
  const item = e.target.closest('li');
  if (item) {
    const src = item.getAttribute('data-src');
    const thumb = item.getAttribute('data-thumb');
    audio.src = src;
    audio.play();

    currentThumb.src = thumb;
    currentThumb.style.display = 'block';
  }
});

playBtn.onclick = () => audio.play();
pauseBtn.onclick = () => audio.pause();
