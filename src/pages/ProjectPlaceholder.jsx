import PortfolioNav from "../components/PortfolioNav.jsx";
import LotteProject from "./LotteProject.jsx";
import ParleyProject from "./ParleyProject.jsx";

const links = {
  rockfish: "https://yup5606.github.io/rockfish/",
};

export default function ProjectPlaceholder({ id, setPage, navigateHome }) {
  if (id === "parley") return <ParleyProject setPage={setPage} navigateHome={navigateHome} />;
  if (id === "lotte") return <LotteProject setPage={setPage} navigateHome={navigateHome} />;

  return (
    <section className="simple-page project-placeholder">
      <PortfolioNav navigateHome={navigateHome} setPage={setPage} />
      <h1>{id || "Project"}</h1>
      <p>상세 포트폴리오 페이지는 추후 브랜드 톤에 맞춰 확장할 예정입니다.</p>
      {links[id] && (
        <a className="site-link-button" href={links[id]} target="_blank" rel="noreferrer">
          사이트 보러가기
        </a>
      )}
    </section>
  );
}
