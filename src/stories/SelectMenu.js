import React from "react";
import PropTypes from "prop-types";
import "./selectmenu.css";

/**
 * Primary UI component for user interaction
 */
export const SelectMenu = ({
  status,
  label,
  roundness,
  labeling,
  ...props
}) => {
  const mode = status
    ? "maroma-selectmenu--default"
    : "maroma-selectmenu--disabled";
  return (
    <div className="maroma-selectmenu-group">
      <div class="maroma-selectmenu">
        <input
          type="selectmenu"
          className={[
            `maroma-selectmenu--${status}`,
            `maroma-selectmenu--${roundness}`,
            mode,
          ]}
        />
      </div>
      <div className="">
        <label className="maroma-selectmenu-label">{label}</label>
      </div>
    </div>
  );
};

SelectMenu.propTypes = {
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

SelectMenu.defaultProps = {
  /*backgroundColor: null,*/
  status: "unchecked",
  onClick: undefined,
};
