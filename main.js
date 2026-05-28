const videoPlayer = document.querySelector(".video__content");
const videoButton = document.querySelector(".video__button");

videoButton.addEventListener("click", () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    videoButton.innerHTML =
      ' <img src="./assets/video/pause.svg"  style="opacity: 0"  alt="pause" />';
  } else {
    videoPlayer.pause();

    videoButton.innerHTML = ' <img src="./assets/video/play.svg" alt="play" />';
  }
});
