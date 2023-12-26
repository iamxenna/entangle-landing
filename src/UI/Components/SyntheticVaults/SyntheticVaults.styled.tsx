import styled from "styled-components";
import { desktop, smallDesktop } from "Constants/Devices";

const position = {
  0: `
  left: 10rem;
  top: 30%;

  @media screen and (max-width: ${desktop}px) {
    left: 8rem;
  }
`,
  1: `
  right: 10rem;
  top: 30%;

  @media screen and (max-width: ${desktop}px) {
    right: 8rem;
  }
`,
  2: `
  right: 10rem;
  bottom: 1rem;

  @media screen and (max-width: ${desktop}px) {
    right: 8rem;
  }
`,
  3: `
  left: 10rem;
  bottom: 1rem;

  @media screen and (max-width: ${desktop}px) {
    left: 8rem;
  }
`,
};

const VertexVideoWrapper = styled.video`
  margin: 0 auto;
  width: 50%;
  background-image: url("/assets/images/wormhole.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 15;

  @media screen and (max-width: ${smallDesktop}px) {
    width: 50%;
  }
`;

const CoinItemsWrapper = styled.div`
  margin-top: 27px;
  overflow: hidden;
`;

const SynthVaultWrapper = styled.div`
  margin-top: 136px;

  @media screen and (max-width: ${smallDesktop}px) {
    margin-top: 176px;
  }
`;

const SynthVaultContainer = styled.div``;

const VertexText = styled.p`
  font-size: 25px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-shadow: 0px 0px 14.9897px rgba(255, 255, 255, 0.8);

  @media screen and (max-width: ${desktop}px) {
    font-size: 18.7126px;
    line-height: 140%;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    font-size: 15px;
  }
`;

const ImageContainer = styled.div<{ rotation: number; extra: boolean }>`
  margin-bottom: 1.5rem;
  transform: rotateZ(${({ rotation }) => rotation}deg) rotateX(${({ extra }) => (extra ? "180deg" : "0")});
`;

const VertexTextContainer = styled.div<{ idx: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 27px 38px;
  background: linear-gradient(180deg, rgba(19, 19, 19, 0.25) -1.37%, rgba(17, 17, 38, 0.9) 100.32%);
  backdrop-filter: blur(10.212px);
  border-radius: 56.0589px;
  max-width: 423.46px;
  max-height: 217.35px;
  width: 100%;
  height: 100%;

  ${({ idx }) => position[idx]}

  &::before {
    content: "";
    position: absolute;
    border: 2px solid;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 56.0589px;
    border: 2px solid transparent;
    ${({ idx }) =>
      idx === 1 || idx === 2
        ? `
      background: linear-gradient(90deg, rgba(251, 55, 255, 0) 0%, #0094ff 29.17%, #fb37ff 100%) border-box;
      
  `
        : `
        background: linear-gradient(270deg, rgba(251, 55, 255, 0) 0%, #0094ff 29.17%, #fb37ff 100%) border-box;
    
  `}
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  @media screen and (max-width: ${desktop}px) {
    max-width: 316.96px;
    max-height: 162.69px;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    max-width: 240.96px;
    max-height: 122.69px;
    padding: 20px 34px;
    border-radius: 41.0589px;

    &::before {
      border-radius: 41.0589px;
    }
  }
`;

export {
  VertexVideoWrapper,
  CoinItemsWrapper,
  SynthVaultWrapper,
  SynthVaultContainer,
  VertexTextContainer,
  VertexText,
  ImageContainer,
};
