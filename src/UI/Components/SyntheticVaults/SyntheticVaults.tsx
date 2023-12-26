import React, { FC } from "react";
import { useStore } from "Core/store";
import { Vertex } from "./Vertex/Vertex";
import useUpdateAnchor from "hooks/useUpdateAnchor";
import { Container } from "UI/UI-Kit/Styled/Container";
import { CoinItemsWrapper } from "./SyntheticVaults.styled";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { RESP_COINS_VAULTS } from "./SyntheticVaults.constants";
import { VaultsRespItem } from "UI/UI-Kit/VaultsRespItem/VaultsRespItem";
import { useTranslation } from "next-i18next";
import { Flex } from "../../UI-Kit/Styled/Flex";

export const SyntheticVaults: FC = () => {
  const {
    store: {
      Device: { isDesktop, isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  const wrapperRef = useUpdateAnchor("DAPPS");
  const { t } = useTranslation();

  return (
    <Container margin={isMobile ? "70px 0 0 0" : "145px 0 0 0"} position="relative" id="dapps" ref={wrapperRef}>
      <Flex direction={"column"} margin={isMobile && "0 50px 40px 50px"}>
        <Typography variant="title" upper>
          {t("liquidVaults")}
        </Typography>
        <Typography variant="undertitle" maxWidth={"600px"}>
          {t("nativeApplication")}
        </Typography>
      </Flex>
      {isDesktop ? (
        <Vertex />
      ) : (
        <CoinItemsWrapper>
          <Container withPaddings>
            {RESP_COINS_VAULTS.map((el, idx) => (
              <VaultsRespItem key={idx} {...el} isEven={idx % 2 !== 0} />
            ))}
          </Container>
        </CoinItemsWrapper>
      )}
    </Container>
  );
};
