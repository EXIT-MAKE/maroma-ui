import React from "react";

import { ToolTipTop } from "./ToolTipTop";

export default {
  title: "MAROMA/ToolTipTop",
  component: ToolTipTop,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipTop {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
};
