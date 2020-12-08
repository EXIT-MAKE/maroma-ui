import React from "react";
import PropTypes from "prop-types";
import "./navmenu.css";

/**
 * Primary UI component for user interaction
 */
export const NavMenu = ({ status, title, ...props }) => {
  const mode = status ? "topmenu--primary" : "topmenu--disabled";
  return (
    <div className="topmenu-group">
      <div className="topmenu-menu">
        <div className="topmenu-title">{title}</div>
        <div className={[`topmenu-border--${status}`].join(" ")}></div>
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  title: PropTypes.string.isRequired,
  /**
   * 버튼에 들어가는 내용 입력
   */
  status: PropTypes.oneOf(["normal", "active"]),

  onClick: PropTypes.func,
};

NavMenu.defaultProps = {
  /*backgroundColor: null,*/
  title: "menu",
  status: "normal",
  onClick: undefined,
};
