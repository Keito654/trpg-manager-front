import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout as Pop } from "./layout";

export default {
  title: "Layout",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const Layout = Template.bind({});

Layout.args = {};
