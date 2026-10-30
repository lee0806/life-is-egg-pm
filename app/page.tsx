import Link from "next/link";
import { cases } from "./portfolio";
import { DecisionEvidence } from "./components/DecisionEvidence";
import { SiteHeader, SiteFooter } from "./components/SiteHeader";
const proof: Record<string, { label: string; value: string }[]> = {
  "ai-education": [{label:"담당",value:"사용자·관리자 기능 상세 기획"},{label:"산출물",value:"시나리오 · 기능 명세 · 화면 동작"},{label:"현재 단계",value:"상세 기획 작성 · 리뷰"}],
  "ai-workspace": [{label:"담당",value:"기존 서비스 분석 · 초기 범위 선별"},{label:"산출물",value:"화면 IA · 포함/제외 이유"},{label:"현재 단계",value:"초기 MVP 범위 정리 완료"}],
};
export default function Home() {
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a><SiteHeader />
    <main id="main">
      <section className="hero hero-editorial container">
        <p className="hero-label">기획 포트폴리오 · 2026</p>
        <h1>이세현<span className="hero-role">Product Owner</span></h1>
        <p className="hero-summary">구름에서 AI 교육 서비스의 사용자·관리자 기능을 기획하고 있습니다.<br className="desktop-break" /> 요구사항을 화면과 정책으로 풀어내고,<br className="desktop-break" /> 개발자·디자이너와 구현에 필요한 기준을 맞춥니다.</p>
        <div className="hero-actions"><a className="button" href="#work">주요 프로젝트 보기 <span aria-hidden="true">↓</span></a><a className="text-link" href="/leeseh-pm-resume.pdf" target="_blank" rel="noopener noreferrer">이력서 PDF <span aria-hidden="true">↗</span><span className="sr-only"> 새 창</span></a></div>
        <p className="hero-meta">구름 Product Owner 인턴 <span>2026.08 ~ 현재</span></p>
      </section>
      <section className="selected-work" id="work" aria-labelledby="work-heading"><div className="container">
        <div className="work-intro"><h2 id="work-heading">주요 프로젝트</h2><p>제가 맡은 범위와 그 안에서 내린 판단을 담았습니다.</p></div>
        <div className="feature-list">{cases.slice(0, 2).map((project, index) => <article key={project.slug} className={`feature-project feature-${project.slug}`}>
          <div className="feature-copy"><p className="project-number">0{index + 1} <span>구름 · 실무 기획</span></p><p className="project-name">{project.name}</p><h3>{project.title.replace("\n", " ")}</h3><p className="tile-summary">{project.summary}</p>
          <dl className="project-proof">{proof[project.slug].map(row=><div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
          <Link className="case-link" href={`/work/${project.slug}`} aria-label={`${project.name} 사례 읽기`}>기획 과정 자세히 보기 <span aria-hidden="true">↗</span></Link></div>
          <div className="feature-artifact"><DecisionEvidence slug={project.slug} /></div>
        </article>)}</div>
        <div className="work-intro project-subheading"><h2>팀 프로젝트에서의 실행 경험</h2><p>범위를 합의하고, 명세를 맞추고, 구현 결과를 확인했습니다.</p></div>
        <div className="compact-projects">{cases.slice(2).map((project,index)=><article className="compact-project" key={project.slug}><p className="project-number">0{index + 3} <span>6인 교육 프로젝트</span></p><p className="project-name">{project.name}</p><h3>{project.title.replace("\n", " ")}</h3><p>{project.summary}</p><p className="project-tags">{project.slug === "coderun" ? "범위 합의 · API 명세 · MSW 병렬 작업" : "비용 추정 · 응답 형식 · 동일 조건 성능 비교"}</p><Link className="case-link" href={`/work/${project.slug}`} aria-label={`${project.name} 사례 읽기`}>판단과 결과 보기 <span aria-hidden="true">↗</span></Link></article>)}</div>
        <p className="disclosure">업무 사례는 공개 가능한 범위에서 설명했습니다. 도식은 업무 설명을 바탕으로 재구성한 예시이며, 실제 내부 화면·자료가 아닙니다.</p>
      </div></section>
      <section id="about" className="about-section container" aria-labelledby="about-heading"><div className="about-heading"><p className="section-kicker">소개</p><h2 id="about-heading">기획을 맡기 전에는<br />직접 개발했습니다.</h2></div><div className="about-copy"><p>6인 팀 프로젝트에서 팀 리드와 백엔드·인프라 개발을 맡았습니다. 지금은 그 경험을 바탕으로 구현 범위와 API 명세를 개발자와 구체적으로 논의하고 있습니다.</p><dl className="about-facts"><div><dt>현재</dt><dd>구름 Product Owner 인턴<br /><span>2026.08.10 ~ 현재</span></dd></div><div><dt>학력</dt><dd>경기대학교 졸업<br /><span>토목공학 전공 · 컴퓨터공학 복수전공 / 2026.08</span></dd></div><div><dt>주요 도구</dt><dd>Figma, Notion, Jira, Linear, Swagger</dd></div></dl></div></section>
      <section className="contact-section"><div className="container"><h2>연락처</h2><a href="mailto:leeseh0806@gmail.com">leeseh0806@gmail.com</a></div></section>
    </main><SiteFooter />
  </>;
}
