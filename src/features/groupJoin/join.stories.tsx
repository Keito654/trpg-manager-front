import { GroupJoin as Pop } from "./join";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupJoin = Template.bind({});

GroupJoin.args = {
  groupTitle: "テストグループ１",
  description: "これはテストのためのグループです。",
  creator: "山田",
};
