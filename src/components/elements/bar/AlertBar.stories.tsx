import { AlertBar as Pop } from "./alertBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Bar",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const AlertBar = Template.bind({});

AlertBar.args = {
  open: true,
  text: "共有URLをコピーしました。",
  secondText: "もう一度コピーする",
};
