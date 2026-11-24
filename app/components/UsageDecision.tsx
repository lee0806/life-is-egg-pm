export function UsageDecision({ compact = false }: { compact?: boolean }) {
  return <figure className={`usage-decision${compact ? " usage-decision-compact" : ""}`}>
    <figcaption>사용 한도 도달 후</figcaption>
    <dl>
      <div><dt>기존 대화 조회</dt><dd>유지</dd></div>
      <div><dt>새로운 AI 요청</dt><dd>제한</dd></div>
    </dl>
    <p>동작 기준을 설명한 재구성 예시</p>
  </figure>;
}
