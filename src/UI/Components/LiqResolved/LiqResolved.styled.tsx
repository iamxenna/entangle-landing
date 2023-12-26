import { desktop, mobile, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: absolute;
`;

const LinkContainer = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 5;
`;

const CoinVideo = styled.video`
  position: absolute;
  height: 100%;
  right: 4%;
  z-index: 15;

  @media screen and (max-width: ${desktop}px) {
    right: 7%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    right: 2%;
  }
`;

const DescriptionText = styled.div`
  max-width: 1050px;

  @media screen and (max-width: ${desktop}px) {
    max-width: 700px;
  }

  @media screen and (max-width: ${tablet}px) {
    margin: 0 auto;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0 var(--paddings);
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 0;

  @media screen and (max-width: ${tablet}px) {
    position: static;
    z-index: 0;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 3rem;
    padding: 0;
  }
`;

const CoinPicture = styled.div`
  max-width: 266px;
  max-height: 234px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${tablet}px) {
    position: static;
  }
`;

const SocialContainer = styled.div`
  position: fixed;
  left: 3rem;
  top: 0;
  bottom: 10rem;
  margin: auto 0;
  display: flex;
  align-items: center;
  height: 80%;
  z-index: 5;

  @media screen and (max-width: ${tablet}px) {
    left: 1rem;
    top: -5rem;
  }
`;

const TitleText = styled.div`
  font-weight: 400;
  font-size: 40.7308px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #ffffff;

  @media screen and (max-width: ${desktop}px) {
    font-size: 25px;
    line-height: 140%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 22px;
    line-height: 140%;
  }

  @media screen and (max-width: ${tablet}px) {
    text-align: center;
  }

  @media screen and (max-width: ${mobile}px) {
    width: 100%;
    margin-top: 12px;
    font-size: 14px;
    line-height: 19px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${tablet}px) {
    flex-direction: column;
    height: auto;
  }
`;

const TitleHeader = styled.p`
  font-weight: 700;
  font-size: 108.615px;
  line-height: 148px;
  letter-spacing: 2.26282px;
  color: #ffffff;
  margin-bottom: 40px;

  @media screen and (max-width: ${desktop}px) {
    font-size: 72px;
    line-height: 112px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 61px;
    line-height: 83px;
  }

  @media screen and (max-width: ${tablet}px) {
    text-align: center;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 25px;
    line-height: 34px;
    margin-bottom: 0;
  }
`;

const AndroidCoinVideo = styled.video`
  width: 80%;
  height: 353px;
  margin: 0 1.3rem 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 71px;

  @media screen and (max-width: ${desktop}px) {
    gap: 30px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    gap: 40px;
  }

  @media screen and (max-width: ${tablet}px) {
    flex-direction: column;
    margin-top: 45px;
  }

  @media screen and (max-width: ${mobile}px) {
    gap: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin: 56px 0;

  @media screen and (max-width: ${mobile}px) {
    margin: 30px auto;
  }

  @media screen and (max-width: ${tablet}px) {
    margin: 0;
  }
`;

const CoinWrapper = styled.div<{ isMobile: boolean }>`
  z-index: 15;
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${tablet}px) {
    z-index: 0;
  }

  @media screen and (max-width: ${mobile}px) {
    width: 100%;
    height: 300px;
    display: flex;
  }
`;

const AdvText = styled.p`
  font-weight: 500;
  font-size: 33.6px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-shadow: 0px 0px 13.6px rgba(255, 255, 255, 0.8);

  @media screen and (max-width: ${desktop}px) {
    font-size: 25px;
    line-height: 140%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 20px;
    line-height: 140%;
  }

  @media screen and (max-width: ${tablet}) {
    margin: 0 auto;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 14px;
    line-height: 140%;
  }
`;

const VerticalSeparator = styled.div`
  width: 3px;
  min-height: 30px;
  background: linear-gradient(180deg, #fb37ff -2.63%, #0094ff 107.89%);

  @media screen and (max-width: ${mobile}px) {
    min-height: 20px;
    width: 2px;
  }
`;

const CoinContainer = styled.div`
  @media screen and (max-width: ${mobile}px) {
    width: 80%;
    margin: auto;
  }
`;

export {
  SocialContainer,
  LinkContainer,
  CoinWrapper,
  TitleText,
  ButtonContainer,
  CoinVideo,
  CoinContainer,
  CoinPicture,
  TitleHeader,
  Wrapper,
  ContentWrapper,
  ButtonWrapper,
  TextWrapper,
  VerticalSeparator,
  AdvText,
  AndroidCoinVideo,
  DescriptionText,
};
