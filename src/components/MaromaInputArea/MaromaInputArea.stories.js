import React from "react";

import { MaromaInputArea } from "./MaromaInputArea";

export default {
  title: "MAROMA/MaromaInputArea",
  component: MaromaInputArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MaromaInputArea {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: "Label",
};
