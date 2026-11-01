# 이세현 PO·PM 포트폴리오

요구사항 해석, 범위 판단, 협업과 검증 과정을 설명하는 한국어 포트폴리오입니다. 이력서 경력 목록을 반복하기보다 각 사례의 문제와 제약, 선택한 이유, 확인한 결과를 정리했습니다.

## 구성

- `/` 프로젝트 소개, 일하는 방식, 경력 배경과 연락처
- `/work/ai-education` AI 교육 서비스의 사용자 흐름·관리자 정보 우선순위 기획
- `/work/ai-workspace` 기존 AI 업무 도구의 화면 단위 IA·MVP 범위 판단
- `/work/coderun` 제한된 일정에서의 범위 조정과 API 기반 협업
- `/work/mog` 사용량 가정에 따른 비용 비교와 테스트 조건 내 성능 검증
- `/leeseh-pm-resume.pdf` 2026.11.01 최신 이력서

CodeRun·MOG 카드는 기존 프로젝트의 실제 서비스 구성도를 표시합니다. 상세 페이지의 의사결정 표는 설명용이며, 회사 내부 화면·원문 요구사항·내부 문서 링크는 포함하지 않습니다. 비용은 당시 가정, 성능은 명시된 테스트 조건의 결과입니다.

## 디자인

현재 화면은 토스 디자인 시스템의 정보 위계를 참고해 직접 작성한 둥근 카드와 SUIT 글꼴을 사용합니다. 토스 UI Kit·브랜드 자산은 포함하지 않습니다. 이전 디자인 참고 기록은 [DESIGN.md](./DESIGN.md), [라이선스](./THIRD_PARTY_NOTICES.md)를 참고하세요.

## 로컬 실행과 검수

Node.js22.13 이상에서:

```bash
npm ci
npm run dev
# http://localhost:3000
npm run lint
npm run typecheck
npm test
```

`npm test`는 프로덕션 빌드 후 실제 Worker 응답 HTML을 검사합니다. 네 사례의 렌더링, 잘못된 경로의 복구, 오래된 문구 방지, 소셜 메타데이터와 최신 PDF 해시를 확인합니다. 브라우저 인터랙션 테스트와는 별개입니다.

## 수정 위치

- 사례: `app/portfolio.ts`
- 홈: `app/page.tsx`
- 사례 상세: `app/work/[slug]/page.tsx`
- 디자인 토큰·반응형: `app/globals.css`
- 도식·비용 비교: `app/components/`

## 배포

기존 Vinext·Cloudflare Worker·Sites 설정과 인증 코드는 보존했습니다. 운영 사이트는 https://portfolio-pm.leeseh0806.com 입니다. Jenkins 파이프라인은 저장소의 Jenkinsfile이 아니라 서버 UI에 설정되어 있습니다. 서버 설정과 웹훅을 임의 변경하지 않습니다. `npm run build` 자체는 운영 배포를 수행하지 않습니다.
