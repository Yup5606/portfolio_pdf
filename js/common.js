(function () {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".site-nav nav a, .main-nav nav a");
  const homeLinks = document.querySelectorAll(".site-nav__logo, .main-nav-logo");
  const activeFile = document.body.classList.contains("project-page") ? "project-index.html" : currentFile;

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === activeFile) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });

  homeLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (currentFile !== "index.html") {
        return;
      }

      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
})();
