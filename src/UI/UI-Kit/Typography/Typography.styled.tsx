import styled from "styled-components";
import { TypographyContainerProps } from "./Typography.interfaces";
import { desktop, mobile, smallDesktop, tablet } from "Constants/Devices";

const TypographyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: max-content;
  margin: 0 auto;
`;

const TypographyContainer = styled.p<TypographyContainerProps>`
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

        @media screen and (max-width: ${desktop}px) {
          font-size: 42px;
          line-height: 57px;
        }

        @media screen and (max-width: ${tablet}px) {
          font-size: 43px;
        }

        @media screen and (max-width: ${mobile}px) {
          font-size: 24px;
          line-height: 33px;
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

        @media screen and (max-width: ${mobile}px) {
          font-size: 18px;
          line-height: 192.02%;
        }
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
        &:hover${TypographyContainer} {
          color: #C0DAF3;
          transition: all .2s;
        }
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
      font-size: 28px;
      line-height: 38px;
      text-align: center;
      letter-spacing: 0.2em;

      color: #FFFFFF;

      @media screen and (max-width: ${smallDesktop}px) {
        font-size: 20px;
        line-height: 27px;
      }

      @media screen and (max-width: ${tablet}px) {
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.3em;
      }

      @media screen and (max-width: ${mobile}px) {
        font-size: 14px;
        line-height: 175%;
        letter-spacing: 0.075em;
      }
    `}
  text-transform: ${({ upper }) => upper && "uppercase"};
  cursor: ${({ pointer }) => pointer && "pointer"};
  font-size: ${({ fSize }) => `${fSize}px`};
  color: ${({ color }) => (color ? color : undefined)};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lHeight }) => `${lHeight}px`};
`;

const Line = styled.div`
  height: 1.25px;
  width: 100%;
  margin: 16px auto;
  background: linear-gradient(
    270deg,
    rgba(251, 55, 255, 0) 0%,
    #6831d6 30.72%,
    #fb37ff 67.05%,
    rgba(92, 0, 255, 0) 100%
  );
`;

export { TypographyContainer, TypographyWrapper, Line };
