import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../portfolio";
import { SiteHeader, SiteFooter } from "../../components/SiteHeader";
import { CaseVisual } from "../../components/CaseVisual";
import { CostExplorer } from "../../components/CostExplorer";
import { socialMetadata } from "../../site-metadata";
type Props = { params: Promise<{ slug: string }> };
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
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a><SiteHeader />
    <main id="main">
      <section className="case-hero container"><Link className="back-link" href="/#work"><span aria-hidden="true">‹</span> 모든 프로젝트</Link><p className="project-name">{project.name}</p><h1>{project.title.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h1><p className="case-lead">{project.summary}</p><dl className="case-facts"><div><dt>역할</dt><dd>{project.role}</dd></div><div><dt>기간</dt><dd>{project.period}</dd></div><div><dt>진행 단계</dt><dd>{project.stage}</dd></div></dl></section>
      <figure className="case-cover container"><CaseVisual slug={project.slug} /><figcaption>사례 이해를 위해 재구성한 개념도입니다. 실제 서비스 화면이나 내부 자료가 아닙니다.</figcaption></figure>
      <div className="case-body container"><aside className="case-toc"><nav aria-label="사례 목차"><a href="#context">문제와 제약</a><a href="#decisions">판단과 실행</a><a href="#collaboration">협업 방식</a><a href="#outcome">결과와 다음 검증</a></nav></aside><div className="case-article">
        <section id="context" className="story-section"><p className="section-kicker">문제와 제약</p><h2>{project.question}</h2><p>{project.context}</p><ul className="constraint-list">{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="decisions" className="story-section"><p className="section-kicker">판단과 실행</p><h2>제가 선택한 방향.</h2><div className="decision-list">{project.decisions.map((decision, index) => <div className="decision" key={decision.title}><span className="step-number" aria-hidden="true">{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></div>)}</div>{project.slug === "mog" && <CostExplorer />}</section>
        <section id="collaboration" className="story-section"><p className="section-kicker">협업 방식</p><h2>함께 확인한 기준.</h2><div className="collaboration-list">{project.collaboration.map((item) => <div key={item.who}><h3>{item.who}</h3><p>{item.text}</p></div>)}</div><div className="outputs"><h3>남긴 산출물</h3><ul>{project.outputs.map((item) => <li key={item}>{item}</li>)}</ul><p className="small-note">내부 산출물 원문 대신, 공개 가능한 판단 과정과 역할을 정리했습니다.</p></div></section>
        <section id="outcome" className="story-section"><p className="section-kicker">결과와 다음 검증</p><h2>확인한 것과,<br />아직 확인할 것.</h2><h3>확인한 결과</h3><p>{project.outcome}</p><h3>검증의 범위</h3><p>{project.limit}</p><h3>다음에 확인할 질문</h3><p>{project.next}</p><div className="takeaway"><p>{project.takeaway}</p></div>{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">프로젝트 코드 확인 <span aria-hidden="true">↗</span><span className="sr-only"> 새 창</span></a>}</section>
      </div></div>
      <section className="next-case"><div className="container"><p>다음 프로젝트</p><Link href={`/work/${next.slug}`}><span>{next.name}</span><span aria-hidden="true">›</span></Link><Link className="text-link" href="/#work">모든 프로젝트 보기</Link></div></section>
    </main><SiteFooter />
  </>;
}
