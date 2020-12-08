import React from "react";

import { ToolTipLeftHor } from "./ToolTipLeftHor";

export default {
  title: "MAROMA/ToolTipLeftHor",
  component: ToolTipLeftHor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipLeftHor {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
};
