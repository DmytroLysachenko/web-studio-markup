const menuButton = document.querySelector(".header-menu-button");
const orderButton = document.querySelector(".order-button");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".modal-close-btn");
const form = document.querySelector(".modal-form");
const subscBtn = document.querySelector(".footer-subscribe-button");
const modalOpen = () => {
  backdrop.classList.add("is-open");
};
const modalCloseBackdrop = (event) => {
  console.log(event.target);
  if (event.target.classList.contains("backdrop")) {
    backdrop.classList.remove("is-open");
  }
};
const onEscClose = (event) => {
  if (event.key === "Escape") {
    backdrop.classList.remove("is-open");
  }
};
closeButton.addEventListener("click", (event) => {
  backdrop.classList.remove("is-open");
});
menuButton.addEventListener("click", modalOpen);
orderButton.addEventListener("click", modalOpen);
document.body.addEventListener("click", modalCloseBackdrop);
window.addEventListener("keydown", onEscClose);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  backdrop.classList.remove("is-open");
});
subscBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
