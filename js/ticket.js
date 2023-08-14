window.addEventListener("load", function() {
    let introTexts = document.querySelectorAll('.intro-text');

    introTexts.forEach(introText => {
        introText.classList.add('intro-appear');
    });
});