import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_stack.scss

// .rl-stack
export const _stackCss = css`
    :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;
        gap: var(--rl-gap-default);
    }

    /* Stack specific text alignment */
    :host([rl-align-start]) { text-align: start; }
    :host([rl-align-center]) { text-align: center; }
    :host([rl-align-end]) { text-align: end; }
`;