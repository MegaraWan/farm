//文字漸出
function scrollAppear() {
    let introTexts = document.querySelectorAll('.intro-text');
    let screenPosition = window.innerHeight / 1;
    //screenPostion 來存取視窗中的innerHeight 
    introTexts.forEach(introText => {
        let introPosition = introText.getBoundingClientRect().top;
        //用 getBoundingClientRect()來計算 introText 區域Top的位置
        if (introPosition < screenPosition) {
            introText.classList.add('intro-appear');
        }
        //如果當 introPosition 小於 screenPostion頁面視窗的高度時，則讓 introText 添加 css 的效果
    });
}
window.addEventListener("scroll", scrollAppear);