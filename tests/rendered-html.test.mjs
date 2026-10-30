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
  assert.match(html, /사용자·관리자 기능을 기획/);
  assert.match(html, /leeseh-pm-resume\.pdf/);
  assert.match(html, /toss-portfolio/);
  assert.match(html, /요구사항/);
  assert.match(html, /화면별 포함·제외 이유/);
  assert.doesNotMatch(html, /class="tp-artifact tp-visual-/);
  assert.doesNotMatch(html, /public class Learning|practice\(\)|같은 화면을 보고/);
  for (const slug of ["ai-education", "ai-workspace", "coderun", "mog"]) assert.match(html, new RegExp(`href="/work/${slug}"`));
  assert.match(html, /실제 내부 화면이나 문서는 포함하지 않았습니다/);
  for (const unsupported of [/73개/, /485개/, /60~80/, /2026\.11\.10/, /AI-DNA/, /figma\.com/, /app\.notion\.com/]) assert.doesNotMatch(html, unsupported);
});
for (const slug of ["ai-education", "ai-workspace", "coderun", "mog"]) {
  test(`${slug} renders complete decision case study`, async () => {
    const response = await render(`/work/${slug}`); assert.equal(response.status, 200); const html = await response.text();
    assert.match(html, /property="og:image" content="https:\/\/portfolio-pm\.leeseh0806\.com\/og\.png"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    for (const section of ["context", "decisions", "collaboration", "outcome"]) assert.ok(html.includes(`id="${section}"`));
    assert.match(html, /실제 내부 화면이나 문서는 포함하지 않았습니다/);
    assert.doesNotMatch(html, /app\.notion\.com|figma\.com|73개|485개/);
    if (slug === "mog") { assert.match(html, /22,500건/); assert.match(html, /50명 규모 테스트 데이터/); assert.match(html, /10,280ms에서 229ms/); assert.match(html, /운영비/); assert.match(html, /type="range"/); }
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
   assert.match(html,/실제.*화면.*아님|실제.*화면이 아닙니다/);
  }
 });
}
