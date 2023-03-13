---
layout: page.11ty.cjs
title: <progress-bar> ⌲ Home
---

# &lt;progress-bar>

`<progress-bar>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<progress-bar>` is just an HTML element. You can it anywhere you can use HTML!

```html
<progress-bar></progress-bar>
```

  </div>
  <div>

<progress-bar></progress-bar>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<progress-bar>` can be configured with attributed in plain HTML.

```html
<progress-bar name="HTML"></progress-bar>
```

  </div>
  <div>

<progress-bar name="HTML"></progress-bar>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<progress-bar>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;progress-bar&gt;</h2>
    <progress-bar .name=${name}></progress-bar>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;progress-bar&gt;</h2>
<progress-bar name="lit-html"></progress-bar>

  </div>
</section>
