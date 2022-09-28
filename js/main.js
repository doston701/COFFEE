const modal = document.querySelector(".navbar__mobile-list");
const body = document.querySelector("body");
const btn = document.querySelector(".header__button");

btn.addEventListener("click", () => {
  modal.classList.toggle("open");
  body.classList.toggle("overflow");
});
