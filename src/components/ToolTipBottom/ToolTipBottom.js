import PropTypes from "prop-types";
import React from "react";
import "./tooltipbottom.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTipBottom = ({ color, text, ...props }) => {
  const mode = color ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip-bottom-group">
      <div className="tooltip-bottom">
        <div className={[`tooltip-bottom-box--${color}`]}>{text}</div>
        <div className={[`tooltip-bottom-tip--${color}`, mode].join(" ")}></div>
      </div>
    </div>
  );
};

ToolTipBottom.propTypes = {
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

ToolTipBottom.defaultProps = {
  color: "primary",
  text: "Tooltip!",
  onClick: undefined,
};
