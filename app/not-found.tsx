import Link from "next/link";
import { SiteHeader, SiteFooter } from "./components/SiteHeader";
export default function NotFound() { return <><SiteHeader /><main className="not-found container"><h1>이 페이지를 찾을 수 없습니다.</h1><p>주소를 확인하거나 프로젝트 목록에서 다시 살펴보세요.</p><Link className="button" href="/#work">프로젝트로 돌아가기</Link></main><SiteFooter /></>; }
