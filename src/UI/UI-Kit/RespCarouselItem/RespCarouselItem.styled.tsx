import { mobile } from "Constants/Devices";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 12%;
  margin-top: 52px;
  min-width: 100vw;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 185px;
  height: 185px;

  @media screen and (max-width: ${mobile}px) {
    width: 140px;
    height: 140px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 0px 8.42629px rgba(255, 255, 255, 0.8);
  text-align: center;

  @media screen and (max-width: ${mobile}px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarouselLine = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #fb37ff -0.8%, #0094ff 100%);
  height: 2px;
  margin-top: 13px;
`;

const Text = styled.div`
  margin-top: 15px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-shadow: 0px 0px 3.55684px rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  text-align: center;

  @media screen and (max-width: ${mobile}) {
    font-size: 13px;
  }
`;

export { SliderContainer, ImageContainer, Text, Title, TitleContainer, CarouselLine };
