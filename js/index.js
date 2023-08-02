function displayButton(scrollPos, btn) {
    if (scrollPos >= 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    let scrollBtn = document.querySelector(".button-scroll-up");

    document.addEventListener("scroll", event => {
        let lastScrollPosition = window.scrollY;
        window.requestAnimationFrame(() => {
            displayButton(lastScrollPosition, scrollBtn);
        });
    });

    scrollBtn.addEventListener("click", event => {
        window.scrollTo(0, 0)
    });
});
