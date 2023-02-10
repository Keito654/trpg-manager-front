import { MenuForUpdateAndDelete as Pop } from "./menuForUpdateAndDelete";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Menu",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const MenuForUpdateAndDelete = Template.bind({});

MenuForUpdateAndDelete.args = {
  contextMenu: { mouseX: 3, mouseY: 3 },
};
