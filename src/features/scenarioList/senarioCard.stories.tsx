import { ScenarioCard as Pop } from "./scenarioCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Card",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioCard = Template.bind({});

ScenarioCard.args = {
  title: "タイトル１",
};
