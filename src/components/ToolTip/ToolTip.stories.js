import React from "react";

import { ToolTip } from "./ToolTip";

export default {
  title: "MAROMA/ToolTip",
  component: ToolTip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTip {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
  direction: "horizontal",
};
