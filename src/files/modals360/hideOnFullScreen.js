const fullScreen = document.querySelector(".fullscreen-fake");
const windowPerent = window.parent;
fullScreen.addEventListener("click", () => {
  document.body.classList.toggle("hide");
  windowPerent.document.body.classList.toggle("hide-close-btn");
});
