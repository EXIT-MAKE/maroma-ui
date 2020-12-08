import React from "react";
import PropTypes from "prop-types";
import "./modalinput.css";

/**
 * Primary UI component for user interaction
 */
export const ModalInput = ({
  status,
  label,
  header,
  body,
  placeholder,
  button,
  ...props
}) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <div className="modal-input-group">
      <div className="modal-input">
        <div className="modal-input-header">
          <div className="modal-input-header-title">{header}</div>
          <button className="modal-input-header-close"></button>
        </div>
        <div className="modal-input-header-line"></div>
        <div className="modal-input-body">
          <label className="modal-input-label">{label}</label>
          <input
            type="text"
            className="modal-input-input"
            placeholder={[`${placeholder}`]}
          />
        </div>
        <div className="modal-input-buttons">
          <button className="modal-input-button">{button}</button>
        </div>
      </div>
    </div>
  );
};

ModalInput.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

ModalInput.defaultProps = {
  /*backgroundColor: null,*/
  placeholder: "Input placeholder",
  header: "기관 설정",
  button: "생성하기",
  label: "Label",
  onClick: undefined,
};
