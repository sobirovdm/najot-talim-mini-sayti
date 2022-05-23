var elLigthThemeButton = document.querySelector(".js-light-theme-button");
var elDarkThemeButton = document.querySelector(".js-dark-theme-button");

elLigthThemeButton.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
});

elDarkThemeButton.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
});
