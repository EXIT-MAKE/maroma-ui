import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  status,
  size,
  label,
  border,
  backgroundColor,
  fontcolor,
  ...props
}) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <div>
      <asdf></asdf>
      <button
        type="button"
        className={[
          "maroma-button",
          `maroma-button--${status}`,
          `maroma-button--${size}`,
          `maroma-button--${border}`,
          `maroma-button--${fontcolor}`,
          mode,
        ].join(" ")}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  /**
   * 상태에 따른 버튼 종류
   */
  status: PropTypes.oneOf(["Primary", "Blank", "Disabled", "Dark", "Gray"]),
  /**
   * 배경 색상 종류
   */
  backgroundColor: PropTypes.oneOf([
    "Primary",
    "Blank",
    "Disabled",
    "Dark",
    "Gray",
  ]),
  /**
   * 폰트 색상 종류
   */
  fontcolor: PropTypes.oneOf([
    "blackFont",
    "darkFont",
    "grayFont",
    "primaryFont",
    "whiteFont",
  ]),
  /**
   * 버튼 사이즈 선택
   */
  size: PropTypes.oneOf(["Tiny", "Small", "Medium", "Large", "Giant"]),
  /**
   * 버튼에 들어가는 내용 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * Border 유무 선택
   */
  border: PropTypes.oneOf(["Border", "noBorder"]),

  onClick: PropTypes.func,
};

Button.defaultProps = {
  /*backgroundColor: null,*/
  status: false,
  size: "medium",
  onClick: undefined,
};
