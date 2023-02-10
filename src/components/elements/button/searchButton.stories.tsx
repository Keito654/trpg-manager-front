import { SearchButton as Pop } from "./searchButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioButton = Template.bind({});

ScenarioButton.args = {
  title: "タイトル",
};
