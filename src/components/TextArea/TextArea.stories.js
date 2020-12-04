import React from "react";

import { TextArea } from "./TextArea";

export default {
  title: "MAROMA/TextArea",
  component: TextArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <TextArea {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  placeholder: "플레이스 홀더",
  status: "default",
  label: "Label",
  textCount: "0 / 150",
  size: "mobile",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Text placeholder",
  status: "default",
  label: "Label",
  textCount: "0 / 150",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: "Text placeholder",
  status: "default",
  label: "Label",
  textCount: "0 / 150",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Text placeholder",
  status: "default",
  label: "Label",
  textCount: "0 / 150",
  size: "large",
};
