type Evidence = {
  title: string;
  columns: { label: string; title: string; detail: string }[];
  note: string;
};
const evidence: Record<string, Evidence> = {
  "ai-education": {
    title: "평가 버튼 수보다, 필요한 행동이 빠지지 않는가",
    columns: [
      { label: "유지할 요구", title: "긍정 · 부정 · 의견", detail: "답변에 대한 평가와 자유 의견을 모두 제출할 수 있어야 합니다." },
      { label: "제안한 구조", title: "하나의 평가 진입점", detail: "평가 화면 안에서 유형을 선택하고 의견을 남기는 흐름으로 구성했습니다." },
      { label: "검토 기준", title: "행동 → 화면 → 명세", detail: "진입점을 합쳐도 요구한 행동이 빠지지 않는지 원문과 대조했습니다." },
    ],
    note: "상세 기획 작성·리뷰 단계 · 출시 후 사용성 성과는 미측정",
  },
  "ai-workspace": {
    title: "화면에서 빼는 것과, 제품에서 없애는 것은 다르다",
    columns: [
      { label: "사용자 화면", title: "직접 조작할 설정 선별", detail: "초기 업무 흐름에 필요한 화면을 남기고, 후순위 화면의 제외 이유를 정리했습니다." },
      { label: "내부 동작", title: "필요한 기본 기능 유지", detail: "설정 UI를 제외하더라도 내부에서 필요한 동작은 유지하는 방향으로 정리했습니다." },
      { label: "별도 확인", title: "코드 제거는 의존성 검토", detail: "UI 제외를 코드 삭제로 확대하지 않고, 기술 검토가 필요한 항목으로 남겼습니다." },
    ],
    note: "초기 MVP 범위 선별 완료 · 출시 및 운영 결과와 구분",
  },
  coderun: {
    title: "일정 안에 끝낼 한 번의 학습 흐름",
    columns: [
      { label: "먼저 구현", title: "작성 → 실행 → 채점 → 피드백", detail: "코드 작성부터 강사의 라인별 피드백까지 연결하는 흐름을 우선했습니다." },
      { label: "범위 조정", title: "단일 파일 · 학습 자료 제외", detail: "멘토 피드백을 바탕으로 조정안을 제안하고 팀 회의에서 합의했습니다." },
      { label: "병렬 작업", title: "API 명세 → MSW → 연동", detail: "응답 구조를 먼저 맞춰 실제 API 완성 전에도 화면 개발을 시작했습니다." },
    ],
    note: "6인 교육 프로젝트 · 2026.05.19–06.05 · 실제 학습 효과는 미검증",
  },
  mog: {
    title: "비용 선택과 성능 변경에 각각 다른 근거를 남기다",
    columns: [
      { label: "고정비 가정", title: "18,000원 / 월", detail: "당시 고정요금 OCR을 비교 기준으로 삼았습니다." },
      { label: "종량제 추정", title: "약 0.8원 / 건", detail: "예상 토큰 사용량으로 계산하고, 월 22,500건을 비용 비교 기준으로 제시했습니다." },
      { label: "동일 조건 테스트", title: "쿼리 51개 → 1개", detail: "50명 규모 데이터에서 연관 데이터 조회 10,280ms → 229ms를 확인했습니다." },
    ],
    note: "비용은 당시 추정값, 성능은 테스트 결과 · 실제 운영비 절감액/운영 응답 시간 아님",
  },
};
export function DecisionEvidence({ slug }: { slug: string }) {
  const item = evidence[slug];
  if (!item) return null;
  return <figure className={`decision-evidence evidence-${slug}`}>
    <figcaption className="evidence-title">{item.title}</figcaption>
    <div className="evidence-columns">{item.columns.map(column => <div className="evidence-column" key={column.label}>
      <p className="evidence-label">{column.label}</p><h3>{column.title}</h3><p>{column.detail}</p>
    </div>)}</div>
    <p className="evidence-note">{item.note}</p>
  </figure>;
}
