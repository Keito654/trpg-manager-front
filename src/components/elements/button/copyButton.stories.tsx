import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CopyButton as Pop } from "./copyButton";

export default {
  title: "Button",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const CopyButton = Template.bind({});

CopyButton.args = {};
