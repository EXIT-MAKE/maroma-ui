import React from "react";
import PropTypes from "prop-types";
import "./checkboxround.css";

/**
 * Primary UI component for user interaction
 */
export const CheckboxRound = ({ label, ...props }) => {
  const mode = label
    ? "maroma-checkbox-rd--default"
    : "maroma-checkbox-rd--disabled";
  return (
    <div className="maroma-checkbox-rd-group">
      <div className="maroma-checkbox-rd-form">
        <input
          id="checkbox-rd1"
          type="checkbox"
          className={[`maroma-checkbox-rd-box`, mode]}
        />
        <label for="checkbox-rd1" className="maroma-checkbox-rd-label">
          {label}
        </label>
      </div>
    </div>
  );
};

CheckboxRound.propTypes = {
  /**
   * Label 이름 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

CheckboxRound.defaultProps = {
  /*backgroundColor: null,*/
  onClick: true,
};
