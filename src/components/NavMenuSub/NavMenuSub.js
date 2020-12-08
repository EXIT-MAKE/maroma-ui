import React from "react";
import PropTypes from "prop-types";
import "./navmenusub.css";

/**
 * Primary UI component for user interaction
 */
export const NavMenuSub = ({ status, title, ...props }) => {
  const mode = status ? "topmenu--primary" : "topmenu--disabled";
  return (
    <div className="topmenusub-group">
      <div className="topmenusub-menu">
        <div
          className={["topmenusub-title", `topmenusub-title--${status}`].join(
            " "
          )}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

NavMenuSub.propTypes = {
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

NavMenuSub.defaultProps = {
  /*backgroundColor: null,*/
  title: "menu",
  status: "normal",
  onClick: undefined,
};
