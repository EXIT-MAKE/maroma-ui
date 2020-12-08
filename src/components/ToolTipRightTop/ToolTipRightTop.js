import PropTypes from "prop-types";
import React from "react";
import "./tooltiprighttop.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTipRightTop = ({ color, text, ...props }) => {
  const mode = color ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip-right-top-group">
      <div className="tooltip-right-top">
        <div className={[`tooltip-right-top-box--${color}`]}>{text}</div>
        <div
          className={[`tooltip-right-top-tip--${color}`, mode].join(" ")}
        ></div>
      </div>
    </div>
  );
};

ToolTipRightTop.propTypes = {
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

ToolTipRightTop.defaultProps = {
  color: "primary",
  text: "Tooltip!",
  onClick: undefined,
};
