import { mobile, mobileLayoutForTablet, tablet } from "Constants/Devices";
import styled from "styled-components";

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 66px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media screen and (max-width: ${mobile}px) {
    font-size: 15.0592px;
    line-height: 21px;
  }
`;

const BodyText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: #ffffff;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    font-size: 8px;
    line-height: 150%;
    letter-spacing: 0.05em;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 9.83784px;
    line-height: 150%;
  }
`;

const TopContainer = styled.div`
  background: linear-gradient(180deg, rgba(19, 19, 19, 0.25) -1.37%, rgba(17, 17, 38, 0.9) 100.32%);
  border: 2px solid #414151;
  backdrop-filter: blur(6px);
  border-radius: 40px;
  width: 100%;
  height: 100%;
  padding: 80px 80px 60px 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1;
  overflow: hidden;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    padding: 28px;
    background: rgba(17, 17, 38, 1);
    border-radius: 25px;
    gap: 13px;
  }
`;

const BottomContainer = styled.div`
  position: absolute;
  border-radius: 24px;
  background: radial-gradient(25.78% 37.03% at 6.21% 91.2%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(56deg, #4c4c68 27.64%, #00001c 78.03%);
  width: 100%;
  height: 100%;
  top: 1rem;
  right: 1rem;
`;

const Line = styled.div<{ left: boolean }>`
  background: linear-gradient(${({ left }) => (left ? "0deg" : "90deg")}, #fb37ff 0%, #00f0ff 100%);
  box-shadow: inset 0px 1.56497px 1.56497px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: ${({ left }) => (left ? "4px" : "88%")};
  height: ${({ left }) => (left ? "88%" : "4px")};
  bottom: ${({ left }) => (!left ? "-2%" : "2%")};
  left: ${({ left }) => (left ? "-8px" : "1.8rem")};
  @media screen and (max-width: ${tablet}px) {
    width: ${({ left }) => (left ? "3px" : "75%")};
    height: ${({ left }) => (left ? "75%" : "3px")};
    bottom: ${({ left }) => (!left ? "-4%" : "2%")};
    left: ${({ left }) => (left ? "-6px" : ".8rem")};
  }
`;

const TitleWrapper = styled.div`
  width: 87%;
`;

export { TitleWrapper, TopContainer, ItemWrapper, Title, BodyText, BottomContainer, Line };
