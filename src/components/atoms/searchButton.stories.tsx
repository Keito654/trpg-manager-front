import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScenarioCard as Pop } from "./scenarioCard";

export default {
  title: "Card",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioCard = Template.bind({});

ScenarioCard.args = {
  title: "タイトル",
};
