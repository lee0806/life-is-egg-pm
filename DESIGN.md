# Portfolio design system

Actual reference: [rukkiecodes/claude-apple-design-system](https://github.com/rukkiecodes/claude-apple-design-system), including SKILL.md and references/tokens.md, colors.md, components.md, screens.md and checklist.md. Read-only reference, no external installer executed. MIT attribution is preserved in THIRD_PARTY_NOTICES.md. Anthropic's frontend-design guidance was also read for editorial restraint; the Apple skill supplies the design tokens.

Applied rules: single interactive Action Blue #0066cc (#2997ff on dark), white / #f5f5f7 / #272729 surface rhythm, weight400/600/700, body17px, pill actions,1px hairlines,6/10/14/20px container radii,24px mobile gutters, no UI shadows or decorative gradients. Quiet180ms feedback, visible focus, reduced-motion support and progressive CSS squircle corners.

Apple native system typography is used when available. Korean fallbacks are Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic and OS sans-serif. No proprietary font files or external font requests. Muted text is darkened to #626266 for contrast on parchment; Korean body line-height is1.7.

Original explanatory diagrams replace product photography. They are explicitly not company screenshots. Case pages have a720px reading column and desktop table of contents. Native-app-specific haptics and sheets do not apply.

QA targets: home and all four detail routes at390/768/1440px, no horizontal overflow, Korean wrapping, keyboard focus, back/forward, PDF, cost slider0/22500/45000 and reduced motion. Server HTML tests do not replace browser QA. Do not claim unrun checks passed.

## October 30 editorial refinement

Use self-hosted Pretendard Variable for consistent Korean typography (OFL 1.1).
Replace the generic centered positioning statement with name, role and current
scope. Two featured work records expose decisions, deliverables and project
stage; two compact team projects provide implementation evidence. Replace fake
code/mock UI imagery with accessible reconstructed decision records. These are
explanatory artifacts, not internal source documents or released screens.

Editorial references (structure studied, no site assets copied):
- https://www.adhamdannaway.com/portfolio/creating-a-lean-design-system — show decisions alongside concrete artifacts.
- https://brianlovin.com/ — restrained identity and work hierarchy.
- https://www.sebastien-gabriel.com/ — keep role and period close to project context.

Apple design skill remains the token and component-rule reference, not a claim
that copying Apple branding proves portfolio quality.

### Korean portfolio references prioritized in the final refinement

At the user's request, Apple is an optional visual reference, not a strict style
constraint. Korean service-planning portfolios are the primary editorial inputs:
- https://sieunrohroh.com/ — project scope, role, challenge, collaboration and deliverables are separated.
- https://decisive-anteater-141.notion.site/ — concise Korean role labels and explicit user/dealer/back-office scope.
- https://axion-portfolio-one.vercel.app/projects/detail/vazoom — actual browser inspection: left-aligned Korean layout; period, assigned work, tools and team context grouped near the case overview.

We apply the information hierarchy, not their project claims, screenshots,
contribution percentages, branding or assets. Our private work uses explanatory
reconstructions because internal screens are not for publication.

## October 30 — concise rounded portfolio
The current main experience is rebuilt with original components, informed by the official Toss Design System typography hierarchy and consumer UX guidance. It is NOT an official TDS implementation. No restricted TDS kit, Toss Product Sans, brand logos, or proprietary illustration assets are included.
- References: https://tossmini-docs.toss.im/tds-mobile/foundation/typography/ , https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md , https://developers-apps-in-toss.toss.im/design/components.md
- Licensed self-hosted SUIT Variable; 24–32px custom rounded surfaces; concise home cards and detailed evidence on separate case pages.
- Original code-native diagrams labelled as explanatory reconstructions, not actual internal UI.
- Previous A/B routes retained as design history, not exposed in main navigation.

### Screenshot policy refinement
Project cards do not fabricate service UI or image-like diagrams. Where no verified actual public service screenshot is available, cards are text-only at natural height. Detailed decision tables and cost comparisons remain explanatory content, not screenshots. Employer internal screens are not requested or republished.
