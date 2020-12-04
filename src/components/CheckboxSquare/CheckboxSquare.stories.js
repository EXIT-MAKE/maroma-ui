import React from "react";

import { CheckboxSquare } from "./CheckboxSquare";

export default {
  title: "MAROMA/Checkbox_Square",
  component: CheckboxSquare,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CheckboxSquare {...args} />;

export const Main = Template.bind({});
Main.args = {
  status: "unchecked",
  label: "활성화",
};
