import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader.jsx";
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
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [activeProject, setActiveProject] = useState(null);
  const scrollerRef = useRef(null);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  const openProject = (id) => {
    setActiveProject(id);
    setPage("project");
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (loading || page !== "home" || !scroller) return undefined;

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();

      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const direction = event.deltaY > 0 ? 1 : -1;
      const width = scroller.clientWidth;
      const current = Math.round(scroller.scrollLeft / width);
      const next = Math.max(0, Math.min(mainPages.length - 1, current + direction));

      scroller.scrollTo({ left: next * width, behavior: "smooth" });
      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 650);
    };

    scroller.addEventListener("wheel", handleWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", handleWheel);
  }, [loading, page]);

  if (loading) return <Loader />;

  if (page === "index") return <IndexPage setPage={setPage} openProject={openProject} />;
  if (page === "about") return <AboutPage setPage={setPage} />;
  if (page === "project") {
    return <ProjectPlaceholder id={activeProject} setPage={setPage} />;
  }

  return (
    <>
      <header className="home-fixed-nav" aria-label="Main navigation">
        <img src="/assets/logo-bk.svg" alt="You Bin logo" />
        <nav>
          <button onClick={() => setPage("index")}>Index</button>
          <button onClick={() => setPage("about")}>About</button>
        </nav>
      </header>
      <main className="horizontal-home" ref={scrollerRef}>
        {mainPages.map(({ id, Component }) => (
          <Component key={id} onOpen={() => openProject(id)} />
        ))}
      </main>
    </>
  );
}
