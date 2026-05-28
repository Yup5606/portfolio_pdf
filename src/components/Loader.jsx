export default function Loader({ isLeaving = false }) {
  return (
    <section className={`loader${isLeaving ? " is-leaving" : ""}`}>
      <span className="loader-top">Portfolio</span>
      <img className="loader-logo" src="/assets/common/logo-bk.svg" alt="You Bin logo" />
      <span className="loader-name">You Bin</span>
      <span className="loader-field">UI / UX Design</span>
      <small>© 2026 PARK YUBIN. All Rights Reserved.</small>
    </section>
  );
}
