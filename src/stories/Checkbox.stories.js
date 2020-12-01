import React from "react";

import { Checkbox } from "./Checkbox";

export default {
  title: "MAROMA/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  status: "unchecked",
  label: "Label",
};

export const Small = Template.bind({});
Small.args = {
  status: "unchecked",
  label: "Label",
};

export const Medium = Template.bind({});
Medium.args = {
  status: "unchecked",
  label: "Label",
};

export const Large = Template.bind({});
Large.args = {
  status: "default",
  label: "Label",
};
