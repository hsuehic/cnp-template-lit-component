<!--instructions-of-template--># cnp-template-lit-component

> A bolierplate for creating [lit](https://github.com/lit/lit) component with typescript, storybook;
>
> A bolierplate for that can be used by [create-npm-package](https://github.com/hsuehic/create-npm-package)

## Usage

```bash
npx create-npm-packages my-components --template hsuehic/cnp-template-lit-component
cd my-components
npm ci
npm run storybook
```

![demo](assets/demo.png)
<!--instructions-of-template-->
# my-package-name

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Lint Status][lint-img]][lint-url]
[![Test Status][test-img]][test-url]
[![Build Status][build-img]][build-url]
[![Release Status][release-img]][release-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]

A Web Component for displaying progress. Please check [Demos](https://hsuehic.github.io/cn-template-lit-component/).

## Installation

```bash

npm i my-package-name

```

## Usage

### Without bundler

```html
    <script type="module" src="path/to/progress-bar.js""></script>
    <progress-bar percentage="60"></progress-bar>
      <progress-bar
        percentage="80"
        style="
          --wc-vc-progress-bar-width: 350px;
          --wc-vc-progress-bar-height: 5px;
        "
      ></progress-bar>
      <progress-bar
        percentage="50"
        style="
          --wc-vc-progress-bar-width: 100%;
          --wc-vc-progress-bar-height: 6px;
          --wc-vc-progress-bar-start-color: #00f;
          --wc-vc-progress-bar-end-color: #0f0;
        "
      ></progress-bar>

```

### With bundler such as Webpack, rollup

- Step 1, import the module in your script file

  ```js
  import 'wc-progress-bar';
  ```

- Step 2, add element with markup

  ```html
  <progress-bar percentage="60"></progress-bar>
  ```

### Memo

TSConfig: `useDefineForClassFields`

- Dev Server(Esbuild)

```js
{
  // target before es2020, such as es
  constructor() {
    super();
    this.props= value;
  }
}

```

- Storybook(Babel): <https://github.com/storybookjs/storybook/issues/12578>
  
  The sequence of the decorator matters.

```js
// target later than 2022
{
  @observable()
  percentage = 0;
}
```

- storybook-design-token postcss
  Need to obviously install the dependencies
  <https://stackoverflow.com/questions/72272219/stylelint-gives-error-class-extends-value-undefined-is-not-a-constructor-or-nul>

<!--badge-variables-->
[lint-img]: https://github.com/hsuehic/cnp-template-lit-component/actions/workflows/lint.yaml/badge.svg
[lint-url]: https://github.com/hsuehic/cnp-template-lit-component/workflows/lint.yaml
[test-img]: https://github.com/hsuehic/cnp-template-lit-component/actions/workflows/test.yaml/badge.svg
[test-url]: https://github.com/hsuehic/cnp-template-lit-component/workflows/test.yaml
[build-img]: https://github.com/hsuehic/cnp-template-lit-component/actions/workflows/build.yaml/badge.svg
[build-url]: https://github.com/hsuehic/cnp-template-lit-component/workflows/build.yaml
[release-img]: https://github.com/hsuehic/cnp-template-lit-component/actions/workflows/release.yaml/badge.svg
[release-url]: https://github.com/hsuehic/cnp-template-lit-component/workflows/release.yaml
[downloads-img]: https://img.shields.io/npm/dt/cnp-template-lit-component
[downloads-url]: https://www.npmtrends.com/cnp-template-lit-component
[npm-img]: https://img.shields.io/npm/v/cnp-template-lit-component
[npm-url]: https://www.npmjs.com/package/cnp-template-lit-component
[issues-img]: https://img.shields.io/github/issues/hsuehic/cnp-template-lit-component
[issues-url]: https://github.com/hsuehic/cnp-template-lit-component/issues
[codecov-img]: https://codecov.io/gh/hsuehic/cnp-template-lit-component/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/hsuehic/cnp-template-lit-component
<!--badge-variables-->