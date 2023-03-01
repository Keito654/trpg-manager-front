import { GroupAdd as Pop } from "./add";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupAdd = Template.bind({});

GroupAdd.args = {
  shareKey: "http://example.com",
};
