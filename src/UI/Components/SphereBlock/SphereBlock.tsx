import React, { FC } from "react";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { SPHERE_TEXTS } from "./SphereBlock.constants";
import { SphereText } from "UI/UI-Kit/SphereText/SphereText";
import {
  SpaceWrapper,
  SphereImageWrapper,
  SphereWrapper,
  TitleWrapper,
  UndertitleText,
  SphereBlockWrapper,
  ButtonContainer,
} from "./SphereBlock.styled";
import Image from "next/image";
import { useStore } from "Core/store";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { Button } from "UI/UI-Kit/Button/Button";
import { useTranslation } from "next-i18next";

export const SphereBlock: FC = () => {
  const {
    store: {
      Device: { isMobile, isDesktop, isTablet },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const { t } = useTranslation();
  return (
    <SphereBlockWrapper>
      <TitleWrapper>
        <Typography variant="title" upper>
          {t("coreFeatures")}
        </Typography>
        <Typography variant="undertitle" upper>
          {t("ofEntangle")}
        </Typography>
      </TitleWrapper>
      <Container withPaddings>
        <Flex direction={isDesktop || isTablet ? "row" : "column"} justify="space-between">
          {isDesktop && (
            <Flex direction="column" width={isDesktop || isTablet ? 25 : 100} gap={150}>
              {SPHERE_TEXTS.left.map((el, idx) => (
                <SphereText {...el} key={idx} />
              ))}
            </Flex>
          )}
          <SphereWrapper isMobile={isMobile}>
            <SpaceWrapper>
              <Image src={require("public/assets/images/space_sphere.png")} fill alt="entangle-space-asset" />
            </SpaceWrapper>
            <SphereImageWrapper>
              <Image
                src={require("public/assets/images/Sphere.webp")}
                fill
                quality={100}
                alt="entangle-sphere-asset"
                style={{ zIndex: 5 }}
              />
            </SphereImageWrapper>
          </SphereWrapper>
          <Flex
            direction="column"
            width={isDesktop || isTablet ? 25 : 100}
            gap={isDesktop ? 150 : 64}
            justify="space-between"
            margin={!isDesktop && "56px 0 0 0"}
          >
            {SPHERE_TEXTS.right.map((el, idx) => (
              <SphereText {...el} key={idx} />
            ))}
          </Flex>
          {!isDesktop && (
            <Flex
              direction="column"
              margin={!isDesktop && "64px 0 0 0"}
              width={isDesktop || isTablet ? 25 : 100}
              gap={isDesktop ? 150 : 64}
            >
              {SPHERE_TEXTS.left.map((el, idx) => (
                <SphereText {...el} key={idx} />
              ))}
            </Flex>
          )}
        </Flex>
        <ButtonContainer>
          <Button
            variant="big"
            isGradiented
            onClick={() =>
              window.open(
                "https://issuu.com/entangleprotocol/docs/entangle_visual_report_litepaper?fr=sOWM0NTU3MTA1MzE",
                "__blank",
              )
            }
          >
            LITepaper
          </Button>
        </ButtonContainer>
      </Container>
    </SphereBlockWrapper>
  );
};
