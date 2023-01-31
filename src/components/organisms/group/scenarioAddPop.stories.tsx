import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScenarioAddPop as Pop } from "./scenarioAddPop";

export default {
  title: "PopUp",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioAddPop = Template.bind({});

ScenarioAddPop.args = {
  anchorEl: document.createElement("button"),
  handleClose: () => {},
};
