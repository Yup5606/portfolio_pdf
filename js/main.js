(function () {
  const slider = document.querySelector("[data-main-slider]");
  const panels = slider ? Array.from(slider.querySelectorAll("[data-main-panel]")) : [];
  let activeIndex = panels.findIndex((panel) => panel.classList.contains("is-active"));
  let isChanging = false;

  if (!panels.length) {
    return;
  }

  document.body.classList.add("is-locked");
  activeIndex = activeIndex < 0 ? 0 : activeIndex;

  const loaderStartedAt = window.performance.now();
  const loaderDuration = 2500;
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
      return;
    }

    const direction = nextIndex > activeIndex ? 1 : -1;
    const currentPanel = panels[activeIndex];
    const nextPanel = panels[safeIndex];
    const originClass = direction > 0 ? "from-right" : "from-left";

    isChanging = true;
    currentPanel.style.zIndex = "2";
    nextPanel.style.zIndex = "3";
    nextPanel.classList.remove("from-left", "from-right", "is-active");
    nextPanel.classList.add(originClass);

    window.requestAnimationFrame(() => {
      nextPanel.classList.add("is-active");
    });

    window.setTimeout(() => {
      currentPanel.classList.remove("is-active");
      currentPanel.style.zIndex = "1";
      nextPanel.classList.remove("from-left", "from-right");
      nextPanel.style.zIndex = "2";
      activeIndex = safeIndex;
      isChanging = false;
    }, 930);
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (document.body.classList.contains("is-loading")) {
        event.preventDefault();
        return;
      }

      if (Math.abs(event.deltaY) < 18) {
        return;
      }

      event.preventDefault();
      showPanel(activeIndex + (event.deltaY > 0 ? 1 : -1));
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
