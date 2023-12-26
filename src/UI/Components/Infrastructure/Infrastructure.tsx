import React, { FC, useRef } from "react";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import {
  InfrastructureResponsive,
  InfrastructureResponsiveVideo,
  InfrastructureVideo,
  TitleContainer,
} from "./Infrastructure.styled";
import { useStore } from "Core/store";
import { useTranslation } from "next-i18next";

export const Infrastructure: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const {
    store: {
      Device: { isDesktop, isTablet, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const { t } = useTranslation();

  return (
    <Container margin={isMobile ? "70px 0 0 0" : "150px 0 0 0"} position="relative">
      <TitleContainer>
        <Typography variant="title">{t("infrastructure")}</Typography>
        <Typography variant="undertitle">
          {t("buildWithOracle")} <br /> {t("costEfficient")}
        </Typography>
      </TitleContainer>
      {!isTablet && !isDesktop ? (
        <>
          <InfrastructureResponsive ref={wrapperRef}>
            <InfrastructureResponsiveVideo loop autoPlay muted playsInline>
              <source src={"/assets/videos/infrastructure.mp4"} type="video/mp4" />
            </InfrastructureResponsiveVideo>
          </InfrastructureResponsive>
        </>
      ) : (
        <InfrastructureVideo autoPlay loop muted>
          <source src="/assets/videos/infrastructure.webm" type="video/webm" />
        </InfrastructureVideo>
      )}
    </Container>
  );
};
