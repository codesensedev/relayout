import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_width.scss

// .rl-width-*
export const _widthCss = css`
    :host([rl-width-xs]) { max-width: var(--rl-width-xs); margin: 0 auto; }
    :host([rl-width-s]) { max-width: var(--rl-width-s); margin: 0 auto; }
    :host([rl-width-m]) { max-width: var(--rl-width-m); margin: 0 auto; }
    :host([rl-width-l]) { max-width: var(--rl-width-l); margin: 0 auto; }
    :host([rl-width-xl]) { max-width: var(--rl-width-xl); margin: 0 auto; }
    :host([rl-width-2xl]) { max-width: var(--rl-width-2xl); margin: 0 auto; }
`;