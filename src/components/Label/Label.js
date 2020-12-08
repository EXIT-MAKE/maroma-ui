import React from "react";
import PropTypes from "prop-types";
import "./label.css";

/**
 * Primary UI component for user interaction
 */
export const Label = ({ status, label, ...props }) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <div className={mode}>
      <div className="label">
        <span className="label-box">{label}</span>
      </div>
    </div>
  );
};

Label.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Label.defaultProps = {
  /*backgroundColor: null,*/
  label: "Maromav",
  onClick: undefined,
};

export default Label;
