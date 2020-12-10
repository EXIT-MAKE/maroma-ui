import React from "react";

import { Button } from "./Button";

export default {
  title: "MAROMA/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: "primary",
  label: "button",
  border: "round",
  size: "small",
};

// export const Disabled = Template.bind({});
// Disabled.args = {
//   status: "Disabled",
//   label: "button",
//   border: "noBorder",
//   size: "Small",
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   fontcolor: "whiteFont",
//   backgroundColor: "rgba(58,61,64,1)",
//   label: "button",
//   border: "noBorder",
//   size: "Small",
// };

// export const Blank = Template.bind({});
// Blank.args = {
//   size: "Small",
//   fontcolor: "primaryFont",
//   label: "button",
//   border: "Border",
//   backgroundColor: "rgba(0,0,0,0)",
// };
