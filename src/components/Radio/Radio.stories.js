import React from "react";

import { Radio } from "./Radio";

export default {
  title: "MAROMA/Radio",
  component: Radio,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Radio {...args} />;

export const Main = Template.bind({});
Main.args = {
  status: "unchecked",
  label: "Label",
};
