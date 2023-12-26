import React, { FC } from "react";
import { Container } from "UI/UI-Kit/Styled/Container";
import { TimeLineItems } from "./Roadmap.constants";
import {
  Circle,
  TimeLineContainer,
  TimeLineProgress,
  TimeLineProgressBar,
  DateContainer,
  CircleContainer,
  TextContainer,
  TimeLineWrapper,
  ItemsWrapper,
  ItemsContainer,
  RoadmapTitleText,
  ElementLine,
  RoadmapWrapper,
} from "./Roadmap.styled";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import useUpdateAnchor from "hooks/useUpdateAnchor";
import { useTranslation } from "next-i18next";

export const Roadmap: FC = () => {
  const wrapperRef = useUpdateAnchor("ROADMAP");
  const { t } = useTranslation();

  return (
    <RoadmapWrapper id="roadmap" ref={wrapperRef}>
      <div>
        <Typography upper variant="title">
          Roadmap
        </Typography>
        <TimeLineWrapper>
          <TimeLineProgress>
            <TimeLineProgressBar />
          </TimeLineProgress>
          {TimeLineItems.map(({ title, items, date }, idx) => (
            <TimeLineContainer key={idx}>
              <DateContainer>
                <Container position="sticky" top={"50vh"}>
                  <RoadmapTitleText>{t(date)}</RoadmapTitleText>
                </Container>
              </DateContainer>
              <CircleContainer>
                <Circle />
              </CircleContainer>
              <TextContainer>
                <RoadmapTitleText>{t(title)}</RoadmapTitleText>
                <ElementLine />
                <ItemsWrapper>
                  {items.map((el, idx) => (
                    <ItemsContainer key={idx}>{t(el)}</ItemsContainer>
                  ))}
                </ItemsWrapper>
              </TextContainer>
            </TimeLineContainer>
          ))}
        </TimeLineWrapper>
      </div>
    </RoadmapWrapper>
  );
};
