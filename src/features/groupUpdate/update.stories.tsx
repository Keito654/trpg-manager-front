import { GroupUpdate as Pop } from "./update";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupUpdate = Template.bind({});

GroupUpdate.args = {
  groupTitle: "テストグループ１",
  description: "これはテストのためのグループです。",
  urlForJoin: "http://example.com",
};
