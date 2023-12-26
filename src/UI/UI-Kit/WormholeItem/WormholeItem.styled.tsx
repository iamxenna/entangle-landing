import { desktop, smallDesktop } from "Constants/Devices";
import styled from "styled-components";

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.h1`
  font-weight: 500;
  font-size: 56px;
  line-height: 76px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 0px 14.9897px rgba(255, 255, 255, 0.8);

  @media screen and (max-width: ${desktop}px) {
    font-size: 42px;
    line-height: 57px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 38px;
  }
`;

const ImageContainer = styled.div`
  width: 669px;
  height: 669px;
  position: relative;

  @media screen and (max-width: ${desktop}px) {
    width: 501px;
    height: 501px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    width: 376px;
    height: 376px;
  }
`;

const ItemText = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-shadow: 0px 0px 14.9897px rgba(255, 255, 255, 0.8);

  @media screen and (max-width: ${desktop}px) {
    font-size: 21px;
    line-height: 150%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 18px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  justify-content: center;
  width: 41%;

  @media screen and (max-width: ${smallDesktop}px) {
    gap: 34px;
  }
`;

export { ItemText, ItemTitle, ItemWrapper, ImageContainer, TextContainer };
