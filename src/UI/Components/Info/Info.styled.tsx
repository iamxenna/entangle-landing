import { desktop, mobile, smallDesktop } from "Constants/Devices";
import styled from "styled-components";

const InfoWrapper = styled.div`
  position: relative;
  padding-left: 4.3%;
  margin-top: 339px;

  @media screen and (max-width: ${desktop}px) {
    margin-top: 304px;
  }

  @media screen and (max-width: ${desktop}px) {
    margin-top: 205px;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 63px;
    padding-left: 10%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 233px;
  width: 100%;

  @media screen and (max-width: ${desktop}px) {
    gap: 47px;
    margin-top: 112px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    gap: 35px;
    margin-top: 110px;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 36px;
  }
`;

const SpaceWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const ReadMoreContainer = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.33em;
  text-transform: uppercase;
  background: linear-gradient(90deg, rgba(251, 55, 255, 1) 46%, rgba(0, 148, 255, 1) 54%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  cursor: pointer;
  margin-top: 104px;
  position: inherit;
  z-index: 2;

  @media screen and (max-width: ${desktop}px) {
    font-size: 23.9521px;
    line-height: 33px;
    margin-top: 78px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 17.9885px;
    line-height: 25px;
    margin-top: 59px;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 30px;
    font-size: 14px;
    line-height: 19px;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 32px;
  right: 6rem;
  top: 13rem;

  @media screen and (max-width: ${desktop}px) {
    gap: 23px;
    right: 3rem;
    top: 8rem;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    gap: 18px;
    right: 2rem;
    top: 7rem;
  }
`;

const RightArrowContainer = styled.div`
  transform: rotateZ(90deg);
  cursor: pointer;
  position: relative;
  width: 62px;
  height: 62px;

  @media screen and (max-width: ${desktop}px) {
    width: 46px;
    height: 46px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 35px;
    height: 35px;
  }
`;

const LeftArrowContainer = styled.div`
  transform: rotateZ(-90deg) rotateY(180deg);
  cursor: pointer;
  position: relative;
  width: 62px;
  height: 62px;

  @media screen and (max-width: ${desktop}px) {
    width: 46px;
    height: 46px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 35px;
    height: 35px;
  }
`;

export {
  InfoContainer,
  ReadMoreContainer,
  RightArrowContainer,
  InfoWrapper,
  LeftArrowContainer,
  ArrowWrapper,
  SpaceWrapper,
};
