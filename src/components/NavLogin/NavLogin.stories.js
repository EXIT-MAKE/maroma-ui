import React from "react";

import { NavLogin } from "./NavLogin";

export default {
  title: "MAROMA/NavLogin",
  component: NavLogin,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <NavLogin {...args} />;

export const Main = Template.bind({});
Main.args = {
  status: "normal",
};
