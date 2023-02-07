import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SuccessBar as Pop } from "./successBar";

export default {
  title: "Bar",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const SuccessBar = Template.bind({});

SuccessBar.args = {
  open: true,
  text: "テストテキスト",
};
