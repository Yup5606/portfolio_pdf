const projects = [
  ["01", "Parley for the Ocean", "parley"],
  ["02", "Lotte GRS", "lotte"],
  ["03", "Rockfish weatherwear", "rockfish"],
];

export default function IndexPage({ setPage, openProject }) {
  return (
    <section className="simple-page">
      <button className="text-link" onClick={() => setPage("home")}>Back</button>
      <h1>Index</h1>
      <div className="index-list">
        {projects.map(([count, title, id]) => (
          <button key={id} onClick={() => openProject(id)}>
            <span>({count})</span>
            <strong>{title}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}
