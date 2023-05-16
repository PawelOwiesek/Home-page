{
  const welcomeMessage = () => {
    console.log("Hello");
  };

  const changeBackground = () => {
    const headerThemeName = document.querySelector(".js-headerThemeName");
    const bodyElement = document.querySelector(".body");
    bodyElement.classList.toggle("light");
    headerThemeName.innerText = bodyElement.classList.contains("light")
      ? "dark"
      : "light";
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", changeBackground);
    welcomeMessage();
  };
  init();
}
