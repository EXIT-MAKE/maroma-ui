import React from "react";

import { ModalArea } from "./ModalArea";

export default {
  title: "MAROMA/ModalArea",
  component: ModalArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ModalArea {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: "Label",
};
