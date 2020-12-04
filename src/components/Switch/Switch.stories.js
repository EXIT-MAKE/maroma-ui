import React from "react";

import { Switch } from "./Switch";

export default {
  title: "MAROMA/Switch",
  component: Switch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Switch {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: "Label",
};
