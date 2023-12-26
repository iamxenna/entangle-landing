import { desktop, mobile, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const InfoBorderResp = styled.div<{ isMobile: boolean }>`
  min-height: 612px;
  min-width: 608px;
  border-radius: 40px;
  ${({ isMobile }) =>
    isMobile &&
    `
    background: linear-gradient(180deg, rgba(251, 55, 255, 0) 0%, #fb37ff 29.17%, #0094ff 100%) border-box;
    padding: 1px;
  `}

  &:last-child {
    margin-right: 4.3%;
  }

  @media screen and (max-width: ${desktop}px) {
    min-width: 458px;
    min-height: 455px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    min-width: 344px;
    min-height: 342px;
  }

  @media screen and (max-width: ${mobile}px) {
    min-width: 90%;
    margin-bottom: 15px;
  }
`;

const InfoItemWrapper = styled.div`
  min-height: 612px;
  min-width: 608px;
  background: linear-gradient(180deg, rgba(19, 19, 19, 0.25) -1.37%, rgba(17, 17, 38, 0.9) 100.32%);
  backdrop-filter: blur(8.17526px);
  border-radius: 44.878px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    border: 2px solid;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
    border: 1px solid transparent;
    background: linear-gradient(180deg, rgba(251, 55, 255, 0) 0%, #fb37ff 29.17%, #0094ff 100%) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  @media screen and (max-width: ${desktop}px) {
    min-width: 458px;
    min-height: 455px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    min-width: 344px;
    min-height: 342px;
  }

  @media screen and (max-width: ${mobile}px) {
    min-width: 95%;

    &::before {
      display: none;
    }
  }
`;

const ImageContainer = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 27rem;
  border-top-right-radius: 44.878px;
  border-top-left-radius: 44.878px;

  @media screen and (max-width: ${desktop}px) {
    height: 20rem;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    height: 14rem;
  }

  @media screen and (max-width: ${mobile}px) {
    height: 14rem;
  }
`;

const TextContainer = styled.div`
  padding: 36px 33px;

  @media screen and (max-width: ${desktop}px) {
    padding: 27px 24px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    padding: 20px 18px;
  }
`;

const TextTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #f9f8f8;
  text-shadow: 0px 0px 14.0147px rgba(255, 255, 255, 0.8);
  margin-top: 22px;

  @media screen and (max-width: ${desktop}px) {
    font-size: 22.4551px;
    line-height: 120%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 16.8642px;
    line-height: 120%;
  }
`;

const DateText = styled.p`
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c4d6f0;

  @media screen and (max-width: ${desktop}px) {
    font-size: 11.9761px;
    line-height: 11px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 8.99424px;
    line-height: 8px;
  }
`;

const IntegrationText = styled.p`
  font-size: 16px;
  line-height: 15px;
  leading-trim: both;
  text-edge: cap;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #fb37ff 0%, #0094ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (max-width: ${desktop}px) {
    font-size: 11.9761px;
    line-height: 11px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 8.99424px;
    line-height: 8px;
  }
`;

export { ImageContainer, InfoItemWrapper, TextContainer, TextTitle, DateText, IntegrationText, InfoBorderResp };
