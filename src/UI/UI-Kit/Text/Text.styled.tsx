import styled from "styled-components";
import { TextContainerProps } from "./Text.interfaces";
import { mobile, tablet } from "Constants/Devices";

const TextContainer = styled.span<TextContainerProps>`
  ${(props) =>
    props.variant === "title" &&
    `
        font-family: 'Manrope', sans-serif;
        font-weight: 700;
        font-size: 60px;
        line-height: 82px;
        letter-spacing: 2px;
        color: var(--white);
        text-align: center;

        @media screen and (max-width: ${tablet}px) {
          font-size: 43px;
        }

        @media screen and (max-width: ${mobile}px) {
          font-size: 32px;
          line-height: 44px;
        }
    `}

  ${(props) =>
    props.variant === "gradient" &&
    `
        font-family: 'Inter';
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        background: linear-gradient(90deg, var(--pink) 0%, var(--neon-blue) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    `}

  ${(props) =>
    props.variant === "usual" &&
    `
        font-family: 'Manrope';
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        letter-spacing: 0.05em;
        color: var(--white);
    `}
  ${(props) =>
    props.variant === "button" &&
    `
        letter-spacing: 2px;
        text-transform: uppercase;
    `}

  ${(props) =>
    props.variant === "undertitle" &&
    `
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.33em;
      text-transform: uppercase;
      color: #FFFFFF;
      text-align: center;

      @media screen and (max-width: ${tablet}px) {
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.3em;
      }
    `}
  text-transform: ${({ upper }) => upper && "uppercase"};
  cursor: ${({ pointer }) => pointer && "pointer"};
  font-size: ${({ fSize }) => `${fSize}px`};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lHeight }) => `${lHeight}px`};
`;

export { TextContainer };
