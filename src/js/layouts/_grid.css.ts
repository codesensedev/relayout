import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_grid.scss

// .rl-grid
export const _gridCss = css`
    :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-s), 1fr));
        gap: var(--rl-gap-default);
    }

    /* fit */
    :host([rl-grid-fit-xs]) { grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-xs), 1fr)); }
    :host([rl-grid-fit-s]) { grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-s), 1fr)); }
    :host([rl-grid-fit-m]) { grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-m), 1fr)); }
    :host([rl-grid-fit-l]) { grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-l), 1fr)); }
    :host([rl-grid-fit-xl]) { grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-xl), 1fr)); }
    :host([rl-grid-fit-2xl]) { grid-template-columns: repeat(auto-fit, minmax(var(--rl-grid-2xl), 1fr)); }

    /* fill */
    :host([rl-grid-fill-xs]) { grid-template-columns: repeat(auto-fill, minmax(var(--rl-grid-xs), 1fr)); }
    :host([rl-grid-fill-s]) { grid-template-columns: repeat(auto-fill, minmax(var(--rl-grid-s), 1fr)); }
    :host([rl-grid-fill-m]) { grid-template-columns: repeat(auto-fill, minmax(var(--rl-grid-m), 1fr)); }
    :host([rl-grid-fill-l]) { grid-template-columns: repeat(auto-fill, minmax(var(--rl-grid-l), 1fr)); }
    :host([rl-grid-fill-xl]) { grid-template-columns: repeat(auto-fill, minmax(var(--rl-grid-xl), 1fr)); }
    :host([rl-grid-fill-2xl]) { grid-template-columns: repeat(auto-fill, minmax(var(--rl-grid-2xl), 1fr)); }
`;