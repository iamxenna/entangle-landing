import { desktop, mobile, tablet } from "Constants/Devices";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 88vw;
  gap: 37px;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${mobile}px) {
    gap: 18px;
  }
`;

const AdvisorContainer = styled.div`
  height: 147px;
  background: linear-gradient(180deg, rgba(19, 19, 19, 0.25) -1.37%, rgba(17, 17, 38, 0.9) 100.32%);
  border: 1px solid #393b53;
  backdrop-filter: blur(4px);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: none;
  }

  &:hover::before {
    content: "";
    position: absolute;
    border: 1px solid;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    border: 1px solid transparent;
    background: linear-gradient(90deg, #fb37ff 0%, #0094ff 100%) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  @media screen and (max-width: ${desktop}px) {
    height: 110px;
  }

  @media screen and (max-width: ${tablet}px) {
    width: 132px;
    height: 85px;
    padding: 0 15px;
    &:hover::before {
      box-shadow: none;
      display: none;
      content: none;
    }
  }
`;

const ViewPort = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  inset: 0;
  margin: auto;
`;

export { AdvisorContainer, ItemWrapper, ViewPort };
