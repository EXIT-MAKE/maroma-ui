import React from "react";
import PropTypes from "prop-types";
import "./modalarea.css";

/**
 * Primary UI component for user interaction
 */
export const ModalArea = ({
  status,
  label,
  title,
  subtitle,
  body,
  placeholder,
  button,
  ...props
}) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <div className="modal-area-group">
      <div className="modal-area">
        <div className="modal-area-header">
          <div className="modal-area-header-title">{title}</div>
          <div className="modal-area-header-subtitle">{subtitle}</div>
          <button className="modal-area-header-close"></button>
        </div>
        <div className="modal-area-header-line"></div>
        <div className="modal-area-body">
          <label className="modal-area-label">{label}</label>
          <textarea
            type="text"
            className="modal-area-area"
            placeholder={[`${placeholder}`]}
          />
        </div>
        <div className="modal-area-buttons">
          <button className="modal-area-button">{button}</button>
        </div>
      </div>
    </div>
  );
};

ModalArea.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 버튼에 들어가는 내용 입력
   */
  title: PropTypes.string.isRequired,

  /**
   * 버튼에 들어가는 내용 입력
   */
  subtitle: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

ModalArea.defaultProps = {
  /*backgroundColor: null,*/
  placeholder: "Text placeholder",
  title: "선생님 추가",
  subtitle: "마로고등학교",
  button: "초대하기",
  label: "Label",
  onClick: undefined,
};
