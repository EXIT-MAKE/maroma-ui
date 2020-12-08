import React from "react";
import PropTypes from "prop-types";
import "./tooltiplefthor.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTipLeftHor = ({ color, direction, text, ...props }) => {
  const mode = color ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip-left-center-group">
      <div className="tooltip-left-center">
        <div
          className={[`tooltip-left-center-tip--${color}`, mode].join(" ")}
        ></div>
        <div className={[`tooltip-left-center-box--${color}`]}>{text}</div>
      </div>
    </div>
  );
};

ToolTipLeftHor.propTypes = {
  /**
   * 툴팁의 내용
   */
  text: PropTypes.string.isRequired,
  /**
   * 툴팁의 색상 테마
   */
  color: PropTypes.oneOf(["primary", "dark"]),

  onClick: PropTypes.func,
};

ToolTipLeftHor.defaultProps = {
  color: "primary",
  text: "Tooltip!",
  direction: "horizontal",
  onClick: undefined,
};
