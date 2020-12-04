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
  button1,
  button2,
  ...props
}) => {
  const mode = kind ? "modalbold-body--normal" : "modalbold-body--bold";
  return (
    <div className="modalbold-dialog modalbold-dialog-centered">
      <div className="modalbold-content">
        <div className="modalbold-header">
          <h5 className="modalbold-title" id="ModalTitle">
            {title}
          </h5>
        </div>
        <div
          className={["modalbold-body", `modalbold-body--${body}`, mode].join(
            " "
          )}
        >
          {body}
        </div>
        <div className="modalbold-footer">
          <button
            type="button"
            className={["modalbold-btn1", "modalbold-btn--primary", mode].join(
              " "
            )}
          >
            {button2}
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
  body: "body text area",
  onClick: undefined,
};
