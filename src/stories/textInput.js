import React from "react";
import PropTypes from "prop-types";
import "./textInput.css";

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({
  status,
  label,
  size,
  textInput,
  placeholder,
  backgroundColor,
  helpMessage,
  ...props
}) => {
  const mode = status
    ? "maroma-textInput--default"
    : "maroma-textInput--disabled";
  return (
    <div className="maroma-textInput-group">
      <label className={[`maroma-textInput-label--${size}`]}>{label}</label>
      <input
        type="text"
        className={[
          "maroma-textInput-input",
          `maroma-textInput-input--${status}`,
          `maroma-textInput-input--${size}`,
          mode,
        ].join(" ")}
        style={backgroundColor && { backgroundColor }}
        placeholder={[`${placeholder}`]}
        {...props}
      />
      <span className={[`maroma-textInput-help--${status}`]}>
        {helpMessage}
      </span>
    </div>
  );
};

TextInput.propTypes = {
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

TextInput.defaultProps = {
  /*backgroundColor: null,*/
  status: "default",
  size: "medium",
  onClick: undefined,
};
