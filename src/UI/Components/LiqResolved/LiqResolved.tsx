import Image from "next/image";
import React, { FC } from "react";
import { Container } from "UI/UI-Kit/Styled/Container";
import {
  ButtonContainer,
  CoinPicture,
  CoinVideo,
  CoinWrapper,
  LinkContainer,
  SocialContainer,
  TextWrapper,
  TitleHeader,
  TitleText,
  ButtonWrapper,
  Wrapper,
  AdvText,
  VerticalSeparator,
  AndroidCoinVideo,
  DescriptionText,
} from "./LiqResolved.styled";
import { SOCIALS } from "Constants/Anchors";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Button } from "UI/UI-Kit/Button/Button";
import { useStore } from "Core/store";
import useUpdateAnchor from "hooks/useUpdateAnchor";
import { useIsIPhone } from "hooks/useIsIPhone";
import { useTranslation } from "next-i18next";

export const LiqResolved: FC = () => {
  const {
    store: {
      Device: { isMobile, isDesktop, isTablet, isMobileLayoutForTablet },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  const wrapperRef = useUpdateAnchor("HOME");
  const { t } = useTranslation();

  return (
    <Container position="relative" id="home" ref={wrapperRef}>
      <SocialContainer>
        <Flex direction="column" gap={30}>
          {SOCIALS.map(({ title, link }, idx) => (
            <LinkContainer key={idx} onClick={() => window.open(link, "__blank")}>
              <Image
                src={`/assets/images/socials/${title}.svg`}
                width={24}
                height={24}
                quality={100}
                alt={`entangle-${title}-asset`}
              />
            </LinkContainer>
          ))}
        </Flex>
      </SocialContainer>
      <Wrapper>
        <CoinWrapper isMobile={isMobile}>
          {(isDesktop || isTablet) && (
            <CoinVideo autoPlay muted loop>
              <source src="/assets/videos/factory.webm" />
            </CoinVideo>
          )}
          {!isDesktop && !isTablet && (
            <AndroidCoinVideo autoPlay muted loop playsInline>
              <source src="/assets/videos/factory_mobile.mp4" type="video/mp4" />
            </AndroidCoinVideo>
          )}
        </CoinWrapper>
        <TextWrapper>
          <TitleHeader>{t("liquidityResolved")}</TitleHeader>
          <TitleText>
            <DescriptionText>
              <p>{t("interoperableLayer")}</p>
            </DescriptionText>
            <Flex
              gap={16}
              align="center"
              justify={isTablet || isMobile || isMobileLayoutForTablet ? "center" : undefined}
              margin={!isMobile ? "50px 0 0 0" : "27px 0 0 0"}
            >
              <AdvText>{t("protocols")}</AdvText>
              <VerticalSeparator />
              <AdvText>{t("builders")}</AdvText>
              <VerticalSeparator />
              <AdvText>{t("users")}</AdvText>
            </Flex>
            <ButtonWrapper>
              <ButtonContainer>
                <Button
                  variant="big"
                  isGradiented
                  onClick={() => window.open("https://test.entangle.fi/testnet-info", "__blank")}
                >
                  {t("testnet")}
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  variant="big"
                  onClick={() =>
                    window.open(
                      "https://entangle-protocol.gitbook.io/entangle-protocol/overview/introduction",
                      "__blank",
                    )
                  }
                >
                  {t("whitePaper")}
                </Button>
              </ButtonContainer>
            </ButtonWrapper>
          </TitleText>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};
