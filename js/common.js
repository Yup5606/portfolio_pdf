(function () {
  const includeTargets = Array.from(document.querySelectorAll("[data-include]"));

  const applyHeaderVariant = (target, fragment) => {
    const header = fragment.querySelector("header");
    const logo = fragment.querySelector(".main-nav-logo");
    const variant = target.dataset.headerVariant || "main";

    if (!header || !logo) {
      return;
    }

    if (variant === "project") {
      header.className = "site-nav";
      logo.className = "site-nav__logo";
      return;
    }

    header.className = variant === "about" ? "main-nav about-nav" : "main-nav";
    logo.className = "main-nav-logo";
  };

  const applyFooterVariant = (target, fragment) => {
    const footer = fragment.querySelector("footer");
    const copy = fragment.querySelector("p");
    const links = fragment.querySelector("div");
    const githubLink = fragment.querySelector('a[href*="github.com"]');
    const variant = target.dataset.footerVariant || "project";

    if (!footer || !copy || !links) {
      return;
    }

    footer.className =
      variant === "index" ? "site-footer site-footer--index" : `site-footer site-footer--${variant} ${variant}-footer`;
    links.className = variant === "panel" || variant === "loader" ? "panel-footer-links" : "";

    if (variant === "panel") {
      copy.textContent = "© 2026 PARK YOUBIN. All Rights Reserved.";
      if (githubLink) {
        githubLink.textContent = "Github";
      }
    }
  };

  const loadInclude = async (target) => {
    const source = target.dataset.include;

    if (!source) {
      return;
    }

    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`${source} 파일을 불러오지 못했습니다.`);
    }

    const template = document.createElement("template");
    template.innerHTML = await response.text();
    const fragment = template.content.cloneNode(true);

    if (target.dataset.headerVariant) {
      applyHeaderVariant(target, fragment);
    }

    if (target.dataset.footerVariant) {
      applyFooterVariant(target, fragment);
    }

    target.replaceWith(fragment);
  };

  const initNavigation = () => {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".site-nav nav a, .main-nav nav a");
    const homeLinks = document.querySelectorAll(".site-nav__logo, .main-nav-logo");
    const activeFile = document.body.classList.contains("project-page") ? "" : currentFile;

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
  };

  window.portfolioIncludesReady = Promise.all(includeTargets.map(loadInclude))
    .catch((error) => {
      console.warn(error);
    })
    .then(() => {
      initNavigation();
      document.dispatchEvent(new CustomEvent("portfolio:includes-ready"));
    });
})();
