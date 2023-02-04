import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Login as Pop } from "./login";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const Login = Template.bind({});

Login.args = {};
