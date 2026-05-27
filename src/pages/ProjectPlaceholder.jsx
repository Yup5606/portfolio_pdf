import ParleyProject from "./ParleyProject.jsx";

export default function ProjectPlaceholder({ id, setPage }) {
  if (id === "parley") return <ParleyProject setPage={setPage} />;

  return (
    <section className="simple-page project-placeholder">
      <button className="text-link" onClick={() => setPage("home")}>Back</button>
      <h1>{id || "Project"}</h1>
      <p>서브페이지는 추후 디자인 기준에 맞춰 확장할 예정입니다.</p>
    </section>
  );
}
