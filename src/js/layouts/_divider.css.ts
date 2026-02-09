import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_divider.scss

// .rl-divider
export const _dividerCss = css`
    :host {
        align-self: stretch;
        border: none;
        margin: 0;
        
        /* horizontal */
        width: 100%;
        height: 0;
        border-top: var(--rl-border-default);
    }

    :host([vertical]) {
        /* vertical */
        width: 0;
        height: 100%;
        border-top: none;
        border-left: var(--rl-border-default);
    }
`;