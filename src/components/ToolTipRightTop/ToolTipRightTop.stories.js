import React from "react";

import { ToolTipRightTop } from "./ToolTipRightTop";

export default {
  title: "MAROMA/ToolTipRightTop",
  component: ToolTipRightTop,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipRightTop {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
};
