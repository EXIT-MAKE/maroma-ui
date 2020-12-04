import React from "react";
import PropTypes from "prop-types";
import "./radio.css";

/**
 * Primary UI component for user interaction
 */
export const Radio = ({ label, ...props }) => {
  const mode = label ? "radio-box-default" : "radio-box-disabled";
  return (
    <div className="radio-group">
      <div className="radio-form">
        <input id="radio1" type="radio" className={[`radio-box`, mode]} />
        <label for="radio1" className="radio-label">
          {label}
        </label>
      </div>
    </div>
  );
};

Radio.propTypes = {
  /**
   * Label 이름 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * check 상태
   */
  status: PropTypes.oneOf(["checked", "unchecked"]),
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

Radio.defaultProps = {
  /*backgroundColor: null,*/
};
