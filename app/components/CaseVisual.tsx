export function CaseVisual({ slug, compact = false }: { slug: string; compact?: boolean }) {
  return (
    <div className={`case-visual visual-${slug}${compact ? " is-compact" : ""}`} aria-hidden="true">
      {slug === "ai-education" && (
        <div className="education-board">
          <div className="answer-sheet"><span className="sheet-caption">AI 답변</span><div className="text-line long" /><div className="text-line" /><div className="text-line short" /><div className="feedback-entry">출처 확인 <span>＋</span></div></div>
          <div className="flow-connector" />
          <div className="feedback-sheet"><span className="sheet-caption">대화와 결과물 활용</span><div className="choice-row"><span>대화 검색</span><span>북마크</span></div><div className="opinion-field">원문 비교</div><span className="mini-submit">결과물 내보내기</span></div>
          <p className="visual-note">대화 · 근거 확인 · 결과물 활용</p>
        </div>
      )}
      {slug === "ai-workspace" && (
        <div className="scope-board"><p className="board-heading">인수인계 MVP 흐름</p><div className="scope-row"><span className="scope-dot" /><strong>기존 AI 대화</strong><span>판단 배경 · 작업 맥락</span></div><div className="scope-row"><span className="scope-dot" /><strong>작업 지침</strong><span>팀원에게 기준 공유</span></div><div className="scope-row scope-muted"><span className="scope-dot" /><strong>작업 시작</strong><span>자신의 세션에서 시작</span></div><p className="visual-note">이전 대화와 지침을 바탕으로 작업 시작</p></div>
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
