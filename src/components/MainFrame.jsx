export default function MainFrame({ image, title, count, variant, onOpen }) {
  const titleWords = title.split(" ");

  return (
    <section className={`main-frame ${variant}`}>
      <img className="scene-image" src={image} alt="" aria-hidden="true" />

      <button className="project-hitarea" onClick={onOpen} aria-label={`${title} detail page`} />

      <span className="scroll-label">
        <span>Scroll</span>
      </span>
      <div className="frame-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="project-count">
        <span>({count})</span>
      </span>
      <h1 className="main-title" aria-label={title}>
        {titleWords.map((word, index) => (
          <span className="word-mask" key={`${word}-${index}`} style={{ "--word-index": index }}>
            <span>{word}</span>
          </span>
        ))}
      </h1>
      <footer className="frame-footer">
        <span>
          <span>© 2026 PARK YUBIN. All Rights Reserved.</span>
        </span>
        <span>
          <span>Youtube</span>
        </span>
        <span>
          <span>Instagram</span>
        </span>
      </footer>
    </section>
  );
}
