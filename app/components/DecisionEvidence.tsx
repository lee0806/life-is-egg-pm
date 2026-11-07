type Evidence = {
  title: string;
  columns: { label: string; title: string; detail: string }[];
  note: string;
};
const evidence: Record<string, Evidence> = {
  "ai-education": {
    title: "AI 채팅 실습의 사용자 흐름",
    columns: [
      { label: "대화", title: "새 대화와 이전 대화", detail: "질문 전송과 답변 생성 중 화면 동작을 시나리오로 작성했습니다." },
      { label: "확인", title: "답변 근거와 원문", detail: "출처 확인·원문 비교 흐름과 정보를 불러오지 못할 때의 안내를 정리했습니다." },
      { label: "활용", title: "대화 관리와 결과물 활용", detail: "검색·폴더·북마크와 복사·공유·다운로드 기능을 구체화했습니다." },
    ],
    note: "기능·정책 설계 · 개발·디자인 협의 반영",
  },
  "ai-workspace": {
    title: "인수인계 MVP의 사용자 흐름",
    columns: [
      { label: "배경", title: "기존 AI 대화 확인", detail: "앞선 판단과 작업 맥락을 파악할 수 있도록 기존 대화 공유를 기획했습니다." },
      { label: "기준", title: "작업 지침 공유", detail: "인수인계 때마다 설명하던 작업 기준을 팀원에게 전달하는 흐름을 구성했습니다." },
      { label: "시작", title: "자신의 세션에서 작업 시작", detail: "공유받은 팀원이 이전 맥락을 바탕으로 작업을 시작하도록 시나리오를 작성했습니다." },
    ],
    note: "인수인계 흐름을 중심으로 초기 MVP 기능 범위와 시나리오를 구성했습니다.",
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

  </figure>;
}
