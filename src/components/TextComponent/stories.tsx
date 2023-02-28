import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis velit est tempora voluptatem libero id possimus temporibus ex,
    cum accusamus aut exercitationem unde quae neque nisi optio sint eos accusantium?
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
