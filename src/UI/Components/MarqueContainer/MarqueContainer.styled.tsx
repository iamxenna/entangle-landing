import { desktop, mobile, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const MarqueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const MarqueeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: max-content;
  margin: 0 auto;
  margin-top: 268px;
  margin-bottom: 120px;

  @media screen and (max-width: ${desktop}px) {
    margin-top: 260px;
    margin-bottom: 91px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    margin-top: 190px;
    margin-bottom: 72px;
  }

  @media screen and (max-width: ${tablet}px) {
    margin-top: 110px;
    margin-bottom: 97px;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 90px;
    height: 75px;
    margin-bottom: 0px;
  }
`;

const MarqueeTitle = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2.49828px;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: ${desktop}px) {
    font-size: 24px;
    line-height: 33px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: ${tablet}px) {
    font-size: 20px;
    line-height: 27px;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const UndertitleLine = styled.div`
  height: 1.25px;

  background: linear-gradient(
    270deg,
    rgba(251, 55, 255, 0) 0%,
    #6831d6 30.72%,
    #fb37ff 67.05%,
    rgba(92, 0, 255, 0) 100%
  );
`;

const ImageContainer = styled.div`
  width: 210px;
  height: 75px;
  position: relative;
  margin: 0 40px;

  @media screen and (max-width: ${desktop}px) {
    width: 157px;
    height: 56px;
    margin: 0 36px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 118px;
    height: 42px;
    margin: 0 27px;
  }

  @media screen and (max-width: ${tablet}px) {
    width: 347px;
    height: 124px;
    margin: 0 80px;
  }
  @media screen and (max-width: ${mobile}px) {
    width: 128px;
    height: 40px;
    margin: 0 36px;
  }
`;

const TextContainer = styled.div`
  max-width: 67%;
  margin: 362px auto 339px auto;
  @media screen and (max-width: ${desktop}px) {
    margin: 301px auto 302px auto;
    max-width: 58%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    max-width: 50%;
    margin: 197px auto 234px auto;
  }

  @media screen and (max-width: ${tablet}px) {
    max-width: 90%;
    margin: 239px auto 231px auto;
  }
  @media screen and (max-width: ${mobile}px) {
    display: none;
  }
`;

const MarqueeText = styled.p`
  margin: 0 auto;
  font-weight: 500;
  font-size: 48px;
  line-height: 200%;
  text-align: center;
  letter-spacing: 0.385em;
  color: #ffffff;
  text-shadow: 0px 0px 17px rgba(255, 255, 255, 0.8);

  @media screen and (max-width: ${desktop}px) {
    font-size: 31px;
    line-height: 140%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 22px;
    line-height: 140%;
  }

  @media screen and (max-width: ${tablet}px) {
    font-size: 28px;
    line-height: 200%;
  }
  @media screen and (max-width: ${mobile}px) {
    display: none;
  }
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1.25px;
  margin-top: 28px;

  background: linear-gradient(
    270deg,
    rgba(251, 55, 255, 0) 0%,
    #6831d6 30.72%,
    #fb37ff 67.05%,
    rgba(92, 0, 255, 0) 100%
  );
  @media screen and (max-width: ${desktop}px) {
    margin-top: 36px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    margin-top: 24px;
  }
`;

export {
  MarqueWrapper,
  ImageContainer,
  MarqueeText,
  TextContainer,
  UnderLine,
  MarqueeTitle,
  UndertitleLine,
  MarqueeTitleContainer,
};
