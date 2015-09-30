var videoplayer = document.getElementById("media");
videoplayer.addEventListener('timeupdate', updatebar, false);

function playpause() {
    if (videoplayer.paused)
        videoplayer.play();
    else
        videoplayer.pause()
}
function mute() {
    if (videoplayer.muted)
        videoplayer.muted = false;
    else
        videoplayer.muted = true;
}
function fullscreenmode() {
    if (videoplayer.requestFullscreen) {
        videoplayer.requestFullscreen();
    } else if (videoplayer.msRequestFullscreen) {
        videoplayer.msRequestFullscreen();
    } else if (videoplayer.mozRequestFullScreen) {
        videoplayer.mozRequestFullScreen();
    } else if (videoplayer.webkitRequestFullscreen) {
        videoplayer.webkitRequestFullscreen();
    }
}
function updatebar() {
    var progbar = document.getElementById("mediaprogress");
    var percentage = Math.floor((100 / videoplayer.duration) * videoplayer.currentTime);
    progbar.value = percentage;
}