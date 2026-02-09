import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_align.scss

// .rl-align-*
export const _alignCss = css`
    :host([rl-align-start]) { align-items: start; }
    :host([rl-align-center]) { align-items: center; }
    :host([rl-align-end]) { align-items: end; }
    :host([rl-align-stretch]) { align-items: stretch; }
`;