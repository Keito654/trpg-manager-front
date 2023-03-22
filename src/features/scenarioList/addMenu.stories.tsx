import { ButtonMenu as Pop } from "./buttonMenu";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Menu",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const MenuForAddAndCopy = Template.bind({});

MenuForAddAndCopy.args = {
  open: true,
};
