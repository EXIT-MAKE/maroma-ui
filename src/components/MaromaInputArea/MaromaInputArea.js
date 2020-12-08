import React from "react";
import PropTypes from "prop-types";
import "./maromainputarea.css";

/**
 * Primary UI component for user interaction
 */
export const MaromaInputArea = ({
  status,
  label1,
  label2,
  header,
  body,
  placeholder1,
  placeholder2,
  button,
  ...props
}) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  return (
    <div className="modal-inputarea-group">
      <div className="modal-inputarea">
        <div className="modal-inputarea-header">
          <div className="modal-inputarea-header-title">{header}</div>
          <button className="modal-inputarea-header-close"></button>
        </div>
        <div className="modal-inputarea-header-line"></div>
        <div className="modal-inputarea-body1">
          <label className="modal-inputarea-label1">{label1}</label>
          <input
            type="text"
            className="modal-inputarea-input1"
            placeholder={[`${placeholder1}`]}
          />
        </div>
        <div className="modal-inputarea-body2">
          <label className="modal-inputarea-label2">{label2}</label>
          <textarea
            type="text"
            className="modal-inputarea-input2"
            placeholder={[`${placeholder2}`]}
          />
        </div>
        <div className="modal-inputarea-buttons">
          <button className="modal-inputarea-button">{button}</button>
        </div>
      </div>
    </div>
  );
};

MaromaInputArea.propTypes = {
  /**23
   * 버튼에 들어가는 내용 입력
   */
  label1: PropTypes.string.isRequired,
  /**
   * 버튼에 들어가는 내용 입력
   */
  label2: PropTypes.string.isRequired,
  /**
   * 버튼에 들어가는 내용 입력
   */
  placeholder1: PropTypes.string.isRequired,
  /**
   * 버튼에 들어가는 내용 입력
   */
  placeholder2: PropTypes.string.isRequired,
  /**
   * 버튼에 들어가는 내용 입력
   */
  button: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

MaromaInputArea.defaultProps = {
  /*backgroundColor: null,*/
  placeholder1: "Input placeholder",
  placeholder2: "Text placeholder",
  header: "학급 만들기",
  button: "생성하기",
  label1: "Label",
  label2: "Label",
  onClick: undefined,
};
