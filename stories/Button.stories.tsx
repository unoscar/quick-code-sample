import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src/ui/button';

export default {
  component: Button,
  title: `Example/Button`,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    {...args}
  >
    {`Click me!`}
  </Button>
);

export const Primary = Template.bind({});

Primary.args = {
  buttonType: `primary`,
  size: `md`,
  variant: `success`,
};

export const Secondary = Template.bind({});

Secondary.args = {
  buttonType: `secondary`,
  size: `md`,
  variant: `success`,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  buttonType: `tertiary`,
  size: `md`,
  variant: `success`,
};
