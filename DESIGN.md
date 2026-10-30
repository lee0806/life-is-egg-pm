# Portfolio design system

Actual reference: [rukkiecodes/claude-apple-design-system](https://github.com/rukkiecodes/claude-apple-design-system), including SKILL.md and references/tokens.md, colors.md, components.md, screens.md and checklist.md. Read-only reference, no external installer executed. MIT attribution is preserved in THIRD_PARTY_NOTICES.md. Anthropic's frontend-design guidance was also read for editorial restraint; the Apple skill supplies the design tokens.

Applied rules: single interactive Action Blue #0066cc (#2997ff on dark), white / #f5f5f7 / #272729 surface rhythm, weight400/600/700, body17px, pill actions,1px hairlines,6/10/14/20px container radii,24px mobile gutters, no UI shadows or decorative gradients. Quiet180ms feedback, visible focus, reduced-motion support and progressive CSS squircle corners.

Apple native system typography is used when available. Korean fallbacks are Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic and OS sans-serif. No proprietary font files or external font requests. Muted text is darkened to #626266 for contrast on parchment; Korean body line-height is1.7.

Original explanatory diagrams replace product photography. They are explicitly not company screenshots. Case pages have a720px reading column and desktop table of contents. Native-app-specific haptics and sheets do not apply.

QA targets: home and all four detail routes at390/768/1440px, no horizontal overflow, Korean wrapping, keyboard focus, back/forward, PDF, cost slider0/22500/45000 and reduced motion. Server HTML tests do not replace browser QA. Do not claim unrun checks passed.
