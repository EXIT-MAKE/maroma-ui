import React from "react";
import PropTypes from "prop-types";
import "./selectmenu.css";

/**
 * Primary UI component for user interaction
 */
export const SelectMenu = ({ title, option, status, ...props }) => {
  const mode = status ? "maroma-select--default" : "maroma-select--disabled";
  return (
    <div className="maroma-select-group">
      <select className={["maroma-select", mode]} id="selectmenu">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

SelectMenu.propTypes = {
  /**
   * Label 이름 입력
   */
  title: PropTypes.string.isRequired,
  /**
   * options 이름 입력
   */
  option: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

SelectMenu.defaultProps = {
  /*backgroundColor: null,*/
  status: "unchecked",
  onClick: undefined,
  label: "비활성화",
};
