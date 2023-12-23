document.addEventListener("DOMContentLoaded", function () {
    var videoPlayer = document.getElementById("videoPlayer");

    // Video loops after playback ends
    videoPlayer.addEventListener("ended", function () {
        videoPlayer.currentTime = 0; // Set the time to the beginning
        videoPlayer.play(); // Start playback
    });
});
