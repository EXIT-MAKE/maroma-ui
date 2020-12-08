import React from "react";
import PropTypes from "prop-types";
import "./tooltiplefttop.css";

/**
 * Primary UI component for user interaction
 */
export const ToolTipLeftTop = ({ color, direction, text, ...props }) => {
  const mode = color ? "tooltip-tip1--primary" : "tooltip-tip1--dark";
  return (
    <div className="tooltip">
      <div className="tooltip-group1">
        <span
          className={[
            `tooltip-tip--${color}`,
            `tolltip-tip--${direction}`,
            mode,
          ].join(" ")}
        ></span>
        <div className={[`tooltip-box1--${color}`]}>{text}</div>
      </div>
    </div>
  );
};

ToolTipLeftTop.propTypes = {
  /**
   * 툴팁의 내용
   */
  text: PropTypes.string.isRequired,
  /**
   * 툴팁의 색상 테마
   */
  color: PropTypes.oneOf(["primary", "dark"]),
  /**
   * 툴팁 화살표 방향
   */
  direction: PropTypes.oneOf(["horizontal", "vertical"]),

  onClick: PropTypes.func,
};

ToolTipLeftTop.defaultProps = {
  color: "primary",
  text: "Tooltip!",
  direction: "horizontal",
  onClick: undefined,
};
