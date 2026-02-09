import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_padding.scss

// .rl-padding-*
export const _paddingCss = css`
    :host([rl-padding-0]) { padding: var(--rl-space-0); }
    :host([rl-padding-xs]) { padding: var(--rl-space-xs); }
    :host([rl-padding-s]) { padding: var(--rl-space-s); }
    :host([rl-padding-m]) { padding: var(--rl-space-m); }
    :host([rl-padding-l]) { padding: var(--rl-space-l); }
    :host([rl-padding-xl]) { padding: var(--rl-space-xl); }
    :host([rl-padding-2xl]) { padding: var(--rl-space-2xl); }
`;