import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_typography.scss

export const _typographyCss = css`
    :host([rl-font-sans])      { font-family: var(--rl-font-sans); }
    :host([rl-font-serif])     { font-family: var(--rl-font-serif); }
    :host([rl-font-mono])      { font-family: var(--rl-font-mono); }
    :host([rl-font-sans-alt])  { font-family: var(--rl-font-sans-alt); }
    :host([rl-font-serif-alt]) { font-family: var(--rl-font-serif-alt); }
    :host([rl-font-mono-alt])  { font-family: var(--rl-font-mono-alt); }

    :host([rl-font-bold])    { font-weight: 700; }
    :host([rl-font-medium])  { font-weight: 500; }
    :host([rl-font-regular]) { font-weight: 400; }

    :host([rl-text-xs])  { font-size: var(--rl-text-xs); }
    :host([rl-text-s])   { font-size: var(--rl-text-s); }
    :host([rl-text-m])   { font-size: var(--rl-text-m); }
    :host([rl-text-l])   { font-size: var(--rl-text-l); }
    :host([rl-text-xl])  { font-size: var(--rl-text-xl); }
    :host([rl-text-2xl]) { font-size: var(--rl-text-2xl); }

    :host([rl-text-italic])    { font-style: italic; }
    :host([rl-text-underline]) { text-decoration: underline; }
    :host([rl-text-strike])    { text-decoration: line-through; }
    :host([rl-text-muted])     { opacity: 0.5; }

    :host([rl-text-left])   { text-align: left; }
    :host([rl-text-center]) { text-align: center; }
    :host([rl-text-right])  { text-align: right; }

    :host([rl-text-uppercase])  { text-transform: uppercase; }
    :host([rl-text-lowercase])  { text-transform: lowercase; }
    :host([rl-text-capitalize]) { text-transform: capitalize; }

    :host([rl-textline-tight])  { line-height: 1.25; }
    :host([rl-textline-normal]) { line-height: 1.5; }
    :host([rl-textline-loose])  { line-height: 2; }

    :host([rl-text-wrap])   { white-space: normal; }
    :host([rl-text-nowrap]) { white-space: nowrap; }

    :host([rl-truncate]) {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
