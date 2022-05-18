import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  component: ButtonComponent,
  title: 'Sample Button',
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story = (args) => ({ props: { ...args } });

export const Default = Template.bind({});
Default.args = {
  label: 'Init',
};
