import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Teste SectionBackground</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste cum impedit sint. Incidunt delectus accusamus
          necessitatibus facere. Perspiciatis quibusdam repudiandae nobis veritatis debitis dolores, tenetur quisquam
          qui sapiente repellendus libero.
        </p>
      </div>
    ),
  },
} as Meta<SectionBackgroundProps>;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
