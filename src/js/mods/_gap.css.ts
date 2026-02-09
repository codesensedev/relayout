import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_gap.scss

// .rl-gap-*
export const _gapCss = css`
    :host([rl-gap-0]) { gap: var(--rl-space-0); }
    :host([rl-gap-xs]) { gap: var(--rl-space-xs); }
    :host([rl-gap-s]) { gap: var(--rl-space-s); }
    :host([rl-gap-m]) { gap: var(--rl-space-m); }
    :host([rl-gap-l]) { gap: var(--rl-space-l); }
    :host([rl-gap-xl]) { gap: var(--rl-space-xl); }
    :host([rl-gap-2xl]) { gap: var(--rl-space-2xl); }
`;