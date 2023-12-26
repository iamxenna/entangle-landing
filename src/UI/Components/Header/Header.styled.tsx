import { desktop, smallDesktop } from "Constants/Devices";
import styled from "styled-components";

const Underline = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: -7px;
  height: 2px;
  width: ${({ isActive }) => (isActive ? "100%" : "0%")};
  transition: all 0.4s ease-in;
  background: linear-gradient(90deg, var(--pink) -1.89%, var(--neon-blue) 100%);
`;

const HeaderTitle = styled.p<{ isActive: boolean }>`
  font-size: 22.4845px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #676c9e;
  transition: all 0.4s ease-in;

  ${({ isActive }) =>
    isActive &&
    `
    color: #ffffff;
  `};

  @media screen and (max-width: ${desktop}px) {
    font-size: 16.8298px;
    line-height: 23px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 12.6394px;
    line-height: 17px;
  }
`;

const LogoContainer = styled.div`
  width: 244px;
  height: 100%;
  position: relative;

  @media screen and (max-width: ${desktop}px) {
    width: 182px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 137px;
  }
`;

const GlobeWrapper = styled.div`
  width: 31px;
  height: 31px;
  position: relative;

  @media screen and (max-width: ${desktop}px) {
    width: 23px;
    height: 23px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 17px;
    height: 17px;
  }
`;

export { Underline, HeaderTitle, LogoContainer, GlobeWrapper };
