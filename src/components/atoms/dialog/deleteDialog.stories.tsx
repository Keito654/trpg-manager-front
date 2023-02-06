import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DeleteDialog as Pop } from "./deleteDialog";

export default {
  title: "Dialog",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const DeleteDialog = Template.bind({});

DeleteDialog.args = {};
