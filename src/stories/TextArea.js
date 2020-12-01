import React from "react";
import PropTypes from "prop-types";
import "./textarea.css";

/**
 * Primary UI component for user interaction
 */
export const TextArea = ({
  status,
  label,
  size,
  placeholder,
  backgroundColor,
  textCount,
  ...props
}) => {
  const mode = status
    ? "maroma-textArea--default"
    : "maroma-textArea--disabled";
  return (
    <div className="maroma-textArea-group">
      <div className="">
        <label className={[`maroma-textArea-label--${size}`]}>{label}</label>
      </div>
      <div className="">
        <textarea
          className={[
            "maroma-textArea-input",
            `maroma-textArea-input--${status}`,
            `maroma-textArea-input--${size}`,
            mode,
          ].join(" ")}
          style={backgroundColor && { backgroundColor }}
          placeholder={[`${placeholder}`]}
          {...props}
        ></textarea>
      </div>
      <div className="maroma-textArea-count-group">
        <span className={[`maroma-textArea-count--${size}`]}>{textCount}</span>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  /**
   * 상태에 따른 종류
   */
  status: PropTypes.oneOf(["default", "focus", "disabled", "error"]),
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
  textCount: PropTypes.string.isRequired,
  /**
   * Placeholder 메세지 입력
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

TextArea.defaultProps = {
  /*backgroundColor: null,*/
  status: "default",
  size: "medium",
  textCount: "0 / 150",
  onClick: undefined,
};
