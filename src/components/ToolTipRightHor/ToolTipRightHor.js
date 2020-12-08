import PropTypes from "prop-types";
import React from "react";
import "./tooltiprighthor.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTipRightHor = ({ color, text, ...props }) => {
  const mode = color ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip-right-center-group">
      <div className="tooltip-right-center">
        <div className={[`tooltip-right-center-box--${color}`]}>{text}</div>
        <div
          className={[`tooltip-right-center-tip--${color}`, mode].join(" ")}
        ></div>
      </div>
    </div>
  );
};

ToolTipRightHor.propTypes = {
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

ToolTipRightHor.defaultProps = {
  color: "primary",
  text: "Tooltip!",
  onClick: undefined,
};
