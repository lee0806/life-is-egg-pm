import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
const { default: worker } = await import("../dist/server/index.js");
async function render(path = "/") {
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html", host: "localhost" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}
test("home renders current PO portfolio and four case links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /이세현 \| Product Owner/);
  assert.match(html, /property="og:image" content="https:\/\/portfolio-pm\.leeseh0806\.com\/og\.png"/);
  assert.match(html, /PO 이세현입니다/);
  assert.match(html, /leeseh-pm-resume\.pdf/);
  assert.match(html, /toss-portfolio/);
  assert.match(html, /기능의 필요성과 우선순위를 판단/); assert.doesNotMatch(html, /구름 PO 인턴 이세현입니다/); assert.doesNotMatch(html, /tp-chips/);
  assert.match(html, /50명 테스트 데이터 기준/);
  assert.doesNotMatch(html, /운영 지표 아님|tp-disclosure|tp-artifact-note/);
  assert.match(html, /요구사항/);
  assert.match(html, /AI 채팅 실습 기획/);
  assert.doesNotMatch(html, /답변 평가 정책과 기록 조회 기능/);
  assert.match(html, /AX 사업 MVP 기획/); assert.match(html, /MVP 기능 범위와 화면 구성을 정의/); assert.doesNotMatch(html, /MVP에 남길 화면|뒤로 미룰 기능 정하기/);
  assert.doesNotMatch(html, /class="tp-artifact tp-visual-/);
  assert.match(html, /coderun-architecture\.png/);
  assert.match(html, /mog-architecture\.png/);
  assert.match(html, /서비스 구성도/);
  assert.doesNotMatch(html, /public class Learning|practice\(\)|같은 화면을 보고/);
  for (const slug of ["ai-education", "ai-workspace", "coderun", "mog"]) assert.match(html, new RegExp(`href="/work/${slug}"`));

  for (const unsupported of [/73개/, /485개/, /60~80/, /2026\.11\.10/, /AI-DNA/, /figma\.com/, /app\.notion\.com/]) assert.doesNotMatch(html, unsupported);
});
for (const slug of ["ai-education", "ai-workspace", "coderun", "mog"]) {
  test(`${slug} renders complete decision case study`, async () => {
    const response = await render(`/work/${slug}`); assert.equal(response.status, 200); const html = await response.text();
    assert.match(html, /property="og:image" content="https:\/\/portfolio-pm\.leeseh0806\.com\/og\.png"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    for (const section of ["context", "decisions", "collaboration", "outcome"]) assert.ok(html.includes(`id="${section}"`));

    assert.doesNotMatch(html, /app\.notion\.com|figma\.com|73개|485개/);
    assert.doesNotMatch(html, /검증 범위와 다음 확인 사항|최종 구현과 정책 승인|후속 검증에서는/);
    if (slug === "mog") { assert.match(html, /22,500건/); assert.match(html, /50명 규모 테스트 데이터/); assert.match(html, /10,280ms에서 229ms/); assert.match(html, /분석·측정 조건/); assert.match(html, /프로젝트 당시 요금과 예상 토큰 사용량/); assert.match(html, /type="range"/); }
    if (slug === "ai-workspace") { assert.match(html, /서비스 동작에 따른 시나리오 변경/); assert.match(html, /입력 예시와 결과 확인 항목 설계/); assert.doesNotMatch(html, /실제 시연 결과나 출시 이후 성과는 포함하지 않았습니다/); assert.doesNotMatch(html, /기획 명세와 서비스 동작 대조|MVP 범위 합의 및 기획 문서화/); }
    if (slug === "ai-education") {
      for (const copy of [/AI 채팅 실습 기획/, /대화 시작과 이어가기 흐름 설계/, /답변 근거·출처 확인 기능 기획/, /대화 검색·폴더·북마크 기능 설계/, /원문 비교와 결과물 활용 흐름 설계/, /파일 미리보기·다운로드 정책 협의/, /이용 리포트·운영 대시보드 상세 기획/, /상세 기획 작성 · 리뷰 진행/, /2026\.08\.10 ~ 현재/]) assert.match(html, copy);
      assert.doesNotMatch(html, /답변 평가와 관리자 기록 기능|저장된 평가와 제출된 의견 이력|docs\.google\.com|app\.notion\.com/);
    }
  });
}
test("unknown case returns 404 with useful recovery link", async () => {
  const response = await render("/work/unknown-case"); const html = await response.text();
  assert.ok(response.status === 404 || html.includes('name="robots" content="noindex"')); assert.match(html, /프로젝트로 돌아가기/);
});
test("resume bytes match validated November 3 revision", async () => {
  const bytes = await readFile(new URL("../public/leeseh-pm-resume.pdf", import.meta.url));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), "e7127e3ad477c9b19faec597f580ad748247373932a2242a1eddbfcf85ca138e");
});
test("Korean typeface is self-hosted with its OFL license", async () => {
  const bytes = await readFile(new URL("../public/fonts/SUIT-Variable.woff2", import.meta.url));
  assert.equal(bytes.subarray(0, 4).toString(), "wOF2");
  assert.equal(createHash("sha256").update(bytes).digest("hex"), "aa894a204d5a6fbae259dac6868d350cbd373a390caee0313f92946af741df23");
  const license = await readFile(new URL("../public/fonts/OFL-SUIT.txt", import.meta.url), "utf8");
  assert.match(license, /SIL OPEN FONT LICENSE/i);
  const css = await readFile(new URL("../app/toss.css", import.meta.url), "utf8");
  assert.match(css, /font-family: "SUIT Variable"/);
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
   assert.match(html,/AI 채팅 실습 기획/);
   assert.doesNotMatch(html,/답변 평가하기|평가 선택|의견 입력·제출/);
   assert.match(html,/실제.*화면.*아님|실제.*화면이 아닙니다/);
  }
 });
}
