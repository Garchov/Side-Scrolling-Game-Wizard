document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const music = document.getElementById('background-music');

    // Function to restart video every 15 seconds
    function restartVideo() {
        video.currentTime = 0;
        video.play();
    }

    // Function to check if the audio is playing
    function isMusicPlaying() {
        if (music.paused) {
            console.log('Music is paused.');
        } else {
            console.log('Music is playing.');
        }
    }

    // Play the video and music initially
    video.play();
    music.play().then(() => {
        console.log('Music started playing successfully.');
    }).catch((error) => {
        console.error('Error playing music:', error);
    });

    // Set an interval to restart the video every 15 seconds
    setInterval(restartVideo, 15000); // 15000 milliseconds = 15 seconds

    // Check if music is playing every 5 seconds
    setInterval(isMusicPlaying, 5000);
    
    // Additional event listeners to log audio element events
    music.addEventListener('play', () => console.log('Music play event fired.'));
    music.addEventListener('pause', () => console.log('Music pause event fired.'));
    music.addEventListener('ended', () => console.log('Music ended event fired.'));
});