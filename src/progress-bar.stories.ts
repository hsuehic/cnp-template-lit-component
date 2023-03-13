import {html, TemplateResult} from 'lit-html';
import './progress-bar';
import {ProgressBarProps} from './progress-bar';

export default {
  title: 'Component/ProgressBar',
  component: 'progress-bar',
  argTypes: {
    percentage: {control: 'number'},
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<ProgressBarProps> = ({percentage}: ProgressBarProps) =>
  html`<progress-bar percentage="${percentage}" />`;

export const Default = Template.bind({
  percentage: 80,
});

Default.args = {
  percentage: 80,
};
