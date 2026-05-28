export default function PortfolioNav({ navigateHome, setPage }) {
  return (
    <header className="portfolio-nav" aria-label="Portfolio navigation">
      <button className="portfolio-nav__logo" type="button" onClick={navigateHome} aria-label="Go home">
        <img src="/assets/common/logo-bk.svg" alt="You Bin logo" />
      </button>
      <nav>
        <button type="button" onClick={() => setPage("index")}>Index</button>
        <button type="button" onClick={() => setPage("about")}>About</button>
      </nav>
    </header>
  );
}
