import { StoryFn } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button';

export default {
    title: 'Button',
    argTypes: { onClick: { action: 'clicked' } },
};

const Template: StoryFn<ButtonProps> = (args) => (
    <Button {...args}>Button </Button>
);

export const Small = Template.bind({});

Small.args = {
    size: 's',
};

export const Medium = Template.bind({});

Medium.args = {
    size: 'm',
};

export const Large = Template.bind({});

Large.args = {
    size: 'l',
};
