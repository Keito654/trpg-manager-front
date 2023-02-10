import { ScenarioDetailPop as Pop } from "./scenarioDetailPop";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "PopUp",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const ScenarioDetailPop = Template.bind({});

ScenarioDetailPop.args = {
  open: true,
  handleClose: () => {},
  scenarioTitle: "シナリオタイトル",
  image: null,
  description: "これは説明です。説明です。",
  url: "http://example.com",
  readPerson: "山田、山田、山田",
};
