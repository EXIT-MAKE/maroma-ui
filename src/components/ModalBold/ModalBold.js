import React from "react";
import PropTypes from "prop-types";
import "./modalbold.css";

/**
 * Primary UI component for user interaction
 */
export const ModalBold = ({
  kind,
  primary,
  secondary,
  title,
  body,
  button,
  ...props
}) => {
  const mode = kind ? "modalbold-body--normal" : "modalbold-body--bold";
  return (
    <div className="modalbold-group">
      <div className="modalbold-content">
        <div className="modalbold-header">{title}</div>
        <div className="modalbold-body">{body}</div>
        <div className="modalbold-button">
          <button type="button" className="modalbold-button-primary">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

ModalBold.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  body: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

ModalBold.defaultProps = {
  /*backgroundColor: null,*/
  title: "재발급완료",
  body: "MAKE2021",
  button: "확인",
  onClick: undefined,
};
