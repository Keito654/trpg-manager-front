import { ScenarioAddPop as Pop } from "./addPop";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "PopUp",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioAddPop = Template.bind({});

ScenarioAddPop.args = {
  open: true,
};
