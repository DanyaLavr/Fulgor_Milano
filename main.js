//* Header section
//* Finder

let isSearchVisible = false;
const finderButton = document.getElementById("finder");

finderButton.addEventListener("click", () => {
  if (!isSearchVisible) {
    const li = document.createElement("li");
    li.className = "header__search-item";
    li.innerHTML = `
      <form action="">
        <input type="text" />
        <button>
          <img src="./assets/header/arrow.svg" alt="search" />
        </button>
      </form>
    `;
    finderButton.closest("li").before(li);
    li.querySelector("input").focus();
    isSearchVisible = true;
  } else {
    document.querySelector(".header__search-item").remove();
    isSearchVisible = false;
  }
});

//* Mobile Menu
//* Finder

let isMobileSearchVisible = false;
const mobileFinder = document.getElementById("mobile-finder");

mobileFinder.addEventListener("click", () => {
  if (!isMobileSearchVisible) {
    const li = document.createElement("li");
    li.className = "mobile-search-item";
    li.innerHTML = `
     <form action="" onsubmit="document.getElementById('burger-menu').checked=false; return false;">
        <input type="text" />
        <button>
          <img src="./assets/header/arrow.svg" alt="search" />
        </button>
      </form>
    `;
    mobileFinder.closest("li").before(li);
    li.querySelector("input").focus();
    isMobileSearchVisible = true;
  } else {
    document.querySelector(".mobile-search-item").remove();
    isMobileSearchVisible = false;
  }
});

//* Video section
//* Play and pause

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

//* Mobile Menu
//* Close modal

const burgerMenuButton = document.getElementById("burger-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-navigation__list a");

mobileNavLinks.forEach((elem) => {
  elem.addEventListener("click", () => {
    burgerMenuButton.checked = false;
  });
});
