import { desktop, mobile, mobileLayoutForTablet, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const SphereTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  transition: all 0.3s;
  z-index: 15;

  &:hover {
    text-shadow: 0px 0px 14.9897px rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: ${tablet}px) {
    z-index: 0;
  }

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: ${mobile}px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const ItemTitle = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #f9f8f8;

  @media screen and (max-width: ${desktop}px) {
    font-size: 25.9342px;
    line-height: 120%;
  }

  @media screen and (max-width: ${tablet}px) {
    font-size: 30px;
    line-height: 120%;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 18px;
    line-height: 120%;
  }
`;

const ItemText = styled.p`
  font-size: 30px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #ffffff;

  @media screen and (max-width: ${desktop}px) {
    font-size: 18px;
    line-height: 140%;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const SphereTextLine = styled.div`
  background: linear-gradient(90deg, var(--pink) -0.8%, var(--neon-blue) 100%);
  height: 4px;
  width: 100%;

  @media screen and (max-width: ${smallDesktop}px) {
    height: 3px;
  }
`;

export { SphereTextLine, SphereTextWrapper, ItemTitle, ItemText };
