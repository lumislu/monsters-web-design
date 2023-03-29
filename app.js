const loadingBar = document.querySelector(".bar");
const loadingPage = document.querySelector(".loading-page");
const glowing = document.querySelector(".glowing");
const body = document.querySelector("body");
const darkmode = document.querySelector("#darkmode");

//darkmode
darkmode.addEventListener("click", () => {
  !body.classList.value
    ? body.classList.add("darkmode")
    : body.classList.remove("darkmode");
});

//openingc animation
let percent = 0;
let loadingTimer = setInterval(() => {
  loadingBar.style.width = percent + "%";
  percent += 1;
  if (percent > 100) {
    loadingPage.classList.add("complete");
    glowing.classList.add("complete");
    clearInterval(loadingTimer);
  }
}, 50);

// swiper
var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 8,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
