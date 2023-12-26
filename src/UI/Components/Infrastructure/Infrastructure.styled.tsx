import { desktop, mobile, smallDesktop } from "Constants/Devices";
import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;

  @media screen and (max-width: ${mobile}px) {
    width: 97%;
    margin: 0 auto;
  }
`;

const InfrastructureVideo = styled.video`
  width: 100%;
  height: 100%;
  max-height: 1027px;

  @media screen and (max-width: ${desktop}px) {
    max-height: 770px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    max-height: 578px;
  }
`;

const InfrastructureResponsive = styled.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${mobile}px) {
    margin: 0 auto;
  }
`;

const InfrastructureResponsiveVideo = styled.video`
  width: 70%;
  margin: 0 auto;
`;

export { TitleContainer, InfrastructureVideo, InfrastructureResponsive, InfrastructureResponsiveVideo };
