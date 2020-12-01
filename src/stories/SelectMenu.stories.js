import React from "react";

import { SelectMenu } from "./SelectMenu";

export default {
  title: "MAROMA/SelectMenu",
  component: SelectMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SelectMenu {...args} />;

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
