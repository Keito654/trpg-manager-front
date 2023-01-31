import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Scenario as Pop } from "./scenario";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const Scenario = Template.bind({});

Scenario.args = {};
