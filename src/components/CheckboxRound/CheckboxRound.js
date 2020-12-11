import React from "react";
import PropTypes from "prop-types";
import "./checkboxround.css";
import styled, { css, keyframes } from "styled-components";

const checkAnimationBox = keyframes`
    from {
    background-color: #ffffff;
  }
  to {
    background-color: #ff6d6f;
    background-image: url(${checkW});
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

const StyledCheckboxRound = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  font-family: "Noto Sans CJK KR", "Nunito Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  appearance: none;
  cursor: pointer;
  outline: none;
  width: 24px;
  height: 24px;
  padding: 4px;
  background: url("/src/static/check_g.svg");
  background-color: #ffffff;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  background-position: 49% 49%;
  border-radius: 50%;
  border: 1px solid #b4b8bc;

  &:checked {
    background-color: #ff6d6f;
    background-repeat: no-repeat;
    background-position: 49% 49%;
    color: white;
    border: none;
    animation-name: ${checkAnimationBox};
    animation-duration: 0.15s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const CheckboxRound = ({ label, ...props }) => {
  const mode = label
    ? "maroma-checkbox-rd--default"
    : "maroma-checkbox-rd--disabled";
  return (
    <div className="maroma-checkbox-rd-group">
      <StyledCheckboxRound></StyledCheckboxRound>
      <div className="maroma-checkbox-rd-form">
        <input
          id="checkbox-rd1"
          type="checkbox"
          className={[`maroma-checkbox-rd-box`, mode]}
        />
        <label for="checkbox-rd1" className="maroma-checkbox-rd-label">
          {label}
        </label>
      </div>
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
