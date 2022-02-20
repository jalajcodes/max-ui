// MODAL

const modalBtn = document.getElementById("modal-btn");
const modalContainer = document.getElementById("modal-container");
const modalElem = document.getElementById("modal-el");
const modalFooterButtons = document.querySelectorAll(".modal__footer--btn");

modalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
  modalElem.style.display = "flex";
});

window.addEventListener("click", (e) => {
  if (
    e.target == modalContainer ||
    e.target === modalFooterButtons[0] ||
    e.target === modalFooterButtons[1]
  ) {
    modalContainer.style.display = "none";
    modalElem.style.display = "none";
  }
});

// NAVIGATION

const navMenuIcon = document.querySelector(".nav__menu-icon");
const navLinks = document.querySelector(".nav__links");

navMenuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
