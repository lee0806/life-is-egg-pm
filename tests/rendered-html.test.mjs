import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html", host: "localhost" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the PM portfolio and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /이세현 \| Product Manager/);
  assert.match(html, /팀의 실행을 연결합니다/);
  assert.match(html, /leeseh-pm-resume\.pdf/);
  assert.match(html, /한 달 안에 완성할 핵심 범위 결정/);
  assert.match(html, /약 60~80개의 Linear 티켓/);
  assert.match(html, /손익분기점이 약 22,500건/);
  assert.match(html, /쿼리를 51개에서 1개로/);
  assert.match(html, /초기 렌더링 시간을 2,300ms에서 340ms/);
  assert.match(html, /mAP@0\.5를 58\.8%에서 92%로/);
  assert.match(html, /문제·제약/);
  assert.match(html, /판단과 실행/);
  assert.match(html, /한계와 다음 검증/);
  assert.match(html, /실제 사용자 성과를 구분/);
  assert.match(html, /SQLD/);
  assert.match(html, /coderun-architecture\.png/);
  assert.match(html, /mog-architecture\.png/);
  assert.match(html, /helios-data-architecture\.png/);
  assert.doesNotMatch(html, /Fullstack Developer/);
  assert.doesNotMatch(html, /기여도/);
  assert.doesNotMatch(html, /figma\.com/);
  assert.doesNotMatch(html, /GPT-5/);
});
