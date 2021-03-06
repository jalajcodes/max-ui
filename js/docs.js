// HIGHLIGHT JS
document.querySelectorAll("code").forEach((element) => {
  element.innerHTML = element.innerHTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
});
hljs.highlightAll();

// SECTIONS
document.querySelectorAll(".sidebar a").forEach((el) => {
  el.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".sidebar.open");
    if (sidebar) {
      sidebar.classList.remove("open");
    }
    const href = e.target.getAttribute("href");
    const sectionToShow = document.querySelector(href);

    if (sectionToShow && sectionToShow.classList.contains("active")) return;

    if (href && href.startsWith("#") && sectionToShow) {
      gsap
        .timeline()
        .to(".active", {
          opacity: 0,
          duration: 0.5,
          onanimationstart: () => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          },
        })
        .set(".active", {
          display: "none",
        })
        .set(href, {
          opacity: 0,
          display: "block",
        })
        .to(href, {
          opacity: 1,
          onComplete: () => {
            const activeSection = document.querySelector("section.active");
            activeSection.classList.remove("active");

            const ele = document.querySelector(href);
            ele.classList.add("active");
          },
        });
    }
  });
});

window.onload = () => {
  const url = window.location.href;
  const sectionId = url.split("#")[1];
  const sectionToShow = sectionId ? document.querySelector(`#${sectionId}`) : null;
  if (sectionToShow) {
    sectionToShow.classList.add("active");
  } else {
    const quickStart = document.querySelector("#quickstart");
    quickStart.classList.add("active");
  }
};

// SIDEBAR
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.toggle("open");
  });
}
