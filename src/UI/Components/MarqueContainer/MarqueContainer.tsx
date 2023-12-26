import React, { FC } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  ImageContainer,
  MarqueWrapper,
  MarqueeText,
  MarqueeTitle,
  MarqueeTitleContainer,
  TextContainer,
  UnderLine,
  UndertitleLine,
} from "./MarqueContainer.styled";
import { Container } from "UI/UI-Kit/Styled/Container";
import { useStore } from "Core/store";
import { useTranslation } from "next-i18next";

export const MarqueContainer: FC = () => {
  const {
    store: {
      Device: { isMobile, isTablet },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const { t } = useTranslation();
  return (
    <Container>
      <MarqueeTitleContainer>
        <MarqueeTitle>{t("connectedPartners")}</MarqueeTitle>
        <UndertitleLine />
      </MarqueeTitleContainer>
      <MarqueWrapper>
        <Marquee>
          {Array.from({ length: 21 }).map((_, idx) => (
            <ImageContainer key={idx}>
              <Image src={`/assets/images/investors/${idx}.svg`} fill alt="entangle-investor-asset" />
            </ImageContainer>
          ))}
        </Marquee>
        {!isMobile && !isTablet && (
          <Marquee direction="right">
            {Array.from({ length: 21 }).map((_, idx) => (
              <ImageContainer key={idx}>
                <Image src={`/assets/images/investors/${idx}.svg`} fill quality={100} alt="entangle-investor-asset" />
              </ImageContainer>
            ))}
          </Marquee>
        )}
      </MarqueWrapper>
      <TextContainer>
        <MarqueeText>{t("interconnectingEcosystems")}</MarqueeText>
        <UnderLine />
      </TextContainer>
    </Container>
  );
};
