import React from "react";

import { NavBar } from "./NavBar";

export default {
  title: "MAROMA/NavBar",
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Main = Template.bind({});
Main.args = {
  status: "normal",
};
