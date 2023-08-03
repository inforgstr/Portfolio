function displayButton(scrollPos, btn) {
    if (scrollPos >= 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    var scrollBtn = document.querySelector(".button-scroll-up");
    var moonBtn = document.querySelector(".navbar__side #moon");
    var sunBtn = document.querySelector(".navbar__side #sun");
    var styleLink = document.getElementById("theme-style");
    var mainLine = document.getElementById("wave1");

    moonBtn.addEventListener("click", () => {
        styleLink.href = "./css/dark.css";
        mainLine.setAttribute("style", "display:none");
        moonBtn.setAttribute("style", "display:none");
        sunBtn.setAttribute("style", "display:initial");
    });

    sunBtn.addEventListener("click", () => {
        styleLink.href = "./css/default.css";
        mainLine.setAttribute("style", "display:inherit;transform:rotate(180deg)");
        sunBtn.setAttribute("style", "display:none");
        moonBtn.setAttribute("style", "display:initial");
    });

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
