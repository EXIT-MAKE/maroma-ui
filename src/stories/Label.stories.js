import React from "react";

import { Label } from "./Label";

export default {
  title: "MAROMA/Label",
  component: Label,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Label {...args} />;

export const Labels = Template.bind({});
Labels.args = {
  label: "Label",
};
