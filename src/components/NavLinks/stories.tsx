import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLinks, NavLinksProps } from '.';
import { MenuLinkProps } from '../MenuLink';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
} as Meta<MenuLinkProps>;

export const Template: Story<NavLinksProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
