(function () {
  const revealItems = document.querySelectorAll(".content-section, .image-story");

  if (!revealItems.length || !("IntersectionObserver" in window)) {
    return;
  }

  revealItems.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
})();

(function () {
  const projectNav = document.querySelector(".project-page .site-nav");

  if (!projectNav) {
    return;
  }

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateProjectNav = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const distance = currentScrollY - lastScrollY;

    if (currentScrollY < 32) {
      projectNav.classList.remove("is-nav-hidden");
    } else if (distance > 8) {
      projectNav.classList.add("is-nav-hidden");
    } else if (distance < -8) {
      projectNav.classList.remove("is-nav-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  const requestProjectNavUpdate = () => {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateProjectNav);
  };

  window.addEventListener("scroll", requestProjectNavUpdate, { passive: true });
})();
