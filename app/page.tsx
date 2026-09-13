import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "goorm · Product Owner Intern",
    description:
      "공공 AI 교육 서비스의 요구사항을 제품 목표와 실행 기준으로 전환",
    period: "2026.08.10 — 2026.11.10",
    role: "PO 인턴 · 요구사항 분석/상세 기획 · 디자인/개발 관리",
    evidence: "73개 요구사항 → 485개 실행 항목",
    cases: [
      {
        title: "요구사항 원문을 실행 가능한 구조로 전환",
        category: "Requirement",
        problem:
          "장문 RFP에 기능·보안·성능 조건과 상호참조가 섞여 있어 제품 목표와 구현 범위를 한 번에 파악하기 어려웠습니다.",
        solution:
          "원문의 문구와 의도를 대조해 목적·제약·연관 조건을 해석했습니다. 원문을 보존한 채 요구사항을 ID, 14종 분류, 상위 요구사항, 협의 필요 항목으로 분해하고 배치별 재조회와 원문 대조를 진행했습니다.",
        result:
          "73개 상위 요구사항을 485개 세부 항목으로 구조화해 프로젝트 목표와 연결하고, 원문 오기·누락·미확정 조건을 별도로 추적했습니다.",
        retrospective:
          "구현과 운영이 진행 중인 프로젝트입니다. 이후에는 요구사항별 구현·QA 상태와 변경 이력을 연결해 실제 완료율까지 확인할 계획입니다.",
      },
      {
        title: "Use Case와 마일스톤을 기능·정책으로 구체화",
        category: "Product Design",
        problem:
          "요구사항 목록만으로는 사용자가 무엇을 왜 수행하는지, 어떤 기능을 언제까지 완성해야 하는지 팀이 동일하게 이해하기 어려웠습니다.",
        solution:
          "행위자·목표·선행조건·정상/예외 흐름으로 Use Case를 작성했습니다. 각 Use Case에 기능을 매핑하고 마일스톤을 설계한 뒤 기능 정의, 상세 명세서, 세부 정책서를 작성했습니다.",
        result:
          "요구사항→Use Case→기능→정책→마일스톤을 추적할 수 있게 만들어 기획·디자인·개발·QA가 동일한 범위와 완료 기준으로 실행하도록 했습니다.",
        retrospective:
          "상세 기획의 완성도뿐 아니라 변경 발생 빈도와 개발 문의 유형을 함께 기록하면 기획 품질을 더 객관적으로 검증할 수 있습니다.",
      },
      {
        title: "기획 리뷰로 디자인·개발 이슈를 조기에 해결",
        category: "Delivery",
        problem:
          "기획·디자인·개발 단계가 진행될수록 새로운 정책 누락과 구현 이슈가 발견되어 명세·화면·구현이 어긋날 가능성이 있었습니다.",
        solution:
          "AI 답변의 근거·출처·신뢰도 확인 기능과 강남구 미래인재 사업의 AI-DNA-북 큐레이션을 프로토타입으로 리뷰했습니다. 기획 누락은 즉시 수정하고 디자인·개발 중 발생한 이슈는 리뷰에서 정책과 구현 방향을 조율했습니다.",
        result:
          "기획 단계의 오류를 선제적으로 보완하고, 디자인·개발 과정의 쟁점을 리뷰 안에서 해결해 산출물이 같은 기준을 유지하도록 관리했습니다.",
        retrospective:
          "현재는 해결 사례 중심으로 관리하고 있습니다. 이후에는 리뷰에서 발견한 이슈 수, 재작업 감소, 해결 리드타임을 지표로 남길 필요가 있습니다.",
      },
    ],
    stack: "Jira · Notion · Figma · Slack · GitHub · Swagger",
  },
  {
    number: "02",
    name: "CodeRun",
    description:
      "브라우저에서 코드 작성·실행·채점과 라인 단위 피드백을 연결한 교육용 IDE",
    period: "2026.05.19 — 2026.06.05",
    role: "팀 리드 (6인) · 요구사항/티켓/범위 · BE/Infra",
    evidence: "한 달 안에 핵심 학습 흐름 구현",
    repository: "https://github.com/deepdive-01/goorm-ide-back",
    visual: {
      src: "/project-visuals/coderun-architecture.png",
      alt: "CodeRun 서비스와 채점 및 배포 환경의 시스템 구성도",
      caption: "CodeRun 프로젝트의 전체 시스템 아키텍처",
    },
    cases: [
      {
        title: "한 달 안에 완성할 핵심 범위 결정",
        category: "Scope",
        problem:
          "파일 트리 기반 IDE와 학습 자료 업로드까지 구현하면 한 달의 프로젝트 기간 안에 코드 작성→실행→채점→피드백이라는 핵심 흐름이 늦어질 위험이 있었습니다.",
        solution:
          "학습 자료 기능 제외를 제안하고, 멘토 피드백을 바탕으로 파일 트리를 단일 파일 구조로 축소하는 안을 팀과 논의해 확정했습니다.",
        result:
          "정해진 기간 안에 코드 작성부터 실행·채점·라인별 피드백까지 핵심 사용자 흐름을 배포 가능한 상태로 완성했습니다.",
        retrospective:
          "실제 학습자와 강사가 사용한 제품은 아니어서 범위 결정의 사용자 효용까지 검증하지 못했습니다. 다음 단계에서는 과제 완료율과 피드백 유용성을 확인해야 합니다.",
      },
      {
        title: "API 명세와 MSW로 FE·BE 병렬 작업",
        category: "Execution",
        problem:
          "FE가 실제 API 완성을 기다리면 화면 개발과 연동 검증이 연쇄적으로 지연될 수 있었습니다.",
        solution:
          "BE 응답 형식을 먼저 합의하고 API 명세를 기준으로 FE가 MSW 응답을 만들도록 했습니다. 실제 API 연동 과정에서 달랐던 응답은 함께 재정의했습니다.",
        result:
          "FE는 실제 API가 완성되기 전에 개발을 시작했고, 이후 연동 과정에서 발견한 차이를 명세와 구현에 반영했습니다.",
        retrospective:
          "초기 Notion 명세와 실제 구현 사이의 차이는 남았습니다. 다음에는 Swagger를 최신 기준으로 관리하고, API가 명세와 다를 때 바로 확인할 수 있는 점검 절차를 마련할 필요가 있습니다.",
      },
      {
        title: "티켓과 회의로 작업 의존성 관리",
        category: "Team Operations",
        problem:
          "여러 기능을 동시에 개발하면서 담당자별 진행 상황과 FE·BE 사이의 선행 작업을 한눈에 파악하기 어려웠습니다.",
        solution:
          "프로젝트를 약 60~80개의 Linear 티켓으로 분해해 담당자·마감일·우선순위·의존관계를 표시했습니다. 매주 수요일 30~60분 회의와 필요시 소회의를 주도하고 결과를 Notion에 남겼습니다.",
        result:
          "팀 전체가 기능별 진행 상황과 연동 순서를 같은 기준으로 확인하고, 지연 가능성이 있는 작업의 우선순위를 회의에서 조정할 수 있었습니다.",
        retrospective:
          "티켓을 도입한 뒤 작업 상황은 잘 보였지만, 작업 하나를 끝내는 데 걸린 시간이나 막힌 상태가 얼마나 오래 이어졌는지는 기록하지 못했습니다. 다음에는 이 두 시간을 함께 확인하겠습니다.",
      },
    ],
    stack: "Linear · Notion · Swagger · MSW · Spring Boot · React · Docker",
  },
  {
    number: "03",
    name: "MOG",
    description:
      "일정 조율부터 중간지점 추천, 영수증 정산과 모임 기록까지 연결한 모임 관리 플랫폼",
    period: "2026.06.01 — 2026.07.06",
    role: "팀 리드 (6인) · 요구사항/API 명세/티켓 · BE/Infra",
    evidence: "손익분기 22,500건 · 조회 쿼리 51→1개",
    repository: "https://github.com/goorm-mog/mog-backend",
    visual: {
      src: "/project-visuals/mog-architecture.png",
      alt: "MOG 서비스와 데이터 저장소의 시스템 구성도",
      caption: "비용·명세·조회 성능 결정을 설명하는 서비스 구조",
    },
    cases: [
      {
        title: "사용량에 맞춘 영수증 인식 비용 구조 선택",
        category: "Cost Decision",
        problem:
          "초기 사용량을 예측하기 어려운 상황에서 고정요금 OCR은 월 18,000원의 비용이 발생했습니다.",
        solution:
          "평균 입력·출력 토큰을 기준으로 Gemini 호출 비용을 건당 약 0.8원으로 계산하고, 고정요금 OCR과의 손익분기점이 약 22,500건임을 팀에 공유해 함께 선택했습니다. 응답은 고정 JSON과 null 규칙으로 제한했습니다.",
        result:
          "초기에는 사용량 기반 비용을 적용하고, 월 22,500건을 기술 재검토 기준으로 삼을 수 있는 의사결정 근거를 만들었습니다.",
        retrospective:
          "실제 월 사용량과 다양한 영수증의 필드별 정확도는 검증하지 못했습니다. 운영 후 실제 요청 건수와 평균 입력·출력 토큰을 측정해 예상 비용과 차이가 있는지 다시 확인해야 합니다.",
      },
      {
        title: "API 명세를 기준으로 FE·BE 작업 연결",
        category: "Product Delivery",
        problem:
          "Notion에 작성한 초기 명세와 개발 중인 실제 API가 달라지면서 FE의 Mock 응답과 BE 구현이 어긋날 가능성이 있었습니다.",
        solution:
          "정산·알림·모임 기록·요약 카드의 요청과 응답을 직접 정의했습니다. 개발 단계에서는 Swagger를 단일 기준으로 전환하고, FE가 그 명세를 바탕으로 MSW 응답을 만들도록 조율했습니다.",
        result:
          "FE는 실제 API 완성 전에 화면과 상태 처리를 개발했고, 연동 중 발견된 응답 차이를 문서와 구현에 함께 반영했습니다.",
        retrospective:
          "일반 응답 형식은 통일했지만 모든 오류 상황과 명세가 바뀐 기록을 체계적으로 관리하지는 못했습니다. 다음에는 변경 이유와 오류별 응답 형태를 문서에 함께 남길 필요가 있습니다.",
      },
      {
        title: "50명 시나리오에서 조회 병목 개선",
        category: "Validation",
        problem:
          "성능 테스트용 멤버 50명 데이터에서 요약 카드 조회 시 51개의 쿼리와 10초 이상의 지연이 발생했습니다.",
        solution:
          "SQL 로그로 반복 조회를 확인하고 개발팀과 개선 범위를 정한 뒤, 연관 데이터를 단일 쿼리로 조회하도록 @EntityGraph를 적용했습니다.",
        result:
          "같은 50명 테스트에서 쿼리를 51개에서 1개로 줄이고 응답 시간을 10,280ms에서 229ms로 단축했습니다.",
        retrospective:
          "내부 테스트 데이터에서 확인한 결과라 실제 사용 환경을 그대로 보여주지는 않습니다. 다음에는 더 많은 데이터와 여러 요청이 동시에 들어오는 상황에서도 속도가 유지되는지 확인해야 합니다.",
      },
    ],
    stack: "Linear · Notion · Swagger · MSW · Spring Boot · React · Gemini API",
  },
];

const skills = [
  {
    label: "Product Management",
    value: "원문 해석 · 제품 목표 · Use Case · 우선순위",
    detail: "요구사항을 사용자 목표와 구현 가능한 범위로 전환합니다.",
  },
  {
    label: "Team Operations",
    value: "마일스톤 · 기획 리뷰 · 일정/의존성 관리",
    detail: "리뷰에서 쟁점을 해결하고 여러 직군의 실행 기준을 맞춥니다.",
  },
  {
    label: "Metrics & Validation",
    value: "비용 비교 · 성능 측정 · 사용자 흐름 검증",
    detail: "수치와 시나리오로 결정의 결과와 검증 한계를 구분합니다.",
  },
  {
    label: "Collaboration Tools",
    value: "Jira · Notion · Figma · Slack · Swagger",
    detail: "요구사항, 정책, 프로토타입, 티켓과 변경 이력을 연결합니다.",
  },
  {
    label: "Technical Background",
    value: "Spring Boot · React · Docker · AI/ML",
    detail: "개발 맥락을 이해하고 직군 간 구현 의존성을 조율합니다.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="이세현 포트폴리오 홈">이세현</a>
        <nav aria-label="주요 메뉴">
          <a href="#work">경험</a>
          <a href="#about">일하는 방식</a>
          <a href="#contact">연락하기</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <p className="eyebrow">PRODUCT OWNER</p>
        <h1>
          문제를 구조화하고,
          <br />
          <em>실행 가능한 기준으로 만듭니다.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            사용자 문제를 요구사항과 우선순위로 구조화하고,
            <br />
            기획·디자인·개발이 같은 목표로 움직이도록 연결합니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              프로젝트 보기 <span aria-hidden="true">↓</span>
            </a>
            <a className="button" href="/leeseh-pm-resume.pdf" target="_blank" rel="noreferrer">
              이력서 PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>결정의 근거부터 실행의 결과까지</h2>
          <p>문제와 제약, 선택의 기준, 확인한 결과와 아직 검증하지 못한 부분까지 기록했습니다.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-index">{project.number}</div>
              <div className="project-content">
                <div className="project-title-row">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-links">
                    {"repository" in project && project.repository ? (
                      <a className="repo-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 저장소 열기`}>
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>

                <dl className="project-meta">
                  <div><dt>기간</dt><dd>{project.period}</dd></div>
                  <div><dt>역할</dt><dd>{project.role}</dd></div>
                  <div><dt>대표 결과</dt><dd className="accent-text">{project.evidence}</dd></div>
                </dl>

                {"visual" in project && project.visual ? (
                  <figure className="project-visual">
                    <Image src={project.visual.src} alt={project.visual.alt} width={1800} height={1013} sizes="(max-width: 900px) calc(100vw - 40px), 1040px" />
                    <figcaption><span>PROJECT MAP</span>{project.visual.caption}</figcaption>
                  </figure>
                ) : null}

                <div className="case-list">
                  {project.cases.map((item, index) => (
                    <details className="case-study" key={item.title} open={index === 0}>
                      <summary>
                        <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
                        <strong>{item.title}</strong>
                        <span className="case-category">{item.category}</span>
                        <span className="case-toggle" aria-hidden="true">+</span>
                      </summary>
                      <div className="case-content">
                        <div><h5>문제·제약</h5><p>{item.problem}</p></div>
                        <div><h5>판단과 실행</h5><p>{item.solution}</p></div>
                        <div><h5>확인한 결과</h5><p>{item.result}</p></div>
                        <div className="retrospective"><h5>한계와 다음 검증</h5><p>{item.retrospective}</p></div>
                      </div>
                    </details>
                  ))}
                </div>

                <p className="stack-line"><span>활용 도구·기술</span>{project.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">HOW I WORK</p>
          <h2>기준을 만들고,<br />실행을 연결합니다.</h2>
        </div>
        <div className="values-list">
          <article>
            <span>01</span><h3>원문에서 제품의 목표를 찾습니다.</h3>
            <p>요청을 바로 기능으로 옮기지 않습니다. 사용자의 목표와 제약, 요구사항 사이의 관계를 해석해 팀이 결정할 수 있는 기준으로 만듭니다.</p>
          </article>
          <article>
            <span>02</span><h3>기획을 실행 단위까지 구체화합니다.</h3>
            <p>Use Case, 마일스톤, 기능 명세와 정책서를 연결합니다. 정상 흐름뿐 아니라 예외와 완료 조건까지 정의해 직군 간 해석 차이를 줄입니다.</p>
          </article>
          <article>
            <span>03</span><h3>리뷰에서 문제를 닫고 다음 실행을 엽니다.</h3>
            <p>기획 누락은 즉시 수정하고 디자인·개발 중 발견된 쟁점은 리뷰에서 정책과 구현 방향으로 정리합니다. 결과와 아직 검증하지 못한 부분도 구분합니다.</p>
          </article>
        </div>
      </section>

      <section className="skills-section shell">
        <div className="section-heading">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>제품과 팀을 연결하는 역량</h2>
        </div>
        <div className="skills-table">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.label}>
              <span>{skill.label}</span><strong>{skill.value}</strong><p>{skill.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="background-section shell">
        <div className="background-block">
          <p className="eyebrow">CURRENT ROLE</p><h2>goorm</h2>
          <p>Product Owner Intern</p><span>2026.08.10 — 2026.11.10</span>
        </div>
        <div className="background-block">
          <p className="eyebrow">EDUCATION</p><h2>경기대학교</h2>
          <p>토목공학과 전공 · 컴퓨터공학과 복수전공</p><span>2026년 졸업예정 · 3.65 / 4.5</span>
        </div>
        <div className="background-block">
          <p className="eyebrow">RECOGNITION</p>
          <ul>
            <li>한국정보기술학회 우수논문상</li>
            <li>K-디지털 챌린지 국가보안기술연구소 소장상</li>
            <li>캡스톤 디자인 경진대회 은상·동상</li>
            <li>구름 × 인프런 성장 과정 우수 수료생</li>
            <li>SQLD · 2026.03.27</li>
          </ul>
        </div>
      </section>

      <footer className="site-footer shell" id="contact">
        <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
        <h2>함께 풀어야 할 문제가 있다면<br />이야기 나눠요.</h2>
        <a className="email-link" href="mailto:leeseh0806@gmail.com">leeseh0806@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="footer-bottom">
          <span>© 2026 이세현</span>
          <div>
            <a href="https://github.com/lee0806" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://velog.io/@ummm" target="_blank" rel="noreferrer">Velog</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
