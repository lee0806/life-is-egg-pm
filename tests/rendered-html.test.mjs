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
  assert.match(html, /제품의 흐름을 만듭니다/);
  assert.match(html, /leeseh-pm-resume\.pdf/);
  for (const slug of ["ai-education", "ai-workspace", "coderun", "mog"]) assert.match(html, new RegExp(`href="/work/${slug}"`));
  assert.match(html, /실제 내부 화면·자료가 아닙니다/);
  for (const unsupported of [/73개/, /485개/, /60~80/, /2026\.11\.10/, /AI-DNA/, /figma\.com/, /app\.notion\.com/]) assert.doesNotMatch(html, unsupported);
});
for (const slug of ["ai-education", "ai-workspace", "coderun", "mog"]) {
  test(`${slug} renders complete decision case study`, async () => {
    const response = await render(`/work/${slug}`); assert.equal(response.status, 200); const html = await response.text();
    assert.match(html, /property="og:image" content="https:\/\/portfolio-pm\.leeseh0806\.com\/og\.png"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    for (const heading of ["문제와 제약", "판단과 실행", "협업 방식", "확인한 결과", "검증의 범위", "다음에 확인할 질문"]) assert.ok(html.includes(heading));
    assert.match(html, /실제 서비스 화면이나 내부 자료가 아닙니다/);
    assert.doesNotMatch(html, /app\.notion\.com|figma\.com|73개|485개/);
    if (slug === "mog") { assert.match(html, /22,500건/); assert.match(html, /50명 규모 테스트 데이터/); assert.match(html, /10,280ms에서 229ms/); assert.match(html, /실제 운영비 절감 성과가 아닙니다/); assert.match(html, /type="range"/); }
    if (slug === "ai-education") assert.match(html, /2026\.08\.10 ~ 현재/);
  });
}
test("unknown case returns 404 with useful recovery link", async () => {
  const response = await render("/work/unknown-case"); const html = await response.text();
  assert.ok(response.status === 404 || html.includes('name="robots" content="noindex"')); assert.match(html, /프로젝트로 돌아가기/);
});
test("resume bytes match authoritative October 30 Library version 3", async () => {
  const bytes = await readFile(new URL("../public/leeseh-pm-resume.pdf", import.meta.url));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), "8453d5b1d22dbdd636cd85c8e3d12cb1cbf565db97ee80dbdfd766fd226a988b");
});
