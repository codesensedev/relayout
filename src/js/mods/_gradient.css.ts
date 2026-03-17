import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_gradient.scss

// .rl-gradient-*
export const _gradientCss = css`
    :host([rl-gradient-primary]) { background-image: var(--rl-gradient-primary); }
    :host([rl-gradient-accent])  { background-image: var(--rl-gradient-accent); }
    :host([rl-gradient-subtle])  { background-image: var(--rl-gradient-subtle); }
    :host([rl-gradient-warm])    { background-image: var(--rl-gradient-warm); }
    :host([rl-gradient-cool])    { background-image: var(--rl-gradient-cool); }
`;
