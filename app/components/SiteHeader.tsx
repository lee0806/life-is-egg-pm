import Link from "next/link";
export function SiteHeader() {
  return <header className="site-header"><div className="header-inner"><Link className="wordmark" href="/" aria-label="이세현 포트폴리오 홈">이세현<span>Product Owner</span></Link><nav aria-label="주 메뉴"><Link href="/#work">프로젝트</Link><Link href="/#about" className="nav-about">소개</Link><a className="nav-resume" href="/leeseh-pm-resume.pdf" target="_blank" rel="noopener noreferrer">이력서<span className="sr-only"> PDF 새 창 열기</span></a></nav></div></header>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><p>이세현 <span>Product Owner</span></p><div><a href="mailto:leeseh0806@gmail.com">이메일</a><a href="https://github.com/lee0806" target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> 새 창</span></a><a href="https://velog.io/@ummm" target="_blank" rel="noopener noreferrer">Velog<span className="sr-only"> 새 창</span></a></div><small>2026.10 업데이트</small></div></footer>;
}
