import React, { FC, useMemo } from "react";
import {
  DateText,
  ImageContainer,
  InfoBorderResp,
  InfoItemWrapper,
  IntegrationText,
  TextContainer,
  TextTitle,
} from "./InfoItem.styled";
import { IBlogUnit } from "Core/Blog/BlogEntity";
import { Flex } from "../Styled/Flex";
import { useStore } from "Core/store";

export const InfoItem: FC<IBlogUnit> = ({ title, feature_image, updated_at, url, excerpt }) => {
  const {
    store: {
      Device: { isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const date = useMemo(() => {
    const dRaw = new Date(updated_at);
    return `${dRaw.toLocaleString("en", { month: "short" })} ${dRaw.getDate()}, ${dRaw.getFullYear()}`;
  }, [updated_at]);

  return (
    <InfoBorderResp isMobile={isMobile}>
      <InfoItemWrapper onClick={() => window.open(url, "__blank")}>
        <ImageContainer image={feature_image} />
        <TextContainer>
          <Flex direction="row" justify="space-between">
            <DateText>{date}</DateText>
            <IntegrationText>Integration</IntegrationText>
          </Flex>
          <TextTitle>{title}</TextTitle>
        </TextContainer>
      </InfoItemWrapper>
    </InfoBorderResp>
  );
};
