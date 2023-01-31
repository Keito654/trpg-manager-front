import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupUpdate as Pop } from "./update";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupUpdate = Template.bind({});

GroupUpdate.args = {};
