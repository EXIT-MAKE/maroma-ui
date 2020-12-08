import PropTypes from "prop-types";
import React from "react";
import "./tooltiptop.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTipTop = ({ color, text, ...props }) => {
  const mode = color ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip-top-group">
      <div className="tooltip-top">
        <div className={[`tooltip-top-box--${color}`]}>{text}</div>
        <div className={[`tooltip-top-tip--${color}`, mode].join(" ")}></div>
      </div>
    </div>
  );
};

ToolTipTop.propTypes = {
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

ToolTipTop.defaultProps = {
  color: "primary",
  text: "Tooltip!",
  onClick: undefined,
};
