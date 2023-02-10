import { DeleteDialog as Pop } from "./deleteDialog";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Dialog",
  component: Pop,
} as ComponentMeta<typeof Pop>;

const Template: ComponentStory<typeof Pop> = (args) => <Pop {...args} />;

export const DeleteDialog = Template.bind({});

DeleteDialog.args = {
  open: true,
};
