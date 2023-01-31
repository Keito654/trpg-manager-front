import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupAdd as Pop } from "./add";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupAdd = Template.bind({});

GroupAdd.args = {};
