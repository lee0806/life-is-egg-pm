import type { Metadata } from "next";
export const portfolioOrigin = new URL("https://portfolio-pm.leeseh0806.com");
export function socialMetadata(title: string, description: string): Pick<Metadata, "openGraph" | "twitter"> {
  const image = new URL("/og.png", portfolioOrigin).href;
  return {
    openGraph: { title, description, type: "website", locale: "ko_KR", images: [{ url: image, width: 1200, height: 630, alt: "이세현 포트폴리오: 요구사항을 읽고, 제품의 흐름을 만듭니다." }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
