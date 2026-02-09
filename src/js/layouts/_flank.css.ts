import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_flank.scss

// .rl-flank
export const _flankCss = css`
    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--rl-gap-default);
    }

    ::slotted(:last-child) {
        flex-basis: 0;
        flex-grow: 999;
    }

    :host([rl-flank-end]) ::slotted(:first-child) {
        flex-basis: 0;
        flex-grow: 999;
    }

    :host([rl-flank-end]) ::slotted(:last-child) {
        flex-basis: auto;
        flex-grow: 0;
    }
`;