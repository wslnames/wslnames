// script.js
let isPlaying = false;

function toggleAudio(soundId) {
    const audio = document.getElementById(soundId);
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    
    if (!isPlaying) {
        audio.play();
        icon.textContent = '■';
        isPlaying = true;
    } else {
        audio.pause();
        audio.currentTime = 0;
        icon.textContent = '▶';
        isPlaying = false;
    }

    audio.onended = function() {
        icon.textContent = '▶';
        isPlaying = false;
    };
}

