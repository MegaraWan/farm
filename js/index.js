//目錄動畫
const menuItems = document.querySelectorAll('.main-menu li');

window.addEventListener('DOMContentLoaded', () => {
    let delay = 200;

    menuItems.forEach((item) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, delay);
        delay += 200;
    });
});




//表頭照片更換
const buttons = document.querySelectorAll('.button-click button');
const header = document.querySelector("header");

const backgroundImages = [
    "url(../img/nav-img01.jpg)",
    "url(../img/nav-img02.jpg)",
    "url(../img/nav-img03.jpg)"
];

let currentIndex = 0; // 按按鈕後重設輪播起點
let interval; // 輪播定時器
let paused = false; // 按按鈕後暫停輪播

// 切換背景函數
function changeBackgroundImage(index) {
    header.style.backgroundImage = backgroundImages[index];
    currentIndex = index; //按按鈕後重設輪播起點
}

// 按鈕事件監聽器
buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleButtonClick(index));
});

//按鈕事件
function handleButtonClick(index) {
    clearInterval(interval); // clearInterval方法 清除重複
    changeBackgroundImage(index);// 切換背景函數
    paused = true; // pasued屬性 暫停輪播
    setTimeout(() => {  //setTimeout方法 在延遲了2.5秒後執行一次
        paused = false;  
        startAutoChangeBackground();
    }, 2500);
}

// 首頁自動輪播
function startAutoChangeBackground() {
    interval = setInterval(() => { //setInterval方法 固定延遲2.5，"重複"執行對應的程式碼
        if (!paused) {
            currentIndex = (currentIndex + 1) % backgroundImages.length;
            changeBackgroundImage(currentIndex);
        }
    }, 2500); // 每2.5秒切换一次
}
startAutoChangeBackground();





//動物卡片輪播
let oUl = document.querySelector('.slider-container');
let oLi = document.querySelectorAll('.slider-container li');

let ulWidth = 0;
oLi.forEach(li => {
    ulWidth += li.offsetWidth;
});

oUl.innerHTML += oUl.innerHTML;
oUl.style.width = ulWidth * 2 + 'px';

let position = 0;
const slideSpeed = 2;

function moveSlide() {
    position -= slideSpeed;
    if (position <= -ulWidth) {
        position = 0;
    }
    oUl.style.left = position + 'px';
    requestAnimationFrame(moveSlide);
}

moveSlide();



//回到頂部的 Jquery
$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        if ($(".back-top").hasClass("hide")) {
          $(".back-top").toggleClass("hide");
        }
      } else {
        $(".back-top").addClass("hide");
      }
    });
  
    // 點擊按鈕回頂部
    $(".back-top").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500 // 回頂部時間為 500 毫秒
      );
    });
  });


  