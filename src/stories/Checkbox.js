import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ status, label, roundness, labeling, ...props }) => {
  const mode = status
    ? "maroma-checkbox--default"
    : "maroma-checkbox--disabled";
  return (
    <div className="maroma-checkbox-group">
      <div class="maroma-checkbox">
        <input
          type="checkbox"
          className={[
            `maroma-checkbox--${status}`,
            `maroma-checkbox--${roundness}`,
            mode,
          ]}
        />
      </div>
      <div className="">
        <label className="maroma-checkbox-label">{label}</label>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  /**
   * 상태에 따른 종류
   */
  status: PropTypes.oneOf(["unchecked", "ckecked"]),
  /**
   * 모양에 따른 종류
   */
  roundness: PropTypes.oneOf(["circle", "roundedSquare"]),
  /**
   * Label 이름 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  /*backgroundColor: null,*/
  status: "unchecked",
  onClick: undefined,
};
