import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fragment } from 'react';

import { Menu } from '../src/ui/menu';
import { getButtonClasses } from '../src/ui/button';

export default {
  component: Menu,
  title: `Example/Menu`,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
  >
    <Menu.Button
      className={getButtonClasses({
        size: `md`,
        buttonType: `primary`,
        variant: `primary`,
      })}
    >
      {`Click me!`}
    </Menu.Button>
    <Menu.Items>
      <Menu.Item>
        {`Item 1`}
      </Menu.Item>
      <Menu.Item>
        {`Item 2`}
      </Menu.Item>
      <Menu.Item>
        {`Item 3`}
      </Menu.Item>
    </Menu.Items>
  </Menu>
);

export const Base = Template.bind({});