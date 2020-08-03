# 📐 Responsive Typography

An easy, responsive, universal typographic scale for the web powered by CSS variables.

## Get Started

Install it using npm:

```
npm install responsive-typography
```

There are 3 different ways to consume this. Use what’s right for you!

### Option 1: CSS Classes

If you’d like to use the CSS utility classes, import `utilities.css`:

```js
import "responsive-typography/utilities.css";
```

Then use the CSS classes anywhere in your markup:

```html
<h1 class="font-u4">Increase Font Size +4</h1>
<h2 class="font-u2">Increase Font Size +2</h2>

<p>Normal font size</p>

<footer class="font-d1">Decrease Font Size -1</footer>

<div class="font-d3">
  <div class="my-component font-reset">Reset to base size</div>
</div>
```

Add either a `font-u*` class to increase the font by `*` steps, or `font-d*` to decrease the font by `*` steps.

### Option 2: CSS Variables

If you’d like instead to use this with CSS variables, import `variables.css`:

```js
import "responsive-typography/variables.css";
```

This will load global CSS variables into your project. Then use the global variables in your CSS:

```css
.my-heading-class {
  font-size: var(--font-u4); /* Increase font size +4 steps */
}

.my-subheading-class {
  font-size: var(--font-u2); /* Increase font size +2 steps */
}

.my-small-class {
  font-size: var(--font-d2); /* Decrease font size -2 steps */
}
```

This will work in any CSS, Sass, or CSS-in-JS file provided that stylesheet is loaded.

### Option 3: JS

You can also load the values yourself if using a CSS-in-JS solution:

```js
import { defaultScale as scale } from "responsive-typography";

const MyComponent = () => (
  <div>
    <h1 style={{ fontSize: scale.u4 }}>Increase Font Size +4</h1>
    <h2 style={{ fontSize: scale.u2 }}>Increase Font Size +2</h2>
    <footer style={{ fontSize: scale.d2 }}>Decrease Font Size -2</footer>
  </div>
);
```

You can use either one of the methods above, or all three! They all can work in tandem; use whatever method is most convenient for your needs.

## Advanced: generate your own scale

The default scale is a `2.25:6` typographic scale, meaning the font sizes increases by a `factor` of `2.25` every `6` steps. You can generate your own typographic scale using the `Scale` class:

```js
import { Scale } from "responsive-typography";

const scale = new Scale({ factor: 2, delta: 5 }); // increase font size 2× every 5 steps

console.log(scale(4));
// -> "1.7411011266em"
console.log(scale(-2));
// -> "0.7578582833em"
console.log(scale(4, { root: true }));
// -> "1.7411011266rem"
```

Need help? Try our [online calculator](https://codepen.io/dangodev/full/ZEzmJaB).
