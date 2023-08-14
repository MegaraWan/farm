
//read more
const more = document.querySelectorAll(".read-more");
const moreItems = document.querySelectorAll(".more-item");
const closeButtons = document.querySelectorAll(".close");

// 顯示 more-item
more.forEach((button, index) => {
    button.addEventListener("click", () => {
        moreItems[index].style.display = "block";
    });
});

// 隱藏 more-item
closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", () => {
        moreItems[index].style.display = "none";
    });
});

// 點擊視窗其他地方隱藏 more-item
window.onclick = function(event) {
    moreItems.forEach((moreItem) => {
        if (event.target !== moreItem && !event.target.classList.contains("read-more")) {
            moreItem.style.display = "none";
        }
    });
};

