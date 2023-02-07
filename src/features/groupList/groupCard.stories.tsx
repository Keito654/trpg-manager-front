import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupCard as Pop } from "./groupCard";

export default {
  title: "Card",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GroupCard = Template.bind({});

GroupCard.args = {
  title: "タイトル",
  description: "説明",
};
