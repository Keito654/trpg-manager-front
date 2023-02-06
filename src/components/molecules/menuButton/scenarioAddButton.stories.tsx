import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScenarioAddButton as Pop } from "./scenarioAddButton";

export default {
  title: "Button",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioAddButton = Template.bind({});

ScenarioAddButton.args = {
  title: "タイトル",
  description: "説明",
  contextMenu: null,
};
