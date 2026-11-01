"use client";
import { useId, useState } from "react";
export function CostExplorer() {
  const [count, setCount] = useState(10000);
  const id = useId();
  const variableCost = count * 0.8;
  const difference = Math.abs(18000 - variableCost);
  return <section className="cost-explorer" aria-labelledby={`${id}-title`}><div className="explorer-intro"><h3 id={`${id}-title`}>월 사용량별 예상 비용</h3><p>프로젝트 당시 요금으로 계산한 예시입니다. 월 인식량을 바꾸면 두 방식의 예상 비용을 비교할 수 있습니다.</p></div><label htmlFor={id}>월 예상 인식량 <strong>{count.toLocaleString("ko-KR")}건</strong></label><input id={id} type="range" min="0" max="45000" step="500" value={count} onChange={(event) => setCount(Number(event.target.value))} aria-valuetext={`월 ${count.toLocaleString("ko-KR")}건`} /><div className="range-labels"><span>0건</span><span>45,000건</span></div><div className="cost-results" aria-live="polite" aria-atomic="true"><div><span>당시 고정요금</span><strong>18,000원</strong></div><div><span>종량제 추정 · 건당 0.8원</span><strong>{variableCost.toLocaleString("ko-KR")}원</strong></div><p>{variableCost === 18000 ? "22,500건에서 두 비용이 같습니다." : `${variableCost < 18000 ? "종량제가" : "고정요금이"} 월 ${difference.toLocaleString("ko-KR")}원 적습니다.`}</p></div><details className="next-validation"><summary>비용 계산 기준</summary><p>정확도 차이와 실패·재시도 비용은 포함하지 않았습니다. 실제 비용은 적용 요금과 토큰 사용량에 따라 달라집니다.</p></details></section>;
}
