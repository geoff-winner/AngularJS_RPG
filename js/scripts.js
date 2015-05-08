var audio = new Audio('js/sounds/gameMusic.mp3');
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();

function pauseAudio(){
audio.pause();
};
function playAudio(){
audio.play();
};
