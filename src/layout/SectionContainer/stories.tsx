import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Testando SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam quae assumenda. Beatae consequuntur
          dolorum necessitatibus, est odit, blanditiis optio veniam ipsa adipisci ratione cumque itaque, inventore eius.
          Suscipit, beatae?
        </p>
      </div>
    ),
  },
} as Meta<SectionContainerProps>;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
