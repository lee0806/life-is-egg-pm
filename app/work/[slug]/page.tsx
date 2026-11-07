import "../../toss.css";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../portfolio";
import { SiteHeader, SiteFooter } from "../../components/SiteHeader";
import { CostExplorer } from "../../components/CostExplorer";
import { socialMetadata } from "../../site-metadata";
type Props = { params: Promise<{ slug: string }> };
const editorial: Record<string, { context: string; decisions: string; collaboration: string; supporting: string; outcome: string }> = {
  "ai-education": { context: "AI 채팅 실습의 사용자 흐름", decisions: "대화부터 결과물 활용까지 기능 설계", collaboration: "개발·디자인과 동작·정책 검토", supporting: "관리자 기능과 운영 정책 기획", outcome: "상세 기획과 개발·디자인 협의 반영" },
  "ai-workspace": { context: "인수인계 때마다 배경과 기준을 다시 설명해야 했습니다", decisions: "대화와 지침 공유를 중심으로 MVP 설계", collaboration: "팀과 구현 범위·우선순위 조율", supporting: "이전 맥락을 바탕으로 작업을 시작하는 흐름", outcome: "초기 기능 범위와 사용자 시나리오 구성" },
  coderun: { context: "모든 기능을 개발하기에는 일정이 부족했습니다", decisions: "개발 범위 조정과 API 명세 공유", collaboration: "팀·프론트엔드와 협의한 내용", supporting: "작업 일정과 연동 순서 관리", outcome: "코드 작성·실행·채점·피드백 구현" },
  mog: { context: "영수증 인식 방식을 선택해야 했습니다", decisions: "비용 비교와 응답 형식 결정", collaboration: "팀의 방식 선택과 API 연동", supporting: "요약 카드 조회 성능 개선", outcome: "비용 비교와 개발 결과" },
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) return { title: "사례를 찾을 수 없습니다 | 이세현" };
  const title = `${project.name} | 이세현 포트폴리오`;
  return { title, description: project.summary, ...socialMetadata(title, project.summary) };
}
export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = cases[(cases.indexOf(project) + 1) % cases.length];
  const copy = editorial[project.slug];
  const primaryDecisions = project.slug === "ai-education" ? project.decisions.filter((_, index) => index !== 2) : project.decisions.slice(0, 2);
  const supportingDecision = project.decisions[2];
  return <div className="toss-case">
    <a className="skip-link" href="#main">본문으로 바로가기</a><SiteHeader />
    <main id="main">
      <section className="case-hero container"><Link className="back-link" href="/#work"><span aria-hidden="true">‹</span> 모든 프로젝트</Link><p className="project-name">{project.name}</p><h1>{project.title.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h1><p className="case-lead">{project.summary}</p><dl className="case-facts"><div><dt>역할</dt><dd>{project.role}</dd></div><div><dt>기간</dt><dd>{project.period}</dd></div><div><dt>진행 단계</dt><dd>{project.stage}</dd></div></dl></section>
      <div className="case-body container"><aside className="case-toc"><nav aria-label="사례 목차"><a href="#context">담당 업무와 상황</a><a href="#decisions">주요 작업</a><a href="#collaboration">추가 협의</a><a href="#outcome">결과</a></nav></aside><div className="case-article">
        <section id="context" className="story-section"><p className="section-kicker">담당 업무와 상황</p><h2>{copy.context}</h2><p>{project.context}</p><ul className="constraint-list">{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="decisions" className="story-section"><p className="section-kicker">주요 작업</p><h2>{copy.decisions}</h2><div className="decision-list">{primaryDecisions.map((decision, index) => <div className="decision" key={decision.title}><span className="step-number" aria-hidden="true">{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></div>)}</div>{project.slug === "mog" && <CostExplorer />}</section>
        {supportingDecision && <section className="story-section supporting-decision" aria-labelledby="supporting-heading"><p className="section-kicker">{project.slug === "mog" ? "성능 테스트" : project.slug === "ai-education" ? "추가 담당 범위" : "추가 작업"}</p><h2 id="supporting-heading">{copy.supporting}</h2><p>{supportingDecision.text}</p></section>}
        <section id="collaboration" className="story-section"><p className="section-kicker">추가 협의</p><h2>{copy.collaboration}</h2><div className="collaboration-list">{project.collaboration.map((item) => <div key={item.who}><h3>{item.who}</h3><p>{item.text}</p></div>)}</div></section>
        <section id="outcome" className="story-section"><p className="section-kicker">결과</p><h2>{copy.outcome}</h2><p>{project.outcome}</p>{(project.slug === "ai-education" || project.slug === "ai-workspace") && <><h3>주요 산출물</h3><ul className="constraint-list">{project.outputs.map((item) => <li key={item}>{item}</li>)}</ul></>}{project.slug === "mog" && <><h3>분석·측정 조건</h3><p>비용은 프로젝트 당시 요금과 예상 토큰 사용량으로 계산했습니다. 성능은 50명 규모 테스트 데이터에서 연관 데이터 조회 시간을 비교한 결과입니다.</p></>}{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">프로젝트 코드 확인 <span aria-hidden="true">↗</span><span className="sr-only"> 새 창</span></a>}</section>
      </div></div>
      <section className="next-case"><div className="container"><p>다음 프로젝트</p><Link href={`/work/${next.slug}`}><span>{next.name}</span><span aria-hidden="true">›</span></Link><Link className="text-link" href="/#work">모든 프로젝트 보기</Link></div></section>
    </main><SiteFooter />
  </div>;
}
