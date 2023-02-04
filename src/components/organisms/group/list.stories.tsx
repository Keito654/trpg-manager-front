import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupModel } from "types/veiwModels";
import { GroupList as Pop } from "./list";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupList = Template.bind({});

const argObj = Array.from(new Array(10)).map((x, i) => {
  const temp: Pick<GroupModel, "groupTitle" | "description"> = {
    groupTitle: "グループ" + i,
    description: "これはテストグループです。",
  };
  return temp;
});

GroupList.args = {
  groupList: argObj,
};
