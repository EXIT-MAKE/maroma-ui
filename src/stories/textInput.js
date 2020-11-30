import React from "react";
import PropTypes from "prop-types";
import "./textInput.css";

/**
 * Primary UI component for user interaction
 */
export const textInput = ({
  status,
  label,
  size,
  textInput,
  placeholder,
  backgroundColor,
  helpMessage,
  ...props
}) => {
  const mode = status ? "maroma-form--default" : "maroma-form--disabled";
  return (
    <div className="maroma-form-group">
      <label className={[`maroma-form-label--${size}`]}>{label}</label>
      <input
        type="text"
        className={[
          "maroma-form-input",
          `maroma-form-input--${status}`,
          `maroma-form-input--${size}`,
          mode,
        ].join(" ")}
        style={backgroundColor && { backgroundColor }}
        placeholder={[`${placeholder}`]}
        {...props}
      />
      <span className={[`maroma-form-help--${status}`]}>{helpMessage}</span>
    </div>
  );
};

Form.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  status: PropTypes.oneOf(["default", "focus", "disabled", "error"]),

  size: PropTypes.oneOf(["mobile", "small", "medium", "large"]),

  label: PropTypes.string.isRequired,

  helpMessage: PropTypes.string.isRequired,

  placeholder: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Form.defaultProps = {
  /*backgroundColor: null,*/
  status: "default",
  size: "medium",
  onClick: undefined,
};
