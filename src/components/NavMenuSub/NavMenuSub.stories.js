import React from "react";

import { NavMenuSub } from "./NavMenuSub";

export default {
  title: "MAROMA/NavMenuSub",
  component: NavMenuSub,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <NavMenuSub {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Menu",
  status: "normal",
};
