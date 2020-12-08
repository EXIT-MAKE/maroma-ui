import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import NavLogin from "../NavLogin/NavLogin";

/**
 * Primary UI component for user interaction
 */
export const NavBar = ({ status, ...props }) => {
  const mode = status ? "topmenu--primary" : "topmenu--disabled";
  return (
    <div className="navlogin-group">
      <NavLogin></NavLogin>
      <NavLogin></NavLogin>
      <div className="navlogin-signup">회원가입</div>
      <div className="navlogin-login">로그인</div>
    </div>
  );
};

NavBar.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  status: PropTypes.oneOf(["normal", "active"]),

  onClick: PropTypes.func,
};

NavBar.defaultProps = {
  /*backgroundColor: null,*/
  status: "normal",
  onClick: undefined,
};
