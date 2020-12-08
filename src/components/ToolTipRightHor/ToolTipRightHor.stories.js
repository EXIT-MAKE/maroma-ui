import React from "react";

import { ToolTipRightHor } from "./ToolTipRightHor";

export default {
  title: "MAROMA/ToolTipRightHor",
  component: ToolTipRightHor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipRightHor {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
};
