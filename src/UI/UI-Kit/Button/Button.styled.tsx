import styled from "styled-components";
import { ButtonProps } from "./Button.interfaces";
import { desktop, mobile, smallDesktop } from "Constants/Devices";

const sizes = {
  big: {
    height: 65,
    dHeight: 46,
    mHeight: 39,
    width: "315px",
    dWidth: "214px",
    mWidth: "203px",
  },
  small: {
    height: 36,
    dHeight: 27,
    mHeight: 27,
    width: "150px",
    dWidth: "112px",
    mWidth: "112px",
  },
};

const ButtonWrapper = styled.div<Omit<ButtonProps, "onClick" | "children">>`
  width: ${({ variant }) => sizes[variant].width};
  height: ${({ variant }) => sizes[variant].height}px;
  border-radius: 999px;
  margin: 0 auto;
  padding: 2px;
  background: linear-gradient(90deg, #fb37ff 0%, #0094ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-repeat: repeat-x;
  background-position: 0 0;
  transition: 1.5s ease;

  ${({ variant }) =>
    variant === "big" &&
    `
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-transform: uppercase;
    color: #C0DAF3;

    @media screen and (max-width: ${desktop}px) {
      font-size: 16px;
      line-height: 29px;
    }

    @media screen and (max-width: ${smallDesktop}px) {
      font-size: 15px;
    }

    @media screen and (max-width: ${mobile}px) {
      font-size: 13.7778px;
      line-height: 19px;
    }
  `}

  ${({ variant }) =>
    variant === "small" &&
    `
    font-size: 17.6686px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;

    @media screen and (max-width: ${desktop}px) {
      font-size: 13.2515px;
      line-height: 18px;
    }
  `}

${({ isGradiented }) =>
    isGradiented
      ? `
    background-image: url("/assets/images/button-bg-gradient.png");
    color: #FFFFFF;

  `
      : `
    background-image: url("/assets/images/button-bg.png");
    `}

  &:hover {
    background-position: 100% 100%;
    color: #ffffff;
  }
  @media screen and (max-width: ${desktop}px) {
    width: ${({ variant }) => sizes[variant].dWidth};
    height: ${({ variant }) => sizes[variant].dHeight}px;
  }

  @media screen and (max-width: ${mobile}px) {
    width: ${({ variant }) => sizes[variant].mWidth};
    height: ${({ variant }) => sizes[variant].mHeight}px;
  }
`;

export { ButtonWrapper };
