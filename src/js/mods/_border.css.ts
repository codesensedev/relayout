import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_border.scss

// .rl-border
export const _borderCss = css`
    :host([rl-border]) {
        border: var(--rl-border-default);
        border-radius: var(--rl-radius-default);
    }
`;