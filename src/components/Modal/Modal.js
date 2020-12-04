import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  kind,
  primary,
  secondary,
  title,
  body,
  button1,
  button2,
  ...props
}) => {
  const mode = kind ? "modal-body--normal" : "modal-body--bold";
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="ModalTitle">
            {title}
          </h5>
        </div>
        <div className={["modal-body", `modal-body--${body}`, mode].join(" ")}>
          {body}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className={["modal-btn1", "modal-btn--secondary", mode].join(" ")}
          >
            {button1}
          </button>
          <button
            type="button"
            className={["modal-btn2", "modal-btn--primary", mode].join(" ")}
          >
            {button2}
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  /**
   * 버튼에 들어가는 내용 입력
   */
  body: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 종류
   */
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  /*backgroundColor: null,*/
  body: "body text area",
  onClick: undefined,
};
