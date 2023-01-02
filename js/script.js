let buttonElement = document.querySelector(".js-button");
let header__themName = document.querySelector(".js-header__themeName");
let bodyElement = document.querySelector(".body");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("light");
    header__themName.innerText = bodyElement.classList.contains("light") ? "dark" : "light";
});