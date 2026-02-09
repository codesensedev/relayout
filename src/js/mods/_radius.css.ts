import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_radius.scss

// .rl-radius-*
export const _radiusCss = css`
    :host([rl-radius-0]) { border-radius: var(--rl-space-0); }
    :host([rl-radius-xs]) { border-radius: var(--rl-space-xs); }
    :host([rl-radius-s]) { border-radius: var(--rl-space-s); }
    :host([rl-radius-m]) { border-radius: var(--rl-space-m); }
    :host([rl-radius-l]) { border-radius: var(--rl-space-l); }
    :host([rl-radius-xl]) { border-radius: var(--rl-space-xl); }
    :host([rl-radius-2xl]) { border-radius: var(--rl-space-2xl); }
`;