import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_shadow.scss

// .rl-shadow-*
export const _shadowCss = css`
    :host([rl-shadow-xs])    { box-shadow: var(--rl-shadow-xs); }
    :host([rl-shadow-s])     { box-shadow: var(--rl-shadow-s); }
    :host([rl-shadow-m])     { box-shadow: var(--rl-shadow-m); }
    :host([rl-shadow-l])     { box-shadow: var(--rl-shadow-l); }
    :host([rl-shadow-xl])    { box-shadow: var(--rl-shadow-xl); }
    :host([rl-shadow-none])  { box-shadow: none; }
    :host([rl-shadow-inner]) { box-shadow: var(--rl-shadow-inner); }
`;
