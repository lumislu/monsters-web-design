const loadingBar = document.querySelector(".bar");
const loadingPage = document.querySelector(".loading-page");
const glowing = document.querySelector(".glowing");

const body = document.querySelector("body");
const darkmode = document.querySelector(".toggle");

const navbarColumn = document.querySelector(".navbar-column");

//darkmode
darkmode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

//navbar
navbarColumn.addEventListener("click", () => {
  navbarColumn.classList.toggle("active");
  navbarColumn.classList.remove("active");
});

//CHARACTER
const options = document.querySelector(".options");
const optionAll = [];
monsters.map((monster) => {
  // 創建元素節點
  const option = document.createElement("div");
  option.className = "option";
  option.id = `option-${monster.id}`;
  //添加option的照片連結
  option.style.backgroundImage = `url(${monster.imgUrl})`;

  const info = document.createElement("div");
  info.className = "info";
  const des = document.createElement("div");
  des.className = "des";
  const p = document.createElement("p");
  p.textContent = monster.description;
  // 創建元素節點+內容
  const name = document.createElement("p");
  name.className = "name";
  name.textContent = monster.name;

  const englishName = document.createElement("p");
  englishName.className = "english-name";
  englishName.textContent = monster.englishName;

  //將子節點添加到父節點中，建構html結構
  option.appendChild(info);
  info.appendChild(name);
  info.appendChild(englishName);
  info.appendChild(des);
  des.appendChild(p);

  options.appendChild(option);

  //將每個option添加到optionall數組中
  optionAll.push(option);

  //設置初始的active
  if (option.id === "option-1") {
    option.classList.add("active");
  }
  //添加點擊事件監聽器
  option.addEventListener("click", () => {
    //移除所有選項的active
    optionAll.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});

//about
const about = document.querySelector(".about-container");
const slideDuration = 5000; // 每張輪播圖片顯示時間
let currentSlideIndex = 0;

aboutImgs.forEach((img) => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.style.backgroundImage = `url(${img.imgUrl})`;
  about.appendChild(slide);
});

function showNextSlide() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[currentSlideIndex].classList.add('active');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}
setInterval(showNextSlide, slideDuration);

// opening animation

// let percent = 0;
// let loadingTimer = setInterval(() => {
//   loadingBar.style.width = percent + "%";
//   percent += 1;
//   if (percent > 100) {
//     loadingPage.classList.add("complete");
//     glowing.classList.add("complete");
//     clearInterval(loadingTimer);
//   }
// }, 50);
