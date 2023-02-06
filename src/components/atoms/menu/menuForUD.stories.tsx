import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuForUpdateAndDelete as Pop } from "./menuForUpdateAndDelete";

export default {
  title: "Menu",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const MenuForUpdateAndDelete = Template.bind({});

MenuForUpdateAndDelete.args = {};
