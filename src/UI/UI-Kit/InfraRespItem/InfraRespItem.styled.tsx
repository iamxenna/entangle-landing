import { mobile } from "Constants/Devices";
import styled from "styled-components";

const InfraRespContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: ${mobile}px) {
    gap: 25px;
  }
`;

const InfraRespText = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #f9f8f8;
  text-shadow: 0px 0px 17.4143px rgba(255, 255, 255, 0.8);
  max-width: max-content;
  margin: 0 auto;

  @media screen and (max-width: ${mobile}px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

const InfraRespImage = styled.div`
  width: 100vw;
  height: 580px;
  position: relative;
  @media screen and (max-width: ${mobile}px) {
    height: 340px;
  }
`;

export { InfraRespImage, InfraRespContainer, InfraRespText };
