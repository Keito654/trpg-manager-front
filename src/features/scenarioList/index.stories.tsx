import { ScenarioList as Pop } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScenarioModel } from "types/viewModels";

export default {
  title: "Page",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const Scenario = Template.bind({});

const argObj = Array.from(new Array(10)).map((x, i) => {
  const temp: Pick<ScenarioModel, "scenarioTitle" | "image"> = {
    scenarioTitle: `シナリオ${i}`,
  };

  return temp;
});

Scenario.args = {
  scenarioList: argObj,
};
