import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuForAddAndCopy as Pop } from "./menuForAddAndCopy";

export default {
  title: "Menu",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const MenuForAddAndCopy = Template.bind({});

MenuForAddAndCopy.args = {};
