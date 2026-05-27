export default function MainFrame({ image, title, count, variant, onOpen }) {
  
  return (
    <section className={`main-frame ${variant}`}>
      <img className="scene-image" src={image} alt="" aria-hidden="true" />

      <button className="project-hitarea" onClick={onOpen} aria-label={`${title} detail page`} />

      <span className="scroll-label">Scroll</span>
      <div className="frame-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="project-count">({count})</span>
      <h1 className="main-title">{title}</h1>
      <footer className="frame-footer">
        <span>© 2026 PARK YUBIN. All Rights Reserved.</span>
        <span>Youtube</span>
        <span>Instagram</span>
      </footer>
    </section>
  );
}
