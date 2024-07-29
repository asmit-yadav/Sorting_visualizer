// sound.js

let audioContext;
let oscillator;
let isPlaying = false;

function setupSound() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(frequency) {
  if (!isPlaying) return;
  
  if (!oscillator) {
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // type of sound wave
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
  } else {
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  }
}

function stopSound() {
  if (oscillator) {
    oscillator.stop();
    oscillator = null;
  }
}

function toggleSound() {
  isPlaying = !isPlaying;
  if (!isPlaying) {
    stopSound();
  }
}
