import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../portfolio";
import { SiteHeader, SiteFooter } from "../../components/SiteHeader";
import { DecisionEvidence } from "../../components/DecisionEvidence";
import { CostExplorer } from "../../components/CostExplorer";
import { socialMetadata } from "../../site-metadata";
type Props = { params: Promise<{ slug: string }> };
const editorial: Record<string, { context: string; decisions: string; collaboration: string; supporting: string; outcome: string }> = {
  "ai-education": { context: "평가 유형과 화면 진입점을 나눠 해석했습니다", decisions: "단일 진입점에 평가와 의견 제출을 담기", collaboration: "개발·디자인 질문에 필요한 정책 연결", supporting: "함께 맡은 관리자 기능", outcome: "상세 기획 작성과 리뷰 대응" },
  "ai-workspace": { context: "초기 업무 요청에 필요한 화면부터 검토했습니다", decisions: "설정 UI 제외와 내부 기능 유지를 구분하기", collaboration: "후속 기획과 개발 검토에 남긴 항목", supporting: "문서와 실제 동작을 대조한 사례", outcome: "MVP 범위와 추가 검토 항목 정리" },
  coderun: { context: "모든 기능을 개발하기에는 일정이 부족했습니다", decisions: "핵심 학습 흐름을 먼저 완성하기", collaboration: "범위 합의부터 API 연동까지", supporting: "담당 작업과 연동 의존성 관리", outcome: "코드 작성·실행·채점·피드백 구현" },
  mog: { context: "초기 사용량을 모르는 상태에서 인식 방식을 정해야 했습니다", decisions: "고정비와 종량제의 비용 기준 비교", collaboration: "팀의 비용 선택과 프론트엔드 응답 합의", supporting: "동일 조건으로 확인한 조회 성능", outcome: "인식 방식 선택과 구현 검증" },
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
  const primaryDecisions = project.decisions.slice(0, 2);
  const supportingDecision = project.decisions[2];
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a><SiteHeader />
    <main id="main">
      <section className="case-hero container"><Link className="back-link" href="/#work"><span aria-hidden="true">‹</span> 모든 프로젝트</Link><p className="project-name">{project.name}</p><h1>{project.title.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h1><p className="case-lead">{project.summary}</p><dl className="case-facts"><div><dt>역할</dt><dd>{project.role}</dd></div><div><dt>기간</dt><dd>{project.period}</dd></div><div><dt>진행 단계</dt><dd>{project.stage}</dd></div></dl></section>
      <div className="case-cover container"><DecisionEvidence slug={project.slug} /><p className="small-note">공개 가능한 업무 설명을 바탕으로 판단 과정을 재구성했습니다. 실제 내부 화면·자료가 아닙니다.</p></div>
      <div className="case-body container"><aside className="case-toc"><nav aria-label="사례 목차"><a href="#context">문제와 제약</a><a href="#decisions">판단과 실행</a><a href="#collaboration">협업 방식</a><a href="#outcome">결과와 다음 검증</a></nav></aside><div className="case-article">
        <section id="context" className="story-section"><p className="section-kicker">문제와 제약</p><h2>{copy.context}</h2><p>{project.context}</p><ul className="constraint-list">{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="decisions" className="story-section"><p className="section-kicker">핵심 결정</p><h2>{copy.decisions}</h2><div className="decision-list">{primaryDecisions.map((decision, index) => <div className="decision" key={decision.title}><span className="step-number" aria-hidden="true">{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></div>)}</div>{project.slug === "mog" && <CostExplorer />}</section>
        {supportingDecision && <section className="story-section supporting-decision" aria-labelledby="supporting-heading"><p className="section-kicker">{project.slug === "mog" ? "구현 검증" : project.slug === "ai-education" ? "추가 담당 범위" : "실행 과정"}</p><h2 id="supporting-heading">{copy.supporting}</h2><p>{supportingDecision.text}</p></section>}
        <section id="collaboration" className="story-section"><p className="section-kicker">협업과 산출물</p><h2>{copy.collaboration}</h2><div className="collaboration-list">{project.collaboration.map((item) => <div key={item.who}><h3>{item.who}</h3><p>{item.text}</p></div>)}</div><div className="outputs"><h3>작성·공유한 내용</h3><ul>{project.outputs.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section id="outcome" className="story-section"><p className="section-kicker">결과</p><h2>{copy.outcome}</h2><p>{project.outcome}</p><p className="small-note">{project.limit}</p><details className="next-validation"><summary>다음에 검증할 점</summary><p>{project.next}</p></details>{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">프로젝트 코드 확인 <span aria-hidden="true">↗</span><span className="sr-only"> 새 창</span></a>}</section>
      </div></div>
      <section className="next-case"><div className="container"><p>다음 프로젝트</p><Link href={`/work/${next.slug}`}><span>{next.name}</span><span aria-hidden="true">›</span></Link><Link className="text-link" href="/#work">모든 프로젝트 보기</Link></div></section>
    </main><SiteFooter />
  </>;
}
