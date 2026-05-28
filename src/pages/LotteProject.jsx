import "../styles/lotte.css";
import PortfolioNav from "../components/PortfolioNav.jsx";

const mockups = [
  {
    eyebrow: "Hero Visual",
    title: "PC 메인 첫 화면",
    note: "브랜드 로고, 대표 메뉴, 큰 비주얼이 한 번에 보이는 데스크톱 메인 캡처가 좋습니다.",
  },
  {
    eyebrow: "Interaction",
    title: "메뉴/브랜드 전환 모션",
    note: "스크롤 또는 호버 시 브랜드 카드가 바뀌는 장면을 2-3컷으로 이어 붙이면 좋아요.",
  },
  {
    eyebrow: "Mobile",
    title: "모바일 메인 화면",
    note: "모바일 사이트맵과 메인 시안을 함께 보여줄 수 있는 세로형 목업 이미지를 넣어주세요.",
  },
];

const directionItems = [
  ["Corporate", "기업 사이트에 맞는 신뢰감 있는 구조와 명확한 정보 위계를 중심으로 구성했습니다."],
  ["Brand Focused", "롯데 GRS의 브랜드 경험이 첫 화면부터 선명하게 보이도록 레드 컬러와 큰 비주얼을 사용했습니다."],
  ["Responsive", "PC와 모바일에서 같은 콘텐츠 흐름을 유지하면서 탐색 방식만 화면에 맞게 조정했습니다."],
];

const sitemap = ["Main", "Brand", "Menu", "Promotion", "Story", "News", "Footer"];

const problems = [
  ["정보 구조 문제", "브랜드, 채용, 창업, 프로모션 정보가 한 화면에서 섞여 보여 사용자가 원하는 정보를 찾기 어려웠습니다."],
  ["비주얼 문제", "기업 아이덴티티를 강하게 전달하는 대표 이미지와 컬러 사용이 부족해 첫인상이 약했습니다."],
  ["UX 문제", "주요 CTA의 우선순위가 약하고, 다음 행동으로 이어지는 탐색 흐름이 명확하지 않았습니다."],
];

const targets = [
  ["예비 창업자", "가맹 정보와 브랜드 경쟁력을 빠르게 확인하고 싶은 사용자"],
  ["취업 준비생", "기업 문화, 채용 정보, 브랜드 규모를 파악하려는 사용자"],
  ["일반 사용자", "롯데 GRS의 브랜드와 프로모션을 탐색하려는 사용자"],
];

const systemItems = [
  ["Color", "#ED1C24를 메인 컬러로 사용해 브랜드 아이덴티티와 활기 있는 이미지를 강조했습니다."],
  ["Typography", "큰 제목과 짧은 본문 구조로 기업 사이트 안에서도 빠르게 읽히는 화면을 만들었습니다."],
  ["Components", "버튼, 카드, 배너, 목업 박스를 반복 가능한 UI 단위로 정리했습니다."],
];

const mainSections = [
  ["Main Visual", "브랜드 신뢰감을 전달할 수 있도록 대형 비주얼 중심의 첫 화면으로 설계했습니다."],
  ["Brand Cards", "여러 브랜드를 카드 단위로 나누어 사용자가 빠르게 비교하고 이동할 수 있게 했습니다."],
  ["Promotion CTA", "이벤트와 주요 액션을 레드 버튼으로 강조해 다음 행동을 유도했습니다."],
];

const techItems = ["HTML5", "CSS3", "JavaScript", "jQuery", "Swiper", "Responsive Publishing"];

function SectionTitle({ label, title, body }) {
  return (
    <header className="lotte-section-title">
      <p>{label}</p>
      <h2>{title}</h2>
      {body && <span>{body}</span>}
    </header>
  );
}

function MockupBox({ eyebrow, title, note, wide = false }) {
  return (
    <figure className={`lotte-mockup-box${wide ? " lotte-mockup-box--wide" : ""}`}>
      <div>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        <p>{note}</p>
      </div>
    </figure>
  );
}

export default function LotteProject({ setPage, navigateHome }) {
  return (
    <main className="lotte-page">
      <PortfolioNav navigateHome={navigateHome} setPage={setPage} />

      <section className="lotte-hero" aria-labelledby="lotte-title">
        <div className="lotte-hero__circle" aria-hidden="true" />
        <div className="lotte-hero__content">
          <p>Website Renewal</p>
          <h1 id="lotte-title" className="lotte-a11y-title">Lotte GRS</h1>
          <img className="lotte-hero__logo" src="/assets/lotte/lotte_GRS_logo_white.svg" alt="Lotte GRS" />
          <span>브랜드 경험을 선명하게 정리한 반응형 메인 페이지</span>
        </div>
        <img className="lotte-hero__mockup" src="/assets/lotte/mockup_lotte.svg" alt="롯데 GRS 메인 목업" />
        <div className="lotte-hero__links">
          <a href="https://lotte-grs-redesign.netlify.app/" target="_blank" rel="noreferrer">사이트 보러가기</a>
        </div>
        <dl className="lotte-meta">
          <div>
            <dt>Project Type</dt>
            <dd>Responsive Web / Main Page</dd>
          </div>
          <div>
            <dt>Main Color</dt>
            <dd>#ED1C24</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Planning · UI Design · Publishing</dd>
          </div>
        </dl>
      </section>

      <section className="lotte-overview">
        <div>
          <SectionTitle
            label="Overview"
            title="흩어진 브랜드 정보를 한 화면에서 빠르게 이해하도록"
            body="롯데 GRS의 다양한 브랜드와 프로모션, 메뉴 정보를 사용자가 부담 없이 탐색할 수 있도록 메인 페이지의 정보 위계를 다시 구성했습니다."
          />
          <div className="lotte-overview__grid">
            <article>
              <strong>Problem</strong>
              <p>콘텐츠가 많아 첫 화면에서 핵심 브랜드 메시지와 주요 이동 경로가 약하게 느껴졌습니다.</p>
            </article>
            <article>
              <strong>Goal</strong>
              <p>브랜드 인지, 메뉴 탐색, 이벤트 확인으로 이어지는 흐름을 명확하게 만드는 것을 목표로 했습니다.</p>
            </article>
            <article>
              <strong>Solution</strong>
              <p>강한 컬러 블록, 큰 타이포, 카드형 정보 구조를 사용해 빠르게 스캔되는 메인 페이지를 설계했습니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="lotte-problem">
        <SectionTitle
          label="Problem Analysis"
          title="정보, 비주얼, CTA의 우선순위를 다시 잡아야 했습니다"
          body="기존 페이지에서 사용자가 길을 잃을 수 있는 지점을 세 가지 관점으로 정리하고, 개선 방향을 도출했습니다."
        />
        <div className="lotte-problem__grid">
          {problems.map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <MockupBox
          wide
          eyebrow="Image Needed"
          title="기존 사이트 문제점 하이라이트"
          note="기존 사이트 캡처 위에 정보 구조, CTA, 비주얼 문제를 화살표나 주석으로 표시한 이미지를 넣으면 좋습니다."
        />
      </section>

      <section className="lotte-target">
        <SectionTitle
          label="Target / Persona"
          title="기업 사이트를 방문하는 세 가지 사용자 흐름"
        />
        <div className="lotte-target__cards">
          {targets.map(([title, body]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lotte-direction">
        <SectionTitle
          label="Concept & Keyword"
          title="신뢰감 있는 브랜드 경험과 직관적인 정보 탐색"
        />
        <div className="lotte-direction__cards">
          {directionItems.map(([title, body]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lotte-system">
        <SectionTitle
          label="Design System"
          title="브랜드 컬러와 재사용 가능한 UI 단위로 정리"
        />
        <div className="lotte-system__grid">
          {systemItems.map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lotte-structure">
        <SectionTitle
          label="UX Flow / IA"
          title="메인 페이지 안에서 브랜드와 액션을 빠르게 연결"
          body="PC와 모바일 모두 동일한 콘텐츠 흐름을 유지하되, 모바일에서는 섹션 단위가 더 명확하게 끊기도록 구성했습니다."
        />
        <div className="lotte-sitemap" aria-label="롯데 GRS 사이트맵">
          {sitemap.map((item, index) => (
            <span key={item}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="lotte-screens">
        <SectionTitle
          label="Main Pages"
          title="WHAT / WHY / HOW가 보이는 메인 페이지 구성"
        />
        <div className="lotte-main-breakdown">
          {mainSections.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="lotte-screen-grid">
          {mockups.map((mockup) => (
            <MockupBox key={mockup.title} {...mockup} />
          ))}
        </div>
      </section>

      <section className="lotte-responsive">
        <SectionTitle
          label="Responsive"
          title="PC, Tablet, Mobile에서 정보가 끊기지 않도록"
          body="화면 크기에 따라 카드 개수, 목업 비율, CTA 위치를 조정해 모바일에서도 같은 목적을 수행할 수 있게 구성했습니다."
        />
        <div className="lotte-responsive__grid">
          <MockupBox eyebrow="PC" title="Desktop Layout" note="메인페이지_pc_main.pdf의 전체 흐름을 와이드 목업으로 넣어주세요." />
          <MockupBox eyebrow="Tablet" title="Tablet Reflow" note="PC 섹션이 2열 또는 1열로 재배치되는 중간 화면을 캡처하면 좋습니다." />
          <MockupBox eyebrow="Mobile" title="Mobile Layout" note="메인페이지_mo_main.pdf와 sitemap을 세로형 목업으로 넣어주세요." />
        </div>
      </section>

      <section className="lotte-publishing">
        <div>
          <SectionTitle
            label="Publishing / Technical"
            title="반응형 구조와 인터랙션을 구현한 퍼블리싱"
            body="정적인 시안이 실제 페이지에서 자연스럽게 움직이도록 공통 UI, 반응형, Swiper 기반 인터랙션을 구현했습니다."
          />
          <div className="lotte-tech-list">
            {techItems.map((item) => <span key={item}>{item}</span>)}
          </div>
          <ul>
            <li>큰 비주얼과 CTA로 주요 브랜드 또는 이벤트 진입을 강조</li>
            <li>카드형 섹션으로 메뉴, 브랜드, 뉴스 정보를 짧게 비교</li>
            <li>모바일에서는 세로 스크롤에 맞춰 섹션별 메시지를 분리</li>
          </ul>
        </div>
        <MockupBox
          wide
          eyebrow="Image Needed"
          title="PC 액션 페이지 또는 인터랙션 캡처"
          note="메인페이지_pc_main_action.pdf에서 가장 역동적인 장면을 이미지로 내보내 넣으면 이 섹션이 가장 설득력 있어집니다."
        />
      </section>

      <section className="lotte-reflection">
        <SectionTitle
          label="Reflection"
          title="정보 구조 설계와 브랜드 경험의 균형을 배운 프로젝트"
        />
        <div className="lotte-reflection__grid">
          <article>
            <strong>Learned</strong>
            <p>기업 사이트에서는 예쁜 화면보다 정보의 우선순위와 사용자의 다음 행동이 더 중요하다는 점을 배웠습니다.</p>
          </article>
          <article>
            <strong>Regret</strong>
            <p>실제 사용자 테스트를 충분히 진행하지 못해 CTA 위치와 정보 흐름을 데이터로 검증하지 못한 점이 아쉬웠습니다.</p>
          </article>
          <article>
            <strong>Next</strong>
            <p>향후에는 React 컴포넌트 기반으로 구조를 재정리하고, 접근성과 모션 디테일을 더 보완하고 싶습니다.</p>
          </article>
        </div>
      </section>

      <section className="lotte-final">
        <div>
          <p>Result</p>
          <h2>롯데 GRS의 많은 정보를 더 선명한 첫인상과 탐색 흐름으로 정리했습니다.</h2>
        </div>
        <img src="/assets/lotte/hero-lotte.jpg" alt="" aria-hidden="true" />
      </section>
    </main>
  );
}
