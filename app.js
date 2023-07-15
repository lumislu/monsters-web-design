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
const aboutContainer = document.querySelector(".about-container");
const dots = document.querySelector(".dots");
const imgBg = [];

const scrollController = new AbortController();
let animationTimer;
let currentSlideIndex = 0;
const slideInterval = 5000;
let clickTimer; // 儲存點擊事件的計時器ID

// 偵測滾動位置的函數，並觸發仔入圖片跟輪波圖
function handleScroll() {
  // 偵測滾動位置，判斷是否滾動到特定標題的位置
  const titleElement = document.getElementById("about");
  const titlePosition = titleElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titlePosition <= windowHeight / 2) {
    // 滾動到特定標題，執行輪播圖片的載入和自動切換
    console.log("scroll被觸發");
    loadSlider();
    startSlideShow();
    document.removeEventListener("scroll", handleScroll, { once: true });
  }
}

// 加載輪播圖片的函數，並監聽點擊事件
function loadSlider() {
  // 在此處執行輪播圖片的加載操作
  // 可以動態生成輪播圖片的HTML元素並添加到相應的容器中
  aboutImgs.map((img, index) => {
    const dot = document.createElement("li");
    dot.className = "dot";
    dot.id = `dot-${img.id}`;
    dot.textContent = `${img.id}`;
    aboutContainer.style.backgroundImage = `url(${imgBg[0]})`;

    if (index === 0) {
      dot.classList.add("active");
    }

    dots.appendChild(dot);
    imgBg.push(img.imgUrl);

    // 監聽輪播圖片的點擊事件
    dot.addEventListener("click", () => {
      // 清除之前的計時器
      clearInterval(animationTimer);
      clearTimeout(clickTimer);

      handleSlideClick(index);
    });
  });
}

// 清除dot的active
function clearActiveDots() {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("active");
  });
}

// 啟動輪播的函數
function startSlideShow() {
  // 定義輪播計時器
  animationTimer = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % imgBg.length;
    aboutContainer.style.animation = ""; // 重置动画属性
    setTimeout(() => {
      // 添加淡入效果
      aboutContainer.style.animation = "fade-in 1s forwards";
      // 切换到下一张图片
      aboutContainer.style.backgroundImage = `url(${imgBg[currentSlideIndex]})`;

      // 清除之前的active
      clearActiveDots();
      dots.children[currentSlideIndex].classList.add("active");
    }, 1000);
  }, slideInterval);
}

// 點擊輪播圖片時觸發的事件處理函數
function handleSlideClick(index) {
  // 清除之前的計時器
  clearInterval(animationTimer);
  // 清除之前的active
  clearActiveDots();

  // 設置點擊的圖片索引
  aboutContainer.style.backgroundImage = `url(${imgBg[index]})`;
  dots.children[index].classList.add("active");

  aboutContainer.style.animation = "fade-in 1s forwards"; // 淡入动画效果

  // 在下一个动画帧执行操作
  requestAnimationFrame(() => {
    // 延时重置动画属性和设置当前索引
    setTimeout(() => {
      aboutContainer.style.animation = ""; // 重置动画属性
      currentSlideIndex = index;
    }, 1000);
  });
  // 停止一段時間後重新啟動自動切換
  clickTimer = startSlideShow();
}

// 監聽滾動事件，並設置事件處理函數
document.addEventListener("scroll", handleScroll, {
  signal: scrollController.signal,
});

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
