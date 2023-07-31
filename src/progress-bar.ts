import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export interface ProgressBarProps {
  percentage: number;
}

/**
 * Component for display progress
 *
 * @fires percentage-changed - Indicates when the count changes
 */
@customElement('progress-bar')
export class ProgressBar extends LitElement {
  constructor(props?: ProgressBarProps) {
    super();
    this.percentage = props?.percentage ?? 0;
  }
  /**
   * Progress
   */
  @property({type: Number, attribute: 'percentage'})
  percentage = 0;

  static override styles = css`
    :host {
      display: inline-block;
      height: var(--wc-vc-progress-bar-height, 4px);
      width: var(--wc-vc-progress-bar-width, 300px);
    }
    div {
      display: block;
      height: var(--wc-vc-progress-bar-height, 4px);
      width: var(--wc-vc-progress-bar-width, 300px);
      border-radius: var(--wc-vc-progress-bar-height, 4px);
    }
  `;

  override render() {
    return html`<div
      style="background: linear-gradient(90deg, transparent ${this
        .percentage}%, #e8e8e8 0),
        linear-gradient(
          90deg,
          var(--wc-vc-progress-bar-start-color, #eb1717),
          var(--wc-vc-progress-bar-end-color, #ffb000)
        );
    }"
    ></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'progress-bar': ProgressBar;
  }
}
