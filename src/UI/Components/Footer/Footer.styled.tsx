import { desktop, mobile, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: var(--bgColor);
  padding-top: 180px;
  background-image: url("/assets/images/background.png");
  background-position: center;
  background-size: 30%;

  @media screen and (max-width: ${smallDesktop}px) {
    padding-top: 110px;
  }

  @media screen and (max-width: ${tablet}px) {
    padding-top: 50px;
  }

  @media screen and (max-width: ${mobile}px) {
    padding-top: 0px;
  }
`;

const Line = styled.div`
  opacity: 0.3;
  border: 1px solid #393b53;
`;

const TopContainer = styled.div`
  position: relative;
  padding: 69px 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${tablet}px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 39px 7%;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  height: 63px;
  width: 343px;

  @media screen and (max-width: ${desktop}px) {
    width: 256px;
    height: 47px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 193px;
    height: 36px;
  }
`;

const AnchorsContainer = styled.div`
  display: flex;
  gap: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 5;

  @media screen and (max-width: ${tablet}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
    height: 70px;

    & > p:first-child {
      margin-left: auto;
    }

    & > p:nth-child(2) {
      margin: 0 auto;
    }

    & > p:nth-child(3) {
      margin-right: auto;
    }
  }
`;

const CenteredContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (max-width: ${tablet}px) {
    position: static;
  }
`;

const BottomContainer = styled.div`
  padding: 32px 7% 27px 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${tablet}px) {
    flex-direction: column-reverse;
    gap: 18px;
  }
`;

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 100px;
  z-index: 5;
`;

const AnchorText = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #676c9e;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f9f8f8;
  }

  @media screen and (max-width: ${desktop}px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const SocialItem = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #676c9e;
  display: flex;
  flex-direction: row;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 20px #ffffff;
  }

  @media screen and (max-width: ${desktop}px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const LiqResolved = styled.p`
  font-size: 31.6245px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #393b53;

  @media screen and (max-width: ${desktop}px) {
    font-size: 23.6711px;
    line-height: 140%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 17.7774px;
    line-height: 140%;
  }
`;

const EntangleDescr = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #393b53;

  @media screen and (max-width: ${desktop}px) {
    font-size: 21.041px;
    line-height: 29px;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

const TermsAndPrivacy = styled.p`
  font-size: 22px;
  line-height: 30px;
  color: #393b53;
  cursor: pointer;

  @media screen and (max-width: ${desktop}px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

export {
  TopContainer,
  BottomContainer,
  Line,
  FooterWrapper,
  AnchorsContainer,
  CenteredContainer,
  SocialContainer,
  SocialItem,
  AnchorText,
  EntangleDescr,
  TermsAndPrivacy,
  LiqResolved,
  LogoContainer,
};
