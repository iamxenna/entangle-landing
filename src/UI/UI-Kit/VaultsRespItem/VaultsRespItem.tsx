import React, { FC, useMemo } from "react";
import { VaultRespItemProps } from "./VaultsRespItem.interfaces";
import { Flex } from "../Styled/Flex";
import Image from "next/image";
import { CoinContainer, CoinVideoContainer, RespCoinWrapper, RespLineContainer, Text } from "./VaultsRespItem.styled";
import { useIsIPhone } from "hooks/useIsIPhone";
import { useTranslation } from "next-i18next";

export const VaultsRespItem: FC<VaultRespItemProps> = ({ icon, text, isEven }) => {
  const isIphone = useIsIPhone();
  const { t } = useTranslation();

  const coinAsset = useMemo(() => {
    if (isIphone) {
      return (
        <CoinContainer>
          <Image
            src={`/assets/videos/coins/${icon}.webp`}
            width={102}
            height={102}
            quality={100}
            alt={`entangle-${icon}-asset`}
          />
        </CoinContainer>
      );
    }
    return <CoinVideoContainer src={`/assets/videos/coins/${icon}.webm`} autoPlay muted loop />;
  }, [isIphone]);

  return (
    <RespCoinWrapper>
      <Flex direction={isEven ? "row-reverse" : "row"} justify="space-between" gap={10}>
        {coinAsset}
        <RespLineContainer isEven={isEven}>
          <Image src={"/assets/images/coin-line.svg"} width="34" height="19" quality={100} alt="entangle-coin-line" />
        </RespLineContainer>
        <Text isEven={isEven}>{t(text)}</Text>
      </Flex>
    </RespCoinWrapper>
  );
};
