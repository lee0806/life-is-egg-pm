import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../portfolio";
import "../preview.css";
type Props = { params: Promise<{ variant: string }> };
export async function generateMetadata({ params }: Props) {
  const { variant } = await params;
  return { title: `디자인 ${variant.toUpperCase()} 시안 | 이세현`, robots: { index: false, follow: false } };
}
function FeedbackDiagram() {
  return <div className="preview-diagram">
    <div className="preview-requirements"><span>긍정 평가</span><span>부정 평가</span><span>의견 제출</span></div>
    <div className="preview-feedback"><div className="preview-answer"><span>AI 답변</span><p>답변 확인 후 평가로 이어지는 과정</p><div className="preview-feedback-actions"><span>답변 평가하기</span><span aria-hidden="true">↗</span></div></div><div className="preview-answer"><span>평가 화면</span><div className="preview-feedback-actions"><span>도움이 됐어요</span><span>아쉬워요</span></div><div className="preview-textarea">답변에 대한 의견</div></div></div>
    <p className="preview-caption">공개 가능한 설명을 바탕으로 재구성한 예시 · 실제 서비스 화면 아님</p>
  </div>;
}
function ScopeDiagram() {
  return <div className="preview-diagram"><div className="preview-scope-rows">
    <div className="preview-scope-row"><span>화면</span><div><h3>초기 업무에 필요한 항목</h3><p>사용자가 직접 선택할 설정 선별</p></div><b>포함</b></div>
    <div className="preview-scope-row"><span>동작</span><div><h3>기본 정책으로 제공할 기능</h3><p>설정 화면에서 숨겨도 내부 동작 유지</p></div><b>유지</b></div>
    <div className="preview-scope-row"><span>코드</span><div><h3>의존 관계 확인이 필요한 항목</h3><p>코드 제거 여부는 기술 검토 후 결정</p></div><b>추가 검토</b></div>
    </div><p className="preview-caption">MVP 검토 내용을 재구성한 예시 · 초기 기획 단계</p></div>;
}
export default async function DesignPreview({params}:Props) {
  const { variant } = await params;
  if(!["a","b"].includes(variant)) notFound();
  const option=variant==="a" ? {name:"A · 차분한 제품형",font:"SUIT Variable",description:"밝고 부드러운 면, 입체적인 기획 자료"}:{name:"B · 따뜻한 편집형",font:"Wanted Sans Variable",description:"여백과 번호, 작업 기록 중심의 구성"};
  return <main className={`design-preview theme-${variant}`}>
    <div className="preview-bar"><div><strong>디자인 비교 시안</strong><span>{option.name} / {option.font}</span></div><nav aria-label="디자인 시안 선택"><Link href="/design/a" aria-current={variant==="a"?"page":undefined}>A안</Link><Link href="/design/b" aria-current={variant==="b"?"page":undefined}>B안</Link><Link href="/">현재 버전</Link></nav></div>
    <div className="preview-shell"><header className="preview-header"><Link href={`/design/${variant}`}>이세현 <span>Product Owner</span></Link><nav><a href="#preview-work">프로젝트</a><a href="/leeseh-pm-resume.pdf" target="_blank" rel="noopener noreferrer">이력서 PDF</a></nav></header>
      <section className="preview-hero"><div className="preview-hero-copy"><p className="preview-eyebrow">구름 Product Owner 인턴 · 2026.08 ~ 현재</p><h1>AI 교육 서비스를<br />기획하는 이세현입니다.</h1><p>사용자·관리자 기능의 요구사항을 검토하고 화면별 동작을 작성합니다. 개발자와 디자이너의 질문에 필요한 정책을 확인하고, 기획서에 반영할 내용을 정리합니다.</p><div className="preview-actions"><a href="#preview-work">진행한 프로젝트 보기 <span aria-hidden="true">↗</span></a><a href="mailto:leeseh0806@gmail.com">연락하기</a></div></div><div className="preview-hero-note"><p>최근 맡은 기획</p><h2>요구사항을 확인하고,<br />화면과 명세에 담는 일.</h2><div className="preview-flow"><span className="preview-node">요구사항</span><span className="preview-arrow" aria-hidden="true">→</span><span className="preview-node">사용자 행동</span><span className="preview-arrow" aria-hidden="true">→</span><span className="preview-node">화면·명세</span></div><p>AI 교육 서비스 상세 기획<br />AI 업무 도구의 MVP 범위 검토</p></div></section>
      <section className="preview-work" id="preview-work"><div className="preview-section-title"><p>SELECTED WORK / 2026</p><h2>진행한 프로젝트</h2><p>실무에서 작성한 기획과 팀 프로젝트에서 구현한 내용을 구분했습니다.</p></div><div className="preview-case-grid">{cases.slice(0,2).map((item,index)=><article className={`preview-case case-${item.slug}`} key={item.slug}><div className="preview-case-copy"><p className="preview-number">0{index+1}<span>실무 기획</span></p><p className="preview-project-name">{item.name}</p><h2>{item.title.replace("\n"," ")}</h2><p>{item.summary}</p><div className="preview-case-meta"><span>{item.type}</span><span>{index===0?"상세 기획·리뷰":"초기 범위 검토"}</span></div><Link href={index===0?`/design/${variant}/case`:`/work/${item.slug}`}>담당한 내용 자세히 보기 <span aria-hidden="true">↗</span></Link></div>{index===0?<FeedbackDiagram/>:<ScopeDiagram/>}</article>)}</div></section>
      <section className="preview-secondary"><div className="preview-section-title"><p>TEAM PROJECTS</p><h2>팀 프로젝트에서 맡은 일</h2></div>{cases.slice(2).map((item,index)=><article key={item.slug}><span>0{index+3}</span><div><p>{item.name} · 6인 교육 프로젝트</p><h3>{item.title.replace("\n"," ")}</h3><p>{item.summary}</p><Link href={`/work/${item.slug}`}>사례 읽기 ↗</Link></div></article>)}</section>
      <footer className="preview-footer"><h2>이세현</h2><p>Product Owner</p><a href="mailto:leeseh0806@gmail.com">leeseh0806@gmail.com</a><small>{option.description} · 디자인 선택을 위한 미리보기입니다.</small></footer>
    </div>
  </main>;
}
