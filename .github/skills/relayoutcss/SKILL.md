You are an expert in the **Relayout CSS framework** (`@codesense/relayout`). When the user asks you to build layouts or UI with Relayout, apply the following knowledge precisely.

---

## Core Concept

Relayout is a utility-first CSS layout system. All classes use the `rl-` prefix. Layouts are composable: apply a layout class to a container, then add modifier classes for spacing, alignment, sizing, and appearance.

**Box-sizing**: All `rl-*` elements automatically get `box-sizing: border-box`.

---

## Layout Components

### Stack — `rl-stack`
Vertical flex column. Items stretch to fill width by default.
- Use for: forms, document flow, consistent vertical spacing.
- Default: `align-items: stretch`, `justify-content: start`

```html
<div class="rl-stack rl-gap-m">
  <div>Item one</div>
  <div>Item two</div>
</div>
```

### Cluster — `rl-cluster`
Horizontal wrapping flex row. Items flow left-to-right, wrapping when needed.
- Use for: tags, badges, button groups, navigation, chips.
- Default: `align-items: center`, `justify-content: start`, `flex-wrap: wrap`

```html
<div class="rl-cluster rl-gap-s">
  <div>Tag A</div>
  <div>Tag B</div>
  <div>Tag C</div>
</div>
```

### Split — `rl-split`
Horizontal flex row with `justify-content: space-between`. Pushes children to opposite ends.
- Use for: navbar, card headers, toolbars.
- Variant: `rl-split-equal` — all children get `flex: 1 1 0` (equal width).

```html
<div class="rl-split">
  <span>Left</span>
  <span>Right</span>
</div>
```

### Flank — `rl-flank`
One growing item flanked by fixed items. Last child grows by default.
- `rl-flank` — last child grows (`flex: 1 1 0`)
- `rl-flank-end` — first child grows

```html
<div class="rl-flank">
  <div>Fixed sidebar</div>
  <div>Growing main content</div>
</div>
```

### Grid — `rl-grid`
CSS Grid with `auto-fit` columns. Columns auto-size based on minimum width.

**Auto-fit** (collapses empty columns): `rl-grid-fit-{size}`
**Auto-fill** (preserves empty columns): `rl-grid-fill-{size}`

Sizes: `xs` (50px), `s` (100px), `m` (150px), `l` (200px), `xl` (250px), `2xl` (320px)

Default `rl-grid` = `rl-grid-fit-s` (100px min columns).

```html
<div class="rl-grid-fit-m rl-gap-m">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Frame — `rl-frame`
Centers content with scroll handling. Caps content to parent size. Images inside use `object-fit: contain`.
- Use for: image containers, scrollable content areas.

```html
<div class="rl-frame">
  <img src="photo.jpg" alt="Photo" />
</div>
```

### Divider — `rl-divider`
Visual separator. Place as sibling element inside a layout container.
- Default: horizontal line.
- `.vertical` modifier: vertical line (use inside `rl-cluster` or `rl-split`).

```html
<div class="rl-stack rl-gap-m">
  <div>Item one</div>
  <div class="rl-divider"></div>
  <div>Item two</div>
</div>
```

---

## Modifier Classes

All modifiers can be combined freely with any layout component.

### Gap — `rl-gap-{size}`
Space between children. Sizes: `0`, `xs`, `s`, `m`, `l`, `xl`, `2xl`
```html
<div class="rl-stack rl-gap-l">...</div>
```

### Padding — `rl-padding-{size}`
Inner padding around container. Sizes: `0`, `xs`, `s`, `m`, `l`, `xl`, `2xl`
```html
<div class="rl-cluster rl-padding-m">...</div>
```

### Align — `rl-align-{value}`
Cross-axis alignment. Values: `start`, `center`, `end`, `stretch`
- Stack: aligns items **horizontally**
- Cluster/Split/Grid: aligns items **vertically**

### Justify — `rl-justify-{value}`
Main-axis alignment. Values: `start`, `center`, `end`
- Stack: positions items **vertically** (only visible when container taller than content)
- Cluster/Split: positions items **horizontally**

### Width — `rl-width-{size}`
Max-width constraint + `margin: 0 auto` centering. Sizes: `xs` (320px), `s` (480px), `m` (640px), `l` (768px), `xl` (1024px), `2xl` (1280px)
```html
<div class="rl-stack rl-width-m">...</div>
```

### Height
- `rl-height-full` — `height: 100%` with vertical scroll
- `rl-height-fill` — `flex: 1 1 0` to fill remaining space in a flex parent

### Border — `rl-border`
Applies default border: `solid 1px hsl(0, 0%, 50%)`. Override with `--rl-border-default`.

### Radius — `rl-radius-{size}`
Border radius. Sizes: `0`, `xs`, `s`, `m`, `l`, `xl`, `2xl`
```html
<div class="rl-cluster rl-border rl-radius-m rl-padding-m">...</div>
```

### Wrapping
- `rl-nowrap` — prevent wrapping (`overflow: hidden`)
- `rl-nowrap-scroll` — prevent wrapping with horizontal scroll (smooth on iOS)
- `rl-wrap-reverse` — reverse wrap direction

### Typography

**Font family**: `rl-font-{family}`
Values: `sans`, `serif`, `mono`, `sans-alt`, `serif-alt`, `mono-alt`

**Font weight**: `rl-font-bold` (700), `rl-font-medium` (500), `rl-font-regular` (400)

**Text size**: `rl-text-{size}`
Sizes: `xs` (10px), `s` (12px), `m` (14px), `l` (16px), `xl` (24px), `2xl` (36px)

**Text decoration / style**: `rl-text-italic`, `rl-text-underline`, `rl-text-strike`, `rl-text-muted` (opacity 0.5)

**Text alignment**: `rl-text-left`, `rl-text-center`, `rl-text-right`

**Text transform**: `rl-text-uppercase`, `rl-text-lowercase`, `rl-text-capitalize`

**Line height**: `rl-textline-tight` (1.25), `rl-textline-normal` (1.5), `rl-textline-loose` (2)

**Text wrap**: `rl-text-wrap`, `rl-text-nowrap`

**Truncate**: `rl-text-truncate` — single-line overflow ellipsis

```html
<p class="rl-text-l rl-font-bold rl-text-center">Heading</p>
<p class="rl-text-s rl-font-mono rl-text-truncate">Long overflowing text...</p>
```

---

## CSS Custom Properties (Design Tokens)

Override these on `:root` or any ancestor to customize defaults.

```css
:root {
  --rl-gap-default: var(--rl-space-0);      /* default gap */
  --rl-padding-default: var(--rl-space-0);  /* default padding */
  --rl-radius-default: var(--rl-space-0);   /* default radius */
  --rl-border-default: solid 1px hsl(0, 0%, 50%);
}
```

**Space scale**: `--rl-space-0` (0), `--rl-space-xs` (2px), `--rl-space-s` (4px), `--rl-space-m` (8px), `--rl-space-l` (16px), `--rl-space-xl` (24px), `--rl-space-2xl` (36px)

**Text scale**: `--rl-text-xs` (10px), `--rl-text-s` (12px), `--rl-text-m` (14px), `--rl-text-l` (16px), `--rl-text-xl` (24px), `--rl-text-2xl` (36px)

**Font families**: `--rl-font-sans`, `--rl-font-serif`, `--rl-font-mono`, `--rl-font-sans-alt`, `--rl-font-serif-alt`, `--rl-font-mono-alt`

---

## Common Patterns

**Card**
```html
<div class="rl-stack rl-border rl-radius-m rl-padding-m rl-gap-m">
  <div class="rl-split">
    <strong>Title</strong>
    <span>Action</span>
  </div>
  <div class="rl-divider"></div>
  <p>Card body content.</p>
</div>
```

**Navigation bar**
```html
<div class="rl-split rl-padding-m">
  <div class="rl-cluster rl-gap-m">
    <strong>Logo</strong>
  </div>
  <div class="rl-cluster rl-gap-m">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</div>
```

**Responsive card grid**
```html
<div class="rl-grid-fit-m rl-gap-m">
  <div class="rl-stack rl-border rl-radius-m rl-padding-m rl-gap-s">
    <strong>Card title</strong>
    <p>Description text here.</p>
  </div>
  <!-- more cards -->
</div>
```

**Sidebar layout**
```html
<div class="rl-flank rl-height-fill">
  <div class="rl-stack rl-width-xs rl-padding-m rl-gap-s rl-border">
    <a href="#">Nav item 1</a>
    <a href="#">Nav item 2</a>
  </div>
  <div class="rl-stack rl-height-fill rl-padding-m rl-gap-m">
    <h1>Main content</h1>
  </div>
</div>
```

**Tag list**
```html
<div class="rl-cluster rl-gap-xs">
  <span class="rl-border rl-radius-xl rl-padding-xs">React</span>
  <span class="rl-border rl-radius-xl rl-padding-xs">TypeScript</span>
  <span class="rl-border rl-radius-xl rl-padding-xs">CSS</span>
</div>
```

---

## Rules

1. Always use `rl-` prefixed classes — never write custom CSS when Relayout classes suffice.
2. Apply layout classes to **containers**, not to individual items (except `rl-height-fill` which goes on children that should grow).
3. Combine freely: `<div class="rl-stack rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-l">` is valid.
4. For max-width page wrappers, use `rl-width-*` on the outermost container.
5. Prefer `rl-gap-*` over margins between children — it's the intended spacing mechanism.
6. Use `rl-divider` as an empty element sibling, not as a layout element itself.
