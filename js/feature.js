const bindClickEvents = () => {
  // MODAL
  const modalBtn = document.getElementById("modal-btn");
  const modalContainer = document.getElementById("modal-container");
  const modalElem = document.getElementById("modal-el");
  const modalFooterButtons = document.querySelectorAll(".modal__footer--btn");

  if (modalBtn && modalContainer && modalElem) {
    modalBtn.addEventListener("click", () => {
      modalContainer.style.display = "flex";
      modalElem.style.display = "flex";
    });
  }

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

  if (navMenuIcon && navLinks) {
    navMenuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
};

bindClickEvents();

// DARK MODE
const toggleSwitch = document.querySelector('.theme-switcher input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

toggleSwitch.addEventListener("change", switchTheme, false);
