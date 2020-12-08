import React from "react";

import { NavMenu } from "./NavMenu";

export default {
  title: "MAROMA/NavMenu",
  component: NavMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <NavMenu {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Menu",
  status: "normal",
};
