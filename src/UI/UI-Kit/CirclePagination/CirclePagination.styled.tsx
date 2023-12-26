import { mobile } from "Constants/Devices";
import styled from "styled-components";

const Circle = styled.div<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  ${({ isActive }) =>
    isActive
      ? `
      background: linear-gradient(116.38deg, #FB37FF 16.58%, #0094FF 144.67%);
  `
      : `
    background: linear-gradient(180deg, rgba(19, 19, 19, 0.25) -1.37%, rgba(17, 17, 38, 0.9) 100.32%);
    border: 0.7px solid #393b53;
  `}

  @media screen and (max-width: ${mobile}px) {
    width: 10px;
    height: 10px;
  }
`;

export { Circle };
