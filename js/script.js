{
    const welcomeMessage = () => {
        console.log("Hello");
    }

    const changeBackground = () => {
        const header__themName = document.querySelector(".js-header__themeName");
        const bodyElement = document.querySelector(".body");
        bodyElement.classList.toggle("light");
        header__themName.innerText = bodyElement.classList.contains("light") ? "dark" : "light";
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", changeBackground);
        welcomeMessage();
    }
    init();
}