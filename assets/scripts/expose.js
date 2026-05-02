// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('audio');

  // Set initial audio volume from slider default (50)
  audio.volume = volumeSlider.value / 100;

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const vol = parseInt(volumeSlider.value);
    audio.volume = vol / 100;

    let level;
    if (vol === 0) {
      level = 0;
    } else if (vol < 33) {
      level = 1;
    } else if (vol < 67) {
      level = 2;
    } else {
      level = 3;
    }
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', () => {
    if (!audio.src || hornSelect.value === 'select') return;

    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
