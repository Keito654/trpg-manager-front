import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupJoin as Pop } from "./join";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupJoin = Template.bind({});

GroupJoin.args = {};
