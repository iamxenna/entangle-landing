import { desktop, mobile, mobileLayoutForTablet, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const SphereBlockWrapper = styled.div`
  position: relative;
  @media screen and (max-width: ${mobile}px) {
    margin-top: 70px;
  }
`;

const SphereWrapper = styled.div<{ isMobile: boolean }>`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  @media screen and(max-width: ${mobile}px) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 533px;
  }
`;

const SphereImageWrapper = styled.div`
  position: relative;
  height: 579px;
  width: 579px;

  @media screen and (max-width: ${desktop}px) {
    height: 384px;
    width: 384px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    height: 326px;
    width: 326px;
  }

  @media screen and (max-width: ${mobile}px) {
    width: 184px;
    height: 184px;
  }
`;

const UndertitleText = styled.p`
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.33em;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: ${desktop}px) {
    font-size: 21px;
    line-height: 29px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: ${tablet}) {
    font-size: 24px;
    line-height: 33px;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 164px;

  @media screen and (max-width: ${desktop}px) {
    margin-bottom: 143px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    margin-bottom: 95px;
  }

  @media screen and (max-width: ${mobile}px) {
    z-index: 5;
    position: inherit;
  }
`;

const SphereContainer = styled.div`
  max-height: 463px;
  z-index: 15;

  @media screen and (max-width: ${mobile}px) {
    max-width: 212px;
    max-height: 212px;
    margin: 0 auto;
    margin-top: 5rem;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 11%;
  }
`;

const SpaceWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 1016px;
  width: 1459px;

  @media screen and (max-width: ${desktop}px) {
    height: 741px;
    width: 1064px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    height: 563px;
    width: 807px;
  }
`;

const ButtonContainer = styled.div`
  margin: 68px 0;
  z-index: 5;
  position: relative;

  @media screen and (max-width: ${desktop}px) {
    margin: 113px 0;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    margin: 93px 0;
  }

  @media screen and (max-width: ${tablet}px) {
    margin: 86px 0;
  }

  @media screen and (max-width: ${mobile}px) {
    margin: 3.5rem 0;
  }
`;

export {
  SphereWrapper,
  TextWrapper,
  SphereContainer,
  TitleWrapper,
  SphereImageWrapper,
  SpaceWrapper,
  UndertitleText,
  SphereBlockWrapper,
  ButtonContainer,
};
