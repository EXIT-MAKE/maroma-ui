import React from "react";
import PropTypes from "prop-types";
import "./switch.css";

/**
 * Primary UI component for user interaction
 */
export const Switch = ({ status, label, ...props }) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <div className="switch-group">
      <label className={["switch", mode]}>
        <input type="checkbox" className="switch-input"></input>
        <span className="slider round"></span>
      </label>
      <label className="switch-label">{label}</label>
    </div>
  );
};

Switch.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Switch.defaultProps = {
  /*backgroundColor: null,*/
  status: false,
  label: "Label name",
  onClick: undefined,
};
