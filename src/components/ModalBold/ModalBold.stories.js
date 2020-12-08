import React from "react";

import { ModalBold } from "./ModalBold";

export default {
  title: "MAROMA/ModalBold",
  component: ModalBold,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ModalBold {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "재발급완료",
  body: "MAKE2021",
  button: "확인",
};
