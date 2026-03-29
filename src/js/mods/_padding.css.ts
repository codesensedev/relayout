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

    :host([rl-padding-x-0]) { padding-inline: var(--rl-space-0); }
    :host([rl-padding-x-xs]) { padding-inline: var(--rl-space-xs); }
    :host([rl-padding-x-s]) { padding-inline: var(--rl-space-s); }
    :host([rl-padding-x-m]) { padding-inline: var(--rl-space-m); }
    :host([rl-padding-x-l]) { padding-inline: var(--rl-space-l); }
    :host([rl-padding-x-xl]) { padding-inline: var(--rl-space-xl); }
    :host([rl-padding-x-2xl]) { padding-inline: var(--rl-space-2xl); }

    :host([rl-padding-y-0]) { padding-block: var(--rl-space-0); }
    :host([rl-padding-y-xs]) { padding-block: var(--rl-space-xs); }
    :host([rl-padding-y-s]) { padding-block: var(--rl-space-s); }
    :host([rl-padding-y-m]) { padding-block: var(--rl-space-m); }
    :host([rl-padding-y-l]) { padding-block: var(--rl-space-l); }
    :host([rl-padding-y-xl]) { padding-block: var(--rl-space-xl); }
    :host([rl-padding-y-2xl]) { padding-block: var(--rl-space-2xl); }
`;