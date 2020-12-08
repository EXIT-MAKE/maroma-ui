import React from "react";
import PropTypes from "prop-types";
import "./navlogin.css";

/**
 * Primary UI component for user interaction
 */
export const NavLogin = ({ status, ...props }) => {
  const mode = status ? "topmenu--primary" : "topmenu--disabled";
  return (
    <div className="navlogin-group">
      <div className="navlogin-signup">회원가입</div>
      <div className="navlogin-login">로그인</div>
    </div>
  );
};

NavLogin.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  status: PropTypes.oneOf(["normal", "active"]),

  onClick: PropTypes.func,
};

NavLogin.defaultProps = {
  /*backgroundColor: null,*/
  status: "normal",
  onClick: undefined,
};
