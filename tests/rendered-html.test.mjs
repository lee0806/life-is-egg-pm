import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
const { default: worker } = await import("../dist/server/index.js");
async function render(path = "/") {
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html", host: "localhost" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}
test("home renders current PO portfolio and five case links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /이세현 \| Product Owner/);
  assert.match(html, /href="\/fonts\/PretendardVariable\.woff2"/);
  assert.match(html, /property="og:image" content="https:\/\/portfolio-pm\.leeseh0806\.com\/og\.png"/);
  assert.match(html, /PO 이세현입니다/);
  assert.match(html, /이세현_PM_PO_이력서\.pdf/);
  assert.match(html, /toss-portfolio/);
  assert.match(html, /구름에서 공공 AI 학습 서비스의 관리자 기능과 사용 한도 정책을 기획/); assert.doesNotMatch(html, /구름 PO 인턴 이세현입니다/); assert.doesNotMatch(html, /tp-chips/);
  assert.match(html, /50명 테스트 데이터 기준/);
  assert.match(html, /6인 팀 · 팀 리드, 백엔드·인프라/);
  assert.doesNotMatch(html, /6인 교육 프로젝트|교육 프로젝트에서는/);
  assert.doesNotMatch(html, /운영 지표 아님|tp-disclosure|tp-artifact-note/);
  assert.match(html, /사용 한도 정책/);
  assert.match(html, /AI 학습 서비스 운영 정책 설계/);
  assert.doesNotMatch(html, /답변 평가 정책과 기록 조회 기능/);
  assert.match(html, /AI 협업 도구 MVP 기획/);
  assert.doesNotMatch(html, /usage-decision|동작 기준을 설명한 재구성 예시/);
  assert.match(html, /tp-featured-cta[^>]*>사례 자세히 보기/);
  assert.ok(html.indexOf("/work/ai-education") < html.indexOf("/work/ai-workspace"));
  assert.match(html, /coderun-architecture\.png/);
  assert.match(html, /mog-architecture\.png/);
  assert.match(html, /서비스 구성도/);
  assert.doesNotMatch(html, /public class Learning|practice\(\)|같은 화면을 보고/);
  for (const slug of ["ai-education", "ai-workspace", "ai-book-experience", "coderun", "mog"]) assert.match(html, new RegExp(`href="/work/${slug}"`));

  for (const unsupported of [/73개/, /485개/, /60~80/, /2026\.11\.10/, /AI-DNA/, /figma\.com/, /app\.notion\.com/]) assert.doesNotMatch(html, unsupported);
});
for (const slug of ["ai-education", "ai-workspace", "ai-book-experience", "coderun", "mog"]) {
  test(`${slug} renders complete decision case study`, async () => {
    const response = await render(`/work/${slug}`); assert.equal(response.status, 200); const html = await response.text();
    assert.match(html, /property="og:image" content="https:\/\/portfolio-pm\.leeseh0806\.com\/og\.png"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    for (const section of ["context", "decisions", "collaboration", "outcome"]) assert.ok(html.includes(`id="${section}"`));

    assert.doesNotMatch(html, /app\.notion\.com|figma\.com|73개|485개/);
    assert.doesNotMatch(html, /검증 범위와 다음 확인 사항|최종 구현과 정책 승인|후속 검증에서는/);
    if (slug === "mog") { assert.doesNotMatch(html, /교육 프로젝트/); assert.match(html, /CLOVA OCR/); assert.match(html, /Gemini/); assert.match(html, /22,500건/); assert.match(html, /50명 규모 테스트 데이터/); assert.match(html, /10,280ms에서 229ms/); assert.match(html, /분석·측정 조건/); assert.match(html, /프로젝트 당시 요금과 예상 토큰 사용량/); assert.match(html, /type="range"/); }
    if (slug === "ai-workspace") { assert.match(html, /첫 버전의 범위 정리/); assert.match(html, /역할별 사용자 흐름과 시연 시나리오/); }
    if (slug === "ai-education") {
      assert.match(html, /동작 기준을 설명한 재구성 예시/);
      for (const copy of [/기관 예산과 개인 한도를 따로 적용/, /기존 대화 조회/, /새로운 AI 요청/, /관리자 관제 시나리오 5개/, /관리자 3개 역할/, /통합테스트/, /기획 산출물과 검토 범위입니다/]) assert.match(html, copy);
      assert.doesNotMatch(html, /서비스를 구축했습니다|docs\.google\.com|app\.notion\.com/);
    }
    if (slug === "ai-book-experience") { assert.match(html, /키오스크 2대/); assert.match(html, /결과와 추천 도서를 행사 전에 준비/); assert.match(html, /리허설/); assert.doesNotMatch(html, /강남구|360개|3,500|135명/); }
    if (slug === "coderun") assert.match(html, /핵심 기능 구현 · 교육 프로젝트/);
  });
}
test("the workplace cases link to each other and the new case has its own outputs", async () => {
  const expected = { "ai-education": "ai-workspace", "ai-workspace": "ai-book-experience", "ai-book-experience": "coderun", "coderun": "mog", mog: "ai-education" };
  for (const [slug, next] of Object.entries(expected)) {
    const response = await render(`/work/${slug}`);
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(html.split('class="next-case"')[1], new RegExp(`href="/work/${next}"`));
    assert.doesNotMatch(html, /2026\.11 기준|2026\.11 업데이트|atlassian\.net|drive\.google\.com|docs\.google\.com|sehyun\.lee@goorm\.io/);
    if (slug === "ai-book-experience") {
      assert.match(html, /주요 산출물/);
      assert.match(html, /키오스크 2대 운영 가이드/);
      assert.doesNotMatch(html, /6인 팀 프로젝트|6인 교육 프로젝트/);
    }
  }
});
test("unknown case returns 404 with useful recovery link", async () => {
  const response = await render("/work/unknown-case"); const html = await response.text();
  assert.ok(response.status === 404 || html.includes('name="robots" content="noindex"')); assert.match(html, /프로젝트로 돌아가기/);
});
test("resume bytes match the sanitized PDF revision", async () => {
  const bytes = await readFile(new URL("../public/leeseh-pm-resume.pdf", import.meta.url));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), "abee8f837552c40d52be0d554780c093ee8118469d11223b63600c2a0aedbb57");
  const namedBytes = await readFile(new URL("../public/이세현_PM_PO_이력서.pdf", import.meta.url));
  assert.deepEqual(namedBytes, bytes);
});
test("Korean typeface is self-hosted with its OFL license", async () => {
  const bytes = await readFile(new URL("../public/fonts/PretendardVariable.woff2", import.meta.url));
  assert.equal(bytes.subarray(0, 4).toString(), "wOF2");
  assert.equal(createHash("sha256").update(bytes).digest("hex"), "9599f12fd42fc0bce1cd50b47a0c022e108d7aa64dd0d1bb0ed44f3282d900b4");
  const license = await readFile(new URL("../public/fonts/OFL-Pretendard.txt", import.meta.url), "utf8");
  assert.match(license, /SIL OPEN FONT LICENSE/i);
  const css = await readFile(new URL("../app/toss.css", import.meta.url), "utf8");
  assert.match(css, /font-family: "Pretendard Variable"/);
});
for (const variant of ['a','b']) {
 test(`design ${variant} home and case render private comparison content`, async () => {
  for(const suffix of ['', '/case']) {
   const response = await render(`/design/${variant}${suffix}`);
   assert.equal(response.status, 200);
   const html=await response.text();
   assert.match(html,new RegExp(`theme-${variant}`));
   assert.match(html,/noindex/);
   assert.match(html,/기획/);
   assert.match(html,/AI 학습 서비스 운영 정책 설계/);
   assert.doesNotMatch(html,/답변 평가하기|평가 선택|의견 입력·제출/);
   assert.match(html,/동작 기준을 설명한 재구성 예시/);
   if (!suffix) {
     assert.match(html,/CodeRun[^<]*<!-- --> · <!-- -->6인 교육 프로젝트/);
     assert.match(html,/MOG[^<]*<!-- --> · <!-- -->6인 팀 프로젝트/);
     assert.doesNotMatch(html,/MOG[^<]*<!-- --> · <!-- -->6인 교육 프로젝트/);
     assert.match(html,/역할별 시연 준비/);
   }
  }
 });
}

test("project classifications match the final resume", async () => {
  const source = await readFile(new URL("../app/portfolio.ts", import.meta.url), "utf8");
  const projects = JSON.parse(source.split("export const cases: CaseStudy[] = ")[1].trim().replace(/;$/, ""));
  assert.equal(projects.find(p => p.slug === "mog").type, "팀 프로젝트 · 팀 리드");
  assert.equal(projects.find(p => p.slug === "coderun").type, "교육 프로젝트 · 팀 리드");
  assert.doesNotMatch(source, /보관 기관|명세서와와/);
});

test("public pages do not reveal internal AI workspace behavior", async () => {
  for (const route of ["/", "/work/ai-workspace", "/design/a", "/design/b"]) {
    const response = await render(route);
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const excluded of [/인수인계/, /기존 AI 대화/, /작업 지침/, /자기 세션/, /자신의 세션/, /Git과 내부 설정/, /이전 맥락/, /차감되는 크레딧/]) assert.doesNotMatch(html, excluded, route);
  }
});
