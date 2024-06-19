
const backgroundMusic = document.getElementById('background-music');

backgroundMusic.play()
  .then(() => {
    console.log('Background music started playing.');
  })
  .catch(error => {
    console.error('Error playing background music:', error);
  });