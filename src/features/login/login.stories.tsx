import { Login as Pop } from "./login";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const Login = Template.bind({});

Login.args = {};
