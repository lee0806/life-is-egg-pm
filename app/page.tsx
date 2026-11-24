import Link from "next/link";
import Image from "next/image";
import "./toss.css";
import { cases } from "./portfolio";
const workCards = [
  { slug: "ai-education", tags: ["관제 시나리오 5개", "예산 정책·통합테스트"] },
  { slug: "ai-workspace", tags: ["MVP 범위 선별", "3개 역할 시연"] },
  { slug: "ai-book-experience", tags: ["현장 체험 기획", "키오스크 2대 운영 가이드"] },
] as const;
export default function Home() {
return <div className="toss-portfolio"><a className="skip-link" href="#main">본문으로 바로가기</a>
<header className="tp-shell tp-nav"><Link href="/" aria-label="이세현 포트폴리오 홈">이세현</Link><nav aria-label="주 메뉴"><a href="#work">프로젝트</a><a href="/이세현_PM_PO_이력서.pdf" target="_blank" rel="noopener noreferrer">이력서 PDF<span className="sr-only"> 새 창</span></a></nav></header>
<main id="main" className="tp-shell"><section className="tp-intro"><h1>PO 이세현입니다.</h1><p className="tp-shortintro">구름에서 공공 AI 학습 서비스의 관리자 기능과 사용 한도 정책을 기획했습니다.<br /> 개발·디자인·QA와 화면을 검토하고, 합의한 기준을 정책서에 반영했습니다.</p></section>
<section id="work" aria-labelledby="work-heading"><div className="tp-section-head"><h2 id="work-heading">실무 프로젝트</h2><p>구름 · 2026.08 ~ 현재</p></div><div className="tp-project-grid">
{workCards.map(({slug, tags}) => {
  const item = cases.find((project) => project.slug === slug)!;
  return <article className={slug === "ai-education" ? "tp-card tp-featured" : "tp-card"} key={slug}><Link className="tp-card-link" href={`/work/${slug}`} aria-label={`${item.title} ${slug === "ai-education" ? "사례 자세히 보기" : "사례 읽기"}`}><div className="tp-card-copy"><div className="tp-card-top"><span>{item.name}</span>{slug !== "ai-education" && <span aria-hidden="true">↗</span>}</div><h3>{item.title}</h3><p className="tp-description">{item.summary}</p><div className="tp-card-foot">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{slug === "ai-education" && <span className="tp-featured-cta">사례 자세히 보기 <span aria-hidden="true">→</span></span>}</div></Link></article>;
})}
</div></section>
<section aria-labelledby="team-heading"><div className="tp-section-head"><h2 id="team-heading">팀 프로젝트</h2><p>6인 팀 · 팀 리드, 백엔드·인프라</p></div><div className="tp-team-grid"><article className="tp-team-card"><p className="tp-label">CodeRun · 교육용 웹 IDE</p><h3>교육용 웹 IDE<br />기획·개발 협업</h3><p>단일 파일 구조를 제안하고, 팀과 개발 범위를 합의했습니다.</p><div className="tp-metric">코드 작성 <span>→</span> 실행 <span>→</span> 채점·피드백</div><figure className="tp-architecture"><a href="/project-visuals/coderun-architecture.png" target="_blank" rel="noopener noreferrer" aria-label="CodeRun 서비스 구성도 원본 보기, 새 창"><Image src="/project-visuals/coderun-architecture.png" alt="CodeRun의 웹 서비스, 채점 엔진과 배포 환경을 연결한 시스템 구성도" width={1800} height={1013} sizes="(max-width: 719px) calc(100vw - 92px), 444px" /></a><figcaption>서비스 구성도</figcaption></figure><Link href="/work/coderun">협업 과정 보기 <span aria-hidden="true">→</span></Link></article><article className="tp-team-card"><p className="tp-label">MOG · 모임 관리 서비스</p><h3>OCR 도입 검토와<br />백엔드 성능 개선</h3><p>팀이 선택한 Gemini 종량제를 연동하고, 조회 성능을 개선했습니다.</p><div className="tp-metric">조회 쿼리 51회 <span>→</span> 1회<p>50명 테스트 데이터 기준</p></div><figure className="tp-architecture"><a href="/project-visuals/mog-architecture.png" target="_blank" rel="noopener noreferrer" aria-label="MOG 서비스 구성도 원본 보기, 새 창"><Image src="/project-visuals/mog-architecture.png" alt="MOG의 웹 서비스와 데이터 저장소 연결을 나타낸 시스템 구성도" width={1800} height={1013} sizes="(max-width: 719px) calc(100vw - 92px), 444px" /></a><figcaption>서비스 구성도</figcaption></figure><Link href="/work/mog">비교 근거 보기 <span aria-hidden="true">→</span></Link></article></div></section>
<section id="about" className="tp-about"><div><p className="tp-label">소개</p><h2>개발 경험을 바탕으로 기획합니다.</h2><p>CodeRun과 MOG에서 팀 리드와 백엔드·인프라 개발을 맡았습니다.<br />지금은 구름 PO 인턴으로 화면에 필요한 동작과 예외를 정리하고 있습니다.</p></div><a href="/이세현_PM_PO_이력서.pdf" target="_blank" rel="noopener noreferrer">이력서 보기 <span aria-hidden="true">↗</span><span className="sr-only"> PDF 새 창</span></a></section>
</main><footer className="tp-shell tp-footer"><span>이세현 · Product Owner</span><a href="mailto:leeseh0806@gmail.com">leeseh0806@gmail.com</a></footer></div>;
}
