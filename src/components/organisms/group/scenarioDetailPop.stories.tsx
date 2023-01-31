import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScenarioDetailPop as Pop } from "./scenarioDetailPop";

export default {
  title: "PopUp",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioDetailPop = Template.bind({});

ScenarioDetailPop.args = {
  anchorEl: document.createElement("button"),
  handleClose: () => {},
};
