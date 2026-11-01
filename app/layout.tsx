import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioOrigin, socialMetadata } from "./site-metadata";
const title = "이세현 | Product Owner";
const description = "구름 PO 인턴 이세현의 포트폴리오입니다. AI 교육 서비스 기획, AX 사업 MVP 검토, CodeRun·MOG 팀 프로젝트 경험을 소개합니다.";
export const metadata: Metadata = { title, description, metadataBase: portfolioOrigin, ...socialMetadata(title, description), icons: { icon: "/icon.svg" } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><head><link rel="preload" href="/fonts/SUIT-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body>{children}</body></html>; }
