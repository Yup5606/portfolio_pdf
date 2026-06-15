(function () {
  const sideLinks = Array.from(document.querySelectorAll(".about-side-nav a[href^='#']"));
  const sections = sideLinks
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href")),
    }))
    .filter((item) => item.section);

  const motionItems = document.querySelectorAll(
    ".about-side-title, .about-photo-wrap, .about-intro, .keyword-card, .contact-strip, .about-section-head, .history-item, .skill-card, .license-card, .tool-category-card, .contact-card"
  );

  motionItems.forEach((item, index) => {
    item.classList.add("about-motion");
    item.style.transitionDelay = `${Math.min(index * 45, 360)}ms`;
  });

  const updateMotionItems = () => {
    motionItems.forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.88) {
        item.classList.add("is-visible");
      }
    });
  };

  const setActiveLink = (activeLink) => {
    sideLinks.forEach((link) => {
      const isActive = link === activeLink;

      link.classList.toggle("is-active", isActive);
      link.toggleAttribute("aria-current", isActive);
    });
  };

  const updateActiveSection = () => {
    if (!sections.length) {
      return;
    }

    const anchorPosition = window.innerHeight * 0.22;

    const containedItem = sections.find((item) => {
      const rect = item.section.getBoundingClientRect();

      return rect.top <= anchorPosition && rect.bottom > anchorPosition;
    });

    const previousItem = sections.reduce((current, item) => {
      const rect = item.section.getBoundingClientRect();

      if (rect.top <= anchorPosition) {
        return item;
      }

      return current;
    }, null);

    const activeItem = containedItem || previousItem || sections[0];

    if (activeItem) {
      setActiveLink(activeItem.link);
    }
  };

  let ticking = false;

  const requestPageUpdate = () => {
    if (ticking) {
      return;
    }

    ticking = true;

    window.requestAnimationFrame(() => {
      updateMotionItems();
      updateActiveSection();
      ticking = false;
    });
  };

  window.addEventListener("scroll", requestPageUpdate, { passive: true });
  window.addEventListener("resize", requestPageUpdate);

  updateMotionItems();
  updateActiveSection();

  const hero = document.querySelector(".about-hero");
  const photoWrap = document.querySelector(".about-photo-wrap");
  const keywordItems = document.querySelectorAll(".keyword-list li");
  const skillCards = document.querySelectorAll(".skill-card");
  const historyTrack = document.querySelector(".history-track");

  if (hero) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      if (photoWrap) {
        photoWrap.style.transform = `translate(${x * 0.012}px, ${y * 0.01}px) rotate(-2deg)`;
      }
    });

    hero.addEventListener("mouseleave", () => {
      if (photoWrap) {
        photoWrap.style.transform = "";
      }
    });
  }

  keywordItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      item.style.setProperty("--card-x", `${x}px`);
      item.style.setProperty("--card-y", `${y}px`);
    });
  });

  skillCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  if (historyTrack) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    historyTrack.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - historyTrack.offsetLeft;
      scrollLeft = historyTrack.scrollLeft;
      historyTrack.classList.add("is-dragging");
    });

    historyTrack.addEventListener("mousemove", (e) => {
      if (!isDown) {
        return;
      }

      e.preventDefault();

      const x = e.pageX - historyTrack.offsetLeft;
      const walk = (x - startX) * 1.2;

      historyTrack.scrollLeft = scrollLeft - walk;
    });

    historyTrack.addEventListener("mouseup", () => {
      isDown = false;
      historyTrack.classList.remove("is-dragging");
    });

    historyTrack.addEventListener("mouseleave", () => {
      isDown = false;
      historyTrack.classList.remove("is-dragging");
    });
  }
})();