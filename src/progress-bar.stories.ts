import {html, TemplateResult} from 'lit-html';
import './progress-bar';
import {ProgressBarProps} from './progress-bar';

export default {
  title: 'Component/ProgressBar',
  component: 'progress-bar',
  argTypes: {
    percentage: { control: 'number' },
    ['--wc-vc-progress-bar-start-color']: { control: 'color' },
    ['--wc-vc-progress-bar-end-color']: { control: 'color' },
    ['--wc-vc-progress-bar-width']: { control: 'number' },
    ['--wc-vc-progress-bar-height']: { control: 'number' },
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
  ['--wc-vc-progress-bar-width']?: number;
  ['--wc-vc-progress-bar-height']?: number;
}

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}
type Props = ProgressBarProps & ProgressBarDesignTokens;
const Template: Story<Props> = ({ percentage, ...designTokens }: Props) => {
  let s = '';
  if (designTokens['--wc-vc-progress-bar-end-color']??true != true) {
    s += `--wc-vc-progress-bar-end-color:${designTokens['--wc-vc-progress-bar-end-color']};`;
  }
  if (designTokens['--wc-vc-progress-bar-start-color'] ?? true != true) {
    s += `--wc-vc-progress-bar-start-color: ${designTokens['--wc-vc-progress-bar-start-color']};`
  }
  if (designTokens['--wc-vc-progress-bar-height'] ?? true != true) {
    s += `--wc-vc-progress-bar-height:${designTokens['--wc-vc-progress-bar-height']}px;`
  }
  if (designTokens['--wc-vc-progress-bar-width'] ?? true != true) {
    s += `--wc-vc-progress-bar-width:${designTokens['--wc-vc-progress-bar-width']}px;`;
  }
  
  return html`<progress-bar percentage="${percentage}" style="${s}" />`;  
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
  ['--wc-vc-progress-bar-height']: 6,
  ['--wc-vc-progress-bar-width']: 400,
};


export const CustomTheme = Template.bind({});
CustomTheme.args = {
  percentage: 75,
  '--wc-vc-progress-bar-start-color': '#0000ff',
  '--wc-vc-progress-bar-end-color': '#00ff00',
};