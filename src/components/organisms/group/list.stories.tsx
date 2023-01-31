import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupList as Pop } from "./list";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupList = Template.bind({});

GroupList.args = {};
