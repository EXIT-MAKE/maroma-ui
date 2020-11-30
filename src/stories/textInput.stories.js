import React from "react";

import { textInput } from "./textInput";

export default {
  title: "MAROMA/Form",
  component: Form,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <textInput {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "button",
  helpMessage: false,
  size: "mobile",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "button",
  helpMessage: "help messages",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "button",
  helpMessage: "help messages",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Input placeholder",
  status: "default",
  label: "button",
  helpMessage: "help messages",
  size: "large",
};
