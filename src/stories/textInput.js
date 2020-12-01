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
   * 상태에 따른 종류
   */
  status: PropTypes.oneOf(["default", "focus", "disabled", "error", "valid"]),
  /**
   * 사이즈에 따른 종류
   */
  size: PropTypes.oneOf(["mobile", "small", "medium", "large"]),
  /**
   * Label 이름 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 도움말 메세지 입력
   */
  helpMessage: PropTypes.string.isRequired,
  /**
   * Placeholder 메세지 입력
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

TextInput.defaultProps = {
  /*backgroundColor: null,*/
  status: "default",
  size: "medium",
  onClick: undefined,
};
