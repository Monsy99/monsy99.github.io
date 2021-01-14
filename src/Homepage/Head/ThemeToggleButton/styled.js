import styled, { css } from "styled-components";

const Fixed = styled.div`
  float: right;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    position: absolute;
    top: 21px;
    right: 16px;
    font-size: 14px;
    line-height: 140%;
    margin: 0;
  }
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 40px;
    height: 24px;
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.head.toggleBackground};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  ${(props) =>
    props.isDark &&
    css`
      background-color: #2196f3;
      &::before {
        transform: translateX(26px);
      }
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    &::before {
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
    }
    ${(props) =>
      props.isDark &&
      css`
        &::before {
          transform: translateX(16px);
        }
      `}
  }
`;
export { Fixed, Input, Slider, Label };
