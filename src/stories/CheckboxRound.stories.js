import React from "react";

import { CheckboxRound } from "./CheckboxRound";

export default {
  title: "MAROMA/CheckboxRound",
  component: CheckboxRound,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CheckboxRound {...args} />;

export const example = Template.bind({});
example.args = {
  status: "unchecked",
  label: "활성화",
};
