type Evidence = {
  title: string;
  columns: { label: string; title: string; detail: string }[];
  note: string;
};
const evidence: Record<string, Evidence> = {
  "ai-education": {
    title: "대표 사례 · 답변 평가 요구사항을 화면으로",
    columns: [
      { label: "요구사항", title: "긍정 · 부정 · 의견", detail: "긍정·부정 평가와 의견 제출을 제공해야 했습니다." },
      { label: "화면 구성", title: "평가 버튼 하나로 진입", detail: "평가 화면을 연 뒤 평가를 선택하고 의견을 입력하도록 했습니다." },
      { label: "명세 작성", title: "화면별 동작·입력 조건", detail: "작성한 시나리오와 기능 명세를 요구사항과 대조했습니다." },
    ],
    note: "상세 기획·리뷰 단계이며 출시 후 사용 지표는 아직 없습니다.",
  },
  "ai-workspace": {
    title: "MVP 설정 항목을 검토한 방법",
    columns: [
      { label: "사용자 화면", title: "사용자가 조정할 설정", detail: "초기 버전에 필요한 화면을 남기고, 제외한 화면에는 이유를 적었습니다." },
      { label: "내부 동작", title: "필요한 내부 동작 유지", detail: "기본 정책으로 제공할 항목은 설정 UI에서 제외하되 내부 동작은 유지하도록 했습니다." },
      { label: "추가 검토", title: "관련 코드의 제거 여부", detail: "코드를 제거할지는 기능 간 의존 관계를 확인한 뒤 판단할 항목으로 남겼습니다." },
    ],
    note: "기존 제품 분석과 초기 MVP 기능 선별을 담당했습니다.",
  },
  coderun: {
    title: "팀과 합의한 개발 범위",
    columns: [
      { label: "먼저 구현", title: "작성 → 실행 → 채점 → 피드백", detail: "코드 작성·실행·채점과 강사의 라인별 피드백을 우선 구현했습니다." },
      { label: "범위 조정", title: "단일 파일 · 학습 자료 제외", detail: "멘토 피드백을 검토한 뒤 단일 파일 구조와 학습 자료 제외안을 팀에 제안했습니다." },
      { label: "프론트엔드 협업", title: "API 응답 형식 사전 합의", detail: "프론트엔드는 합의한 명세로 MSW 모의 응답을 만들어 화면 개발을 시작했습니다." },
    ],
    note: "6인 교육 프로젝트 · 2026.05.19–06.05 · 실제 학습 효과는 측정하지 않았습니다.",
  },
  mog: {
    title: "영수증 인식 비용과 조회 성능 비교",
    columns: [
      { label: "당시 고정요금", title: "18,000원 / 월", detail: "비교한 OCR 서비스의 월 고정요금입니다." },
      { label: "종량제 추정", title: "약 0.8원 / 건", detail: "예상 토큰 사용량으로 계산했습니다. 월 약 22,500건에서 고정요금과 같아집니다." },
      { label: "조회 성능 테스트", title: "쿼리 51개 → 1개", detail: "50명 규모 데이터에서 연관 데이터 조회 10,280ms → 229ms를 확인했습니다." },
    ],
    note: "비용은 당시 요금으로 계산한 추정값입니다. 성능은 테스트 데이터의 연관 데이터 조회 결과입니다.",
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
