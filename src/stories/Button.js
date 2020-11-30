import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  status,
  size,
  label,
  border,
  backgroundColor,
  fontcolor,
  ...props
}) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <button
      type="button"
      className={[
        "maroma-button",
        `maroma-button--${status}`,
        `maroma-button--${size}`,
        `maroma-button--${border}`,
        `maroma-button--${fontcolor}`,
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  status: PropTypes.oneOf(["Primary", "Blank", "Disabled", "Dark", "Gray"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.oneOf([
    "Primary",
    "Blank",
    "Disabled",
    "Dark",
    "Gray",
  ]),
  /*
   * How large should the button be?
   */
  fontcolor: PropTypes.oneOf([
    "blackFont",
    "darkFont",
    "grayFont",
    "primaryFont",
    "whiteFont",
  ]),
  size: PropTypes.oneOf(["Tiny", "Small", "Medium", "Large", "Giant"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  border: PropTypes.oneOf(["Border", "noBorder"]),

  onClick: PropTypes.func,
};

Button.defaultProps = {
  /*backgroundColor: null,*/
  status: false,
  size: "medium",
  onClick: undefined,
};
