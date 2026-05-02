// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');

  const synth = window.speechSynthesis;

  function loadVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;

    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = synth.getVoices().find((v) => v.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face open';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}
