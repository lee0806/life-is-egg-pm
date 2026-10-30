"use client";
import { useId, useState } from "react";
export function CostExplorer() {
  const [count, setCount] = useState(10000);
  const id = useId();
  const variableCost = count * 0.8;
  const difference = Math.abs(18000 - variableCost);
  return <section className="cost-explorer" aria-labelledby={`${id}-title`}><div className="explorer-intro"><h3 id={`${id}-title`}>사용량이 달라지면 선택도 달라집니다</h3><p>당시 계산에 사용한 가정으로 비교해 보세요. 현재 요금이나 실제 운영 지출을 나타내지 않습니다.</p></div><label htmlFor={id}>월 예상 인식량 <strong>{count.toLocaleString("ko-KR")}건</strong></label><input id={id} type="range" min="0" max="45000" step="500" value={count} onChange={(event) => setCount(Number(event.target.value))} aria-valuetext={`월 ${count.toLocaleString("ko-KR")}건`} /><div className="range-labels"><span>0건</span><span>45,000건</span></div><div className="cost-results" aria-live="polite" aria-atomic="true"><div><span>고정요금 가정</span><strong>18,000원</strong></div><div><span>종량제 가정 · 건당 0.8원</span><strong>{variableCost.toLocaleString("ko-KR")}원</strong></div><p>{variableCost === 18000 ? "22,500건에서 두 비용이 같습니다." : `${variableCost < 18000 ? "종량제가" : "고정요금이"} 월 ${difference.toLocaleString("ko-KR")}원 적습니다.`}</p></div><p className="small-note">인식 정확도, 실패·재시도 비용 등은 이 단순 비교에 포함하지 않았습니다. 요금과 토큰 사용량이 달라지면 비교 기준도 바뀝니다.</p></section>;
}
