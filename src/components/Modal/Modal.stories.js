import React from "react";

import { Modal } from "./Modal";

export default {
  title: "MAROMA/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "title",
  body: "body text area",
  button1: "button",
  button2: "button",
  body: "body content",
};
