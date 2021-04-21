import { Story } from "@storybook/react";

import Header, { HeaderProps } from "../components/Header";

export default {
  title: "Header",
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const ContactLink = Template.bind({});

ContactLink.args = {
  links: [
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};
