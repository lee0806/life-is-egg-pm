export function CaseVisual({ slug, compact = false }: { slug: string; compact?: boolean }) {
  return (
    <div className={`case-visual visual-${slug}${compact ? " is-compact" : ""}`} aria-hidden="true">
      {slug === "ai-education" && (
        <div className="education-board">
          <div className="answer-sheet"><span className="sheet-caption">AI 답변</span><div className="text-line long" /><div className="text-line" /><div className="text-line short" /><div className="feedback-entry">답변 평가하기 <span>＋</span></div></div>
          <div className="flow-connector" />
          <div className="feedback-sheet"><span className="sheet-caption">어떤 점이 도움이 되었나요?</span><div className="choice-row"><span>도움이 됐어요</span><span>아쉬워요</span></div><div className="opinion-field">의견 남기기</div><span className="mini-submit">평가 제출</span></div>
          <p className="visual-note">하나의 진입점 · 평가와 의견을 한 흐름으로</p>
        </div>
      )}
      {slug === "ai-workspace" && (
        <div className="scope-board"><p className="board-heading">처음 필요한 범위</p><div className="scope-row"><span className="scope-dot" /><strong>사용자 화면</strong><span>업무 요청 · 결과 확인</span></div><div className="scope-row"><span className="scope-dot" /><strong>기본 정책</strong><span>필요한 내부 동작 유지</span></div><div className="scope-row scope-muted"><span className="scope-dot" /><strong>추가 검토</strong><span>코드 의존 관계 · 제거 여부</span></div><p className="visual-note">화면에서 제외 ≠ 내부 기능 제거</p></div>
      )}
      {slug === "coderun" && (
        <div className="coderun-board"><div className="editor-top"><span>CodeRun</span><span>학습 흐름</span></div><div className="editor-body"><div className="code-lines"><span>public class Learning {'{'}</span><span>&nbsp; practice();</span><span>&nbsp; receiveFeedback();</span><span>{'}'}</span></div><div className="review-note"><span>라인별 피드백</span><div className="text-line" /><div className="text-line short" /></div></div><div className="learning-steps"><span>작성</span><i>›</i><span>실행</span><i>›</i><span>채점</span><i>›</i><span>피드백</span></div><p className="visual-note">먼저 완성할 한 번의 학습 경험</p></div>
      )}
      {slug === "mog" && (
        <div className="cost-board"><div className="cost-head"><span>당시 비용 비교</span><span>월 기준</span></div><div className="cost-number">22,500<span>건</span></div><p className="cost-label">고정비와 종량제가 같아지는 추정 사용량</p><div className="cost-rule"><span>월 18,000원</span><span>건당 약 0.8원</span></div><p className="visual-note">당시 가정에 따른 계산 · 실제 절감액 아님</p></div>
      )}
    </div>
  );
}
