import { GoogleLoginButton as Pop } from "./googleLoginButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const GoogleLoginButton = Template.bind({});

GoogleLoginButton.args = {};
