import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTip = ({ status, text, ...props }) => {
  const mode = status ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip">
      <div className="tooltip-group1">
        <span className={[`tooltip-tip1--${status}`]}></span>
        <div className={[`tooltip-box1--${status}`]}>{text}</div>
      </div>
    </div>
  );
};

ToolTip.propTypes = {
  /**
   * 툴팁의 내용
   */
  text: PropTypes.string.isRequired,
  /**
   * 툴팁의 색상 테마
   */
  status: PropTypes.oneOf(["primary", "dark"]),

  onClick: PropTypes.func,
};

ToolTip.defaultProps = {
  /*backgroundColor: null,*/
  status: "primary",
  text: "Tooltip!",
  onClick: undefined,
};
