function ChangeTheme() {
    var bg = document.querySelector("body");
    var containers = document.querySelectorAll("#ch");
    var selected = document.querySelector(".sel-img svg>path");
    var selectedText = selected.parentElement.parentElement.querySelector(".selected-text");
    var h1 = document.querySelectorAll("h1");
    var h3 = document.querySelector("h3");
    var h5 = document.querySelectorAll("h5");
    var p = document.querySelectorAll("p");
    var scroller = document.querySelector(".button-scroll-up");
    var topLine = document.querySelector("main.main-wrapper svg#wave1");
    var profile_image = document.querySelector(".profile .profile-img");
    var themeChangerIcon = document.querySelector(".navbar__side #moon");
    var themeChangerSun = document.querySelector(".navbar__side #sun");
    var items = document.querySelectorAll(".navbar-nav>li .navbar-icon");
    var selectedItem = document.querySelector(".navbar-nav>.selected .navbar-icon");
    var orderBtns = document.querySelectorAll(".btn-order");

    if (bg.style.backgroundColor === "rgb(240, 240, 246)") {
        selected.setAttribute("fill", "rgb(223 201 255)");
        selectedText.style.color = "#000000";
        bg.style.backgroundColor = "#0a0a27";
        bg.style.color = "rgb(191 191 191)";

        containers.forEach(container => {
            container.style.backgroundColor = "#2c2353";
            container.style.color = "rgb(191 191 191)";
        });
        var fntColor = "rgb(223 201 255)";

        h1.forEach(fnt => {
            fnt.setAttribute("style", `color:${fntColor}`, "!important");
        });
        h3.setAttribute("style", `color:${fntColor}`, "!important");
        h5.forEach(fnt => {
            fnt.setAttribute("style", `color:${fntColor}`, "!important");
        });
        p.forEach(fnt => {
            fnt.setAttribute("style", `color:#2B2B2B`, "!important");
        });
        profile_image.setAttribute("style", "background-color:#0a0a27");
        topLine.style.display = "none";
        themeChangerIcon.setAttribute("style", "display:none");
        orderBtns.forEach(button => {
            button.style.backgroundColor = "rgb(223 201 255)";
        });
        themeChangerSun.setAttribute("style", "display:block");
        items.forEach(item => {
            item.setAttribute("style", "background-color:#0a0a27", "!important");
        });
        selectedItem.style.backgroundColor = "#FFB400";
        scroller.setAttribute("style", `background-color:rgb(44, 35, 83)`, "!important");
    } else {
        selectedText.style.color = "#FFFFFF";
        selected.setAttribute("fill", "rgb(0 0 0)");
        bg.style.backgroundColor = "#F0F0F6";
        bg.style.color = "#767676";

        containers.forEach(container => {
            container.style.backgroundColor = "#FFFFFF";
            container.style.color = "#767676";
        });
        var fntColor = "rgb(0, 0, 0)"

        h1.forEach(fnt => {
            fnt.setAttribute("style", `color:${fntColor}`, "!important");
        });
        h3.setAttribute("style", `color:${fntColor}`, "!important");
        h5.forEach(fnt => {
            fnt.setAttribute("style", `color:${fntColor}`, "!important");
        });
        profile_image.setAttribute("style", "background-color:#F0F0F6");
        p.forEach(fnt => {
            fnt.setAttribute("style", `color:${fntColor}`, "!important");
        });
        orderBtns.forEach(button => {
            button.style.backgroundColor = "#FFFFFF";
        });
        themeChangerSun.setAttribute("style", "display:none");
        topLine.style.display = "block";
        items.forEach(item => {
            item.setAttribute("style", "background-color:#F0F0F6", "!important");
        });
        selectedItem.style.backgroundColor = "#FFB400";
        themeChangerIcon.setAttribute("style", "display:intiial");
        scroller.setAttribute("style", `background-color:#FFFFFF`, "!important");
    };
};
