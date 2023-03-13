import {ProgressBar} from '../progress-bar';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('progress-bar', () => {
  test('is defined', () => {
    const el = document.createElement('progress-bar');
    assert.instanceOf(el, ProgressBar);
  });

  test('renders with value', async () => {
    const el = await fixture(
      html`<progress-bar percentage="60"></progress-bar>`
    );
    assert.shadowDom.equal(
      el,
      `<div style="background: linear-gradient(90deg, transparent 60%, #e8e8e8 0),
        linear-gradient(
          90deg,
          var(--wc-vc-progress-bar-start-color, #eb1717),
          var(--wc-vc-progress-bar-end-color, #ffb000)
        );
    }"></div>
    `
    );
  });
});
