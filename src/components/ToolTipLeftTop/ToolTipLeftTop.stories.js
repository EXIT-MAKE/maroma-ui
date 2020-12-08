import React from "react";

import { ToolTipLeftTop } from "./ToolTipLeftTop";

export default {
  title: "MAROMA/ToolTipLeftTop",
  component: ToolTipLeftTop,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ToolTipLeftTop {...args} />;

export const Main = Template.bind({});
Main.args = {
  text: "Tooltip!",
  color: "primary",
  direction: "horizontal",
};
