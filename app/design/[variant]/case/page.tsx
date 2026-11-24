import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases } from '../../../portfolio';
import '../../preview.css';
import '../../../toss.css';
import { UsageDecision } from '../../../components/UsageDecision';
export const metadata = { title: 'AI 학습 서비스 운영 정책 설계 · 디자인 비교', robots: { index: false, follow: false } };
export default async function CasePreview({params}:{params:Promise<{variant:string}>}) {
 const {variant}=await params;if(!['a','b'].includes(variant))notFound();const p=cases[0];
 return <main className={`design-preview theme-${variant}`}><div className="preview-bar"><strong>AI 학습 서비스 운영 정책 설계 · {variant.toUpperCase()}안</strong><nav><Link href="/design/a/case">A 상세</Link><Link href="/design/b/case">B 상세</Link><Link href={`/design/${variant}`}>시안 홈</Link></nav></div><div className="preview-shell preview-story">
  <header className="preview-header"><Link href={`/design/${variant}`}>이세현 <span>Product Owner</span></Link><a href="/이세현_PM_PO_이력서.pdf">이력서 PDF</a></header>
  <section className="preview-story-hero"><p className="preview-eyebrow">{p.name} · 구름 PO 인턴</p><h1>{p.title.replace('\n',' ')}</h1><p>{p.summary}</p><dl><div><dt>담당</dt><dd>{p.role}</dd></div><div><dt>기간</dt><dd>{p.period}</dd></div><div><dt>단계</dt><dd>{p.stage}</dd></div></dl></section>
  <div className="preview-story-body"><aside><p>상세 기획</p><p>사용자·관리자 기능</p><p>개발·디자인 질의 대응</p></aside><article><section><p className="preview-eyebrow">맡은 업무</p><h2>한도 도달 시 사용자에게 가능한 동작을 정리했습니다.</h2><p>{p.context}</p></section><section><p className="preview-eyebrow">예산과 사용 한도</p><h2>{p.decisions[0].title}</h2><p>{p.decisions[0].text}</p><UsageDecision /></section><section><h2>{p.decisions[1].title}</h2><p>{p.decisions[1].text}</p></section>{p.decisions.slice(3).map(d=><section key={d.title}><h2>{d.title}</h2><p>{d.text}</p></section>)}<section><p className="preview-eyebrow">함께 맡은 관리자 기능</p><h2>{p.decisions[2].title}</h2><p>{p.decisions[2].text}</p></section><section><p className="preview-eyebrow">협업</p><h2>개발·디자인·QA와 기준을 대조했습니다.</h2>{p.collaboration.map(c=><div className="preview-story-collab" key={c.who}><h3>{c.who}</h3><p>{c.text}</p></div>)}</section><section><p className="preview-eyebrow">작성한 내용과 진행 상태</p><h2>상세 기획을 작성하고 리뷰에 대응했습니다.</h2><ul>{p.outputs.map(o=><li key={o}>{o}</li>)}</ul><p>{p.outcome}</p><p className="preview-caption">{p.limit}</p></section></article></div><footer className="preview-footer"><Link href={`/design/${variant}`}>시안 홈으로 돌아가기 ↗</Link></footer>
 </div></main>;
}
