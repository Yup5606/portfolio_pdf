import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader.jsx";
import PortfolioNav from "./components/PortfolioNav.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectPlaceholder from "./pages/ProjectPlaceholder.jsx";
import ParleyMain from "./pages/main/ParleyMain.jsx";
import LotteMain from "./pages/main/LotteMain.jsx";
import RockfishMain from "./pages/main/RockfishMain.jsx";

const mainPages = [
  { id: "parley", Component: ParleyMain },
  { id: "lotte", Component: LotteMain },
  { id: "rockfish", Component: RockfishMain },
];

export default function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderLeaving, setLoaderLeaving] = useState(false);
  const [homeIntro, setHomeIntro] = useState(false);
  const [page, setPage] = useState("home");
  const [activeProject, setActiveProject] = useState(null);
  const [previousView, setPreviousView] = useState(null);
  const [transitionKind, setTransitionKind] = useState("slide-left");
  const [activeHomeIndex, setActiveHomeIndex] = useState(0);
  const [previousHomeIndex, setPreviousHomeIndex] = useState(null);
  const [homeDirection, setHomeDirection] = useState(1);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLoaderLeaving(true);
      setHomeIntro(true);
    }, 1400);
    const removeTimer = window.setTimeout(() => setLoaderVisible(false), 2400);
    const introTimer = window.setTimeout(() => setHomeIntro(false), 3100);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(introTimer);
    };
  }, []);

  const transitionTo = (nextPage, options = {}) => {
    const nextProject = options.project ?? activeProject;
    const kind = options.kind ?? "slide-left";

    setPreviousView({
      page,
      activeProject,
      key: `${page}-${activeProject ?? "none"}-${Date.now()}`,
    });
    setTransitionKind(kind);
    setActiveProject(nextProject);
    setPage(nextPage);

    window.setTimeout(() => {
      setPreviousView(null);
    }, 920);
  };

  const openProject = (id) => {
    setActiveProject(id);
    transitionTo("project", {
      project: id,
      kind: "cover",
    });
  };

  const navigateHome = () => {
    setPreviousView(null);
    setLoaderVisible(true);
    setLoaderLeaving(false);
    setPage("home");

    window.setTimeout(() => {
      setLoaderLeaving(true);
      setHomeIntro(true);
    }, 700);
    window.setTimeout(() => setLoaderVisible(false), 1600);
    window.setTimeout(() => setHomeIntro(false), 2300);
  };

  useEffect(() => {
    if (loaderVisible || page !== "home") return undefined;

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();

      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const direction = event.deltaY > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(mainPages.length - 1, activeHomeIndex + direction));

      if (next === activeHomeIndex) {
        wheelLockRef.current = false;
        return;
      }

      setHomeDirection(direction);
      setPreviousHomeIndex(activeHomeIndex);
      setActiveHomeIndex(next);
      window.setTimeout(() => {
        setPreviousHomeIndex(null);
        wheelLockRef.current = false;
      }, 1040);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeHomeIndex, loaderVisible, page]);

  const navigatePage = (nextPage) => {
    if (nextPage === page) return;
    transitionTo(nextPage, {
      kind: "cover",
    });
  };

  const renderHomeFrame = (index) => {
    const { id, Component } = mainPages[index];
    return <Component onOpen={() => openProject(id)} />;
  };

  const renderHome = () => (
    <>
      <PortfolioNav navigateHome={navigateHome} setPage={navigatePage} />
      <main
        className={`horizontal-home home-carousel${homeIntro ? " is-home-intro" : ""}${
          previousHomeIndex !== null ? " is-home-switching" : ""
        } home-carousel--${homeDirection > 0 ? "next" : "prev"}`}
      >
        {previousHomeIndex !== null && (
          <div className="home-panel home-panel--old" key={`old-${previousHomeIndex}`} aria-hidden="true">
            {renderHomeFrame(previousHomeIndex)}
          </div>
        )}
        <div className="home-panel home-panel--new" key={`new-${activeHomeIndex}`}>
          {renderHomeFrame(activeHomeIndex)}
        </div>
      </main>
    </>
  );

  const renderView = (viewPage, projectId = activeProject, isPrevious = false) => {
    if (viewPage === "index") return <IndexPage setPage={navigatePage} openProject={openProject} navigateHome={navigateHome} />;
    if (viewPage === "about") return <AboutPage setPage={navigatePage} navigateHome={navigateHome} />;
    if (viewPage === "project") {
      return <ProjectPlaceholder id={projectId} setPage={navigatePage} navigateHome={navigateHome} />;
    }
    return renderHome(isPrevious);
  };

  return (
    <div className={`app-stage app-stage--${transitionKind}${previousView ? " is-transitioning" : ""}`}>
      {previousView && (
        <div className="page-layer page-layer--old" key={previousView.key} aria-hidden="true">
          {renderView(previousView.page, previousView.activeProject, true)}
        </div>
      )}
      <div className="page-layer page-layer--new" key={`${page}-${activeProject ?? "none"}`}>
        {renderView(page, activeProject)}
      </div>
      {loaderVisible && <Loader isLeaving={loaderLeaving} />}
    </div>
  );
}
