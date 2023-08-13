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





function showLarge(e) {
    const large = document.querySelector('.main-camp.img-large');
    large.setAttribute('src', e.target.src); // 使用 setAttribute 設定 src 屬性的值
}

function init() {
    let smalls = document.getElementsByClassName("img-small");
    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}

window.addEventListener("load", init, false);



