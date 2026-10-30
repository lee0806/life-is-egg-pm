import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioOrigin, socialMetadata } from "./site-metadata";
const title = "이세현 | Product Owner";
const description = "AI 교육 서비스 기획, AI 업무 도구 MVP, CodeRun과 MOG에서의 판단과 협업 과정을 담은 이세현의 PO·PM 포트폴리오입니다.";
export const metadata: Metadata = { title, description, metadataBase: portfolioOrigin, ...socialMetadata(title, description), icons: { icon: "/icon.svg" } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
