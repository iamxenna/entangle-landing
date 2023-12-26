import { desktop, mobile, mobileLayoutForTablet, smallDesktop, tablet } from "Constants/Devices";
import styled from "styled-components";

const RoadmapWrapper = styled.div`
  padding: var(--paddings);
  margin: 66px 0 0 0;
  position: relative;
`;

const TimeLineWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 155px;

  @media screen and (max-width: ${desktop}px) {
    margin-top: 140px;
  }

  @media screen and (max-width: ${tablet}px) {
    margin-top: 32px;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 0 1.2rem;
  }
`;

const TimeLineProgress = styled.div`
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #696d99 0%, rgba(77, 77, 77, 0) 100%);
  position: absolute;
  overflow-y: hidden;
  clip-path: inset(0 0 0 0);

  @media screen and (max-width: ${smallDesktop}px) {
    width: 4px;
  }

  @media screen and (max-width: ${mobile}px) {
    left: 28.5px;
    width: 3px;
  }
`;

const TimeLineProgressBar = styled.div`
  width: 6px;
  height: 50vh;
  background-color: #fff;
  background-image: linear-gradient(180deg, rgba(251, 55, 255, 0) 0%, #fb37ff 29.17%, #0094ff 100%);
  position: fixed;
  top: 0;
  bottom: 0;
  left: auto;
  right: auto;

  @media screen and (max-width: ${smallDesktop}px) {
    width: 4px;
  }

  @media screen and (max-width: ${mobile}px) {
    width: 3px;
  }
`;

const RoadmapTitleText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 55px;
  letter-spacing: 0.08em;
  color: #e6e8ff;
  text-align: left;

  @media screen and (max-width: ${desktop}px) {
    font-size: 26px;
    line-height: 55px;
  }

  @media screen and (max-width: ${tablet}px) {
    font-size: 25px;
    line-height: 192.02%;
    text-align: center;
  }

  @media screen and (max-width: ${mobile}px) {
    font-size: 14.7294px;
    line-height: 192.02%;
  }
`;

const TimeLineContainer = styled.div`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 180px 1fr;
  grid-auto-columns: 1fr;
  padding-top: 80px;
  padding-bottom: 80px;
  display: grid;
  position: relative;

  @media screen and (max-width: ${smallDesktop}px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (max-width: ${mobile}px) {
    grid-template-columns: 48px 1fr;
    width: 100%;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    left: 6px;
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
  background-color: #fff;
  border-radius: 100%;
  position: sticky;
  top: 50vh;
  box-shadow: 0 0 0 12px #191919;

  @media screen and (max-width: ${smallDesktop}px) {
    width: 14px;
    height: 14px;
    max-height: 14px;
    max-width: 14px;
    min-height: 14px;
    min-width: 14px;
    box-shadow: 0 0 0 10px #191919;
  }

  @media screen and (max-width: ${mobile}px) {
    width: 10px;
    height: 10px;
    max-height: 10px;
    max-width: 10px;
    min-height: 10px;
    min-width: 10px;
    box-shadow: 0 0 0 6px #191919;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    width: 100%;
    padding-left: 0;
    justify-content: center;
  }
`;

const ItemsContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 173%;
  letter-spacing: 0.05em;
  color: #e5e8ff;
  list-style: none;

  @media screen and (max-width: ${desktop}px) {
    font-size: 16px;
  }

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    list-style: none;
    font-size: 16px;
  }
  @media screen and (max-width: ${mobile}px) {
    font-size: 11.4562px;
    line-height: 200%;
  }
`;

const ElementLine = styled.div`
  height: 1px;
  width: 100%;
  margin: 16px auto;
  background: linear-gradient(
    270deg,
    rgba(251, 55, 255, 0) 0%,
    #6831d6 30.72%,
    #fb37ff 67.05%,
    rgba(92, 0, 255, 0) 100%
  );
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  text-align: center;

  @media screen and (max-width: ${mobile}px) {
    grid-area: 1/2/2/3;
    align-items: center;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${mobile}px) {
    grid-area: 1/1/3/2;
    display: flex;
    justify-content: flex-start;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${mobile}px) {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
`;

export {
  TimeLineWrapper,
  TimeLineProgress,
  TimeLineProgressBar,
  TimeLineContainer,
  Circle,
  ItemsWrapper,
  ItemsContainer,
  DateContainer,
  CircleContainer,
  TextContainer,
  RoadmapTitleText,
  ElementLine,
  RoadmapWrapper,
};
