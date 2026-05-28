import PortfolioNav from "../components/PortfolioNav.jsx";

export default function AboutPage({ setPage, navigateHome }) {
  return (
    <section className="simple-page about-page">
      <PortfolioNav navigateHome={navigateHome} setPage={setPage} />
      <h1>About</h1>
      <p>
        UI/UX Designer You Bin. 브랜드의 이미지와 사용자의 흐름을 연결하는
        포트폴리오를 만들고 있습니다.
      </p>
    </section>
  );
}
