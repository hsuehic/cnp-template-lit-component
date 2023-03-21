import { html, TemplateResult } from 'lit-html';
import { styleMap } from 'lit/directives/style-map.js';

import './progress-bar';
import {ProgressBarProps} from './progress-bar';

export default {
  title: 'Component/ProgressBar',
  component: 'progress-bar',
  argTypes: {
    percentage: { control: 'number' },
    ['--wc-vc-progress-bar-start-color']: { control: 'color' },
    ['--wc-vc-progress-bar-end-color']: { control: 'color' },
    ['--wc-vc-progress-bar-width']: { control: 'text' },
    ['--wc-vc-progress-bar-height']: { control: 'text' },
  },

  parameters: {
    designToken: {
      defaultTab: 'ProgressBar',
    },
  },
};

interface ProgressBarDesignTokens {
  ['--wc-vc-progress-bar-start-color']?: string;
  ['--wc-vc-progress-bar-end-color']?: string;
  ['--wc-vc-progress-bar-width']?: string;
  ['--wc-vc-progress-bar-height']?: string;
}

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}
type Props = ProgressBarProps & ProgressBarDesignTokens;
const Template: Story<Props> = ({ percentage, ...designTokens }: Props) => {
  
  
  return html`<progress-bar percentage="${percentage}" style=${styleMap(designTokens)} />`;  
}

export const Default = Template.bind({});

Default.args = {
  percentage: 80,
};
Default.argTypes = {
  percentage: { control: 'number' },
}

export const CustomDimension = Template.bind({});
CustomDimension.args = {
  percentage: 60,
  ['--wc-vc-progress-bar-height']: '6px',
  ['--wc-vc-progress-bar-width']: '400px',
};


export const CustomTheme = Template.bind({});
CustomTheme.args = {
  percentage: 75,
  '--wc-vc-progress-bar-start-color': '#0000ff',
  '--wc-vc-progress-bar-end-color': '#00ff00',
};