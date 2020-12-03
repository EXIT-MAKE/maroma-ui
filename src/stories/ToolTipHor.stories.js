import React from "react";

import { ToolTipHor } from "./ToolTipHor";

export default {
  title: "MAROMA/ToolTipHor",
  component: ToolTipHor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipHor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Tooltip!",
  status: "primary",
};
