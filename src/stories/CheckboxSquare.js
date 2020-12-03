import React from "react";
import PropTypes from "prop-types";
import "./checkboxsquare.css";

/**
 * Primary UI component for user interaction
 */
export const CheckboxSquare = ({ label, ...props }) => {
  const mode = label
    ? "maroma-checkbox-sq--default"
    : "maroma-checkbox-sq--disabled";
  return (
    <div className="maroma-checkbox-sq-group">
      <div className="maroma-checkbox-sq-form">
        <input
          id="checkbox-sq1"
          type="checkbox"
          className={[`maroma-checkbox-sq-box`, mode]}
        />
        <label for="checkbox-sq1" className="maroma-checkbox-sq-label">
          {label}
        </label>
      </div>
    </div>
  );
};

CheckboxSquare.propTypes = {
  /**
   * Label 이름 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

CheckboxSquare.defaultProps = {
  /*backgroundColor: null,*/
  onClick: true,
};
