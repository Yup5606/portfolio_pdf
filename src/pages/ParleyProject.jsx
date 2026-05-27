const base = "/assets/parley/";
const src = (file) => `${base}${file}`;
const icon = (file) => `${base}icon/${file}`;

const tools = [
  ["Figma", "figma_icon.svg"],
  ["Premiere Pro", "premier_icon.svg"],
  ["Chat GPT", "chatgpt_icon.svg"],
  ["VS Code", "vscode_icon.svg"],
  ["AOS Plugin", "aos_icon.svg"],
  ["jQuery", "jquery_icon.svg"],
  ["Git Hub", "github_icon.svg"],
  ["Netlify", "netlipy_icon.svg"],
  ["Notion", "notion_icon.svg"],
];

const roleItems = [
  "UI/UX 디자인: 메인 비주얼 콘셉트 수립 및 메인·서브 핵심 페이지 UI 디자인",
  "히어로 영역 비주얼 영상 제작",
  "프론트엔드 퍼블리싱: 메인 페이지 비주얼 인터랙션 구현 및 서브 핵심 콘텐츠 반응형 구현",
  "GitHub 기반 소스 병합 및 Safari 브라우저 렌더링 오류 디버깅",
  "프로젝트 이슈 대응, 결과 보고서 및 발표 자료 제작 총괄",
];

const flows = [
  ["브랜드 인지", "비주얼과 협업 콘텐츠를 통한 브랜드 인식"],
  ["문제 이해", "A.I.R 전략 기반 환경 문제 이해"],
  ["신뢰 형성", "실제 활동과 데이터 기반 신뢰 강화"],
  ["행동 유도", "캠페인 및 기부 참여 경험 제공"],
  ["가치 확산", "공유를 통한 브랜드 가치 확산"],
];

const siteMap = [
  ["GNB", "사이트 구성"],
  ["영상", "플로깅 영상, 슬로건 멘트"],
  ["컴퍼니", "기업 소개"],
  ["소재", "폐기물 순환 소재 소개"],
  ["ESG", "Environment, Social, Governance"],
  ["News", "기사, 연구발표, 공지"],
  ["Footer", "기업정보, SNS, 카피라이트"],
];

const structureNotes = [
  ["GNB 및 첫 화면", "브랜드 로고와 핵심 메뉴를 단순화하고 첫 화면에서 브랜드 메시지와 메인 비주얼이 바로 인지되도록 수정했습니다."],
  ["콘텐츠 흐름", "기존에 한 페이지에 흩어져 있던 정보를 영상, 컴퍼니, 소재, ESG, 뉴스 단위로 분리하여 탐색 동선을 명확히 했습니다."],
  ["반응형 구조", "데스크탑은 섹션별 정보 밀도를 높이고, 모바일은 카드형 구조와 단계별 흐름으로 재배치해 작은 화면에서도 내용을 빠르게 확인할 수 있게 했습니다."],
];

function CaseTitle({ title }) {
  return (
    <header className="parley-title">
      <h2>{title}</h2>
    </header>
  );
}

function BackButton({ setPage }) {
  return (
    <button className="parley-back" type="button" onClick={() => setPage("home")}>
      Back
    </button>
  );
}

function PieChart({ variant }) {
  return (
    <figure className={`parley-pie parley-pie--${variant}`}>
      <span className="pie-large">{variant === "consumer" ? "그렇다 79%" : "E (환경) 64.7%"}</span>
      <span className="pie-mid">{variant === "consumer" ? "아니다 21%" : "S (사회) 29.3%"}</span>
      {variant === "esg" && <span className="pie-small">G(지배구조) 6.0%</span>}
    </figure>
  );
}

export default function ParleyProject({ setPage }) {
  return (
    <main className="parley-page">
      <BackButton setPage={setPage} />

      <section className="parley-hero" aria-labelledby="parley-title">
        <div className="parley-hero__circle" aria-hidden="true" />
        <div className="parley-hero__copy">
          <p className="parley-wordmark">Parley</p>
          <h1 id="parley-title">Parley for the Ocean</h1>
          <p>바다에서 혁신으로, Parley for the Ocean</p>
          <p>웹페이지 리뉴얼 팀 프로젝트</p>
        </div>
        <img className="parley-hero__mockup" src={icon("main_1.svg")} alt="Parley 메인 화면 목업" />
        <div className="parley-hero__links">
          <a href="https://www.parley.tv/" target="_blank" rel="noreferrer">사이트 보러가기</a>
          <a href="#report">결과 보고서 보러가기</a>
        </div>
        <dl className="parley-meta">
          <div>
            <dt>Team Project</dt>
            <dd>팀장: 박유빈 팀원: 박보경</dd>
          </div>
          <div>
            <dt>Project Duration</dt>
            <dd>2026.03 - 2026.04</dd>
          </div>
        </dl>
      </section>

      <section className="parley-overview">
        <img src={src("company_1.jpg")} alt="" aria-hidden="true" />
        <div>
          <h2>“이해는 빠르게 · 탐색은 쉽게 · 몰입은 깊게”</h2>
          <p>기존 Parley 웹사이트는 브랜드가 가진 강한 ESG 가치와 해양 보호 활동에 비해 정보 구조가 복잡하고 사용자 참여를 유도하는 흐름이 부족했습니다.</p>
          <p>이에 해양 환경 보호 메시지를 보다 쉽고 직관적으로 전달하고, 사용자가 단순히 정보를 소비하는 것을 넘어 실제 행동과 참여로 이어질 수 있도록 디지털 경험을 재설계하고자 하였습니다.</p>
          <p>본 프로젝트는 가치 소비와 친환경 라이프스타일에 대한 관심이 높은 MZ세대를 핵심 페르소나로 설정하여 참여와 공감을 유도하는 사용자 경험 설계에 집중했습니다.</p>
        </div>
      </section>

      <section className="parley-role">
        <div className="role-copy">
          <article>
            <p className="role-name">Leader 박유빈</p>
            <img src={src("leader.jpg")} alt="바다거북 이미지" />
            <h2>My Role(기여도) : UI/UX 디자인 70% | 웹퍼블리싱 60%</h2>
            <ul>{roleItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="role-name">박보경</p>
            <img src={src("member.jpg")} alt="박보경 프로필" />
            <ul>
              <li>메인 페이지 4-5섹션 및 헤더·푸터 구현</li>
              <li>서브 페이지 1-2 디자인 및 퍼블리싱</li>
              <li>오류 수정 및 기능 개선 작업</li>
              <li>결과보고서 제작 및 최종 정리</li>
              <li>노션 회의록 작성 및 프로젝트 진행 사항 정리</li>
            </ul>
          </article>
        </div>
        <aside className="tool-list" aria-label="사용 툴">
          <h2>Skill</h2>
          <div>
            {tools.map(([name, file]) => (
              <span key={name}>
                <img src={icon(file)} alt="" />
                {name}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="parley-research">
        <CaseTitle title="MZ의 가치 소비 성향" />
        <div className="research-charts">
          <article>
            <h3>Q. 나는 가치소비자다.</h3>
            <PieChart variant="consumer" />
          </article>
          <article>
            <h3>Q. ESG 활동 중 관심 분야는?</h3>
            <PieChart variant="esg" />
          </article>
        </div>
        <blockquote>
          <p>“MZ세대의 78.2%가 환경보호 활동에 직접 참여”</p>
          <cite>플로깅 · 제로웨이스트 · 재활용 등 행동 기반 친환경 활동 증가</cite>
        </blockquote>
      </section>

      <section className="parley-persona">
        <CaseTitle title="Persona" />
        <div className="persona-layout">
          <img src={src("persona.png")} alt="페르소나 박소연" />
          <article className="persona-profile">
            <blockquote>어차피 하는 러닝이라면, 환경을 위한 의미 있는 행동이면 좋겠어요.</blockquote>
            <h3>박소연 <span>(31세)</span></h3>
            <dl>
              <div><dt>직업</dt><dd>IT 기업 마케터, 사내 ESG 캠페인 서포터즈 활동 중</dd></div>
              <div><dt>거주지</dt><dd>대한민국 서울</dd></div>
              <div><dt>라이프 스타일</dt><dd>주 3회 한강 러닝, 제로웨이스트 실천, 가치 소비 중시</dd></div>
              <div><dt>성격</dt><dd>트렌드에 민감하며 참여 활동을 SNS에 공유함</dd></div>
            </dl>
          </article>
          <article className="persona-needs">
            <h3>사용자 시나리오</h3>
            <p>퇴근 후 한강에서 러닝을 하며 하루의 스트레스를 해소한다. 러닝을 통해 해양 쓰레기 제거 활동에 기여할 수 있다는 점에 매력을 느낀다.</p>
            <h3>사용자 니즈</h3>
            <p>내 참여가 어떤 변화를 만드는지 구체적으로 확인하고, 일상 속에서 쉽게 실천 가능한 참여 방식을 원한다.</p>
          </article>
        </div>
        <div className="flow-area">
          <h2>User Flow</h2>
          <ol>
            {flows.map(([title, body]) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="parley-structure">
        <h2>콘텐츠 구조 재설계</h2>
        <div className="contents-redesign">
          <article className="contents-as">
            <h3>As is</h3>
            <p>메인 페이지에서 너무 많은 정보를 노출하여 핵심 메시지에 대한 내용 검색이 어려움</p>
            <img src={src("contents_as_is.svg")} alt="기존 콘텐츠 구조" />
          </article>
          <article className="contents-to">
            <h3>To be</h3>
            <p>구조를 세분화하여 사용자의 편의성을 증대시킴</p>
            <div className="site-map" aria-label="개선 콘텐츠 구조">
              <strong>메인 페이지</strong>
              {siteMap.map(([title, desc]) => (
                <span key={title}>
                  <b>{title}</b>
                  <em>{desc}</em>
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="parley-code" id="report">
        <CaseTitle title="코드 및 폴더 정리" />
        <div className="code-rows">
          <article>
            <div className="code-images code-images--overlap">
              <img src={src("변수값.jpg")} alt="변수값 코드" />
              <img src={src("공용값.jpg")} alt="공용 class 코드" />
            </div>
            <div>
              <h3>변수 사용 및 공용 값 설정</h3>
              <p>협업 프로젝트이기 때문에 더욱 더 변수값을 세분화 하였고, 동일한 디자인을 공용 class로 설정하여 페이지의 일관성을 유지했습니다.</p>
            </div>
          </article>
          <article>
            <img src={src("폴더정리.jpg")} alt="폴더 정리 화면" />
            <div>
              <h3>폴더 정리 및 반응형 구현</h3>
              <p>페이지별 html / css / javascript / images폴더를 구조화 하였고 특히 css는 .rwd 로 나누어 반응형을 대비 할 수 있게 수정했습니다.</p>
            </div>
          </article>
          <article>
            <img src={src("회의록.jpg")} alt="팀 프로젝트 회의록" />
            <div>
              <h3>회의 및 회의록 기록</h3>
              <p>회의를 통해 콘텐츠의 구성 방향, 디자인 수정 사항, 역할 분담 및 일정 등을 조율 하였고 이를 바탕으로 협업에선 회의부터 기록까지 모든 과정의 중요성을 확인했습니다.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="parley-screen-structure">
        <h2>Desktop Structure</h2>
        <div className="screen-pair">
          <article>
            <span>As is</span>
            <img src={src("팔리 목업 pc.svg")} alt="기존 데스크톱 구조" />
          </article>
          <article>
            <span>To be</span>
            <img src={src("팔리 목업 tb.svg")} alt="개선 데스크톱 구조" />
          </article>
        </div>
        <h2>Mobile Structure</h2>
        <div className="screen-pair screen-pair--mobile">
          <article>
            <span>As is</span>
            <img src={src("mobile_structure_asis.svg")} alt="기존 모바일 구조" />
          </article>
          <article>
            <span>To be</span>
            <img src={src("mobile_structure_tobe.svg")} alt="개선 모바일 구조" />
          </article>
        </div>
        <div className="structure-notes">
          {structureNotes.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="parley-retrospective">
        <img src={src("project-retrospective.png")} alt="프로젝트 회고" />
      </section>

    </main>
  );
}
