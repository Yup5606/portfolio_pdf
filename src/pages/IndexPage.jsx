import PortfolioNav from "../components/PortfolioNav.jsx";

const projects = [
  {
    count: "01",
    title: "Parley for the Ocean",
    id: "parley",
    align: "left",
  },
  {
    count: "02",
    title: "Lotte GRS",
    id: "lotte",
    align: "right",
  },
  {
    count: "03",
    title: "Rockfish weatherwear",
    id: "rockfish",
    align: "left",
  },
];

export default function IndexPage({ setPage, openProject, navigateHome }) {
  return (
    <section className="simple-page index-page">
      <PortfolioNav navigateHome={navigateHome} setPage={setPage} />

      <header className="index-cover">
        <h1>Index</h1>
      </header>

      <div className="index-projects" aria-label="Portfolio project index">
        {projects.map(({ count, title, id, align }) => (
          <button
            key={id}
            className={`index-project index-project--${align}`}
            type="button"
            onClick={() => openProject(id)}
          >
            <span className="index-project__heading">
              <span>({count})</span>
              <strong>{title}</strong>
            </span>
            <span className="index-project__thumbs" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        ))}
      </div>

      <footer className="index-footer">
        <span>© 2026 PARK YOUBIN. All Rights Reserved.</span>
        <nav aria-label="Social links">
          <a href="https://github.com/yup5606" target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </footer>
    </section>
  );
}
