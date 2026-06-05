(function () {
  const slider = document.querySelector("[data-main-slider]");
  const panels = slider ? Array.from(slider.querySelectorAll("[data-main-panel]")) : [];
  let activeIndex = panels.findIndex((panel) => panel.classList.contains("is-active"));
  let isChanging = false;
  let wheelDelta = 0;
  let wheelResetTimer;

  if (!panels.length) {
    return;
  }

  document.body.classList.add("is-locked");
  activeIndex = activeIndex < 0 ? 0 : activeIndex;

  const loaderStartedAt = window.performance.now();
  const loaderDuration = 2200;
  const transitionDuration = 1180;
  const wheelThreshold = 80;
  let pageLoaded = document.readyState === "complete";
  let loaderFinished = false;

  const finishLoading = () => {
    if (loaderFinished || !pageLoaded) {
      return;
    }

    loaderFinished = true;
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-loaded");
  };

  const requestLoaderFinish = () => {
    const elapsed = window.performance.now() - loaderStartedAt;
    window.setTimeout(finishLoading, Math.max(0, loaderDuration - elapsed));
  };

  requestLoaderFinish();
  window.addEventListener("load", () => {
    pageLoaded = true;
    requestLoaderFinish();
  });

  panels.forEach((panel, index) => {
    panel.style.zIndex = index === activeIndex ? "2" : "0";
  });

  const showPanel = (nextIndex) => {
    const safeIndex = (nextIndex + panels.length) % panels.length;

    if (safeIndex === activeIndex || isChanging) {
      return false;
    }

    const direction = nextIndex > activeIndex ? 1 : -1;
    const currentPanel = panels[activeIndex];
    const nextPanel = panels[safeIndex];

    isChanging = true;

    if (direction > 0) {
      currentPanel.style.zIndex = "2";
      nextPanel.style.zIndex = "3";
      nextPanel.classList.remove("from-left", "from-right", "is-under", "is-exiting", "is-active");
      nextPanel.classList.add("from-right");

      window.requestAnimationFrame(() => {
        nextPanel.classList.add("is-active");
      });

      window.setTimeout(() => {
        currentPanel.classList.remove("is-active", "is-under", "is-exiting");
        currentPanel.style.zIndex = "1";
        nextPanel.classList.remove("from-right");
        nextPanel.style.zIndex = "2";
        activeIndex = safeIndex;
        isChanging = false;
      }, transitionDuration);

      return true;
    }

    nextPanel.style.zIndex = "2";
    currentPanel.style.zIndex = "3";
    nextPanel.classList.remove("from-left", "from-right", "is-exiting");
    nextPanel.classList.add("is-under");

    window.requestAnimationFrame(() => {
      currentPanel.classList.add("is-exiting");
    });

    window.setTimeout(() => {
      currentPanel.classList.remove("is-active", "is-under", "is-exiting");
      currentPanel.style.zIndex = "0";
      nextPanel.classList.remove("is-under");
      nextPanel.classList.add("is-active");
      nextPanel.style.zIndex = "2";
      activeIndex = safeIndex;
      isChanging = false;
    }, transitionDuration);

    return true;
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (document.body.classList.contains("is-loading")) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      if (isChanging) {
        return;
      }

      wheelDelta += event.deltaY;
      window.clearTimeout(wheelResetTimer);
      wheelResetTimer = window.setTimeout(() => {
        wheelDelta = 0;
      }, 160);

      if (Math.abs(wheelDelta) < wheelThreshold) {
        return;
      }

      showPanel(activeIndex + (wheelDelta > 0 ? 1 : -1));
      wheelDelta = 0;
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    if (document.body.classList.contains("is-loading")) {
      return;
    }

    const nextKeys = ["ArrowDown", "PageDown", " "];
    const prevKeys = ["ArrowUp", "PageUp"];

    if (nextKeys.includes(event.key)) {
      event.preventDefault();
      showPanel(activeIndex + 1);
    }

    if (prevKeys.includes(event.key)) {
      event.preventDefault();
      showPanel(activeIndex - 1);
    }
  });
})();
