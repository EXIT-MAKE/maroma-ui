import React from "react";

import { ToolTipBottom } from "./ToolTipBottom";

export default {
  title: "MAROMA/ToolTipBottom",
  component: ToolTipBottom,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipBottom {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
};
