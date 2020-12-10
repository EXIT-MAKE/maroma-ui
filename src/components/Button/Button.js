import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import "./button.css";
import { Primary } from "./Button.stories";

const StyeldButton = styled.div`
  font-family: "Noto Sans CJK KR", "Nunito Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  display: inline-block;
  //버튼 Fontcolor
  .primary {
    color: #232527;
    background-color: #ffc847;
  }
  .disabled {
    color: #b4b8bc;
    background-color: #dee2e6;
  }
  .blank {
    color: #ff6d6f;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
  }
  .gray {
    color: #4c5154;
    background-color: #edf0f3;
  }
  .dark {
    color: #ffffff;
    background-color: #3a3d40;
  }

  //버튼 Size
  .tiny {
    border-radius: 4px;
    font-size: 14px;
    padding: 8px 20px;
  }
  .small {
    font-size: 14px;
    padding: 10px 30px;f
    border-radius: 8px;
  }
  .medium {
    font-size: 16px;
    padding: 10px 52px;
    border-radius: 8px;
  }
  .large {
    font-size: 16px;
    padding: 14px 79px;
    border-radius: 8px;
  }
  .giant {
    font-size: 16px;
    padding: 18px 169px;
    border-radius: 8px;
  }

  //버튼 Roundness
  .round {
    border-radius: 8px;
  }

  .round1 {
    border-radius: 41px;
  }

  .round2 {
    border-radius: 55px;
  }
`;
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  status,
  size,
  label,
  border,
  backgroundColor,
  fontcolor,
  ...props
}) => {
  const mode = status ? "maroma-button--primary" : "maroma-button--disabled";
  console.log(size);
  console.log(status);
  return (
    <div>
      <StyeldButton>
        <StyeldButton
          className={[`${size}`, `${status}`, `${border}`].join(" ")}
        >
          {label}
        </StyeldButton>
      </StyeldButton>
    </div>
  );
};

Button.propTypes = {
  /**
   * 상태에 따른 버튼 종류
   */
  status: PropTypes.oneOf(["primary", "blank", "disabled", "dark"]),
  /**
   * 버튼 사이즈 선택
   */
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "giant"]),
  /**
   * 버튼에 들어가는 내용 입력
   */
  label: PropTypes.string.isRequired,
  /**
   * 버튼 모양 선택
   */
  border: PropTypes.oneOf(["round", "round1", "round2"]),

  onClick: PropTypes.func,
};

Button.defaultProps = {
  /*backgroundColor: null,*/
  status: "primary",
  size: "medium",
  onClick: undefined,
};
