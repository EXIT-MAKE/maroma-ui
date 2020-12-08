import React from "react";

import { ModalInput } from "./ModalInput";

export default {
  title: "MAROMA/ModalInput",
  component: ModalInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ModalInput {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: "Label",
};
