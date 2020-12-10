import React from "react";
import PropTypes from "prop-types";
import "./checkboxround.css";
import styled, { css, keyframes } from "styled-components";

import checkG from "../../static/check_g.svg";
import checkW from "../../static/check_w.svg";
import { findAllByDisplayValue } from "@testing-library/react";

const checkAnimationBox = keyframes`
    from {
    background-color: #ffffff;
  }
  to {
    background-color: #ff6d6f;
    background-image: url("/src/static/check_w.svg");
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
`;

const uncheckAnimation = keyframes`
  from {
    background-color: #ff6d6f;
  }
  to {
    background-color: #ffffff;
  }
}
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckboxRound = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  font-family: "Noto Sans CJK KR", "Nunito Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  align-items: center;
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 24px;
  height: 24px;
  padding: 4px;
  background: url(${checkG});
  background-color: #ffffff;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  background-position: 49% 49%;
  border-radius: 50%;
  border: 1px solid #b4b8bc;

  &:checked {
    background: url(${checkW});
    background-color: #ff6d6f;
    background-repeat: no-repeat;
    background-position: 49% 49%;
    color: white;
    border: none;
  }
`;

const StyledLabel = styled.div`
  font-family: "Noto Sans CJK KR", "Nunito Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  padding-bottom: 1px;
  margin-left: 4px;
  font-size: 14px;
`;

/**
 * Primary UI component for user interaction
 */
export const CheckboxRound = ({ label, ...props }) => {
  const mode = label
    ? "maroma-checkbox-rd--default"
    : "maroma-checkbox-rd--disabled";
  return (
    <div>
      <StyledCheckboxGroup>
        <StyledCheckboxRound></StyledCheckboxRound>
        <StyledLabel>{label}</StyledLabel>
      </StyledCheckboxGroup>
    </div>
  );
};

CheckboxRound.propTypes = {
  /**
   * Label 이름 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

CheckboxRound.defaultProps = {
  /*backgroundColor: null,*/
  onClick: true,
};
