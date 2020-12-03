import React from "react";
import PropTypes from "prop-types";
import "./radio.css";

/**
 * Primary UI component for user interaction
 */
export const Radio = ({ label, status, ...props }) => {
  const mode = label ? "maroma-radio--default" : "maroma-radio--disabled";
  return (
    <div className="maroma-radio-group">
      <label className="maroma-radio">
        <input
          name="radioname"
          type="radio"
          className={[`maroma-radio-box`]}
          id="radio1"
        />
        <label for="radio1" className={["maroma-radio-label"]}>
          {label}
        </label>
      </label>
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
