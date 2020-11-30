import React from "react";

import { TextInput } from "./TextInput";

export default {
  title: "MAROMA/TextInput",
  component: TextInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "Label",
  helpMessage: false,
  size: "mobile",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "Label",
  helpMessage: "help messages",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "Label",
  helpMessage: "help messages",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "Label",
  helpMessage: "help messages",
  size: "large",
};
